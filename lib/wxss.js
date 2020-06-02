
const fs = require('fs')
const program = require('commander')
const chalk = require('chalk')
const watch = require('../bin/watch.js')


program
    .version(require('../package').version)
    .usage('<path>')
program.arguments('<path>').action(dir => {
    let dirAry = dir.split(",")
    dirAry.forEach(element => {
        fs.stat(element, (err, stats) => {
            if (err) console.log(chalk.yellow(err))
            else {
                console.log(chalk.bgMagenta.white(' wxss is running... '))
                watch(element)
            }
        })
    })
})

program.on('--help', () => {
    console.log()
    console.log(`  Run ${chalk.cyan(`wxss <command> --help`)} for detailed usage of given command.`)
    console.log()
})

program.parse(process.argv)