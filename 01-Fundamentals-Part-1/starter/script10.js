const hasDrivenLicense = true;
const hasGoodVision = true;

console.log(hasDrivenLicense && hasGoodVision);
console.log(hasDrivenLicense || hasGoodVision);
console.log(!hasDrivenLicense);

const isTired = false;

console.table(hasDrivenLicense && hasGoodVision && isTired);
console.table(hasDrivenLicense || hasGoodVision || isTired);