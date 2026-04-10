'use client';

import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const features = [
  'Experienced and qualified doctors',
  'Hygienic and well-maintained facility',
  'Modern medical equipment',
  'Patient-focused care',
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
                alt="Dental Clinic Interior"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xl">10+</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Years of</h4>
                  <p className="text-sm text-slate-500">Excellence</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">Why Choose Us</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6 leading-tight">
              Dedicated to Your Health and Well-being
            </h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              At Cure Max Hospital, we combine state-of-the-art medical technology with compassionate care. Our goal is to provide a healing environment where every patient feels valued and receives the highest standard of medical attention.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white px-8 py-3.5 rounded-full font-semibold transition-colors"
            >
              Learn More About Us
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
