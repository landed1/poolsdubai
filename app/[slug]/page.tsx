import React from 'react';
import {getPostMeta, getPageContent, getSlugs} from '../lib/getPage';
import NextBreadcrumb from '../components/NextBreadcrumb';
import { Metadata } from 'next';

  type Params = {
    slug: string;
  };


export async function generateMetadata({ params }: { params:Params } ): Promise<Metadata> {
    const {slug} = await params;
    const lePost = await getPostMeta(slug);
    const [firstPost] = lePost;
    return firstPost;
   /* return {
      title: lePost[0]?.title || 'Page', 
      description: lePost[0]?.description || ''
  };*/
}
export const generateStaticParams = async () => {
    //we need to return all the pages from the .md files in a specific folder.
    const slugs = await getSlugs();
    //slugs ['about2.md','extra.md','random'] - an array of markdown files
    return slugs.map(page => ({
      slug: page.replace('.md','')
    }));
}

export default async function Page({ params }: { params:Params }) {
    const pageC = await getPageContent(params.slug)
    //console.log("page Content", pageC.contentHtml);
    const newPage= pageC.contentHtml;
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