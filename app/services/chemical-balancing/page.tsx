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
        <h1 className='text-4xl font-bold text-center text-[#0fa0ba] mb-8'>
          Chemical Balancing
        </h1>
        <div className='container mx-auto p-6'>
          <section className='p-6 bg-[#0fa0ba] text-white rounded-tl-md rounded-br-md shadow-lg mb-8'>
            <h1 className='text-3xl font-bold mb-4'>
              Chemical Balancing Services
            </h1>
            <p className='mb-4'>
              Maintaining the right chemical balance in your pool is essential
              for both safety and enjoyment. At <strong>Pools Dubai</strong>, we
              provide expert chemical balancing services to ensure your water
              remains crystal clear, hygienic, and perfectly safe for swimmers.
            </p>
            <p className='mb-4'>
              Our specialists carefully test and adjust levels of pH, chlorine,
              alkalinity, and calcium hardness to achieve the perfect balance.
              This prevents issues like skin irritation, equipment damage, and
              algae growth.
            </p>
          </section>
          <section className='p-6 bg-[#e964d7] text-white rounded-tl-md rounded-br-md shadow-lg'>
            <h2 className='text-2xl font-bold mb-4'>
              Why Choose Our Services?
            </h2>
            <ul className='list-disc list-inside space-y-2'>
              <li>Comprehensive water testing and analysis.</li>
              <li>Precise adjustments to meet ideal chemical levels.</li>
              <li>Expert advice to maintain a balanced pool year-round.</li>
            </ul>
            <p className='mt-4'>
              With <strong>Pools Dubai</strong>, you can enjoy a hassle-free
              experience and pristine swimming conditions. Let us handle the
              chemistry so you can dive into relaxation!
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
