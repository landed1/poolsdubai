import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import remarkYouTubeEmbed from './youTubePlugin';
import gfm from 'remark-gfm'; // Import the plugin for tables

import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';

//global files used in both methods
const files = fs.readdirSync(path.join(process.cwd(), '/content'));

export async function getFiles(){
    const fileWithEx = await files;
    return fileWithEx;
}

export async function getSlugs(){
    const fileNoEx = files.map(file => file.replace('.md', ''));
    return fileNoEx;
}
export async function getTitles(){
    //read through all
    const allData = await getPostMeta()
    return allData.map(post => post.title);
}

export async function getMeta(slug: string){
  //read through all
  const which = files.filter(content => content === slug + '.md');
  const fileContents = fs.readFileSync(`${process.cwd()}/content/${which}`, 'utf8');
  const matterResult = matter(fileContents);
  //console.log("finding for ", matterResult.data.date)
  return matterResult.data;
}


export async function getPageContent(slug: string) {
    const which = files.filter(content => content === slug + '.md');
    const fileContents = fs.readFileSync(`${process.cwd()}/content/${which}`, 'utf8');
    const matterResult = matter(fileContents);
    
    //console.log("matterResult",matterResult.data)
    
    const processedContent = await remark()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkYouTubeEmbed)     
      .use(remarkRehype, { allowDangerousHtml: true }) // Convert markdown to rehype
      .use(rehypeRaw) // Allow raw HTML to pass through
      .use(rehypeStringify)
      .process(matterResult.content);
    
    const contentHtml = processedContent.toString();
    return {
      contentHtml
    };
  }


export async function getPageContentOld(slug:string){
    //console.log("slug page content trying to match on ",slug+'.md')
    const which = files.filter(content => content === slug+'.md' )
    //console.log('content for this page \n',which);
    //now we know which file we need we act on that
    const fileContents = fs.readFileSync(`${process.cwd()}/content/${which}`,'utf8');
    const matterResult = matter(fileContents);
    //parse the whole page
    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
    .use(gfm)
    .use(remarkHtml)
    .use(remarkYouTubeEmbed)     
    .process(matterResult.content);
        //console.log(processedContent.value);
    const contentHtml = processedContent.value;
  return {
    contentHtml
  };
}


export async function getPostMeta(slug?:string) {

    const posts =  files.map((filename)=>{
    const fileContents = fs.readFileSync(`${process.cwd()}/content/${filename}`,'utf8');
    const matterResult = matter(fileContents);

        return{
                title:matterResult.data.title,
                description:matterResult.data.description,
                slug:filename.replace('.md','')
        }
    })

    if (slug){
        //we are returning a single object
        const singlePost = posts.filter(post => post.slug === slug);
        //console.log('sp',singlePost);
        return singlePost;
    }
    else{
        return posts;
        //console.log('no slug')
        //we are returning an array of all pages
    }
}