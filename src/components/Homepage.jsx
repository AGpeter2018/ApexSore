import React from 'react'

const Homepage = () => {
  return (
    <section id="home" class="relative pt-40 pb-24 px-8 text-center overflow-hidden min-h-screen flex items-center">
     
        <div class="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1920&q=80" 
                 alt="African Drums Background" 
                 class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/85 to-slate-800/80"></div>
        </div>
        
        <div class="max-w-7xl mx-auto relative z-10">
            <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl animate-fadeInUp">
                Authentic Yoruba Drums
            </h1>
            <p class="text-xl md:text-2xl text-slate-200 mb-10 max-w-3xl mx-auto leading-relaxed animate-fadeInUp-delay-1">
                Experience the Rich Cultural Heritage of Nigerian Percussion - Handcrafted by Master Artisans
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp-delay-2">
                <a href="#products" class="bg-slate-50 text-slate-950 px-10 py-4 rounded-lg text-lg font-bold hover:bg-slate-200 hover:shadow-2xl hover:-translate-y-1 transition-all shadow-xl inline-block">
                    Shop Now
                </a>
                <a href="#about" class="bg-slate-800/50 backdrop-blur-sm text-white border-2 border-slate-400 px-10 py-4 rounded-lg text-lg font-bold hover:bg-slate-700 hover:border-slate-300 transition-all inline-block">
                    Learn More
                </a>
            </div>
        </div>
    </section>
  )
}

export default Homepage