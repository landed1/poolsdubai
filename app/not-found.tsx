import NextBreadcrumb from "./components/NextBreadcrumb";

export default function NotFound() {
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
        <h1 className='text-4xl font-bold text-center text-[#0fa0ba] mb-8'>
          You found the secret page!
        </h1>
        <div>
          <h2>Page Not Found</h2>
        </div>
      </article>
    </div>
  );
}
