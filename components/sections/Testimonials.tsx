'use client';

import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rahul Sharma',
    text: 'Very professional doctors and excellent care. The staff was very attentive and the diagnosis was spot on.',
    rating: 5,
  },
  {
    name: 'Priya Reddy',
    text: 'Best hospital in Hongasandra area. The facilities are top-notch and the environment is very clean and hygienic.',
    rating: 5,
  },
  {
    name: 'Amit Patel',
    text: 'Highly recommended for treatment and consultation. The doctors take time to explain everything clearly.',
    rating: 5,
  },
  {
    name: 'Sneha Rao',
    text: 'Clean facility and friendly staff. My experience here was very smooth from admission to discharge.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-blue-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">Patient Reviews</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            What Our Patients Say
          </h3>
          <p className="text-slate-600 text-lg">
            Don&apos;t just take our word for it. Read what our patients have to say about their experience at Cure Max Hospital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-blue-100" />
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 text-lg mb-6 relative z-10 italic">
                &quot;{testimonial.text}&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold font-heading">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">Verified Patient</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
