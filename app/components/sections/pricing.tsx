import { GlowingEffect } from '../../components/glowing-effect';

export default function PricingSection() {
  const openCal = () => {
    window.open('https://cal.com/4mulate/30min', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="bg-[#0A0A0A] text-white py-20 px-6 md:px-16 font-lt-cushion">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Our Pricing</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Flexible plans designed for every stage — from launch to scale to enterprise.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto max-md:gap-20">
        {/* 1️⃣ Foundation */}
        <div className="relative rounded-2xl h-[51 0px] hover:scale-105 transition-transform duration-300 ease-out max-w-[330px] mx-auto">
  <div className="absolute inset-0 rounded-2xl">
    <GlowingEffect
      blur={0}
      borderWidth={3}
      spread={60}
      glow={true}
      disabled={false}
      proximity={64}
      inactiveZone={0.01}
    />
  </div>
  <div className="relative bg-[#141414] border border-gray-800 rounded-2xl p-8 flex flex-col h-full">
  <div className="text-left mb-6">
    <h3 className="text-sm font-semibold mb-0">Foundation</h3>
    <h4 className="text-3xl font-bold mb-4">$1,500</h4>
  </div>
  <div className="flex flex-col sm:flex-row gap-3 mb-6">
    <button
      onClick={openCal}
      className='cursor-pointer w-full px-6 py-2 rounded-xl bg-gradient-to-b from-[#2b2b2b] to-[#1a1a1a] 
      font-semibold transition-all duration-300 hover:from-[#3a3a3a] hover:to-[#2a2a2a]
      shadow-[inset_0_0_12px_0_rgba(255,255,255,0.05),inset_0_0_6px_0_rgba(200,200,200,0.2)]
      hover:shadow-[inset_0_0_6px_0_rgba(255,255,255,0.07),inset_0_0_3px_0_rgba(200,200,200,0.3)]'
    >
      Book a call
    </button>
    <button
      onClick={() => window.open('https://t.me/fourmulate', '_blank', 'noopener,noreferrer')}
      className='cursor-pointer w-full px-6 py-2 rounded-xl bg-gradient-to-b from-[#f5f5f5] to-[#d9d9d9] 
      text-black font-semibold transition-all duration-300 hover:from-[#e0e0e0] hover:to-[#bfbfbf]
      shadow-[inset_0_0_12px_0_rgba(0,0,0,0.4),inset_0_0_6px_0_rgba(50,50,50,0.1)]
      hover:shadow-[inset_0_0_6px_0_rgba(0,0,0,0.15),inset_0_0_3px_0_rgba(50,50,50,0.2)]'
    >
      Telegram
    </button>
  </div>
  <div className="flex-1">
    <ul className="space-y-2 text-gray-300">
      <li>✓ Multi-page site with 2D animations</li>
      <li>✓ Mobile responsive</li>
      <li>✓ Custom UI/UX design</li>
      <li>✓ Basic SEO included</li>
      <li>✓ Fully optimized</li>
      <li>✓ Free hosting</li>
      <li>✓ 1-week delivery + support</li>
      <li>✓ Unlimited revisions</li>
    </ul>
  </div>
  <div className="mt-4 pb-2">
    <p className="text-gray-400 text-sm">
      Perfect for startups and creators who need a beautiful landing experience.
    </p>
  </div>
</div>

</div>

        {/* 2️⃣ Framework (Highlighted) */}
        <div className="relative rounded-3xl h-[555px] scale-105 shadow-lg shadow-indigo-500/30 hover:scale-110 transition-transform duration-300 ease-out max-w-[330px] mx-auto">
          <div className="absolute inset-0 rounded-3xl">
            <GlowingEffect
              blur={0}
              borderWidth={3}
              spread={60}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
          </div>
          <div className="relative bg-[#141414] rounded-3xl flex flex-col h-full">
  <div
    className="text-left bg-cover bg-center bg-no-repeat rounded-t-3xl p-8 mb-0 h-full min-h-[230px]"
    style={{ backgroundImage: 'url(/bgCard.png)' }}
  >
    <div className="inline-block bg-white/10 text-white text-sm px-3 py-1 rounded-full mb-4">
      Most Popular
    </div>
    <h3 className="text-sm font-semibold mb-0">Framework</h3>
    <h4 className="text-3xl font-bold mb-4">$3,500 – $5,000</h4>

    <div className="flex flex-col sm:flex-row gap-3 mb-0">
      <button
        onClick={openCal}
        className="cursor-pointer w-full px-6 py-2 rounded-xl bg-gradient-to-b from-[#2b2b2b] to-[#1a1a1a] 
        font-semibold transition-all duration-300 hover:from-[#3a3a3a] hover:to-[#2a2a2a]
        shadow-[inset_0_0_12px_0_rgba(255,255,255,0.05),inset_0_0_6px_0_rgba(200,200,200,0.2)]
        hover:shadow-[inset_0_0_6px_0_rgba(255,255,255,0.07),inset_0_0_3px_0_rgba(200,200,200,0.3)]"
      >
        Book a call
      </button>

      <button
        onClick={() => window.open('https://t.me/fourmulate', '_blank', 'noopener,noreferrer')}
        className="cursor-pointer w-full px-6 py-2 rounded-xl bg-gradient-to-b from-[#f5f5f5] to-[#d9d9d9] 
        text-black font-semibold transition-all duration-300 hover:from-[#e0e0e0] hover:to-[#bfbfbf]
        shadow-[inset_0_0_12px_0_rgba(0,0,0,0.4),inset_0_0_6px_0_rgba(50,50,50,0.1)]
        hover:shadow-[inset_0_0_6px_0_rgba(0,0,0,0.15),inset_0_0_3px_0_rgba(50,50,50,0.2)]"
      >
        Telegram
      </button>
    </div>
  </div>
  <div className="p-8 flex-1 pt-0 mt-2 -translate-y-6">
  <ul className="space-y-2 text-gray-100">
  <li>✓ Includes everything from the foundation package</li>
  <li>✓ Full stack web applications</li>
  <li>✓ Lighting fast & scroll worthy</li>
  <li>✓ Advanced SEO optimization</li>
  <li>✓ Analytics & conversion tracking</li>
  <li>✓ Free 1 month maintenance</li>
  <li>✓ 1 month support post delivery</li>
  <li>✓ 3–4 week delivery</li>
</ul>


    <div className="mt-4">
      <p className="text-gray-100 text-sm">
        Ideal for brands needing fast, functional, scalable web apps with CMS options.
      </p>
    </div>
  </div>
</div>

        </div>

        {/* 3️⃣ Flagship */}
        <div className="relative max-md:h-[580px] rounded-2xl h-[530px] hover:scale-105 transition-transform duration-300 ease-out max-w-[330px] mx-auto">
          <div className="absolute inset-0 rounded-2xl">
            <GlowingEffect
              blur={0}
              borderWidth={3}
              spread={60}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
          </div>
          <div className="relative bg-[#141414] rounded-2xl p-8 flex flex-col h-full">
            <div className="text-left mb-6">
              <h3 className="text-sm font-semibold mb-0">Flagship</h3>
              <h4 className="text-3xl font-bold mb-4">$7,000 – $10,000+</h4>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <button
  onClick={openCal}
  className='cursor-pointer w-full px-6 py-2 rounded-xl bg-gradient-to-b from-[#2b2b2b] to-[#1a1a1a] 
  font-semibold transition-all duration-300 hover:from-[#3a3a3a] hover:to-[#2a2a2a]
  shadow-[inset_0_0_12px_0_rgba(255,255,255,0.05),inset_0_0_6px_0_rgba(200,200,200,0.2)]
  hover:shadow-[inset_0_0_6px_0_rgba(255,255,255,0.07),inset_0_0_3px_0_rgba(200,200,200,0.3)]'
>
  Book a call
</button>


<button
  onClick={() => window.open('https://t.me/fourmulate', '_blank', 'noopener,noreferrer')}
  className='cursor-pointer w-full px-6 py-2 rounded-xl bg-gradient-to-b from-[#f5f5f5] to-[#d9d9d9] 
  text-black font-semibold transition-all duration-300 hover:from-[#e0e0e0] hover:to-[#bfbfbf]
  shadow-[inset_0_0_12px_0_rgba(0,0,0,0.4),inset_0_0_6px_0_rgba(50,50,50,0.1)]
  hover:shadow-[inset_0_0_6px_0_rgba(0,0,0,0.15),inset_0_0_3px_0_rgba(50,50,50,0.2)]'
>
  Telegram
</button>

            </div>

            <div className="flex-1">
            <ul className="space-y-2 text-gray-300">
  <li>✓ Custom tech stack applications</li>
  <li>✓ Tailored features & integrations</li>
  <li>✓ Scalable architecture</li>
  <li>✓ API & third-party integrations</li>
  <li>✓ Advanced security & performance</li>
  <li>✓ Dedicated support & maintenance</li>
  <li>✓ Flexible delivery timeline</li>
  <li>✓ Ideal for complex projects</li>
</ul>

            </div>

            <div className="mt-4">
              <p className="text-gray-400 text-sm">
              For enterprises seeking tailor-made experiences to grow and scale their unique requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
