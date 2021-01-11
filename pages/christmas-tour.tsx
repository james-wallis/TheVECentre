import React from 'react';
// import Layout from '../components/Layout';

const ChristmasTour = () => {
    return (
        // <Layout title="Christmas Tour" description="A selection of videos showing what is on offer at The VECentre">
            <div className="h-screen w-screen">
                {/* <iframe sandbox="allow-scripts allow-same-origin	" src="https://thevecentre.s3.eu-west-2.amazonaws.com/christmas/index.htm" width="100%" height="100%" /> */}
                <div className="h-screen w-screen" id="tour-container"></div>
                {/* https://beta.3dvista.com/en/wiki/how-to-customize-the-url-of-your-tours-to-your-own-domain/ */}
                <script type="text/javascript" src="/js/tour.js" />
            </div>
        // </Layout>
    )
}

export default ChristmasTour;