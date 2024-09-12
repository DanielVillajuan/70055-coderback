import dotenv from 'dotenv';
import { Command } from 'commander';

const commander = new Command();

commander
//     .option('--port <port>', 'Puerto a levantar el servidor', 8080)
    .option('--mode <mode>', 'Ambiente en el cual utilizara las variables de entorno','dev')
//     .requiredOption('--rol <rol>', 'rol a ejecutar','user')

commander.parse();

const mode = commander.opts().mode

const handleMode = {
    'dev': '.env',
    'prod': '.env.production',
    'qa':'.env.qa',
    'staging': '.env.staging'
}

dotenv.config({
    path: handleMode[mode]  
})

export default {
    PORT: process.env.PORT,
    ENVIRONMENT: process.env.ENVIRONMENT
}
