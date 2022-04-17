import moment from 'moment';
import { IGuestBookEntry, GuestBookVariant } from '../../interfaces/GuestBook';
import TheVECentreTitle from './TheVECentreTitle';
import OldMillhousePageTitle from './OldMillhousePageTitle';
import Section from './Section';

interface IProps {
    entry: IGuestBookEntry
    rightSide?: boolean
    variant: GuestBookVariant
}

const DisplayPage = ({ entry, variant, rightSide = false }: IProps) => (
    <Section rightSide={rightSide} variant={variant}>
        <div className="flex flex-col h-full w-full">
            {variant === "thevecentre" && <TheVECentreTitle large />}
            {variant === "artistjodi" && <OldMillhousePageTitle large />}
            <div className={`text-base lg:text-lg mt-8 text-gray-500 font-light h-full flex flex-col justify-items-start ${variant === "artistjodi" ? "font-light" : "font-normal"}`}>
                <p className="p-3 lg:p-5 bg-white my-3 lg:my-4 border border-gray-300 rounded-sm">{entry.name}</p>
                <p className="p-3 lg:p-5 bg-white mt-3 lg:mt-4 border border-gray-300 flex-1 whitespace-pre-line rounded-sm">{entry.message}</p>
                <p className={`my-3 w-full text-right text-sm lg:text-lg ${variant === "artistjodi" ? "font-light text-gray-600" : "font-normal text-gray-400"}`}>
                    {moment(entry.date).format('MMMM Do YYYY')}
                </p>
            </div>
        </div>
    </Section>
)

export default DisplayPage;
