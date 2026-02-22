import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="relative w-[240px] md:w-[340px] h-14 md:h-22 mb-6">
              <Image
                src="/CompanyLogo.png"
                alt="Hidalgo Homes Logo"
                fill
                className="object-contain object-left"
                sizes="(max-width: 768px) 240px, 340px"
              />
            </div>
            <p className="text-zinc-500 text-sm max-w-md leading-6">
              Hidalgo Homes is a premier custom home builder dedicated to excellence, integrity, and building your vision. We create homes that reflect your unique lifestyle and stand the test of time.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 tracking-wider uppercase mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/projects" className="text-sm text-zinc-500 hover:text-[#0a1c36] transition-colors">Projects</Link></li>
              <li><Link href="/floor-plans" className="text-sm text-zinc-500 hover:text-[#0a1c36] transition-colors">Floor Plans</Link></li>
              <li><Link href="/about" className="text-sm text-zinc-500 hover:text-[#0a1c36] transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-zinc-500 hover:text-[#0a1c36] transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 tracking-wider uppercase mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-sm text-zinc-500">123 Builder Lane</li>
              <li className="text-sm text-zinc-500">Houston, TX 77001</li>
              <li className="text-sm text-zinc-500 mt-2">info@hidalgohomes.com</li>
              <li className="text-sm text-zinc-500">(555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-zinc-400">
            &copy; {new Date().getFullYear()} Hidalgo Homes. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
             <span className="text-xs text-zinc-400">Dream Builders</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
