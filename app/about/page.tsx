import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-24">
            <h1 className="text-5xl md:text-7xl font-bold text-[#0a1c36] mb-8 tracking-tighter uppercase">Our Legacy</h1>
            <div className="h-2 w-32 bg-[#5c6d84]"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-40">
            <div className="relative h-[800px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]">
              <Image
                src="https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=2067&auto=format&fit=crop"
                alt="Our Vision"
                fill
                className="object-cover rounded-sm"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0a1c36] mb-10 leading-tight italic font-serif">&quot;Building is not just our job, it&apos;s our heritage.&quot;</h2>
              <div className="space-y-8 text-zinc-600 leading-relaxed text-xl font-light">
                <p>
                  Founded with a passion for quality and an eye for architectural brilliance, Hidalgo Homes has become one of the region&apos;s most trusted names in custom home construction.
                </p>
                <p>
                  Our journey started over 15 years ago with a simple mission: to build homes that are as unique as the people living in them. We understand that building a custom home is one of the most significant investments you&apos;ll ever make, which is why we approach every project with transparency, integrity, and relentless attention to detail.
                </p>
                <p>
                  From the initial architectural rendering to the final walkthrough, the Hidalgo team is by your side. We don&apos;t just build houses; we build the setting for your life&apos;s best memories. We are, quite simply, your <strong>Dream Builders</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#0a1c36] text-white p-24 rounded-sm shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
                <Image src="https://images.unsplash.com/photo-1503388762-592dea58ef21?q=80&w=2000&auto=format&fit=crop" alt="Background Texture" fill className="object-cover" sizes="100vw" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-20 text-center relative z-10">
              <div>
                <h3 className="text-7xl font-black mb-4 tracking-tighter">15+</h3>
                <p className="text-zinc-400 uppercase tracking-[0.4em] text-xs font-bold">Years of Craft</p>
              </div>
              <div>
                <h3 className="text-7xl font-black mb-4 tracking-tighter">100%</h3>
                <p className="text-zinc-400 uppercase tracking-[0.4em] text-xs font-bold">Client Satisfaction</p>
              </div>
              <div>
                <h3 className="text-7xl font-black mb-4 tracking-tighter">60+</h3>
                <p className="text-zinc-400 uppercase tracking-[0.4em] text-xs font-bold">Design Awards</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
