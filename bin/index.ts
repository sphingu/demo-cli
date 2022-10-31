#!/usr/bin/env ts-node

import executeInquirerDemo from './inquirer-demo'
import { cloneGitRepo } from './shell-demo'
import executeYargsDemo from './yargs-demo'

executeInquirerDemo()
executeYargsDemo()
cloneGitRepo('https://github.com/sphingu/demo-cli.git')
