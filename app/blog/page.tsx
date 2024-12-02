import NextBreadcrumb from "../components/NextBreadcrumb";
import { getSlugs, getTitles } from "../lib/getPage";
import Link from "next/link";

export default async function Blog() {
  //we need to export a bunch of cards from all the posts we have let's see what the ai coders come up with...

  //spec cards and tags which group the cards.

  const pageSlugs = await getSlugs();
  const pageList = await getTitles();

  const postData = pageSlugs.map((slug, index) => ({
    slug,
    titre: pageList[index],
  }));

  // console.log("page ", postData);

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
      <article className='page-gutter'>
        <h1>Blog</h1>
        <p>
          Welcome to our blog where you will find all kinds of interesting
          articles all about pools from all over the world,{" "}
          <span className='italic'>not just Dubai!</span>
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {postData.map((item) => (
            <div
              key={String(item.slug)}
              className='bg-[#F9F9F9] shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300'>
              <h3 className='text-lg font-semibold text-[#474787] mb-4'>
                {item.titre}
              </h3>
              <p className='text-sm text-[#00909E] mb-4'></p>
              <Link
                href={`/${item.slug}`}
                className='px-4 py-2 text-white bg-[#FF477E] rounded hover:bg-[#FF6584] transition-colors duration-300'>
                Read It!
              </Link>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}
