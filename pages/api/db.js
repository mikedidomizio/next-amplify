// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {query} from "./config/db";

export default async function handler(req, res) {
    console.log('querying')
    const t = await query();
    console.log('returned info', t);
    res.status(200).json(t)
}
