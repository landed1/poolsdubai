import Image from "next/image";
import NextBreadcrumb from "@/app/components/NextBreadcrumb";

export default function PR() {
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
          Pool Renovation
        </h1>
        <div className='container mx-auto p-6'>
          {/* Image Section */}
          <section className='mb-8'>
            <Image
              src='../../img/services/renovation.jpg'
              alt='Pool Renovation'
              width={1200}
              height={800}
              className='w-full h-auto rounded-tl-md rounded-br-md shadow-lg'
            />
          </section>

          <section className='p-6 bg-[#0fa0ba] text-white rounded-tl-md rounded-br-md shadow-lg mb-8'>
            <h1 className='text-3xl font-bold mb-4'>
              Pool Renovation Services
            </h1>

            <p className='mb-4'>
              Is your pool showing signs of age or no longer meeting your needs?
              At <strong>Pools Dubai</strong>, we transform tired, outdated
              pools into stunning, modern masterpieces. Whether it’s updating
              the design, improving functionality, or adding new features, our
              pool renovation experts can bring your vision to life.
            </p>
            <p className='mb-4'>
              From minor upgrades to complete overhauls, we specialize in giving
              your pool a fresh look and enhanced usability while maintaining
              high standards of quality and craftsmanship.
            </p>
          </section>
          <section className='p-6 bg-[#e964d7] text-white rounded-tl-md rounded-br-md shadow-lg mb-8'>
            <h2 className='text-2xl font-bold mb-4'>Our Renovation Services</h2>
            <ul className='list-disc list-inside space-y-2'>
              <li>Resurfacing and tiling for a sleek new finish.</li>
              <li>Adding water features like fountains or jets.</li>
              <li>Installing energy-efficient pumps, filters, and heaters.</li>
              <li>Upgrading pool lighting to LED or smart systems.</li>
              <li>Deck remodeling and expansion.</li>
              <li>Customizing pool shapes and designs.</li>
            </ul>
            <p className='mt-4'>
              Our goal is to ensure your pool not only looks amazing but also
              operates at peak performance for years to come.
            </p>
          </section>
          <section className='p-6 bg-[#f7f6f0] text-[#0fa0ba] rounded-tl-md rounded-br-md shadow-lg'>
            <h2 className='text-2xl font-bold mb-4'>
              Why Choose Pools Dubai for Renovations?
            </h2>
            <p className='mb-4'>
              With years of expertise in pool design and construction, our team
              is uniquely equipped to handle all aspects of renovation. We
              combine innovative techniques with high-quality materials to
              deliver results that exceed expectations.
            </p>
            <p>
              Transform your pool into the oasis you’ve always dreamed of.
              Contact <strong>Pools Dubai</strong> today to schedule a
              consultation and start your renovation journey.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
