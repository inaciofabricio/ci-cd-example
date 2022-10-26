import { execSync } from "child_process";

console.log("[DEPLOY_PREVIEW]: START");

const command = "npm run deploy:staging";
const output = execSync(command, { encoding: "utf-8" });
console.log(output);

console.log("[DEPLOY_PREVIEW]: END");
