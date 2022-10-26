import { execSync } from "child_process";

console.log("Teste");

const command = "ls -la";
const output = execSync(command).toString();

console.log(output);
