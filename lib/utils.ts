import ITourUrls from '../interfaces/ITourUrls';

const AWS_PREFIX='https://thevecentre.s3.eu-west-2.amazonaws.com';

export function getTourURLs(tour: string[]): ITourUrls {
    let urlPrefix: string = '';

    const name: string = tour && tour[0] ? tour[0].toLowerCase() : '';
    const pano: string | undefined = tour && tour[1] ? tour[1] : '';

    switch (name) {
        case 'spring':
            urlPrefix = `${AWS_PREFIX}/spring`;
            break;
        case 'home':
        case 'main':
        case 'centre':
        default:
            urlPrefix = `${AWS_PREFIX}/vec2`;
            break;
    }

    const indexHtml: string = pano ? `${urlPrefix}/index.htm#media-name=${pano}&skip-loading` : `${urlPrefix}/index.htm#skip-loading`;
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
