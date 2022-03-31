import { GetStaticPaths } from 'next';
import React from 'react'
import Layout from '../../components/Layout'
import PrintMarkdown from '../../components/PrintMarkdown';
import { getDynamicPageFiles, getPageBySlug } from '../../utils/fileSystem'

interface IStaticProps {
    params: {
        slug: string
    }
}

interface IProps {
    page: {
        title: string,
        description: string,
        html: string,
    }
}

const DynamicPage = ({ page: { title, description, html } }: IProps) => (
    <Layout title={title} description={description}>
        <PrintMarkdown html={html} />
    </Layout>
)


export const getStaticProps = async ({ params }: IStaticProps) => {
    const page = await getPageBySlug(params.slug)
    return {
        props: {
            page: {
            ...page,
            },
        },
    }
}


export const getStaticPaths: GetStaticPaths = async () => {
    const pages = await getDynamicPageFiles()
    return {
        paths: pages.map((slug) => {
            return {
                params: {
                    slug,
                },
            }
        }),
        fallback: false,
    }
}

export default DynamicPage
