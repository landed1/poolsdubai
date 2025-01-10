import NextBreadcrumb from "@/app/components/NextBreadcrumb";

export const metadata = {
  title: "Pool Design & Construction Dubai UAE - Pool Services Dubai",
  description:
    "We specialise in swimming pool design and construction in Dubai UAE. Allow us to wow you with our cutting edge techniques lighting and expert finish.",
};

export default function PDC() {
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
          Swimming Pool Design Dubai | Pool Construction Dubai
        </h1>
        <section className='p-6 bg-[#e964d7] text-white rounded-tl-md rounded-br-md shadow-lg'>
          <h2 className='text-2xl font-bold mb-4'>Pool Design</h2>
          <p className='mb-4'>
            At <strong>Pools Dubai</strong>, we view pool design as an art form.
            Our process begins with a detailed consultation to understand your
            ideas, needs, and the unique features of your property. We factor in
            plot shape, terrain, and landscape to craft a design that blends
            seamlessly with your space.
          </p>
          <p className='mb-4'>
            Using cutting-edge 3D visualization tools, we bring your ideas to
            life, providing an interactive preview of your custom pool. Whether
            you have a clear vision or need inspiration, you can explore our
            design library filled with unique, contemporary concepts.
          </p>
          <ul className='list-disc list-inside mb-4'>
            <li>
              A free design consultation to align on your vision and goals
            </li>
            <li>
              Detailed yard analysis for optimal placement and utilization
            </li>
            <li>
              3D visualizations for a collaborative and transparent design
              process
            </li>
          </ul>
          <p>
            At <strong>Pools Dubai</strong>, we believe every pool should
            reflect its owner’s personality and complement its surroundings. Let
            us help you craft the perfect design for your dream pool.
          </p>
        </section>
        <section className='p-6 bg-[#0fa0ba] text-white rounded-tl-md rounded-br-md shadow-lg mt-8'>
          <h2 className='text-2xl font-bold mb-4'>Pool Construction</h2>
          <p className='mb-4'>
            Once your design is finalized, <strong>Pools Dubai</strong>{" "}
            seamlessly transitions to the construction phase. We take pride in
            delivering pools that are as durable as they are beautiful, ensuring
            every detail aligns with your exact specifications.
          </p>
          <p className='mb-4'>
            Our expert team handles every step of the process, from excavation
            to finishing touches, with precision and care. We use premium
            materials and advanced techniques to guarantee the highest standards
            of quality and craftsmanship.
          </p>
          <p className='mb-4'>
            Beyond aesthetics, we focus on creating a pool that enhances the
            functionality and value of your property. Our team is committed to
            completing each project efficiently, without compromising on
            quality, so you can enjoy your personal oasis as soon as possible.
          </p>
          <p>
            Choose <strong>Pools Dubai</strong> for a construction experience
            that prioritizes your satisfaction and transforms your property into
            a true paradise.
          </p>
        </section>
      </article>
    </div>
  );
}
