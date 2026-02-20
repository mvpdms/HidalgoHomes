import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
            alt="Modern Custom Home"
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center flex flex-col items-center">
          <div className="mb-16 animate-fade-in flex justify-center">
            <Image
              src="/CompanyLogo.png"
              alt="Hidalgo Homes Logo"
              width={1000}
              height={250}
              className="brightness-0 invert opacity-100 drop-shadow-[0_20px_20px_rgba(0,0,0,0.6)] h-auto w-[400px] md:w-[800px]"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight uppercase">
            Building Your Vision,<br />Crafting Your <span className="text-zinc-400">Future</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-200 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Premier custom home builders dedicated to architectural excellence and quality craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Link href="/projects" className="bg-[#0a1c36] text-white px-16 py-5 text-xl font-bold hover:bg-white hover:text-[#0a1c36] transition-all rounded-sm tracking-[0.2em] uppercase shadow-2xl">
              View Our Work
            </Link>
            <Link href="/contact" className="bg-transparent text-white px-16 py-5 text-xl font-bold hover:bg-white hover:text-[#0a1c36] transition-all rounded-sm border-2 border-white tracking-[0.2em] uppercase shadow-2xl">
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
              <h3 className="text-4xl md:text-6xl font-bold text-[#0a1c36] mb-8 leading-tight">
                Architectural Integrity Meets Personalized Craftsmanship
              </h3>
              <p className="text-zinc-600 text-2xl mb-12 leading-relaxed font-light">
                At Hidalgo Homes, we believe a home is more than just a structure—it's the backdrop to your life's most meaningful moments. As "Dream Builders," we blend modern innovation with timeless quality to create spaces that are as functional as they are beautiful.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div className="border-l-8 border-[#0a1c36] pl-8 py-2">
                  <div className="text-6xl font-black text-[#0a1c36] mb-2 tracking-tighter">15+</div>
                  <div className="text-sm text-zinc-500 uppercase tracking-[0.2em] font-bold">Years Experience</div>
                </div>
                <div className="border-l-8 border-[#0a1c36] pl-8 py-2">
                  <div className="text-6xl font-black text-[#0a1c36] mb-2 tracking-tighter">120+</div>
                  <div className="text-sm text-zinc-500 uppercase tracking-[0.2em] font-bold">Homes Built</div>
                </div>
              </div>
            </div>
            <div className="relative h-[700px] order-1 lg:order-2">
               <img
                src="https://images.unsplash.com/photo-1503387762-592dea58ef21?q=80&w=2000&auto=format&fit=crop"
                alt="Architectural Design"
                className="w-full h-full object-cover rounded-sm shadow-[40px_40px_0px_0px_#f4f4f5]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-32 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <div>
              <h2 className="text-sm font-black text-[#5c6d84] tracking-[0.4em] uppercase mb-4 text-center md:text-left">Portfolio</h2>
              <h3 className="text-5xl md:text-7xl font-bold text-[#0a1c36] tracking-tighter">Featured Projects</h3>
            </div>
            <Link href="/projects" className="text-[#0a1c36] font-bold border-b-4 border-[#0a1c36] pb-2 hover:text-[#5c6d84] hover:border-[#5c6d84] transition-all tracking-[0.3em] uppercase text-sm">
              View All Projects
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { title: "The Modern Oasis", loc: "Houston, TX", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop" },
              { title: "Coastal Contemporary", loc: "Galveston, TX", img: "https://images.unsplash.com/photo-1512918766674-ed62b9a79ad2?q=80&w=2070&auto=format&fit=crop" },
              { title: "Urban Sophistication", loc: "Austin, TX", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" }
            ].map((proj, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative h-[500px] mb-8 overflow-hidden rounded-sm shadow-xl">
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-[#0a1c36]/0 group-hover:bg-[#0a1c36]/20 transition-all duration-500"></div>
                </div>
                <div className="px-2">
                  <h4 className="text-3xl font-bold text-[#0a1c36] mb-2 tracking-tight">{proj.title}</h4>
                  <p className="text-zinc-500 text-sm font-black uppercase tracking-[0.3em]">{proj.loc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-[#0a1c36] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-[#5c6d84]/5 -skew-x-12 transform translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-[#5c6d84]/5 skew-x-12 transform -translate-x-32"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tighter">Ready to build your dream home?</h2>
          <p className="text-2xl md:text-3xl text-zinc-300 mb-16 font-light leading-relaxed max-w-4xl mx-auto">
            Schedule a consultation with our architectural team today and take the first step toward the home you've always envisioned.
          </p>
          <Link href="/contact" className="bg-white text-[#0a1c36] px-20 py-6 text-2xl font-black hover:bg-[#5c6d84] hover:text-white transition-all rounded-sm inline-block tracking-[0.3em] uppercase shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  );
}
