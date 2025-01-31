import React from "react";
import Link from "next/link";
//import { usePathname } from "next/navigation";
import NextBreadcrumb from "../components/NextBreadcrumb";
import ServiceList from "../components/ServiceLinks";

export const metadata = {
  title: "Dubai Pool Services - UAE Pool Services",
  description:
    "With decades of experience we can help. Here are our core swimming pool services.",
};

export default function Users() {
  //const pathname = usePathname();
  //const isActive = pathname.startsWith("/users");
  //console.log(isActive);

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
        <div>
          <section className='p-6 bg-[#0fa0ba] text-white rounded-tl-md rounded-br-md shadow-lg mb-8'>
            <h1 className='text-3xl font-bold mb-4'>
              <Link href='/services'>Dubai Pool Services</Link>
            </h1>
            <p className='mb-4'>
              At <strong>Pools Dubai</strong>, we specialize in providing
              exceptional pool services across Dubai. Whether you need
              professional pool maintenance, stunning designs, expert repairs,
              or complete renovations, our team is here to deliver top-tier
              solutions tailored to your needs. With years of experience, we
              ensure your pool stays pristine, functional, and a true
              centerpiece of your property.
            </p>
          </section>
          <ServiceList />
        </div>
      </article>
    </div>
  );
}
