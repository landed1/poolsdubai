import NextBreadcrumb from "@/app/components/NextBreadcrumb";

export default function CB() {
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
        <h1>Chemical Balancing</h1>
      </article>
    </div>
  );
}
