import TheVECentreTitle from './TheVECentreTitle';
import OldMillhousePageTitle from './OldMillhousePageTitle';
import Section from './Section';
import { GuestBookVariant } from '../../interfaces/GuestBook';

interface IProps {
    variant: GuestBookVariant
}

const theVecentreClassName = "text-white font-light";
const artistjodiClassName = "font-extralight uppercase font-extralight text-gray-700"

const FirstPage = ({ variant }: IProps) => (
    <Section variant={variant}>
        <div className={`flex flex-col justify-between h-full w-full ${variant === "artistjodi" ? artistjodiClassName : theVecentreClassName}`}>
            {variant === "thevecentre" && <TheVECentreTitle large />}
            {variant === "artistjodi" && <OldMillhousePageTitle large />}
            <div className={`${variant === "artistjodi" ? "mb-24" : "mb-48"} text-2xl text-center`}>
                <p>Thank you for visiting.</p>
                <p>Please leave your comments.</p>
            </div>
        </div>
    </Section>
)

export default FirstPage;
