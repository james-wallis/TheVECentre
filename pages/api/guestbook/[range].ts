import { NextApiRequest, NextApiResponse } from 'next';
import { getGuestbookEntries, writeNewGuestbookEntry } from '../../../lib/googleSheet';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { range } = req.query as { range: string }

    if (req.method && !['POST', 'GET'].includes(req.method)) {
        return res.status(404).send('Invalid method');
    }

    if (req.method === 'POST') {
        const { body } = req;
        if (!body.name || !body.date || !body.message) {
            return res.status(500).send('Incorrect parameters');
        }

        await writeNewGuestbookEntry(range, {
            name: body.name,
            date: body.date,
            message: body.message,
        });

        return res.status(200).json({ name: 'Post' });
    }

    if (req.method === 'GET') {
        // Handle GET
        const entries = await getGuestbookEntries(range);

        if (!entries) {
            return res.status(500).send('No entries returned from Google Sheets');
        }

        return res.status(200).json({ entries });
    }

    return res.status(500).send('Unknown server error');
}
