"use client";
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Users(){
  
  const pathname = usePathname();
  const isActive = pathname.startsWith("/users");
  console.log(isActive)

  return(
  <article className="flex-grow page-gutter">
   <div>
    <h3 className="text-xl font-bold mb-4"><Link href="/services">Services</Link></h3>
      <ul className="space-y-2 text-[#AAABB8]">
        <li><Link href="/services/pool-maintenance">Pool Maintenance</Link></li>
        <li><Link href="/services/pool-design-construction">Pool Design & Construction</Link></li>
        <li><Link href="/services/water-testing">Water Testing</Link></li>
        <li><Link href="/services/chemical-balancing">Chemical Balancing</Link></li>
        <li><Link href="/services/equipment-repair">Equipment Repair</Link></li>
        <li><Link href="/services/pool-renovation">Pool Renovation</Link></li>
      </ul>
    </div>
  </article>
  )
}