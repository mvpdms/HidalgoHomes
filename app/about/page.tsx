import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0a1c36] mb-6 tracking-tight">About Hidalgo Homes</h1>
            <div className="h-1 w-20 bg-[#5c6d84]"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="relative h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1593060242202-b8891f02fbc5?q=80&w=2070&auto=format&fit=crop"
                alt="Construction Team"
                className="w-full h-full object-cover rounded-sm shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#0a1c36] mb-8 leading-tight italic font-serif">"Excellence isn't an act, it's a habit."</h2>
              <div className="space-y-6 text-zinc-600 leading-relaxed text-lg font-light">
                <p>
                  Founded with a passion for quality and an eye for architectural brilliance, Hidalgo Homes has become one of the region's most trusted names in custom home construction.
                </p>
                <p>
                  Our journey started over 15 years ago with a simple mission: to build homes that are as unique as the people living in them. We understand that building a custom home is one of the most significant investments you'll ever make, which is why we approach every project with transparency, integrity, and relentless attention to detail.
                </p>
                <p>
                  From the initial architectural rendering to the final walkthrough, the Hidalgo team is by your side. We don't just build houses; we build the setting for your life's best memories. We are, quite simply, your <strong>Dream Builders</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#0a1c36] text-white p-16 rounded-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div>
                <h3 className="text-4xl font-bold mb-2">15+</h3>
                <p className="text-zinc-300 uppercase tracking-widest text-sm">Years of Craft</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">100%</h3>
                <p className="text-zinc-300 uppercase tracking-widest text-sm">Client Satisfaction</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">60+</h3>
                <p className="text-zinc-300 uppercase tracking-widest text-sm">Design Awards</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
