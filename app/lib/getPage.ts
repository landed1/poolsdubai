import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

//global files used in both methods
const files = fs.readdirSync(path.join(process.cwd(), '/content'));

export async function getSlugs(){
    return files;
}

export async function getPageContent(slug:string){
    //console.log("slug page content trying to match on ",slug+'.md')
    const which = files.filter(content => content === slug+'.md' )
    //console.log('content for this page \n',which);
    //now we know which file we need we act on that
    const fileContents = fs.readFileSync(`${process.cwd()}/content/${which}`,'utf8');
    const matterResult = matter(fileContents);
    //parse the whole page
    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
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