// import * as promise from 'bluebird'; // best promise library today
import config from '../config/config'; // db connection details
import pgPromise from 'pg-promise'; // pg-promise core library
// import { Diagnostics } from './diagnostics'; // optional diagnostics
import { IInitOptions, IDatabase, IMain } from 'pg-promise';
import { IExtensions, UsersRepository } from './repos';

const pgp = pgPromise();
const db = pgp(config.db); // database instance;

// Alternatively, you can get access to pgp via db.$config.pgp
// See: https://vitaly-t.github.io/pg-promise/Database.html#$config
export { db, pgp };