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

    const resetPage = () => {
        if (process.browser) {
            setPage(-2);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', resetPage);
        return () => window.removeEventListener('resize', resetPage);
    }, []);

    const incrementAmount = process.browser && window && window.innerWidth < 768 ? 1 : 2;
    const changePage = (increment: boolean) => {

        if (increment) {
            setPage(page + incrementAmount);
        } else {
            setPage(page - incrementAmount);
        }
    }

    console.log(entries, page);

    return (
        <div className="bg-guestbook-mobile md:bg-guestbook w-screen h-screen bg-cover bg-center flex flex-col md:flex-row relative items-center">
            {page < 0 ? (
                <>
                    {page === -2 && <FirstPage />}
                    {(page === -1 || incrementAmount === 2) && <FormPage rightSide={page !== -1} />}
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
                <button className="absolute text-gray-600 text-3xl md:text-6xl left-3 md:left-14 bottom-8 flex flex-row items-center" onClick={() => changePage(false)}>
                    <GoTriangleLeft />
                    <span className="ml-2 text-2xl pl-1 md:pr-2">Previous</span>
                </button>
            )}
            {(page === (incrementAmount * -1) || page + incrementAmount < entries.length) && (
                <button className="absolute text-gray-600 text-3xl md:text-6xl right-3 md:right-14 bottom-8 flex flex-row items-center" onClick={() => changePage(true)}>
                    <span className="mr-2 text-2xl pl-1 md:pl-2">Next</span>
                    <GoTriangleRight />
                </button>
            )}
        </div>
    )
}

export default GuestBookPage;
