import React from "react";
import Image from "next/image";
import ContactFormHome from "./components/ContactFormHome";
import { CheckCircle, Star, ChevronRight } from "lucide-react";
const images = [
  { src: "img/latest/burj-pools.jpg", alt: "Burj Pools" },
  { src: "img/latest/mozaic-tiling.jpg", alt: "Tiling Project" },
  {
    src: "img/latest/pool-cleaning-service-dubai.jpg",
    alt: "Pool Cleaning Dubai",
  },
  { src: "img/latest/show-pool.jpg", alt: "Show Pool" },
];
const HomePage = () => {
  const problemText: Array<string> = [
    "Our team is everything to us, experience passion and caring",
    "It takes the best tooling to achieve the results in difficult places",
    "We are here for your support when you need us",
  ];

  return (
    <div className='min-h-screen bg-[#ECECEC]'>
      {/* Hero Section */}
      <div
        className='bg-cover bg-center'
        style={{
          backgroundImage: `url('img/pools-dubai.jpg')`,
        }}>
        <section className='container mx-auto px-4 py-16 md:py-24'>
          <div className='grid grid-cols-1 items-center justify-items-center text-center'>
            <div>
              <h1 className='mix-blend-color-dodge outline-5 text-4xl md:text-6xl font-bold text-[#787878] mb-6'>
                Premium Pool Services in Dubai
              </h1>
              <p className='text-lg text-[#474787] mb-8 bg-white/80 p-2'>
                Experience excellence in pool maintenance and care with
                Dubai&apos;s most trusted service provider
              </p>
              <button className='bg-[#474787] text-white px-8 py-3 rounded-full hover:bg-[#2C2C54] transition-colors'>
                Schedule Service
              </button>
              <div className='flex items-center mt-6 space-x-2'>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className='w-5 h-5 fill-current text-yellow-400'
                  />
                ))}
                <span className='text-[#ededf2] ml-2'>
                  4.9/5 from 200+ reviews
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Problem Section */}
      <section className='bg-white py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center text-[#2C2C54] mb-12'>
            Common Pool Maintenance Challenges
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {[
              {
                title: "Inconsistent Water Quality",
                strap: "We know how! Keep water clean and pure",
              },
              {
                title: "High Maintenance Costs",
                strap: "We are more cost effective",
              },
              {
                title: "Unreliable Service Providers",
                strap: "Our providers are rated and proven",
              },
              {
                title: "Time-Consuming Maintenance",
                strap: "Or just give the job to us",
              },
            ].map((problem, index) => (
              <div key={index} className='flex items-start space-x-4'>
                <CheckCircle className='w-6 h-6 text-[#474787] flex-shrink-0' />
                <div>
                  <h3 className='text-xl font-semibold text-[#2C2C54] mb-2'>
                    {problem.title}
                  </h3>
                  <p className='text-[#AAABB8]'>{problem.strap}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className='relative h-[500px]'>
        <Image
          src='img/pool-hero.jpg'
          width={300}
          height={300}
          alt='Luxury Pool Inspiration'
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 flex items-start justify-center'>
          <h2 className='bg-blue-500/25 mix-blend-color-burn text-blue-500 text-4xl font-bold text-center px-6 py-2'>
            Transform Your Pool Into a Paradise
          </h2>
        </div>
        <div className='absolute bottom-4 right-4 text-[8px] text-white mix-blend-screen'>
          Designed By Freepik
        </div>
      </section>

      {/* Solution Section */}
      <section className='container mx-auto px-4 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div>
            <h2 className='text-3xl font-bold text-[#2C2C54] mb-6'>
              Our Comprehensive Solution
            </h2>
            <p className='text-[#474787] mb-4'>
              We offer a complete range of pool maintenance services tailored to
              your specific needs. Our expert team ensures your pool remains
              pristine year-round.
            </p>
            <p className='text-[#474787]'>
              With state-of-the-art equipment and years of experience, we
              guarantee satisfaction with every service visit.
            </p>
          </div>
          <div className='h-[400px]'>
            <Image
              src='img/pool-2.jpg'
              width={400}
              height={500}
              alt='Pool Service'
              className='rounded-lg object-cover w-full h-full'
            />
            <div className='absolute text-[8px] text-gray-400'>
              Designed By Freepik
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className='bg-[#2C2C54] py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-white text-center mb-12'>
            Why Choose Our Services
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[
              {
                title: "Expert Team",
                img: "img/team.jpg",
              },
              {
                title: "Premium Equipment",
                img: "img/pool-shotcrete-dubai.jpg",
              },
              {
                title: "24/7 Support",
                img: "img/pool-support.jpg",
              },
            ].map((reason, index) => (
              <div key={index} className='bg-white rounded-lg p-8 text-center'>
                <div className='h-32 mb-6 flex items-center justify-center'>
                  <Image
                    src={reason.img}
                    width={200}
                    height={200}
                    alt={reason.title}
                    className='rounded-full sm:w-200'
                  />
                </div>
                <h3 className='text-xl font-semibold text-[#2C2C54] mb-4'>
                  {reason.title}
                </h3>
                <p className='text-[#AAABB8]'>{problemText[index]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className='py-16 overflow-hidden'>
        <div className='container mx-auto px-4 mb-8'>
          <h2 className='text-3xl font-bold text-[#2C2C54] text-center'>
            Our Latest Projects
          </h2>
        </div>
        <div className='flex space-x-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4'>
          {images.map((image, index) => (
            <div key={index} className='flex-shrink-0 w-80 h-64 snap-center'>
              <Image
                src={image.src}
                width={300}
                height={300}
                alt={image.alt}
                className='w-full h-full object-cover rounded-lg'
              />
            </div>
          ))}
        </div>
      </section>

      {/* Action Plan Section */}
      <section className='container mx-auto px-4 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div>
            <h2 className='text-3xl font-bold text-[#2C2C54] mb-8'>
              How It Works
            </h2>
            {[
              "Schedule an Inspection",
              "Receive Custom Plan",
              "Regular Maintenance",
              "Enjoy Your Pool",
            ].map((step, index) => (
              <div key={index} className='flex items-start space-x-4 mb-6'>
                <div className='w-10 h-10 rounded-full bg-[#474787] text-white flex items-center justify-center flex-shrink-0'>
                  {index + 1}
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-[#2C2C54] mb-2'>
                    {step}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <div className='h-[400px]'>
            <Image
              src='img/latest/pool-cleaning-service-dubai.jpg'
              width={180}
              height={180}
              alt='Process'
              className='rounded-lg object-cover w-full h-full'
            />
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className='bg-white py-16'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <div className='h-[400px]'>
              <Image
                src='img/darcey-beau-unsplash.jpg'
                width={480}
                height={320}
                alt='Happy Customers'
                className='rounded-lg object-cover w-full h-full'
              />
            </div>
            <div>
              <h2 className='text-3xl font-bold text-[#2C2C54] mb-8'>
                What Our Customers Say
              </h2>
              {[
                {
                  name: "Nazeem Ya'qub Bazzi",
                  img: "img/nazeem.jpg",
                  review:
                    "Exceptional service! They keep our pool in perfect condition year-round.",
                },
                {
                  name: "A'lia Uwaisah Almasi",
                  img: "img/alia.jpg",
                  review:
                    "They helped us design the best pool for the space we had for our condo.",
                },
              ].map((_, index) => (
                <div key={index} className='mb-8 bg-[#ECECEC] p-6 rounded-lg'>
                  <div className='flex items-center mb-4'>
                    <Image
                      src={_.img}
                      width={250}
                      height={250}
                      alt='Customer'
                      className='w-10 h-10 rounded-full mr-4'
                    />
                    <div>
                      <h4 className='font-semibold text-[#2C2C54]'>{_.name}</h4>
                      <p className='text-sm text-[#AAABB8]'>Pool Owner</p>
                    </div>
                  </div>
                  <div className='flex mb-2'>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className='w-4 h-4 fill-current text-yellow-400'
                      />
                    ))}
                  </div>
                  <p className='text-[#474787]'>&quot;{_.review}&quot;</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='container mx-auto px-4 py-16'>
        <h2 className='text-3xl font-bold text-[#2C2C54] text-center mb-12'>
          Frequently Asked Questions
        </h2>
        <div className='max-w-2xl mx-auto'>
          {[
            {
              question: "How often should I service my pool?",
              answer: "We recommend weekly maintenance for optimal results.",
            },
            {
              question: "What's included in your service?",
              answer:
                "Our service includes water testing, chemical balancing, cleaning, and equipment checks.",
            },
            {
              question: "Do you provide emergency services?",
              answer: "Yes, we offer 24/7 emergency support for urgent issues.",
            },
            {
              question: "What areas do you service?",
              answer: "We service all areas in Dubai and surrounding emirates.",
            },
            {
              question: "How much does pool maintenance cost?",
              answer:
                "Costs vary based on pool size and service frequency. Contact us for a quote.",
            },
          ].map((faq, index) => (
            <details key={index} className='mb-4 bg-white rounded-lg'>
              <summary className='p-4 cursor-pointer text-[#2C2C54] font-semibold flex items-center justify-between'>
                {faq.question}
                <ChevronRight className='w-5 h-5 transform transition-transform' />
              </summary>
              <p className='p-4 text-[#474787] border-t'>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className='bg-[#2C2C54] py-16'>
        <div className='container mx-auto px-4'>
          <ContactFormHome />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
