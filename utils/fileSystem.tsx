import * as fs from 'fs-extra'
import { join } from 'path'
import matter from 'gray-matter'
import markdownToHtml from './markdownConverter'

const postsDirectory = join(process.cwd(), '_pages')

export async function getDynamicPageFiles() {
    const dirs = await fs.readdir(postsDirectory)
    return dirs.map((slug: string) => slug.replace(/\.md$/, ''))
}

export async function getPageBySlug(slug: string) {
  const fullPath: string = join(postsDirectory, `${slug}.md`)
  const fileContents: string = await fs.readFile(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const html: string = await markdownToHtml(content)

  return {
      ...data,
      html,
      slug: fullPath,
  }
}

export async function getAllDynamicPages() {
  const slugs: string[] = await getDynamicPageFiles()
  const pages = slugs.map((slug: string) => getPageBySlug(slug))
  return pages
}
