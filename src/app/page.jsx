"use client";
import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import { Camera, Clock, Droplet, Star, Bike, Car } from 'lucide-react';

export default function Home() {
  const benefitsList = [
    { icon: <Droplet />, title: "Scratch-free washing" },
    { icon: <Star />, title: "Consistent quality" },
    { icon: <Clock />, title: "Time saving" },
    { icon: <Droplet />, title: "Less water consumption" },
    { icon: <Bike />, title: "Suitable for all bike types" },
    { icon: <Car />, title: "High pressure washing operation" },
  ];

  return (
    <div>
      <Hero />
      <About />
      
      {/* Benefits Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '50px' }}>
            <h2 style={{ color: 'white' }}>Why Choose CMR SMART WASH?</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)' }}>Premium service backed by technology</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
            {benefitsList.map((benefit, index) => (
              <div key={index} style={{ 
                textAlign: 'center', 
                padding: '30px', 
                backgroundColor: 'rgba(255,255,255,0.05)', 
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <div style={{ 
                  color: 'var(--accent)', 
                  marginBottom: '20px', 
                  display: 'flex', 
                  justifyContent: 'center' 
                }}>
                  {React.cloneElement(benefit.icon, { size: 40 })}
                </div>
                <h4 style={{ color: 'white', fontSize: '1.1rem' }}>{benefit.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
