import { ChevronDown, ChevronUp, Menu, Search, User, X } from 'lucide-react'
import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Navbar = ({scrolled}) => {
    const [openMenu, setOpenMenu] = useState(false)
    const [openArrow, setOpenArrow] = useState(false)
    const [markTab, setMarkTab] = useState('home')
    const [openCategories, setOpenCategories] = useState(false) 
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-lg border-b border-slate-900 shadow-2xl' : 'bg-slate-950 backdrop-blur-sm'}`}>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between items-center h-14 sm:h-16 md:h-20'>
                <div className='flex items-center'>
                    <div className='w-12 sm:w-16 sm:h-16 h-12 '>
                        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style={{stopColor:'#3b82f6',stopOpacity:'1' }}/>
                                <stop offset="100%" style={{stopColor:'#06b6d4',stopOpacity: '1' }}/>
                                </linearGradient>
                                <filter id="shadow"> <feDropShadow dx="0" dy="2" stdDeviation="4" flood-opacity="0.25"/>
                                </filter>
                                </defs>
                                <g transform="translate(50, 50)" filter="url(#shadow)"><rect x="-20" y="-15" width="40" height="38" rx="4" 
                                fill="url(#gradient1)"/>
                                <path d="M -10 -15 Q -10 -28 0 -28 Q 10 -28 10 -15"  stroke="#1e293b" stroke-width="3" 
                                fill="none"
                                stroke-linecap="round"/>
                                <path d="M 0 -5 L -8 8 L 8 8 Z" fill="#fbbf24" 
                                opacity="0.9"/>
                                <circle cx="-8" cy="-5" r="2.5" fill="rgba(255,255,255,0.3)"/>
                                <line x1="-15" y1="18" x2="15" y2="18" 
                                stroke="rgba(255,255,255,0.2)" 
                                stroke-width="2"
                                stroke-linecap="round"/>
                                </g>
                            </svg>
               </div>
                  <div className='text-xl font-bold font-serif tracking-tight cursor-pointer pl-0'>
                 <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                  ApexStore
                </span>
                </div>
                </div>
                <div className='space-x-6 hidden md:flex items-center lg:space-8'>
                    <AnchorLink href="#home" offset={50} >
                    <a  className={`text-gray-300 hover:text-white text-sm lg:text-base ${markTab === 'home' ? ('border-b-3 border-blue-900 py-5 '):('')}`} onClick={() => setMarkTab('home')}>Home</a>
                  </AnchorLink>
                  <div className='flex items-center'>
                  <AnchorLink href="#shop" offset={50} >
                    <a  className={`text-gray-300 hover:text-white text-sm lg:text-base ${markTab === 'shop' ? ('border-b-3 border-blue-900 py-5 '):('')}`} onClick={() => setMarkTab('shop')}>Products     
                    </a>
                  </AnchorLink>
                  <button className='text-gray-300 pt-1 cursor-pointer animation-in duration-300 slide-in-from-bottom' onClick={(e) =>  {e.preventDefault(),
                  e.stopPropagation()
                  setOpenArrow((prev) => !prev)}}>
                  {
                    openArrow ? 
                    (<ChevronUp className='w-4 h-4'/>)
                    : 
                    (<ChevronDown className='w-4 h-4'/>)  
                  }
                  </button>
                  </div>
                  <AnchorLink href="#about" offset={50}>
                    <a  className={`text-gray-300 hover:text-white text-sm lg:text-base ${markTab === 'about' ? ('border-b-3 border-blue-900 py-5 '):('')}`} onClick={() => setMarkTab('about')}>About</a>
                  </AnchorLink>
                  <AnchorLink href="#contact" offset={50}>
                    <a className={`text-gray-300 hover:text-white text-sm lg:text-base ${markTab === 'contact' ? ('border-b-3 border-blue-900 py-5 '):('')}`} onClick={() => setMarkTab('contact')}>Contact</a>
                  </AnchorLink>
                  <AnchorLink href="#blog" offset={50}>
                    <a className={`text-gray-300 hover:text-white text-sm lg:text-base ${markTab === 'blog' ? ('border-b-3 border-blue-900 py-5 '):('')}`} onClick={() => setMarkTab('blog')}>Blog</a>
                  </AnchorLink>
                </div>
               
                <div className='hidden md:flex items-center '>
                  <Search className=' text-gray-300 cursor-pointer w-5 h-6  md:block hidden'/>
                    <button className="pl-4 text-gray-300 hover:text-white sm:block ">
                        <User className="w-6 h-6 cursor-pointer" />
                    </button>
                  <button className="px-4 py-2 text-sm text-gray-300 hover:text-white sm:block cursor-pointer">
                     Login
                    </button>
                    <button className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-lg hover:from-orange-600 hover:to-red-600 sm:block cursor-pointer">Sign Up
                    </button>
                   <Search className='block text-gray-300 cursor-pointer w-5 h-6  md:hidden cursor-pointer'/>
                </div>
                <button className='md:hidden block cursor-pointer p-2 text-gray-300 hover:text-white' onClick={()=> setOpenMenu((prev) => !prev)}>
                    {openMenu ? 
                    (<X className='w-5 h-6 sm:w-6 h-6'/>)
                    :
                    (<Menu className='w-5 h-6 sm:w-6 h-6'/>)
                }
                </button>
               
                
            </div>
        </div>


        {
          openArrow && (
              <div className='hidden md:block w-full  bg-slate-900 animation-in duration-700 slide-in-from-top'>
               <div className='inline-block  p-6 text-white text-base '>
                <div className=' mt-2 ml-4 space-y-2 pl-4 border-l-2  border-slate-700'>
              <div className='relative mb-3 '>
            <div  className='block p-3 w-50 bg-slate-700/50 rounded-xl text-gray-300 hover:text-gray-200/50 border border-slate-700 hover:bg-slate-950 rounded-lg cursor-pointer mb-3 flex items-center'  onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setOpenCategories((prev) => !prev);
              }}>
            <span>Categories</span>
           <button 
              className='text-gray-300 pt-1 cursor-pointer' 
            >
              {openCategories ? <ChevronUp className="w-4 h-4 cursor-pointer" /> : <ChevronDown className="w-4 h-4 cursor-pointer" />}
            </button>
            </div>
            </div>
                      {/* Dropdown menu */}
  {openCategories && (
    <ul className='mt-2 space-y-2 ml-4 pl-3 border-l-2 border-slate-700 animation-in duration-700 slide-in-from-top'>
      <li>
        <a href="#talking-drum" className='block text-gray-300 text-sm hover:text-gray-200/50 py-1 cursor-pointer' onClick={() => setOpenCategories(false)}>
          Talking Drum
        </a>
      </li>
      <li>
        <a href="#bata-drums" className='block text-gray-300 text-sm hover:text-gray-200/50 py-1 cursor-pointer' onClick={() => setOpenCategories(false)}>
          Bàtá Drums
        </a>
      </li>
      <li>
        <a href="#dundun" className='block text-gray-300 text-sm hover:text-gray-200/50 py-1 cursor-pointer' onClick={() => setOpenCategories(false)}>
          Dundun
        </a>
      </li>
      <li>
        <a href="#accessories" className='block text-gray-300 text-sm hover:text-gray-200/50 py-1 cursor-pointer' onClick={() => setOpenCategories(false)}>
          Accessories
        </a>
      </li>
      <li>
        <a href="#all-products" className='block text-gray-300 text-sm hover:text-gray-200/50 py-1 cursor-pointer' onClick={() => setOpenCategories(false)}>
          All Products
        </a>
      </li>
    </ul>
  )}
            <a href="#new-arrivals" className='block p-3 w-50 bg-slate-700/50 rounded-xl text-gray-300 hover:text-gray-200/50 border border-slate-700 hover:bg-slate-950 rounded-lg cursor-pointer mb-3' onClick={() => setOpenCategories(false)}>New Arrivals</a>
            <a href="#deals" className='block p-3 w-50 bg-slate-700/50 rounded-xl text-gray-300 hover:text-gray-200/50 border border-slate-700 hover:bg-slate-950 rounded-lg cursor-pointer mb-3' onClick={() => setOpenCategories(false)}>Deals</a>
          </div>
          
                </div>
        </div>
            )
        }

        {openMenu && (
            <div className='md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animation-in slide-in-from-top duration-300 shadow-2xl'>
                <div className='px-4 py-4 sm:py-6 space-y-3 sm:space-y-4 transition-all duration-5'>
                  <AnchorLink href="#home" offset={50}>
                     <a  className='block text-gray-300 text-center border border-slate-700 py-2 hover:text-gray-200/50 bg-slate-700/50 hover:bg-slate-950  rounded-xl text-sm lg:text-base mb-3 cursor-pointer' onClick={() => setOpenMenu(false)}>Home</a>
                  </AnchorLink>
                  <div className='relative'>
        <AnchorLink href="#shop" offset={50}>
          <a className='flex items-center justify-center gap-2 text-gray-300 border border-slate-700 py-2 hover:text-gray-200/50 bg-slate-700/50 hover:bg-slate-950 rounded-xl text-sm lg:text-base cursor-pointer' onClick={() => setOpenMenu(false)}>
            Product
            <button 
              className='text-gray-300' 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setOpenArrow((prev) => !prev);
              }}
            >
              {openArrow ? <ChevronUp className="w-4 h-4 cursor-pointer" /> : <ChevronDown className="w-4 h-4 cursor-pointer" />}
            </button>
          </a>
        </AnchorLink>

        {/* Dropdown menu (if you want submenu items) */}
        {openArrow && (
          <div className='mt-2 ml-4 space-y-2 pl-4 border-l-2 border-slate-700 animation-in duration-700 slide-in-from-top'>
            <div className='relative mb-3 '>
            <div  className='block p-3 w-50 bg-slate-700/50 rounded-xl text-gray-300 hover:text-gray-200/50 border border-slate-700 hover:bg-slate-950 rounded-lg cursor-pointer mb-3 flex items-center'  onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setOpenCategories((prev) => !prev);
              }}>
            <span>Categories</span>
           <button 
              className='text-gray-300 pt-1 cursor-pointer' 
            >
              {openCategories ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            </div>
            </div>
            {
              openCategories && (
                <div className='mt-2 ml-4 space-y-2 pl-4 border-l-2 border-slate-700 animation-in duration-700 slide-in-from-top'>
                  <a href="#categories" className='block text-gray-300 text-sm hover:text-gray-200/50 py-1 cursor-pointer'>Talking Drum</a>
                  <a href="#new-arrivals" className='block text-gray-300 text-sm hover:text-gray-200/50 py-1 cursor-pointer'>Bàtá Drums</a>
                  <a href="#deals" className='block text-gray-300 text-sm hover:text-gray-200/50 py-1 cursor-pointer'>Dundun</a>
                  <a href="#deals" className='block text-gray-300 text-sm hover:text-gray-200/50 py-1 cursor-pointer'>Accessories</a>
                  <a href="#deals" className='block text-gray-300 text-sm hover:text-gray-200/50 py-1 cursor-pointer'>All Products</a>
                </div>
              )
            }
                <a href="#new-arrivals" className='block p-3 w-50 bg-slate-700/50 rounded-xl text-gray-300 hover:text-gray-200/50 border border-slate-700 hover:bg-slate-950 rounded-lg cursor-pointer mb-3' onClick={() => setOpenCategories(false)}>New Arrivals</a>
            <a href="#deals" className='block p-3 w-50 bg-slate-700/50 rounded-xl text-gray-300 hover:text-gray-200/50 border border-slate-700 hover:bg-slate-950 rounded-lg cursor-pointer mb-3' onClick={() => setOpenCategories(false)}>Deals</a>
          </div>
        )}
      </div>


                  <AnchorLink href="#about" offset={50}>
                    <a  className='block text-gray-300 text-center border border-slate-700 py-2 hover:text-gray-200/50 bg-slate-700/50 hover:bg-slate-950  rounded-xl text-sm lg:text-base mb-3 cursor-pointer' onClick={() => setOpenMenu(false)}>About</a>
                  </AnchorLink>
                  <AnchorLink href="#contact" offset={50}>
                    <a  className='block text-center border border-slate-700 py-2 text-gray-300 hover:text-gray-200/50 bg-slate-700/50 hover:bg-slate-950  rounded-xl text-sm lg:text-base mb-3 cursor-pointer' onClick={() => setOpenMenu(false)}>Contact</a>
                  </AnchorLink>
                  <AnchorLink href="#blog" offset={50}>
                    <a  className='block text-center border border-slate-700 py-2 text-gray-300 hover:text-gray-200/50 bg-slate-700/50 hover:bg-slate-950  rounded-xl text-sm lg:text-base mb-3 cursor-pointer' onClick={() => setOpenMenu(false)}>Blog</a>
                  </AnchorLink>
                   <button className="pl-4 text-gray-300 hover:text-gray-200/50 block  border border-slate-700 py-2 w-full rounded-xl mb-3 bg-slate-700/50 hover:bg-slate-950 cursor-pointer">
                      <User className="w-6 h-6 mx-auto" />
                    </button>
                   <hr className="border-slate-800" />
            <button className="w-full px-4 py-2 text-sm text-gray-300 hover:text-gray-200/50 border border-slate-700 bg-slate-700/50 hover:bg-slate-950 rounded-lg cursor-pointer">
              Login
            </button>
            <button className="w-full px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-lg cursor-pointer hover:from-orange-600 hover:to-red-600">
              Sign Up
            </button>
                </div>
            </div>
            )}

{/*  
    <section id="products" class="py-20 px-8 bg-slate-100">
        <h2 class="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-12">
            Featured Drums
        </h2>
        <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
   
            <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all cursor-pointer border border-slate-200">
                <div class="h-64 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-8xl relative overflow-hidden">
                    <span class="absolute text-9xl opacity-20">🥁</span>
                    <span class="relative z-10">🪘</span>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold text-slate-900 mb-2">Talking Drum (Gangan)</h3>
                    <p class="text-slate-600 text-sm mb-4">The iconic hourglass-shaped drum that mimics Yoruba tonal language</p>
                    <div class="flex justify-between items-center">
                        <span class="text-2xl font-bold text-slate-900">₦45,000</span>
                        <button class="bg-slate-900 text-white px-5 py-2 rounded-lg hover:bg-slate-800 transition-colors shadow-md hover:shadow-lg">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>

     
            <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all cursor-pointer border border-slate-200">
                <div class="h-64 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-8xl relative overflow-hidden">
                    <span class="absolute text-9xl opacity-20">🥁</span>
                    <span class="relative z-10">🥁</span>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold text-slate-900 mb-2">Dundun (Bass Drum)</h3>
                    <p class="text-slate-600 text-sm mb-4">Large ceremonial drum with deep, resonant tones for traditional ceremonies</p>
                    <div class="flex justify-between items-center">
                        <span class="text-2xl font-bold text-slate-900">₦85,000</span>
                        <button class="bg-slate-900 text-white px-5 py-2 rounded-lg hover:bg-slate-800 transition-colors shadow-md hover:shadow-lg">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>

          
            <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all cursor-pointer border border-slate-200">
                <div class="h-64 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-8xl relative overflow-hidden">
                    <span class="absolute text-9xl opacity-20">🥁</span>
                    <span class="relative z-10">🪘</span>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold text-slate-900 mb-2">Bata Drum Set</h3>
                    <p class="text-slate-600 text-sm mb-4">Sacred three-drum ensemble used in Yoruba religious ceremonies</p>
                    <div class="flex justify-between items-center">
                        <span class="text-2xl font-bold text-slate-900">₦125,000</span>
                        <button class="bg-slate-900 text-white px-5 py-2 rounded-lg hover:bg-slate-800 transition-colors shadow-md hover:shadow-lg">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>

            
            <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all cursor-pointer border border-slate-200">
                <div class="h-64 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-8xl relative overflow-hidden">
                    <span class="absolute text-9xl opacity-20">🥁</span>
                    <span class="relative z-10">🥁</span>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold text-slate-900 mb-2">Sakara Drum</h3>
                    <p class="text-slate-600 text-sm mb-4">Clay pot drum covered with goatskin, perfect for acoustic music</p>
                    <div class="flex justify-between items-center">
                        <span class="text-2xl font-bold text-slate-900">₦35,000</span>
                        <button class="bg-slate-900 text-white px-5 py-2 rounded-lg hover:bg-slate-800 transition-colors shadow-md hover:shadow-lg">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <section class="py-20 px-8 bg-white">
        <h2 class="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-12">
            Shop by Category
        </h2>
        <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div class="bg-slate-50 p-8 rounded-xl text-center shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-pointer border border-slate-200">
                <div class="text-6xl mb-4">🪘</div>
                <h3 class="text-xl font-bold text-slate-900">Talking Drums</h3>
            </div>

            <div class="bg-slate-50 p-8 rounded-xl text-center shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-pointer border border-slate-200">
                <div class="text-6xl mb-4">🥁</div>
                <h3 class="text-xl font-bold text-slate-900">Ceremonial Drums</h3>
            </div>

            <div class="bg-slate-50 p-8 rounded-xl text-center shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-pointer border border-slate-200">
                <div class="text-6xl mb-4">🎵</div>
                <h3 class="text-xl font-bold text-slate-900">Drum Accessories</h3>
            </div>

            <div class="bg-slate-50 p-8 rounded-xl text-center shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-pointer border border-slate-200">
                <div class="text-6xl mb-4">📚</div>
                <h3 class="text-xl font-bold text-slate-900">Learning Materials</h3>
            </div>

        </div>
    </section>

    <section id="about" class="py-20 px-8 bg-slate-100">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <div class="bg-gradient-to-br from-slate-800 to-slate-950 rounded-2xl h-96 flex items-center justify-center text-9xl shadow-2xl">
                🎭
            </div>

            <div>
                <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                    Preserving Yoruba Heritage
                </h2>
                <p class="text-slate-700 mb-4 leading-relaxed">
                    At Ayan Drums, we are dedicated to preserving the rich musical heritage of the Yoruba people. Each drum is handcrafted by skilled artisans using traditional techniques passed down through generations.
                </p>
                <p class="text-slate-700 mb-4 leading-relaxed">
                    Our drums are made from premium African hardwoods and authentic animal hides, ensuring authentic sound quality and durability. Whether you're a professional musician, cultural enthusiast, or collector, we have the perfect drum for you.
                </p>
                <p class="text-slate-700 mb-6 leading-relaxed">
                    We ship nationwide across Nigeria and internationally, bringing the soul of Yoruba percussion to the world.
                </p>
                <a href="#contact" class="bg-slate-900 text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-slate-800 transition-colors inline-block shadow-lg hover:shadow-xl">
                    Contact Us
                </a>
            </div>

        </div>
    </section>

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
                    "As a cultural dance troupe, we needed quality drums for our performances. Ayan Drums delivered beyond our expectations!"
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

    <footer id="contact" class="bg-slate-950 text-white py-12 px-8 border-t border-slate-900">
        <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            
            <div>
                <h3 class="text-slate-200 font-bold text-xl mb-4">About Ayan Drums</h3>
                <p class="text-slate-400 text-sm leading-relaxed">
                    Your trusted source for authentic Yoruba drums and percussion instruments. Handcrafted with love in Nigeria.
                </p>
            </div>

            <div>
                <h3 class="text-slate-200 font-bold text-xl mb-4">Quick Links</h3>
                <ul class="space-y-2">
                    <li><a href="#home" class="text-slate-400 hover:text-slate-200 transition-colors">Home</a></li>
                    <li><a href="#products" class="text-slate-400 hover:text-slate-200 transition-colors">Products</a></li>
                    <li><a href="#about" class="text-slate-400 hover:text-slate-200 transition-colors">About Us</a></li>
                    <li><a href="#contact" class="text-slate-400 hover:text-slate-200 transition-colors">Contact</a></li>
                </ul>
            </div>

            <div>
                <h3 class="text-slate-200 font-bold text-xl mb-4">Customer Service</h3>
                <ul class="space-y-2">
                    <li><a href="#" class="text-slate-400 hover:text-slate-200 transition-colors">Shipping Info</a></li>
                    <li><a href="#" class="text-slate-400 hover:text-slate-200 transition-colors">Returns</a></li>
                    <li><a href="#" class="text-slate-400 hover:text-slate-200 transition-colors">FAQs</a></li>
                    <li><a href="#" class="text-slate-400 hover:text-slate-200 transition-colors">Track Order</a></li>
                </ul>
            </div>

            <div>
                <h3 class="text-slate-200 font-bold text-xl mb-4">Contact Us</h3>
                <ul class="space-y-2 text-slate-400 text-sm">
                    <li>📍 Port Harcourt, Rivers State, Nigeria</li>
                    <li>📞 +234 XXX XXX XXXX</li>
                    <li>📧 info@ayandrums.ng</li>
                    <li>🕒 Mon-Sat: 9am - 6pm</li>
                </ul>
            </div>

        </div>

        <div class="text-center pt-8 border-t border-slate-900 text-slate-400 text-sm">
            <p>&copy; 2025 Ayan Drums. All Rights Reserved. | Bringing Yoruba Culture to the World 🇳🇬</p>
        </div>
    </footer> */}


    </nav>
  )
}

export default Navbar