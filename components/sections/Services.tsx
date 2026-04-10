'use client';

import { motion } from 'motion/react';
import { Stethoscope, Activity, HeartPulse, Ambulance, TestTube, UserPlus } from 'lucide-react';

const services = [
  {
    icon: Stethoscope,
    title: 'General Consultation',
    description: 'Expert diagnosis and personalized treatment plans for all your general health concerns.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Activity,
    title: 'Dental Care',
    description: 'Complete dental solutions from routine checkups to advanced procedures.',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
  },
  {
    icon: HeartPulse,
    title: 'Health Checkups',
    description: 'Comprehensive regular health monitoring and preventive care packages.',
    color: 'text-rose-600',
    bgColor: 'bg-rose-50',
  },
  {
    icon: Ambulance,
    title: 'Emergency Care',
    description: '24/7 quick and reliable emergency support with fully equipped ambulances.',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
  },
  {
    icon: TestTube,
    title: 'Diagnostics',
    description: 'Accurate and timely lab tests and scan services using modern technology.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    icon: UserPlus,
    title: 'Specialist Doctors',
    description: 'Multi-speciality care provided by highly experienced and qualified doctors.',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Comprehensive Healthcare Solutions
          </h3>
          <p className="text-slate-600 text-lg">
            We offer a wide range of medical services to ensure you and your family receive the best possible care under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl border border-slate-100 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-7 h-7 ${service.color}`} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 font-heading">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
