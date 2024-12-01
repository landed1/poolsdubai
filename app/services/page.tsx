"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NextBreadcrumb from "../components/NextBreadcrumb";

export default function Users() {
  const pathname = usePathname();
  const isActive = pathname.startsWith("/users");
  console.log(isActive);

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
          <h1>
            <Link href='/services'>Dubai Pool Services</Link>
          </h1>
          <ul className='space-y-2 text-[#AAABB8]'>
            <li>
              <Link href='/services/pool-maintenance'>Pool Maintenance</Link>
            </li>
            <li>
              <Link href='/services/pool-design-construction'>
                Pool Design & Construction
              </Link>
            </li>
            <li>
              <Link href='/services/water-testing'>Water Testing</Link>
            </li>
            <li>
              <Link href='/services/chemical-balancing'>
                Chemical Balancing
              </Link>
            </li>
            <li>
              <Link href='/services/equipment-repair'>Equipment Repair</Link>
            </li>
            <li>
              <Link href='/services/pool-renovation'>Pool Renovation</Link>
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
}
