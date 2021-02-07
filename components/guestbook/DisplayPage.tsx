import moment from 'moment';
import IGuestBookEntry from '../../interfaces/IGuestBookEntry';
import GuestBookPageTitle from './PageTitle';
import Section from './Section';

interface IProps {
    entry: IGuestBookEntry
    rightSide?: boolean
}

const DisplayPage = ({ entry, rightSide = false }: IProps) => (
    <Section rightSide={rightSide}>
        <div className="flex flex-col h-full w-full">
            <GuestBookPageTitle />
            <div className="text-lg lg:text-xl mt-8 text-gray-500 font-light h-full flex flex-col justify-items-start">
                <p className="p-5 bg-white my-4 border border-gray-300">{entry.name}</p>
                <p className="p-5 bg-white my-4 border border-gray-300">{moment(entry.date).format('MMMM Do YYYY')}</p>
                <p className="text-lg lg:text-xl p-5 bg-white my-4 border border-gray-300 flex-1 whitespace-pre-line">{entry.message}</p>
            </div>
        </div>
    </Section>
)

export default DisplayPage;
