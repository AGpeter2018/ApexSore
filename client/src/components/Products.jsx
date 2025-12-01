import { ArrowBigRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const products = [
    {
        productImage: 'https://m.media-amazon.com/images/I/71QOHWQT0uL._AC_SL500_.jpg',
        productTitle: 'Talking Drum (Gangan)',
        productText: 'The iconic hourglass-shaped drum that mimics Yoruba tonal language'
    },
    {
        productImage: 'https://m.media-amazon.com/images/I/511eR5397CL._AC_.jpg',
        productTitle: 'Dundun (Bass Drum)',
        productText: 'Large ceremonial drum with deep, resonant tones for traditional ceremonies'
    },
    {
        productImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNCOaQerCbm5F9rjlf2rjgefbkomZm4adKFA&s',
        productTitle: 'Bata Drum Set',
        productText: 'Sacred three-drum ensemble used in Yoruba religious ceremonies'
    },
    {
        productImage: 'data:image/jpeg;base64,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',
        productTitle: 'Sakara Drum',
        productText: 'Clay pot drum covered with goatskin, perfect for acoustic music'
    }
]

const categories = [
    {
        categoryIcon: '🪘',
        categoryTitle: 'Talking Drums'
    },
    {
        categoryIcon: '🥁',
        categoryTitle: 'Bàtá Drums',
    },
    {
        categoryIcon: '🎵',
        categoryTitle: 'Dundun'
    },
    {
        categoryIcon: '🎵',
        categoryTitle: 'Accessories'
    },
    {
        categoryIcon: '📚',
        categoryTitle: 'Learning Materials'
    }
]

const Products = () => {
  return (
    <div>
    <section id="product" className="py-20 px-8 bg-slate-500/30">
        <h2 class="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-12">
            Featured Drums
        </h2>
        <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

             {
                 products.map((product, id) => {
                     return   <div key={id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all cursor-pointer border border-slate-200">
                <div className="h-64 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-8xl relative overflow-hidden">
                    <span class="absolute text-9xl opacity-20">🥁</span>
                    <span class="relative z-10">
                        <img src={product.productImage} alt="" />
                    </span>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold text-slate-900 mb-2">{product.productTitle}</h3>
                    <p class="text-slate-600 text-sm mb-4">{product.productText}</p>
                   
                </div>
                    </div>
                    })
                }
        </div>
    </section>
    <section class="py-30 px-8 bg-white">
        <h2 class="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-12">
            Discover Your Perfect Product Collection
        </h2>
        <div class="max-w-7xl mx-auto md:w-150">
      
            <div class="bg-slate-50 p-8 rounded-xl text-center shadow-lg shadow  transition-all  border border-slate-200 ">
                <p className=' text-slate-600 mb-2 max-w-2xl leading-relaxed '>
               Dive into our exclusive collections showcasing premium Yoruba drums, traditional percussion sets, and rare cultural.
                </p>
                <p className=' text-slate-600  max-w-2xl leading-relaxed '>Curated Collections of Authentic African Percussion
Explore our handpicked collections featuring the finest Yoruba drums and traditional Nigerian percussion instruments. Each collection is thoughtfully curated to celebrate the rich heritage of West African music, from ceremonial ensembles to contemporary performance pieces. Whether you're a professional musician, cultural enthusiast, or collector, discover drums that resonate with history and craftsmanship.
</p>
            </div>
            <div className=' flex items-center justify-center  space-x-1 animate-fadeInUp-delay-2 mt-15 md:mt-5  bg-slate-900 text-white  py-4 rounded-lg text-lg font-bold hover:bg-slate-800 hover:shadow-xl  transition-all shadow-xl mx-45 md:mx-55 group'>
                            
                    <Link to="/collections" href="#products" className="">
                        Shop Now
                    </Link>
                        <ArrowBigRight className='fill-slate-950 h-6 w-4 pt-1 transform group-hover:translate-x-1 transition-transform duration-300 cursor-pointer'/>
                    
            </div>
        </div>
    </section>
    </div>
  )
}

export default Products