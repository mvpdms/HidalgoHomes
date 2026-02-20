import Image from "next/image";

const projects = [
  { id: 1, title: "The Modern Oasis", loc: "Houston, TX", category: "Modern", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" },
  { id: 2, title: "Coastal Contemporary", loc: "Galveston, TX", category: "Coastal", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop" },
  { id: 3, title: "Urban Sophistication", loc: "Austin, TX", category: "Contemporary", img: "https://images.unsplash.com/photo-1600585154526-990dcea464dd?q=80&w=2070&auto=format&fit=crop" },
  { id: 4, title: "Lakeside Retreat", loc: "Conroe, TX", category: "Transitional", img: "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?q=80&w=2070&auto=format&fit=crop" },
  { id: 5, title: "Heritage Estate", loc: "Sugar Land, TX", category: "Traditional", img: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=2070&auto=format&fit=crop" },
  { id: 6, title: "Sunset Ridge", loc: "San Antonio, TX", category: "Modern", img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2070&auto=format&fit=crop" }
];

export default function ProjectsPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="py-20 bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0a1c36] mb-4 tracking-tight">Our Projects</h1>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto">Explore our portfolio of custom-built homes, where every detail is a testament to our commitment to excellence.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((proj) => (
              <div key={proj.id} className="group relative overflow-hidden bg-white shadow-sm border border-zinc-50 hover:shadow-xl transition-all duration-300">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#0a1c36] shadow-sm">
                    {proj.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0a1c36] group-hover:text-[#5c6d84] transition-colors">{proj.title}</h3>
                  <p className="text-zinc-500 text-sm mt-1">{proj.loc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
