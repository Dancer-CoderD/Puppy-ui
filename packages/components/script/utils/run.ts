import { spawn } from "child_process";
export default async (command: string, path: string) => {
  const [cmd, ...args] = command.split(" ");

  return new Promise((resolve) => {
    const app = spawn(cmd, args, {
      cwd: path,
      stdio: "inherit",
      shell: true, // mac 不需要开启，Windows下需要git base 支持
    });

    app.on("close", resolve);
  });
};
