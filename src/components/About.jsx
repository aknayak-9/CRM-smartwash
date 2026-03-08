import React from 'react';
import { Droplets, Zap, Leaf, Shield, CheckCircle2 } from 'lucide-react';

const About = () => {
  const benefits = [
    { icon: <Shield size={32} />, title: 'Damage-Free Cleaning', text: 'Our specialized nozzles and smart pressure control ensure your vehicle is safe.' },
    { icon: <Droplets size={32} />, title: 'Premium Polish', text: 'Includes deep cleaning, tire polishing, and dashboard care for a showroom finish.' },
    { icon: <Leaf size={32} />, title: 'Eco-Friendly', text: 'Water-efficient technology that saves up to 70% more water than traditional washes.' },
    { icon: <Zap size={32} />, title: 'Smart Technology', text: 'Fully automated systems and smart booking for a seamless experience.' }
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
          <div>
            <span style={{ color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>About Us</span>
            <h2 style={{ fontSize: '2.5rem', marginTop: '10px' }}>Experience The Future of Car & Bike Cleaning</h2>
            <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '30px' }}>
              CMR SMART WASH combines smart technology with eco-friendly practices to deliver a premium cleaning service directly to you. Whether it's a quick bike wash or detailed car polishing, our smart systems ensure a perfect finish every time.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle2 color="var(--accent)" /> Smart Bike & Car Wash Technology</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle2 color="var(--accent)" /> Detailed Policing & Deep Cleaning</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle2 color="var(--accent)" /> Water-efficient and Eco-friendly Process</li>
            </ul>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {benefits.map((item, index) => (
              <div key={index} style={{ 
                backgroundColor: 'white', 
                padding: '30px', 
                borderRadius: '12px', 
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: 'column',
                gap: '15px'
              }}>
                <div style={{ color: 'var(--accent)' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.2rem', margin: 0 }}>{item.title}</h3>
                <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', lineHeight: 1.5, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
