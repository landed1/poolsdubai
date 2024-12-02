import NextBreadcrumb from "@/app/components/NextBreadcrumb";

export default function ER() {
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
          Equipment Repair
        </h1>
        <div className='container mx-auto p-6'>
          <section className='p-6 bg-[#0fa0ba] text-white rounded-tl-md rounded-br-md shadow-lg mb-8'>
            <h1 className='text-3xl font-bold mb-4'>
              Swimming Pool Equipment Repair
            </h1>
            <p className='mb-4'>
              Pool equipment is the backbone of a properly functioning swimming
              pool. At <strong>Pools Dubai</strong>, we specialize in diagnosing
              and repairing all types of pool equipment to keep your pool
              running smoothly. Whether it’s a pump malfunction, filter issues,
              or a broken heater, our experts are here to help.
            </p>
            <p className='mb-4'>
              Timely repairs not only prevent further damage but also ensure
              your pool remains safe and enjoyable. We combine technical
              expertise with quality parts to deliver reliable solutions.
            </p>
          </section>
          <section className='p-6 bg-[#e964d7] text-white rounded-tl-md rounded-br-md shadow-lg mb-8'>
            <h2 className='text-2xl font-bold mb-4'>Our Repair Services</h2>
            <ul className='list-disc list-inside space-y-2'>
              <li>Pool pump repair and replacement.</li>
              <li>Filter maintenance and cleaning.</li>
              <li>Heater repair for consistent water temperature.</li>
              <li>Leak detection and sealing.</li>
              <li>Lighting and automation system fixes.</li>
            </ul>
            <p className='mt-4'>
              With cutting-edge tools and a team of skilled technicians, we
              ensure all repairs are handled efficiently and professionally.
            </p>
          </section>
          <section className='p-6 bg-[#f7f6f0] text-[#0fa0ba] rounded-tl-md rounded-br-md shadow-lg'>
            <h2 className='text-2xl font-bold mb-4'>Why Choose Pools Dubai?</h2>
            <p className='mb-4'>
              We understand how important it is to keep your pool equipment in
              top condition. That’s why we prioritize quick service, transparent
              pricing, and customer satisfaction. With{" "}
              <strong>Pools Dubai</strong>, you can trust us to deliver repairs
              that last.
            </p>
            <p>
              Let us take care of your pool equipment so you can focus on
              enjoying your pool. Contact us today for a consultation!
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
