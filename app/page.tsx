import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
            alt="Modern Custom Home"
            className="w-full h-full object-cover brightness-[0.5]"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center flex flex-col items-center">
          <div className="mb-12 animate-fade-in">
            <Image
              src="/CompanyLogo.png"
              alt="Hidalgo Homes Logo"
              width={600}
              height={150}
              className="brightness-0 invert opacity-100 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] h-auto w-[300px] md:w-[500px]"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            Building Your Vision,<br />Crafting Your <span className="text-zinc-400">Future</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-200 mb-10 max-w-2xl mx-auto font-light">
            Premier custom home builders dedicated to architectural excellence and quality craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/projects" className="bg-[#0a1c36] text-white px-12 py-4 text-lg font-bold hover:bg-white hover:text-[#0a1c36] transition-all rounded-sm tracking-widest uppercase">
              View Our Work
            </Link>
            <Link href="/contact" className="bg-transparent text-white px-12 py-4 text-lg font-bold hover:bg-white hover:text-[#0a1c36] transition-all rounded-sm border-2 border-white tracking-widest uppercase">
              Consult Now
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-sm font-black text-[#5c6d84] tracking-[0.3em] uppercase mb-6">Our Philosophy</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-[#0a1c36] mb-8 leading-tight">
                Architectural Integrity Meets Personalized Craftsmanship
              </h3>
              <p className="text-zinc-600 text-xl mb-10 leading-relaxed font-light">
                At Hidalgo Homes, we believe a home is more than just a structure—it's the backdrop to your life's most meaningful moments. As "Dream Builders," we blend modern innovation with timeless quality to create spaces that are as functional as they are beautiful.
              </p>
              <div className="grid grid-cols-2 gap-12">
                <div className="border-l-4 border-[#0a1c36] pl-6">
                  <div className="text-4xl font-black text-[#0a1c36] mb-1">15+</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Years Experience</div>
                </div>
                <div className="border-l-4 border-[#0a1c36] pl-6">
                  <div className="text-4xl font-black text-[#0a1c36] mb-1">120+</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Homes Built</div>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] order-1 lg:order-2 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600607687940-4e5a99427c5e?q=80&w=2070&auto=format&fit=crop"
                alt="Construction Detail"
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-32 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <h2 className="text-sm font-black text-[#5c6d84] tracking-[0.3em] uppercase mb-4">Portfolio</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-[#0a1c36]">Featured Projects</h3>
            </div>
            <Link href="/projects" className="text-[#0a1c36] font-bold border-b-2 border-[#0a1c36] pb-1 hover:text-[#5c6d84] hover:border-[#5c6d84] transition-all tracking-widest uppercase text-sm">
              View All Projects
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "The Modern Oasis", loc: "Houston, TX", img: "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?q=80&w=2070&auto=format&fit=crop" },
              { title: "Coastal Contemporary", loc: "Galveston, TX", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop" },
              { title: "Urban Sophistication", loc: "Austin, TX", img: "https://images.unsplash.com/photo-1600585154526-990dcea464dd?q=80&w=2070&auto=format&fit=crop" }
            ].map((proj, i) => (
              <div key={i} className="group cursor-pointer bg-white shadow-sm border border-zinc-100 p-2">
                <div className="relative h-96 mb-6 overflow-hidden">
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="px-4 pb-4 text-center">
                  <h4 className="text-2xl font-bold text-[#0a1c36] mb-1 tracking-tight">{proj.title}</h4>
                  <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em]">{proj.loc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#0a1c36] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#5c6d84]/10 skew-x-12 transform translate-x-24"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Ready to build your dream home?</h2>
          <p className="text-xl md:text-2xl text-zinc-300 mb-12 font-light leading-relaxed">
            Schedule a consultation with our architectural team today and take the first step toward the home you've always envisioned.
          </p>
          <Link href="/contact" className="bg-white text-[#0a1c36] px-16 py-5 text-xl font-black hover:bg-zinc-200 transition-all rounded-sm inline-block tracking-widest uppercase shadow-2xl">
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  );
}
