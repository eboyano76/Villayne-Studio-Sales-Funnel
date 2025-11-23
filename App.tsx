import React from 'react';
import { Check, X, Lock, Image as ImageIcon, Smartphone, Monitor, Film, User, Key, Zap } from 'lucide-react';
import Countdown from './components/Countdown';
import GoldButton from './components/GoldButton';
import { LINKS, PRICING } from './constants';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-gold selection:text-black pb-24">
      
      {/* 1. Urgent Notification Bar */}
      <div className="sticky top-0 z-50 bg-neutral-900 border-b border-white/10 shadow-xl">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-8">
          <div className="flex items-center gap-2 text-sm md:text-base font-medium text-center md:text-left">
            <span className="text-yellow-500 animate-pulse">⚠️</span>
            <span>
              Launch Offer: Price doubles to <span className="text-gold font-bold">{PRICING.FUTURE}</span> on December 1st.
            </span>
          </div>
          <Countdown />
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-4 text-center overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-600/10 rounded-full blur-[120px] -z-10" />

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-xs font-bold tracking-widest uppercase mb-4">
            <Zap className="w-3 h-3" />
            Powered by Google's Gemini 2.5 Flash Image (Nano Banana)
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight gold-text-gradient">
            Stop Paying Monthly Subscriptions for Generating Images.
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Master hyper-realistic portraits with the <span className="text-white font-semibold">Villayne-Studio Method</span>. Own your creative engine.
          </p>

          <div className="pt-4">
            <GoldButton text={`Get Instant Access - ${PRICING.CURRENT}`} className="transform hover:scale-105" />
            <p className="mt-4 text-xs text-gray-500 uppercase tracking-widest">Secure Checkout via Gumroad</p>
          </div>
        </div>
      </section>

      {/* 3. The Free Upgrade Roadmap */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-yellow-300 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-neutral-900 border border-yellow-500/30 rounded-lg p-8 md:p-12 text-center shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white">Buy Now, Upgrade for Free.</h2>
            <div className="space-y-6 text-lg text-gray-300">
              <p>
                We are upgrading to the <span className="text-gold font-bold">Nano Banana PRO</span> engine on December 1st.
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-8">
                <div className="flex-1 p-4 bg-black/50 border border-green-500/30 rounded-md w-full">
                  <div className="text-green-400 font-bold mb-1">Buy Today ({PRICING.CURRENT})</div>
                  <div className="text-sm text-gray-400">You get the Pro Upgrade for <span className="text-white font-bold underline">FREE</span> automatically.</div>
                </div>
                <div className="hidden md:block text-gray-600">→</div>
                <div className="flex-1 p-4 bg-black/50 border border-red-500/30 rounded-md w-full opacity-60">
                  <div className="text-red-400 font-bold mb-1">Buy After Dec 1st</div>
                  <div className="text-sm text-gray-400">Price increases to <span className="text-white font-bold">{PRICING.FUTURE}</span>. No exceptions.</div>
                </div>
              </div>
              <p className="text-sm text-gold/80 italic pt-4">
                <Lock className="w-4 h-4 inline mr-1" /> Lock in your Founder's Rate now.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Comparison Section */}
      <section className="py-20 px-4 bg-neutral-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Why Rent When You Can Own?</h2>
            <p className="text-gray-400">Stop burning money on credits and monthly fees.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Generic Apps */}
            <div className="bg-neutral-900 border border-white/5 p-8 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <X className="w-32 h-32 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-400 mb-8 border-b border-white/5 pb-4">Generic Apps / Bots</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-3">
                  <X className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-gray-400">Expensive Monthly Fees ({PRICING.COMPETITOR})</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-200 font-medium block">Inconsistent Faces</span>
                    <span className="text-sm text-gray-500">Characters change every time you generate.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-200 font-medium block">Stuck in 1:1 Square Mode</span>
                    <span className="text-sm text-gray-500">No cinematic wide shots or portrait phone wallpapers.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-gray-400">Limited Credits (Pay more to create more)</span>
                </li>
              </ul>
            </div>

            {/* Villayne Studio */}
            <div className="bg-gradient-to-b from-neutral-900 to-black border border-gold/30 p-8 rounded-xl relative overflow-hidden shadow-[0_0_30px_rgba(212,175,55,0.1)]">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Check className="w-32 h-32 text-gold" />
              </div>
              <h3 className="text-2xl font-bold text-gold mb-8 border-b border-gold/20 pb-4">Villayne-Studio</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-3">
                  <div className="bg-gold/20 p-1 rounded-full"><Check className="w-4 h-4 text-gold shrink-0" /></div>
                  <span className="text-white text-lg font-medium">One-Time Payment of {PRICING.CURRENT}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-gold/20 p-1 rounded-full"><Check className="w-4 h-4 text-gold shrink-0" /></div>
                  <div>
                    <span className="text-white font-bold block">Facial Consistency</span>
                    <span className="text-sm text-gray-300">True Likeness Control for recurring characters.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-gold/20 p-1 rounded-full"><Check className="w-4 h-4 text-gold shrink-0" /></div>
                  <div>
                    <span className="text-white font-bold block">Full Aspect Ratio Control</span>
                    <span className="text-sm text-gray-300">16:9, 9:16, 4:3, 3:4, and 1:1.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-gold/20 p-1 rounded-full"><Check className="w-4 h-4 text-gold shrink-0" /></div>
                  <span className="text-white font-medium">500+ Free Daily Generations (via Free Tier)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Professional Control (Aspect Ratios) */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12">Total Creative Control</h2>
        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {/* 1:1 Square */}
          <div className="group flex flex-col items-center gap-3">
            <div className="w-24 h-24 border-2 border-white/20 group-hover:border-gold group-hover:bg-gold/5 transition-all duration-300 rounded flex items-center justify-center">
              <ImageIcon className="text-gray-600 group-hover:text-gold transition-colors" />
            </div>
            <span className="text-sm font-bold tracking-wider text-gray-400 group-hover:text-gold">1:1 SQUARE</span>
          </div>

          {/* 9:16 Stories */}
          <div className="group flex flex-col items-center gap-3">
            <div className="w-16 h-28 border-2 border-white/20 group-hover:border-gold group-hover:bg-gold/5 transition-all duration-300 rounded flex items-center justify-center">
              <Smartphone className="text-gray-600 group-hover:text-gold transition-colors" />
            </div>
            <span className="text-sm font-bold tracking-wider text-gray-400 group-hover:text-gold">9:16 STORIES</span>
          </div>

          {/* 16:9 Cinematic */}
          <div className="group flex flex-col items-center gap-3">
            <div className="w-32 h-20 border-2 border-white/20 group-hover:border-gold group-hover:bg-gold/5 transition-all duration-300 rounded flex items-center justify-center pt-2">
               <Film className="text-gray-600 group-hover:text-gold transition-colors" />
            </div>
            <span className="text-sm font-bold tracking-wider text-gray-400 group-hover:text-gold">16:9 CINEMATIC</span>
          </div>
          
           {/* 4:3 Classic */}
           <div className="group flex flex-col items-center gap-3">
            <div className="w-28 h-20 border-2 border-white/20 group-hover:border-gold group-hover:bg-gold/5 transition-all duration-300 rounded flex items-center justify-center">
              <Monitor className="text-gray-600 group-hover:text-gold transition-colors" />
            </div>
            <span className="text-sm font-bold tracking-wider text-gray-400 group-hover:text-gold">4:3 CLASSIC</span>
          </div>
          
          {/* 3:4 Portrait */}
          <div className="group flex flex-col items-center gap-3">
            <div className="w-20 h-28 border-2 border-white/20 group-hover:border-gold group-hover:bg-gold/5 transition-all duration-300 rounded flex items-center justify-center">
              <User className="text-gray-600 group-hover:text-gold transition-colors" />
            </div>
            <span className="text-sm font-bold tracking-wider text-gray-400 group-hover:text-gold">3:4 PORTRAIT</span>
          </div>

        </div>
      </section>

      {/* 6. Transparency Section (BYOK) */}
      <section className="py-20 px-4 bg-neutral-900 border-t border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">How It Works <span className="text-gray-500 font-sans text-2xl">(Bring Your Own Key)</span></h2>
            <p className="text-gray-400 max-w-lg mx-auto">We don't markup API costs. You connect directly to Google for maximum privacy and speed.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-white/10 rounded-lg hover:border-gold/50 transition-colors">
              <div className="text-4xl font-serif font-bold text-gray-700 mb-4">01</div>
              <h3 className="text-xl font-bold mb-2">Download App</h3>
              <p className="text-gray-400 text-sm">Secure access to the Villayne-Studio web application immediately after purchase.</p>
            </div>

            <div className="p-6 border border-white/10 rounded-lg hover:border-gold/50 transition-colors bg-white/5">
              <div className="text-4xl font-serif font-bold text-gold mb-4">02</div>
              <h3 className="text-xl font-bold mb-2 text-gold">Get Free Key</h3>
              <p className="text-gray-400 text-sm">Follow our included 2-minute guide to get your own FREE Google Gemini API Key.</p>
              <div className="mt-4 flex items-center text-xs text-gold uppercase tracking-widest font-bold">
                <Key className="w-3 h-3 mr-1" /> Quick & Easy
              </div>
            </div>

            <div className="p-6 border border-white/10 rounded-lg hover:border-gold/50 transition-colors">
              <div className="text-4xl font-serif font-bold text-gray-700 mb-4">03</div>
              <h3 className="text-xl font-bold mb-2">Generate Freely</h3>
              <p className="text-gray-400 text-sm">Create 500+ images per day privately. No one sees your prompts but you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Copyright Footer */}
      <footer className="py-8 text-center text-gray-600 text-sm">
        Copyright 2025
      </footer>

      {/* 8. Sticky Footer */}
      <div className="fixed bottom-0 left-0 w-full z-[100] bg-black/90 backdrop-blur-md border-t border-gold/30 p-4 pb-6 md:pb-4 shadow-[0_-10px_40px_rgba(0,0,0,0.8)]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="hidden md:block">
                <div className="text-white font-bold">Villayne-Studio</div>
                <div className="text-xs text-gray-400">Launch offer ends Dec 1st.</div>
            </div>
            <GoldButton text={`SECURE THE ${PRICING.CURRENT} DEAL`} fullWidth className="md:w-auto shadow-none" />
        </div>
      </div>
      
    </div>
  );
}

export default App;