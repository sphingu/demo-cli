import { DistinctQuestion } from "inquirer";

type FrameworkType = "React" | "NextJS" | "Angular" | "Svelte" | "VueJS";

export const frameworkQuestion: DistinctQuestion<{ framework: FrameworkType }> =
  {
    type: "list",
    name: "framework",
    message: "Choose your JS framework :",
    choices: ["React", "NextJS", "Angular", "Svelte", "VueJS"],
  };

export const tsQuestion: DistinctQuestion<{ typescript: boolean }> = {
  type: "confirm",
  name: "typescript",
  message: "Do you want to enable typescript ?",
};

export const cloneRepoQuestion: DistinctQuestion<{ isCloneRepo: boolean }> = {
  type: "confirm",
  name: "isCloneRepo",
  default: false,
  message: "Do you want to clone repo ?",
};
