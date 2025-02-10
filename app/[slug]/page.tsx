import React from "react";
import { getPostMeta, getPageContent, getFiles, getMeta } from "../lib/getPage";
import NextBreadcrumb from "../components/NextBreadcrumb";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Params = {
  slug: string;
};

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const lePost = await getPostMeta(slug);
  const [firstPost] = lePost;
  return firstPost;
}

export const generateStaticParams = async () => {
  //console.log("static params");
  //we need to return all the pages from the .md files in a specific folder.
  const slugs = await getFiles();
  return slugs.map((page) => ({
    slug: page.replace(".md", ""),
  }));
  //slugs ['about2.md','extra.md','random'] - an array of markdown files
};

export default async function Page({ params }: { params: Params }) {
  console.log("params.slug", params.slug);

  const pageC = await getPageContent(params.slug);
  if (!pageC) {
    console.log("not found ", params.slug);
    notFound();
    return;
  }
  const meta = await getMeta(params.slug);
  //console.log("dDate\n\n", dDate);
  //console.log("page Content", pageC);
  const newPage = pageC.contentHtml;
  return (
    <div className='my-20'>
      <NextBreadcrumb
        homeElement={"Home"}
        separator={<span> &gt; </span>}
        activeClasses='text-amber-500'
        containerClasses='flex py-5'
        listClasses='hover:underline mx-2 font-bold'
        capitalizeLinks
      />
      <article className='flex-grow page-gutter'>
        <div className='flex space-x-2'>
          {meta.author ? (
            <div className='inline-block px-2.5 py-0.5 bg-red-800 text-gray-100 border border-gray-600 rounded text-xs shadow-sm blur-[0.5px]'>
              Author&nbsp;{meta.author ? meta.author : ""}
            </div>
          ) : (
            ""
          )}
          {meta.date ? (
            <div className='inline-block px-2.5 py-0.5 bg-gray-800 text-gray-100 border border-gray-600 rounded text-xs shadow-sm blur-[0.5px]'>
              {meta.date ? meta.date : ""}
            </div>
          ) : (
            ""
          )}
        </div>
        <div dangerouslySetInnerHTML={{ __html: newPage }}></div>
      </article>
    </div>
  );
}
