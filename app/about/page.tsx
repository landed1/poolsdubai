import NextBreadcrumb from "../components/NextBreadcrumb";

export default function About() {
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
          About Pools Dubai
        </h1>
        <section className='py-12 px-6'>
          <div className='max-w-4xl mx-auto'>
            <p className='text-lg text-gray-700 mb-6'>
              Welcome to <strong>Dubai Pool Creations</strong>, the premier
              choice for custom pool design, construction, and maintenance in
              Dubai. Since our humble beginnings in 2006 as a dedicated pool
              maintenance service, we’ve grown into a trusted name in luxury
              pool building across the UAE. Our passion for creating bespoke
              swimming pools has enabled us to transform countless backyards
              into breathtaking retreats.
            </p>
            <h2 className='text-2xl font-semibold text-gray-800 mb-4'>
              Our Journey
            </h2>
            <p className='text-lg text-gray-700 mb-6'>
              Starting with a focus on pool upkeep and repairs, we quickly
              recognized the growing demand for tailored pool designs in Dubai’s
              unique environment. Over the years, we’ve combined our technical
              expertise with cutting-edge designs to meet the diverse tastes of
              our clients. From infinity pools overlooking the Arabian Gulf to
              chic plunge pools in urban villas, we specialize in creating
              stunning water features that blend seamlessly with their
              surroundings.
            </p>
            <h2 className='text-2xl font-semibold text-gray-800 mb-4'>
              Why Choose Us?
            </h2>
            <ul className='list-disc pl-6 text-lg text-gray-700 mb-6'>
              <li>
                <strong>Experience:</strong> With nearly two decades of
                expertise, we understand the challenges of building and
                maintaining pools in Dubai’s climate.
              </li>
              <li>
                <strong>Innovation:</strong> Our designs incorporate advanced
                technologies and sustainable practices, ensuring beauty and
                functionality.
              </li>
              <li>
                <strong>Client-Centric Approach:</strong> Every project begins
                with understanding your vision, ensuring a personalized
                pool-building experience.
              </li>
              <li>
                <strong>Comprehensive Services:</strong> From initial design to
                ongoing maintenance, we handle every aspect with precision and
                care.
              </li>
            </ul>
            <h2 className='text-2xl font-semibold text-gray-800 mb-4'>
              Our Commitment
            </h2>
            <p className='text-lg text-gray-700 mb-6'>
              At Dubai Pool Creations, we don’t just build pools; we craft
              experiences. Whether you&apos;re dreaming of a serene oasis or an
              entertainment hub, we ensure each project is a testament to
              quality, innovation, and durability.
            </p>
          </div>
        </section>
      </article>
    </div>
  );
}
