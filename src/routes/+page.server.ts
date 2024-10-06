import type { PageServerLoad } from './$types';
import { db } from '$lib/db';
import { users } from '../schema';

export const load = (async () => {
    const usersData = await db.select().from(users)
    console.log(usersData)
    return {};
}) satisfies PageServerLoad;