import React from "react";
import { getPostMeta, getPageContent, getFiles } from "../lib/getPage";
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
  //console.log("what does slug look like for", lePost);
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
  const pageC = await getPageContent(params.slug);
  if (!getPageContent(params.slug)) {
    notFound();
    return;
  }
  //console.log("page Content", pageC.contentHtml);
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
        <div dangerouslySetInnerHTML={{ __html: newPage }}></div>
      </article>
    </div>
  );
}
