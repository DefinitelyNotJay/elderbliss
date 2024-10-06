
import * as schema from '../schema';
import { drizzle } from 'drizzle-orm/node-postgres';
import pkg from 'pg';
const {Client} = pkg;

const client = new Client({
    connectionString: 'postgresql://cm1ptd9uk000gbsmn5hx81rne:wtqIYUe7Ds9wduBvjv1xjk7z@161.246.127.24:9056/cm1ptd9ul000ibsmnhk7l41iw',
  });

client.connect()
  
export const db = drizzle(client, {schema: schema})



