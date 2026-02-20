import Image from "next/image";

const plans = [
  { id: 1, name: "The Everest", sqft: "3,200", beds: 4, baths: 3.5, img: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=1984&auto=format&fit=crop" },
  { id: 2, name: "The Sierra", sqft: "2,850", beds: 3, baths: 2.5, img: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=2070&auto=format&fit=crop" },
  { id: 3, name: "The Cascade", sqft: "4,100", beds: 5, baths: 4, img: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2070&auto=format&fit=crop" },
  { id: 4, name: "The Willow", sqft: "2,400", beds: 3, baths: 2, img: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070&auto=format&fit=crop" }
];

export default function FloorPlansPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="py-20 bg-[#0a1c36] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Floor Plan Gallery</h1>
          <p className="text-zinc-300 text-lg max-w-2xl mx-auto">Thoughtfully designed layouts for modern living. Choose a plan and make it your own.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {plans.map((plan) => (
              <div key={plan.id} className="flex flex-col border border-zinc-100 bg-white hover:border-[#5c6d84] transition-all group overflow-hidden shadow-sm">
                <div className="relative h-[300px] overflow-hidden">
                  <img
                    src={plan.img}
                    alt={plan.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-[#0a1c36]">{plan.name}</h3>
                    <div className="bg-zinc-50 px-4 py-1 text-sm font-bold text-[#5c6d84] border border-zinc-100">
                      {plan.sqft} SQ FT
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center text-zinc-600">
                      <svg className="h-5 w-5 mr-2 text-[#5c6d84]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                      {plan.beds} Bedrooms
                    </div>
                    <div className="flex items-center text-zinc-600">
                      <svg className="h-5 w-5 mr-2 text-[#5c6d84]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                      {plan.baths} Bathrooms
                    </div>
                  </div>
                  <button className="w-full py-3 bg-[#0a1c36] text-white font-bold tracking-wide hover:bg-[#5c6d84] transition-all">
                    Inquire About This Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
