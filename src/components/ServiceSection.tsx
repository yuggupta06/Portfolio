import React from 'react';
import ServiceCard from './ui/service/service_card';
import { HoverEffect } from "./ui/service/card_hover_effect";

const services = [
  {
    icon: '🖥️',
    title: 'Custom Website Development',
    description:
      'I craft fully responsive and scalable websites from scratch, tailored to your unique goals—whether you are an individual, a startup, or a large organization.',
  },
  {
    icon: '🏫',
    title: ' Business & Organization Web Solutions',
    description:
      'I build clean, high-performance websites for companies, agencies, and institutions—helping you establish a strong, professional digital presence.',
  },
  {
    icon: '🛍️',
    title: 'Website Redesign & Enhancement',
    description:
      'Already have a website? I’ll upgrade its design, improve speed, add modern features, and optimize it for user experience across all devices.',
  },
  {
    icon: '📲',
    title: 'UI/UX Design & Optimization',
    description:
      'Your website will not only work great but also look beautiful. I design user interfaces that are clean, intuitive, and aligned with modern web design trends.',
  },
  {
    icon: '🛠️',
    title: 'Student & Developer Portfolios',
    description:
      'Need a personal portfolio? I create impactful, professional portfolio websites for students and developers that stand out to recruiters and collaborators.'
  },
  {
    icon: '🛠️',
    title: 'Ongoing Support & Maintenance',
    description:
      'Beyond just launch, I offer ongoing support, performance monitoring, and regular updates to keep your site secure, fast, and up to date.'
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-black">
      <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4">
        {services.map(({ icon, title, description }) => (
          <ServiceCard key={title} icon={icon} title={title} description={description} />
        ))}
      </div>
    </section>
  );
};

 
export function CardHoverEffectDemo() {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <HoverEffect items={services} />
    </div>
  );
}
export default ServicesSection;
