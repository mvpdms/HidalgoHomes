import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
            alt="Modern Custom Home"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-8">
            <Image
              src="/CompanyLogo.png"
              alt="Hidalgo Homes Logo"
              width={400}
              height={100}
              className="brightness-0 invert opacity-90 drop-shadow-2xl"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Building Your Vision,<br />Crafting Your <span className="text-[#5c6d84]">Future</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-200 mb-10 max-w-2xl mx-auto font-light">
            Premier custom home builders dedicated to architectural excellence and quality craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects" className="bg-[#0a1c36] text-white px-10 py-4 text-lg font-medium hover:bg-[#5c6d84] transition-all rounded-sm">
              View Our Work
            </Link>
            <Link href="/contact" className="bg-white text-[#0a1c36] px-10 py-4 text-lg font-medium hover:bg-zinc-100 transition-all rounded-sm border border-white">
              Consult Now
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-[#5c6d84] tracking-[0.2em] uppercase mb-4">Our Philosophy</h2>
              <h3 className="text-4xl font-bold text-[#0a1c36] mb-6 leading-tight">
                Architectural Integrity Meets Personalized Craftsmanship
              </h3>
              <p className="text-zinc-600 text-lg mb-8 leading-relaxed">
                At Hidalgo Homes, we believe a home is more than just a structure—it's the backdrop to your life's most meaningful moments. As "Dream Builders," we blend modern innovation with timeless quality to create spaces that are as functional as they are beautiful.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-[#0a1c36] mb-1">15+</div>
                  <div className="text-sm text-zinc-500 uppercase tracking-wider">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#0a1c36] mb-1">120+</div>
                  <div className="text-sm text-zinc-500 uppercase tracking-wider">Homes Built</div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1600607687940-4e5a99427c5e?q=80&w=2070&auto=format&fit=crop"
                alt="Construction Detail"
                fill
                className="object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-sm font-bold text-[#5c6d84] tracking-[0.2em] uppercase mb-4">Portfolio</h2>
              <h3 className="text-4xl font-bold text-[#0a1c36]">Featured Projects</h3>
            </div>
            <Link href="/projects" className="text-[#0a1c36] font-semibold border-b-2 border-[#0a1c36] pb-1 hover:text-[#5c6d84] hover:border-[#5c6d84] transition-all hidden sm:block">
              View All Projects
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "The Modern Oasis", loc: "Houston, TX", img: "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?q=80&w=2070&auto=format&fit=crop" },
              { title: "Coastal Contemporary", loc: "Galveston, TX", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop" },
              { title: "Urban Sophistication", loc: "Austin, TX", img: "https://images.unsplash.com/photo-1600585154526-990dcea464dd?q=80&w=2070&auto=format&fit=crop" }
            ].map((proj, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative h-80 mb-4 overflow-hidden">
                  <Image
                    src={proj.img}
                    alt={proj.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-xl font-bold text-[#0a1c36]">{proj.title}</h4>
                <p className="text-zinc-500 text-sm uppercase tracking-wide">{proj.loc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0a1c36] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to build your dream home?</h2>
          <p className="text-xl text-zinc-300 mb-10 font-light leading-relaxed">
            Schedule a consultation with our architectural team today and take the first step toward the home you've always envisioned.
          </p>
          <Link href="/contact" className="bg-white text-[#0a1c36] px-12 py-4 text-lg font-bold hover:bg-[#5c6d84] hover:text-white transition-all rounded-sm inline-block">
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  );
}
