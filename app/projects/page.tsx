import Image from "next/image";

const projects = [
  { id: 1, title: "The Modern Oasis", loc: "Houston, TX", category: "Modern", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop" },
  { id: 2, title: "Coastal Contemporary", loc: "Galveston, TX", category: "Coastal", img: "https://images.unsplash.com/photo-1512918766674-ed62b9a79ad2?q=80&w=2070&auto=format&fit=crop" },
  { id: 3, title: "Urban Sophistication", loc: "Austin, TX", category: "Contemporary", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" },
  { id: 4, title: "Lakeside Retreat", loc: "Conroe, TX", category: "Transitional", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" },
  { id: 5, title: "Heritage Estate", loc: "Sugar Land, TX", category: "Traditional", img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2000&auto=format&fit=crop" },
  { id: 6, title: "Sunset Ridge", loc: "San Antonio, TX", category: "Modern", img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2074&auto=format&fit=crop" }
];

export default function ProjectsPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-[#0a1c36] mb-6 tracking-tighter uppercase">Our Portfolio</h1>
          <p className="text-zinc-500 text-xl max-w-2xl mx-auto font-light leading-relaxed">Explore our collection of award-winning custom homes, meticulously crafted to the highest standards of architectural excellence.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((proj) => (
              <div key={proj.id} className="group relative overflow-hidden bg-white shadow-sm border border-zinc-100 hover:shadow-2xl transition-all duration-500 rounded-sm">
                <div className="relative h-[450px] overflow-hidden">
                  <Image
                    src={proj.img}
                    alt={proj.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur px-4 py-1 text-xs font-black uppercase tracking-[0.3em] text-[#0a1c36] shadow-lg">
                    {proj.category}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#0a1c36] mb-1 tracking-tight">{proj.title}</h3>
                  <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em]">{proj.loc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
