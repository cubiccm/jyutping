import { OpenCC } from "opencc";
import { spawn, ChildProcess } from "child_process";

export async function convert(word: string) {
  const converter: OpenCC = new OpenCC("s2hk.json");
  const result: string = await converter.convertPromise(word);
  return new Promise((resolve, reject) => {
    const python_process: ChildProcess = spawn("python3",["backend/convert.py", result]);
    let python_result: string = "";
    python_process.stdout.on("data", (data) => {
      python_result += data;
    });
    python_process.stderr.on("data", (data) => {
      console.log(data.toString());
    });
    python_process.on("exit", (code) => {
      if (code === 0) {
        resolve(python_result);
      } else {
        reject("Failed to execute python command");
      }
    });
  });
}