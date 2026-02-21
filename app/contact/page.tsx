export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0a1c36] mb-8 tracking-tight">Let&apos;s Build Your Dream Home</h1>
              <p className="text-xl text-zinc-600 mb-12 leading-relaxed font-light">
                Ready to take the first step? Fill out the form below, and our specialized architectural consultants will reach out to discuss your vision.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="h-12 w-12 bg-zinc-50 border border-zinc-100 flex items-center justify-center mr-6 rounded-sm">
                    <svg className="h-6 w-6 text-[#0a1c36]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0a1c36]">Visit Our Studio</h3>
                    <p className="text-zinc-500">123 Builder Lane, Houston, TX 77001</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-12 w-12 bg-zinc-50 border border-zinc-100 flex items-center justify-center mr-6 rounded-sm">
                    <svg className="h-6 w-6 text-[#0a1c36]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0a1c36]">Email Us</h3>
                    <p className="text-zinc-500">info@hidalgohomes.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-12 w-12 bg-zinc-50 border border-zinc-100 flex items-center justify-center mr-6 rounded-sm">
                    <svg className="h-6 w-6 text-[#0a1c36]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0a1c36]">Call Us</h3>
                    <p className="text-zinc-500">(555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-zinc-50 p-10 border border-zinc-100 rounded-sm">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-[#0a1c36] mb-2 uppercase tracking-wide">First Name</label>
                    <input type="text" className="w-full bg-white border border-zinc-200 px-4 py-3 focus:border-[#5c6d84] outline-none transition-all" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#0a1c36] mb-2 uppercase tracking-wide">Last Name</label>
                    <input type="text" className="w-full bg-white border border-zinc-200 px-4 py-3 focus:border-[#5c6d84] outline-none transition-all" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#0a1c36] mb-2 uppercase tracking-wide">Email Address</label>
                  <input type="email" className="w-full bg-white border border-zinc-200 px-4 py-3 focus:border-[#5c6d84] outline-none transition-all" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#0a1c36] mb-2 uppercase tracking-wide">Tell Us About Your Vision</label>
                  <textarea rows={6} className="w-full bg-white border border-zinc-200 px-4 py-3 focus:border-[#5c6d84] outline-none transition-all" placeholder="Describe your dream home..."></textarea>
                </div>
                <button type="submit" className="w-full bg-[#0a1c36] text-white py-4 font-bold uppercase tracking-widest hover:bg-[#5c6d84] transition-all">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
