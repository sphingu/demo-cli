import chalk from 'chalk'
import inquirer, { DistinctQuestion } from 'inquirer'

type FrameworkType = 'React' | 'NextJS' | 'Angular' | 'Svelte' | 'VueJS'

const frameworkQuestion: DistinctQuestion<{ framework: FrameworkType }> = {
  type: 'list',
  name: 'framework',
  message: 'Choose your JS framework :',
  choices: ['React', 'NextJS', 'Angular', 'Svelte', 'VueJS'],
}

const tsQuestion: DistinctQuestion<{ typescript: boolean }> = {
  type: 'confirm',
  name: 'typescript',
  message: 'Do you want to enable typescript ?',
}

const cloneRepoQuestion: DistinctQuestion<{ isCloneRepo: boolean }> = {
  type: 'confirm',
  name: 'isCloneRepo',
  default: false,
  message: 'Do you want to clone repo ?',
}

export default async () => {
  try {
    const { framework } = await inquirer.prompt([frameworkQuestion])
    const { typescript } = await inquirer.prompt([tsQuestion])
    const { isCloneRepo } = await inquirer.prompt([cloneRepoQuestion])

    console.log(chalk.black.bgWhite.bold('Answer : '), {
      framework,
      typescript,
      isCloneRepo,
    })
  } catch (error) {
    console.error((error as Error).message)
  }
}
