/** @format */

import fs from 'fs';
import matter from 'gray-matter';
import MarkdownSection from '@/lib/markdown/MarkdownSection';
import Markdown from 'markdown-to-jsx';

import Content from '@/lib/container/Content';

import { GetStaticPropsContext } from 'next/types';
import IProjectPost from '@/interfaces/IProjectPost';

import styles from '@/styles/pages/ProjectPost.module.css'
import MarkdownImage from '@/lib/markdown/MarkdownImage';
import Layout from '@/lib/layouts/Layout';

export default function MarkdownPostListTemplate(props: { post: IProjectPost }) {
    return (
        <>
            <Layout title={'Kyle Klus | ' + props.post.title + ' 🛠️'}>
                <Content className={['applyHeaderOffset', styles.projectPost].join(' ')}>
                    <Markdown options={{
                        wrapper: MarkdownSection,
                        overrides: {
                            img: {
                                component: MarkdownImage,
                            },
                        },
                        forceWrapper: true
                    }}>
                        {
                            props.post.content
                        }
                    </Markdown>
                </Content>
            </Layout>
        </>
    );
}

export async function getStaticPaths() {
    // variables
    const serverFolder = 'public/postFiles/'
    const delimiter = '---'

    // get markdown files
    const filenames = fs.readdirSync(serverFolder).filter(file => file.endsWith('.md'))

    // Convert markdown files into posts
    const postsUrls: string[] = filenames.map((filename) => {
        let url = filename.replace('.md', '')
        url = '/' + url
        const filepath = `${serverFolder}${filename}`
        let fileContent = fs.readFileSync(filepath, 'utf-8').toString();
        const frontmatter = matter(fileContent).data
        const startOfFrontmatter = fileContent.indexOf(delimiter)
        const endOfFrontmatter = fileContent.indexOf(delimiter, startOfFrontmatter + delimiter.length) + delimiter.length
        fileContent = fileContent.substring(endOfFrontmatter, fileContent.length)

        let categoriesString: string = frontmatter.categories
        const categories: string[] = categoriesString.split(' ')
        url = `/posts/${categories.join('/')}` + url
        return url
    })


    return {
        paths: postsUrls,
        fallback: false
    }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {

    // variables
    const serverFolder = 'public/postFiles/'
    const delimiter = '---'

    // get markdown files
    if (!params || !params.categoryPost) return { props: {} };

    let paths = params.categoryPost.toString().split(',')

    const filename = paths[paths.length - 1] + '.md'
    let url = '/' + paths.join('/')
    const filepath = `${serverFolder}/${filename}`
    let fileContent = fs.readFileSync(filepath, 'utf-8').toString();
    const frontmatter = matter(fileContent).data
    const startOfFrontmatter = fileContent.indexOf(delimiter)
    const endOfFrontmatter = fileContent.indexOf(delimiter, startOfFrontmatter + delimiter.length) + delimiter.length
    fileContent = fileContent.substring(endOfFrontmatter, fileContent.length)

    let categoriesString: string = frontmatter.categories
    const categories: string[] = categoriesString.split(' ')
    url = `/posts/${categories.join('/')}` + url

    console.log(url)

    // Convert markdown files into posts
    const post: IProjectPost = {
        filename: filename,
        filepath: filepath,
        url: url,
        title: frontmatter.title,
        author: frontmatter.author,
        categories: categories,
        created: frontmatter.created,
        content: fileContent,
    }


    return {
        props: {
            post: post,
        }
    }
}
