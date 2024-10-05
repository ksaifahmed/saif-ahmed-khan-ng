const fs = require("fs");
const targetPath = "./src/environments/environment.prod.ts";
const envConfigFile = `
export const environment = {
  production: true,
  EMAILJS_SERVICE_ID: '${process.env.EMAILJS_SERVICE_ID}',
  EMAILJS_TEMPLATE_ID: '${process.env.EMAILJS_TEMPLATE_ID}'
  EMAILJS_USER_ID: '${process.env.EMAILJS_USER_ID}'
};
`;
  
fs.writeFileSync(targetPath, envConfigFile);
console.log(`Output generated at ${targetPath}`);