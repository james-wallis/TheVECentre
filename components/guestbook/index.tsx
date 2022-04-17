import { useEffect, useState } from 'react';
import axios from 'axios';
import { GuestBookVariant, IGuestBookEntry } from '../../interfaces/GuestBook';
import FirstPage from './FirstPage';
import DisplayPage from './DisplayPage';
import FormPage from './FormPage';
import { MdArrowBack, MdArrowForward } from 'react-icons/md'
import moment from 'moment';

interface IGuestBookProps {
  range: string
  variant: GuestBookVariant
  className?: string
}

const GuestBookPage = ({ range, variant, className }: IGuestBookProps) => {
    const [page, setPage] = useState(-2);
    const [entries, setEntries] = useState([] as IGuestBookEntry[]);
    const [fetchErr, setFetchErr] = useState('');

    useEffect(() => {
       axios.get(`/api/guestbook/${range}`)
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
    }, [range]);

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

    const buttonClassNames = `
        absolute text-3xl md:text-6xl bottom-8 flex flex-row items-center
        ${variant === "artistjodi" ? "text-gray-600" : "text-gray-300"}
    `

    return (
        <div className={`w-screen h-screen bg-cover bg-center flex flex-col md:flex-row relative items-center ${className}`}>
            {page < 0 ? (
                <>
                    {page === -2 && <FirstPage variant={variant} />}
                    {(page === -1 || incrementAmount === 2) && <FormPage variant={variant} range={range} rightSide={page !== -1} />}
                </>
            ) : (
                <>
                    {entries.length === 0 || fetchErr ? (
                        <div className="h-full w-1/2 flex flex-col items-center justify-center text-center">
                            <p className="w-2/3 text-2xl">{fetchErr ? fetchErr : 'loading guestbook...'}</p>
                        </div>
                    ) : (
                        <>
                            <DisplayPage variant={variant} entry={entries[page]} />
                            {page + 1 < entries.length && <DisplayPage variant={variant} rightSide entry={entries[page + 1]} />}
                        </>
                    )}
                </>
            )}
            {page > -2 && (
                <button className={`${buttonClassNames} left-3 md:left-14`} onClick={() => changePage(false)}>
                    <MdArrowBack className="text-3xl" />
                    <span className="ml-2 text-xl pl-1 md:pr-2">Go back</span>
                </button>
            )}
            {(page === (incrementAmount * -1) || page + incrementAmount < entries.length) && (
                <button className={`${buttonClassNames} right-3 md:right-14`} onClick={() => changePage(true)}>
                    <span className="mr-2 text-xl pl-1 md:pl-2">Next page</span>
                    <MdArrowForward className="text-3xl" />
                </button>
            )}
        </div>
    )
}

export default GuestBookPage;
