import React from 'react';
// import Layout from '../components/Layout';

const ChristmasTour = () => {
    return (
        // <Layout title="Christmas Tour" description="A selection of videos showing what is on offer at The VECentre">
            <div className="h-screen w-screen">
                <iframe src="https://thevecentre.s3.eu-west-2.amazonaws.com/christmas/index.htm" width="100%" height="100%" />
            </div>
        // </Layout>
    )
}

export default ChristmasTour;