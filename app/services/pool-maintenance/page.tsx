import Image from "next/image";
import NextBreadcrumb from "@/app/components/NextBreadcrumb";

export const metadata = {
  title: "Pool Maintenenace Dubai UAE - Pool Services Dubai",
  description:
    "We specialise in pool maintenance services in Dubai, UAE. Our expert technicians provide hassle-free solutions to keep your pool clean and safe.",
};

export default async function Maint() {
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
          Pool Maintenenace Dubai
        </h1>
        <section className='p-8 sm:p-12 lg:p-16 text-gray-800'>
          <div className='max-w-6xl mx-auto'>
            <h1 className='text-3xl sm:text-4xl font-bold mb-8 text-[#0fa0ba]'>
              Expert Swimming Pool Maintenance Services
            </h1>
            <p className='mb-6'>
              Keeping your swimming pool in pristine condition doesn’t have to
              be a chore. We specialize in hassle-free, professional maintenance
              solutions to ensure your pool stays clean, safe, and ready to use
              whenever you need it.
            </p>

            {/* Section Blocks */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
              {/* Why Regular Maintenance */}
              <div className='p-6 bg-white rounded-tl-md rounded-br-md shadow-lg'>
                <h2 className='text-2xl font-semibold text-[#e964d7] mb-4'>
                  Why Regular Pool Maintenance Matters
                </h2>
                <p className='text-gray-600'>
                  A well-maintained pool isn’t just about aesthetics—it’s about
                  safety and longevity. From balancing water chemistry to
                  ensuring equipment runs smoothly, our services prevent costly
                  repairs and extend the life of your pool.
                </p>
              </div>

              <div className=''>
                <div className='w-full h-full bg-cover  shadow-lg'>
                  <Image
                    src='../../img/services/pool-maintenance.jpg'
                    width={400}
                    height={300}
                    alt='Pool Maintenence Dubai'
                    className='w-full h-full object-cover rounded-tl-md rounded-br-md'
                  />
                </div>
              </div>

              {/* Services Offered */}
              <div className='p-6 bg-white rounded-tl-md rounded-br-md shadow-lg'>
                <h2 className='text-2xl font-semibold text-[#e964d7] mb-4'>
                  What We Offer
                </h2>
                <ul className='list-disc pl-5 text-gray-600'>
                  <li>Routine Cleaning: Vacuuming, skimming, and scrubbing.</li>
                  <li>
                    Chemical Balancing: Precise adjustments for optimal pH and
                    chlorine levels.
                  </li>
                  <li>
                    Equipment Checks: Inspection and servicing of pumps,
                    filters, and heaters.
                  </li>
                  <li>
                    Preventative Care: Early detection of issues to avoid costly
                    repairs.
                  </li>
                </ul>
              </div>

              {/* Additional Services */}
              <div className='p-6 bg-white rounded-tl-md rounded-br-md shadow-lg'>
                <h2 className='text-2xl font-semibold text-[#e964d7] mb-4'>
                  Additional Services
                </h2>
                <ul className='list-disc pl-5 text-gray-600'>
                  <li>Climate control and heater servicing.</li>
                  <li>Filter media changes.</li>
                  <li>Seasonal openings and closings.</li>
                </ul>
              </div>

              {/* Why Choose Us */}
              <div className='p-6 bg-white rounded-tl-md rounded-br-md shadow-lg'>
                <h2 className='text-2xl font-semibold text-[#e964d7] mb-4'>
                  Why Choose Us?
                </h2>
                <p className='text-gray-600'>
                  Our experienced technicians provide tailored maintenance plans
                  designed for your needs. With transparent communication and
                  top-quality service, we ensure your pool remains in perfect
                  condition year-round.
                </p>
              </div>

              {/* Contact Us */}
              <div className='p-6 bg-[#0fa0ba] text-white rounded-tl-md rounded-br-md shadow-lg col-span-1 sm:col-span-2 lg:col-span-1'>
                <h2 className='text-2xl font-semibold mb-4'>
                  Ready for Stress-Free Pool Maintenance?
                </h2>
                <p className='mb-4'>
                  Enjoy a sparkling, worry-free pool all year round. Contact us
                  today to discuss your maintenance needs or schedule a service
                  plan that works for you.
                </p>
                <button className='bg-white text-[#0fa0ba] px-6 py-3 rounded-tl-md rounded-br-md font-semibold shadow-lg'>
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
