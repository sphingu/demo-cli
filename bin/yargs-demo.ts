import yargs from 'yargs'

export default async () => {
  const options = await yargs.usage('Usage: -n <name>').option('n', {
    alias: 'name',
    describe: 'Your name',
    type: 'string',
    demandOption: true,
  }).argv

  const greeting = `Hello, ${options.name}!`
  console.log(greeting)
}
