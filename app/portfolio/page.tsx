import Image from "next/image";
import NextBreadcrumb from "../components/NextBreadcrumb";

export const metadata = {
  title: "Swimming Pool Portfolio Dubai UAE",
  description:
    "Welcome to Pools Dubai Portfolio. Also visit our instagram for up to date projects and maintenance work.",
};

export default function Portfolio() {
  type Project = {
    title: string;
    img: string;
    desc: string;
  };

  const projects: Project[] = [
    {
      title: "Villa Nova",
      img: "img/latest/mozaic-tiling.jpg",
      desc: "Vacation rental pool maintenance",
    },
    {
      title: "DAMAC MAISON",
      img: "img/portfolio/damac-maison.jpg",
      desc: "Maintenenace Water Quality",
    },
    {
      title: "Atana Hotel",
      img: "img/portfolio/atana-hotel.jpg",
      desc: "Maintenance",
    },
    {
      title: "Hotel Avalon",
      img: "img/portfolio/avalon.jpg",
      desc: "Rennovation",
    },
    {
      title: "Al Barari",
      img: "img/portfolio/al-barari.jpg",
      desc: "Design and Construction",
    },
    {
      title: "Golden Sands",
      img: "img/portfolio/golden-sands.jpg",
      desc: "Maintenance",
    },
  ];

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
        <section className='py-12 px-6'>
          <div className='max-w-7xl mx-auto'>
            <h1 className='text-4xl font-bold text-center text-[#0fa0ba] mb-8'>
              Our Portfolio
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
              {/* Replace these blocks with your content */}
              {projects.map((item, index) => (
                <div
                  key={index}
                  className='bg-white rounded-tl-xl rounded-br-xl shadow-md overflow-hidden'>
                  <Image
                    width={400}
                    height={200}
                    src={item.img}
                    alt={item.title}
                    className='w-full h-56 object-cover'
                  />
                  <div className='p-4'>
                    <h2 className='text-xl font-semibold text-[#e964d7]'>
                      {item.title}
                    </h2>
                    <p className='text-gray-600 text-sm mt-2'>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
