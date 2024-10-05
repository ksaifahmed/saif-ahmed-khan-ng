const fs = require("fs");
const targetProd = "./src/environments/environment.prod.ts";
const targetDev = "./src/environments/environment.ts";
const envConfigFile = `
export const environment = {
  production: true,
  EMAILJS_SERVICE_ID: '${process.env.EMAILJS_SERVICE_ID}',
  EMAILJS_TEMPLATE_ID: '${process.env.EMAILJS_TEMPLATE_ID}'
  EMAILJS_USER_ID: '${process.env.EMAILJS_USER_ID}'
};
`;
  
fs.writeFileSync(targetDev, envConfigFile);
fs.writeFileSync(targetProd, envConfigFile);

console.log(`Output generated at ${targetDev}`);
console.log(`Output generated at ${targetProd}`);