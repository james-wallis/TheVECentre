import { useEffect, useState } from 'react';
import axios from 'axios';
import IGuestBookEntry from '../interfaces/IGuestBookEntry';
import FirstPage from '../components/guestbook/FirstPage';
import DisplayPage from '../components/guestbook/DisplayPage';
import FormPage from '../components/guestbook/FormPage';
import { GoTriangleLeft, GoTriangleRight } from 'react-icons/go';
import moment from 'moment';

const GuestBookPage = () => {
    const [page, setPage] = useState(-2);
    const [entries, setEntries] = useState([] as IGuestBookEntry[]);
    const [fetchErr, setFetchErr] = useState('');

    useEffect(() => {
       axios.get('/api/guestbook')
            .then((res) => {
                if (res.status !== 200 || !res.data || !res.data.entries) {
                    setFetchErr('Error fetching guestbook entries. Try again later.');
                    return;
                }
                const newEntries: IGuestBookEntry[] = res.data.entries as IGuestBookEntry[];
                newEntries.sort(({ date: date1 }, { date: date2 }) => moment(date1).isBefore(date2) ? 1 : -1);
                setEntries(newEntries);
            })
            .catch(() => {
                setFetchErr('Error fetching guestbook entries. Try again later.');
            })
    }, []);

    return (
        <div className="text-white bg-guestbook w-screen h-screen bg-cover bg-center flex flex-row relative">
            {page === -2 ? (
                <>
                    <FirstPage />
                    <FormPage rightSide />
                </>
            ) : (
                <>
                    {entries.length === 0 || fetchErr ? (
                        <div className="h-full w-1/2 flex flex-col items-center justify-center text-center">
                            <p className="w-2/3 text-2xl text-black">{fetchErr ? fetchErr : 'loading guestbook...'}</p>
                        </div>
                    ) : (
                        <>
                            <DisplayPage entry={entries[page]} />
                            {page + 1 < entries.length && <DisplayPage rightSide entry={entries[page + 1]} />}
                        </>
                    )}
                </>
            )}
            {page > -2 && (
                <button className="absolute text-gray-600 text-6xl left-14 bottom-8 flex flex-row items-center" onClick={() => setPage(page - 2)}>
                    <GoTriangleLeft />
                    <span className="ml-2 text-2xl pr-2">Previous</span>
                </button>
            )}
            {(page === -2 || page + 2 < entries.length) && (
                <button className="absolute text-gray-600 text-6xl right-14 bottom-8 flex flex-row items-center" onClick={() => setPage(page + 2)}>
                    <span className="mr-2 text-2xl pl-2">Next</span>
                    <GoTriangleRight />
                </button>
            )}
        </div>
    )
}

export default GuestBookPage;
