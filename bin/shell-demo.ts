import shell from "shelljs";

export const cloneGitRepo = (
  url: string,
  folder: string = "cloned-repo-folder"
) => {
  console.log("cloning started");
  shell.exec(`git clone ${url} --depth 1 --single-branch ${folder}`);
  console.log("cloning ended");
};
