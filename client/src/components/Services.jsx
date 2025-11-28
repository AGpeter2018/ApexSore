import React from 'react'

const services = [
    {
        sectionImage: '🎨',
        sectionHeader: 'Custom Drum Crafting',
        sectionText: ' Bespoke Yoruba drums tailored to your specific needs. Our master craftsmen create instruments with your preferred size, wood type, and tuning.'
    },
    {
     sectionImage: '🔧',
     sectionHeader: 'Repair & Restoration',
     sectionText: ' Expert restoration of vintage drums. We replace worn skins, repair cracks, and refinish surfaces while preserving authentic character.'   
    },
    {
        sectionImage: '🎵',
        sectionHeader: 'Professional Tuning',
        sectionText: '  Achieve perfect sound with our tuning services. Our technicians understand traditional Yoruba tonal requirements.'
    },
    {
        sectionImage: '📚',
        sectionHeader: 'Workshops & Training',
        sectionText: '        Learn authentic Yoruba drumming from certified instructors. Beginner to advanced classes available.',
    },
    {
        sectionImage: '🎭',
        sectionHeader: 'Bulk Orders',
        sectionText: 'Special pricing for cultural groups, schools, and performance troupes. Comprehensive packages available.'
    },
    {
        sectionImage: '🚚',
        sectionHeader: 'Nationwide Delivery',
        sectionText: ' Fast, secure delivery across Nigeria and internationally. Careful packaging with tracking for all orders.'
    },
    {
        sectionImage: '🎪',
        sectionHeader: 'Drum Rentals',
        sectionText: 'Flexible rental options for events, ceremonies, and performances. Perfect for weddings and festivals.'
    },
    {
        sectionImage: '✅',
        sectionHeader: 'Authentication',
        sectionText: ' Expert verification for antique drums. Our specialists provide historical background and care guidance.'
    }
]

const Services = () => {
  return (
    <div>
<section id='services' class="py-20 px-8 bg-white">
    <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-4">
            Our Services
        </h2>
        <p class="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Beyond selling drums, we offer comprehensive services to support your drumming journey and preserve Yoruba cultural heritage
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {
                services.map((service, id) => {
                    return(
            <div key={id} class="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:shadow-xl hover:border-slate-300 transition-all">
                <div class="text-4xl mb-4">{service.sectionImage}</div>
                <h3 class="text-xl font-bold text-slate-900 mb-3">{service.sectionHeader}</h3>
                <p class="text-slate-600 text-sm leading-relaxed">
                   {service.sectionText}
                </p>
            </div>
                    )
                    
                })
            }
        </div>
        <div class="text-center mt-12">
            <a href="#contact" class="bg-slate-900 text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-slate-800 transition-colors inline-block shadow-lg hover:shadow-xl">
                Request a Service
            </a>
        </div>
    </div>
</section>
</div>
  )
}

export default Services