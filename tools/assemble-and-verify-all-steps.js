// =============================================================================
// ASSEMBLAGE, VERIFICATION 100% ET GENERATION DE JS/CONTINUOUS-STEPS.JS
// =============================================================================

const fs = require('fs');
const path = require('path');
const { getFilesForStep } = require('./canonical-definitions.js');
const { steps: stepsAct1, rawPreamble } = require('./build-step-objects.js');
const { stepsAct2And3 } = require('./steps-act2-3.js');
const { stepsAct4to6 } = require('./steps-act4-6.js');
const { stepsAct7Seo } = require('./steps-act7-seo.js');

const allSteps = [...stepsAct1, ...stepsAct2And3, ...stepsAct4to6, ...stepsAct7Seo];

console.log('Total steps collected:', allSteps.length);
if (allSteps.length !== 60) {
  throw new Error('Expected exactly 60 steps, got ' + allSteps.length);
}

// 1. Validation de chaque étape avec ses fichiers canoniques
console.log('--- DEBUT DE LA SUITE DE TESTS SUR LES 60 ETAPES ---');
allSteps.forEach((step, idx) => {
  const stepNum = idx + 1;
  if (step.number !== stepNum) {
    throw new Error(`Step index mismatch: expected ${stepNum}, got ${step.number}`);
  }
  const canonical = getFilesForStep(stepNum);
  const result = step.check(canonical);
  if (!result.pass) {
    console.error(`X ECHEC ETAPE ${stepNum} [${step.title}]:`, result.message);
    throw new Error(`Step ${stepNum} failed canonical check`);
  }
  console.log(`OK Étape ${stepNum.toString().padStart(2, '0')}: [${step.targetFile.padEnd(15)}] ${step.title}`);
});
console.log('--- TOUTES LES 60 ETAPES PASSENT AVEC SUCCES A 100% ! ---');

// 2. Sérialisation propre vers js/continuous-steps.js
function serializeStep(s) {
  const checkStr = s.check.toString();
  return `  {
    id: '${s.id}',
    number: ${s.number},
    character: '${s.character}',
    pose: '${s.pose}',
    speaker: ${JSON.stringify(s.speaker)},
    act: ${JSON.stringify(s.act)},
    targetFile: '${s.targetFile}',
    title: ${JSON.stringify(s.title)},
    proverb: ${JSON.stringify(s.proverb)},
    mentorSpeech: ${JSON.stringify(s.mentorSpeech)},
    riddle: ${JSON.stringify(s.riddle)},
    secretTip: ${JSON.stringify(s.secretTip)},
    instructions: ${JSON.stringify(s.instructions, null, 6).replace(/\n\s{6}/g, '\n      ')},
    starterFiles: getFilesForStep(${s.number}),
    check: ${checkStr}
  }`;
}

const serializedSteps = allSteps.map(serializeStep).join(',\n\n');

const finalContent = `${rawPreamble}
export const MULTIPAGE_STEPS = [
${serializedSteps}
];

// Compatibilité descendante
export const CONTINUOUS_STEPS = MULTIPAGE_STEPS;
`;

const outputPath = path.join(__dirname, '..', 'js', 'continuous-steps.js');
fs.writeFileSync(outputPath, finalContent, 'utf8');
console.log(`Fichier écrit avec succès dans ${outputPath} (${fs.statSync(outputPath).size} octets) !`);
