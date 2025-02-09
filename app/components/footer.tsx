import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className='bg-[#2C2C54] text-white py-12'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div>
            <h3 className='text-xl font-bold mb-4'>About Us</h3>
            <p className='text-[#AAABB8]'>
              Premium pool maintenance services in Dubai, ensuring your pool
              stays pristine year-round.
            </p>
            <Image
              src={"/img/latest/logo-squarex512.png"}
              width={150}
              height={150}
              alt={"pools Dubai Logo"}
            />
          </div>
          <div>
            <h3 className='text-xl font-bold mb-4'>Contact</h3>
            <p>
              Dubai Pools, Marina Gate M Floor, Dubai Marina, Dubai, United Arab
              Emirates
            </p>
            <ul className='space-y-2 text-[#AAABB8]'>
              <li className='flex items-center'>
                <Phone className='w-4 h-4 mr-2' />
                +971 50 123 4567
              </li>
              <li className='flex items-center'>
                <Mail className='w-4 h-4 mr-2' />
                info@poolsdubai.com
              </li>
              <li className='flex items-center'>
                <MapPin className='w-4 h-4 mr-2' />
                Dubai, UAE
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-xl font-bold mb-4'>
              <Link href='/services'>Services</Link>
            </h3>
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
          <div>
            <h3 className='text-xl font-bold mb-4'>Follow Us</h3>
            <div className='flex space-x-4'>
              <a
                href='#'
                className='text-[#AAABB8] hover:text-white transition-colors'>
                <Facebook className='w-6 h-6' />
              </a>
              <a
                href='#'
                className='text-[#AAABB8] hover:text-white transition-colors'>
                <Instagram className='w-6 h-6' />
              </a>
              <a
                href='#'
                className='text-[#AAABB8] hover:text-white transition-colors'>
                <Twitter className='w-6 h-6' />
              </a>
            </div>
          </div>
        </div>
        <div className='border-t border-[#474787] mt-8 pt-8 text-center text-[#AAABB8]'>
          <p>
            &copy; {new Date().getFullYear()} Dubai Pool Services. All rights
            reserved.
          </p>
          <p>
            Web Design and <a href='https://cambs.eu'>SEO</a> by Cambs Digital
          </p>
        </div>
      </div>
    </footer>
  );
}
