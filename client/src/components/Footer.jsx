import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer id="contact" class="bg-slate-950 text-white py-12 px-8 border-t border-slate-900">
        <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            
            <div>
                <h3 class="text-slate-200 font-bold text-xl mb-4">About ApexStore</h3>
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
                    <li>📞 +234 814 891 5475</li>
                    <li>📧 apexstore@gmail.ng</li>
                    <li>🕒 Mon-Sat: 9am - 6pm</li>
                </ul>
            </div>

        </div>

        <div class="text-center pt-8 border-t border-slate-900 text-slate-400 text-sm">
            <p>&copy; 2025 ApexStore. All Rights Reserved. | Bringing Yoruba Culture to the World 🇳🇬</p>
        </div>
    </footer> 
    </div>
  )
}

export default Footer