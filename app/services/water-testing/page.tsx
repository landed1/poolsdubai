import NextBreadcrumb from "@/app/components/NextBreadcrumb";

export default function WT() {
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
          Water Testing
        </h1>
        <section className='mb-12'>
          <h2 className='text-3xl font-semibold text-blue-800 mb-4'>
            Ensuring Crystal Clear Waters
          </h2>
          <p className='text-lg text-gray-700'>
            At Pools Dubai, we understand the importance of maintaining pristine
            water quality in your swimming pool. Our expert services ensure that
            your pool remains a safe and inviting oasis for you and your guests.
          </p>
        </section>

        <section className='mb-12'>
          <h2 className='text-2xl font-semibold text-blue-800 mb-4'>
            Our Water Quality Services
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='bg-white rounded-lg shadow-md p-6'>
              <h3 className='text-xl font-semibold text-blue-600 mb-2'>
                Water Testing and Analysis
              </h3>
              <p className='text-gray-700'>
                Regular testing of pH, chlorine levels, and other key parameters
                to ensure optimal water balance.
              </p>
            </div>
            <div className='bg-white rounded-lg shadow-md p-6'>
              <h3 className='text-xl font-semibold text-blue-600 mb-2'>
                Chemical Treatment
              </h3>
              <p className='text-gray-700'>
                Precise application of chemicals to maintain water clarity and
                prevent algae growth.
              </p>
            </div>
            <div className='bg-white rounded-lg shadow-md p-6'>
              <h3 className='text-xl font-semibold text-blue-600 mb-2'>
                Filtration System Maintenance
              </h3>
              <p className='text-gray-700'>
                Regular cleaning and maintenance of filters to ensure efficient
                water circulation.
              </p>
            </div>
            <div className='bg-white rounded-lg shadow-md p-6'>
              <h3 className='text-xl font-semibold text-blue-600 mb-2'>
                Algae Prevention and Removal
              </h3>
              <p className='text-gray-700'>
                Proactive measures to prevent algae growth and effective removal
                techniques when needed.
              </p>
            </div>
          </div>
        </section>

        <section className='mb-12'>
          <h2 className='text-2xl font-semibold text-blue-800 mb-4'>
            Water Treatment Systems
          </h2>
          <ul className='list-disc list-inside text-gray-700 space-y-2'>
            <li>Chlorine-based systems</li>
            <li>Salt water chlorination</li>
            <li>UV disinfection systems</li>
            <li>Ozone treatment</li>
            <li>Mineral purification systems</li>
          </ul>
        </section>

        <section>
          <h2 className='text-2xl font-semibold text-blue-800 mb-4'>
            Why Choose Pools Dubai?
          </h2>
          <ul className='list-none space-y-4'>
            <li className='flex items-center'>
              <svg
                className='w-6 h-6 text-green-500 mr-2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M5 13l4 4L19 7'></path>
              </svg>
              <span className='text-gray-700'>
                Compliance with Dubai Municipality standards
              </span>
            </li>
            <li className='flex items-center'>
              <svg
                className='w-6 h-6 text-green-500 mr-2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M5 13l4 4L19 7'></path>
              </svg>
              <span className='text-gray-700'>
                Experienced and certified technicians
              </span>
            </li>
            <li className='flex items-center'>
              <svg
                className='w-6 h-6 text-green-500 mr-2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M5 13l4 4L19 7'></path>
              </svg>
              <span className='text-gray-700'>
                State-of-the-art water testing equipment
              </span>
            </li>
            <li className='flex items-center'>
              <svg
                className='w-6 h-6 text-green-500 mr-2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M5 13l4 4L19 7'></path>
              </svg>
              <span className='text-gray-700'>
                Customized maintenance plans
              </span>
            </li>
          </ul>
        </section>
      </article>
    </div>
  );
}
