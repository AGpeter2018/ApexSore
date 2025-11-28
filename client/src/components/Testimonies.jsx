import React from 'react'

const Testimonies = () => {
  return (
    <div>
        <section class="py-20 px-8 bg-slate-900 text-white">
        <h2 class="text-4xl md:text-5xl font-bold text-center text-slate-100 mb-12">
            What Our Customers Say
        </h2>
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-slate-800/50 backdrop-blur-lg p-8 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors">
                <p class="italic mb-4 leading-relaxed text-slate-200">     
                    "The talking drum I purchased is exceptional! The craftsmanship is outstanding and the sound is authentic. Highly recommended!"
                </p>
                <p class="font-bold text-slate-100">- Adewale Johnson, Lagos</p>
            </div>

            <div class="bg-slate-800/50 backdrop-blur-lg p-8 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors">
                <p class="italic mb-4 leading-relaxed text-slate-200">
                    "As a cultural dance troupe, we needed quality drums for our performances. ApexStore Drums delivered beyond our expectations!"
                </p>
                <p class="font-bold text-slate-100">- Folake Adeyemi, Ibadan</p>
            </div>

            <div class="bg-slate-800/50 backdrop-blur-lg p-8 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors">
                <p class="italic mb-4 leading-relaxed text-slate-200">
                    "Fast delivery, excellent customer service, and most importantly, authentic Yoruba drums. I'll definitely order again!"
                </p>
                <p class="font-bold text-slate-100">- Chioma Okafor, Abuja</p>
            </div>

        </div>
    </section>
    </div>
  )
}

export default Testimonies