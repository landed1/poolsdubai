import NextBreadcrumb from "../components/NextBreadcrumb";

export default function Contact() {
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
      <section className='bg-[#f7f6f0] py-12 px-6'>
        <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-8'>
          {/* Google Map */}
          <div className='h-64 md:h-auto'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.888072786749!2d55.13668747586672!3d25.08059198393459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69b4d9e6d075%3A0xd1e2c7e1d6ebc6c3!2sDubai%20Marina!5e0!3m2!1sen!2sae!4v1689920765635!5m2!1sen!2sae'
              width='100%'
              height='100%'
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              className='rounded-tl-xl rounded-br-xl shadow-md'></iframe>
          </div>

          {/* Contact Form */}
          <div className='bg-white rounded-tl-xl rounded-br-xl shadow-md p-6'>
            <h2 className='text-3xl font-bold text-[#0fa0ba] mb-6'>
              Contact Us
            </h2>
            <form>
              <div className='mb-4'>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-gray-700 mb-1'>
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#e964d7] focus:outline-none'
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700 mb-1'>
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#e964d7] focus:outline-none'
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-700 mb-1'>
                  Message
                </label>
                <textarea
                  id='message'
                  rows={4}
                  className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#e964d7] focus:outline-none'></textarea>
              </div>
              <button
                type='submit'
                className='bg-[#e964d7] text-white px-6 py-2 rounded-md shadow-md hover:bg-[#d053c3] transition'>
                Send Message
              </button>
            </form>

            {/* WhatsApp Button */}
            <div className='mt-8'>
              <a
                href='https://wa.me/YOUR_NUMBER'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-[#0fa0ba] text-white px-6 py-2 rounded-md shadow-md flex items-center justify-center gap-2 hover:bg-[#0e90a8] transition'>
                <span>Contact Us on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
