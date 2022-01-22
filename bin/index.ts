#!/usr/bin/env ts-node
import chalk from 'chalk'
import inquirer from 'inquirer'
import {
    frameworkQuestion,
    tsQuestion,
    cloneRepoQuestion,
} from './inquirer-demo'
import { cloneGitRepo } from './shell-demo'
import { execute as yargDemo } from './yarg-demo'

const executeMe = async () => {
  try {
    const { framework } = await inquirer.prompt([frameworkQuestion])
    const { typescript } = await inquirer.prompt([tsQuestion])
    const { isCloneRepo } = await inquirer.prompt([cloneRepoQuestion])
    
    console.log(chalk.black.bgWhite.bold(' Answer : '), { framework, typescript, isCloneRepo })

    if (isCloneRepo) {
      cloneGitRepo('https://github.com/sphingu/demo-cli.git')
    }
  } catch (error) {
    console.error((error as Error).message)
  }
}

executeMe()
// yargDemo();
