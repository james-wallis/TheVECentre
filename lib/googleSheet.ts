import { google, sheets_v4 } from 'googleapis';
import { IGuestBookEntry } from '../interfaces/GuestBook';

const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL as string;
const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY as string;
const spreadsheetId = process.env.SPREADSHEET_ID as string;
const scopes = ['https://www.googleapis.com/auth/spreadsheets'];

const authenticate = (): sheets_v4.Sheets => {
    const jwt = new google.auth.JWT(
        clientEmail,
        undefined,
        privateKey.replace(/\\n/g, '\n'),
        scopes,
    );

    const sheets = google.sheets({ version: 'v4', auth: jwt });
    return sheets;
}

export const getGuestbookEntries = async (range: string): Promise<IGuestBookEntry[] | undefined> => {
    const sheets: sheets_v4.Sheets = authenticate();

    const { data: { values } } = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range,
    });
    return values?.map(([name, date, message]): IGuestBookEntry => {
        const guestBookEntry: IGuestBookEntry = {
            name,
            date,
            message,
        }
        return guestBookEntry;
    });
};

export const writeNewGuestbookEntry = async (range: string, entry: IGuestBookEntry) => {
    const sheets: sheets_v4.Sheets = authenticate();

    const values: string[] = [entry.name, entry.date, entry.message];

    const response = await sheets.spreadsheets.values.append({
        spreadsheetId,
        range,
        insertDataOption: 'INSERT_ROWS',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
            majorDimension: 'ROWS',
            values: [values],
        }
    });
    return response;
};
