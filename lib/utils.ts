import ITourUrls from '../interfaces/ITourUrls';

const AWS_PREFIX='https://thevecentre.s3.eu-west-2.amazonaws.com';

export function getTourURLs(tour: string[]): ITourUrls {
    let urlPrefix: string = '';

    const name: string = tour && tour[0] ? tour[0].toLowerCase() : '';

    switch (name) {
        case 'spring':
            urlPrefix = `${AWS_PREFIX}/spring`;
            break;
        case 'main':
        default:
            urlPrefix = `${AWS_PREFIX}/vec2`;
            break;
    }

    // if (!urlPrefix) {
    //     throw new Error(`Unknown tour: ${tour}`);
    // }

    const mediaIndex = 1;

    const indexHtml: string = mediaIndex > 0 ? `${urlPrefix}/index.htm?media-index=${mediaIndex}` : `${urlPrefix}/index.htm`;
    const socialThumbnail: string = `${urlPrefix}/socialThumbnail.jpg`;
    const favicon: string = `${urlPrefix}/favicon.ico`;
    const manifest: string = `${urlPrefix}/manifest.json`;
    const browserConfig: string = `${urlPrefix}/browserconfig.xml`;
    const miscDir: string = `${urlPrefix}/misc`;
    return {
        baseUrl: urlPrefix,
        indexHtml,
        socialThumbnail,
        favicon,
        manifest,
        browserConfig,
        miscDir,
    };
}
