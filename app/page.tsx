import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
            alt="Modern Custom Home"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 text-center flex flex-col items-center">
          <div className="mb-12 animate-fade-in w-full flex justify-center">
            <div className="relative w-[300px] sm:w-[500px] md:w-[700px] h-[150px] sm:h-[200px] md:h-[250px]">
              <Image
                src="/CompanyLogo.png"
                alt="Hidalgo Homes Logo Large"
                fill
                className="brightness-0 invert object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
                priority
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none uppercase italic">
            Building Your Vision,<br />Crafting Your <span className="text-[#5c6d84]">Future</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Premier custom home builders dedicated to architectural excellence and quality craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center w-full max-w-lg">
            <Link href="/projects" className="flex-1 bg-white text-[#0a1c36] px-8 py-5 text-xl font-black hover:bg-[#5c6d84] hover:text-white transition-all rounded-sm tracking-[0.2em] uppercase text-center shadow-2xl">
              Our Work
            </Link>
            <Link href="/contact" className="flex-1 bg-transparent text-white px-8 py-5 text-xl font-black hover:bg-white hover:text-[#0a1c36] transition-all rounded-sm border-2 border-white tracking-[0.2em] uppercase text-center shadow-2xl">
              Consult
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1 relative z-10">
              <h2 className="text-sm font-black text-[#5c6d84] tracking-[0.4em] uppercase mb-8">Established Excellence</h2>
              <h3 className="text-5xl md:text-7xl font-bold text-[#0a1c36] mb-10 leading-[0.9] tracking-tighter">
                Architecture <br /> with Integrity.
              </h3>
              <p className="text-zinc-600 text-2xl mb-12 leading-relaxed font-light">
                At Hidalgo Homes, we blend modern innovation with timeless quality to create spaces that are as functional as they are beautiful.
              </p>
              <div className="flex flex-wrap gap-16">
                <div className="border-l-4 border-[#0a1c36] pl-8">
                  <div className="text-6xl font-black text-[#0a1c36] tracking-tighter">15+</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Years of Trust</div>
                </div>
                <div className="border-l-4 border-[#0a1c36] pl-8">
                  <div className="text-6xl font-black text-[#0a1c36] tracking-tighter">120+</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Homes Built</div>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] order-1 lg:order-2">
              <div className="absolute -inset-4 bg-zinc-100 -z-10 translate-x-8 translate-y-8"></div>
              <img
                src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2000&auto=format&fit=crop"
                alt="Signature Design"
                className="w-full h-full object-cover rounded-sm shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-32 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-sm font-black text-[#5c6d84] tracking-[0.5em] uppercase mb-6">Our Portfolio</h2>
            <h3 className="text-5xl md:text-8xl font-bold text-[#0a1c36] tracking-tighter uppercase italic">The Collection</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "The Modern Oasis", loc: "Houston, TX", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop" },
              { title: "Coastal Contemporary", loc: "Galveston, TX", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" },
              { title: "Urban Sophistication", loc: "Austin, TX", img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2074&auto=format&fit=crop" }
            ].map((proj, i) => (
              <div key={i} className="group cursor-pointer bg-white p-4 shadow-sm hover:shadow-2xl transition-all duration-500">
                <div className="relative h-96 mb-8 overflow-hidden">
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="px-2 pb-2">
                  <h4 className="text-3xl font-bold text-[#0a1c36] mb-1 tracking-tight">{proj.title}</h4>
                  <p className="text-zinc-500 text-xs font-black uppercase tracking-[0.3em]">{proj.loc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
