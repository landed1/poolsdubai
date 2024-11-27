import React from 'react';
import {getPostMeta, getPageContent, getSlugs} from '../lib/getPage';
import NextBreadcrumb from '../components/NextBreadcrumb';

type Params = {
    title: string;
    slug: string;
    description: string;
    also:string;
  };
  
  type PageProps = {
    params: Params;
  };

export async function generateMetadata({ params }: PageProps) {
    const lePost = await getPostMeta(params.slug)
    const [firstPost] = lePost;
    return firstPost;
}

export const generateStaticParams = async ()=>{
    //we need to return all the pages from the .md files in a specific folder.
    const slugs = await getSlugs();
    //slugs ['about2.md','extra.md','random'] - an array of markdown files
    const other = slugs.map(page => ({
      slug: page.replace('.md','')
    }));
    return await other;
}

export default async function Page({params}:PageProps){
    const pageC = await getPageContent(params.slug)
    //console.log("page Content", pageC.contentHtml);
    const newPage= pageC.contentHtml;
    //console.log(newPage);
    return <article className="flex-grow page-gutter">
            <NextBreadcrumb
              homeElement={'Home'}
              separator={<span> &gt; </span>}
              activeClasses='text-amber-500'
              containerClasses='flex py-5' 
              listClasses='hover:underline mx-2 font-bold'
              capitalizeLinks
            />
            <div dangerouslySetInnerHTML={{ __html: newPage  }}></div>
          </article>;
}