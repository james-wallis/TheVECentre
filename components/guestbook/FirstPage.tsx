import GuestBookPageTitle from './PageTitle';
import Section from './Section';

const FirstPage = () => (
    <Section>
        <div className="flex flex-col justify-between h-full w-full font-extralight text-gray-700">
            <GuestBookPageTitle large />
            <div className="mb-24 text-2xl uppercase text-center">
                <p>Thank you for visiting.</p>
                <p>Please leave your comments.</p>
            </div>
        </div>
    </Section>
)

export default FirstPage;
