#!/usr/bin/env node

const {Command} = require('commander');
const program = new Command();

// Comands
const {
    deploy,
    bridge,
    admin,
    erc20
} = require('./bridge-cli/index');
const constants = require('./constants');


program.option('--url <value>', 'URL to connect to', constants.DEFAULT_URL);
program.option('--privateKey <value>', 'Private key to use', constants.deployerPrivKey);
program.option('--jsonWallet <path>', '(Optional) Encrypted JSON wallet');
program.option('--jsonWalletPassword <value>', '(Optional) Password for encrypted JSON wallet');
program.option('--gasLimit <value>', "Gas limit for transactions", constants.GASLIMIT)
program.option('--gasPrice <value>', "Gas limit for transactions", constants.GASPRICE)

program.addCommand(deploy)
program.addCommand(bridge)
program.addCommand(admin)
program.addCommand(erc20)
program.allowUnknownOption(false);

const run = async () => {
    try {
        await program.parseAsync(process.argv);
    } catch (e) {
        console.log({ e });
        process.exit(1)
    }
}


if (process.argv && process.argv.length <= 2) {
    program.help();
} else {
    run()
}
