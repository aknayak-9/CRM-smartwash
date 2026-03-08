"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: '/images/hero-1.png',
      headline: 'CMR SMART WASH – The Future of Car & Bike Cleaning',
      description: 'Expert car wash service right at your doorstep.'
    },
    {
      image: '/images/hero-2.png',
      headline: 'On-the-Go Professional Cleaning',
      description: 'Our mobile operators are equipped with smart technology for a superior wash.'
    },
    {
      image: '/images/hero-3.png',
      headline: 'Premium Bike Wash Experience',
      description: 'Visit our smart centers for an automated, damage-free cleaning experience.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{ position: 'relative', height: '600px', overflow: 'hidden' }}>
      {slides.map((slide, index) => (
        <div 
          key={index}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: currentSlide === index ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            color: 'white',
            padding: '0 20px'
          }}
        >
          <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', color: 'white', maxWidth: '800px' }}>{slide.headline}</h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px', maxWidth: '600px' }}>{slide.description}</p>
          <Link href="/booking" className="btn-primary" style={{ fontSize: '1.2rem', padding: '15px 40px' }}>
            Book Now
          </Link>
        </div>
      ))}
      
      <div style={{ position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '10px' }}>
        {slides.map((_, index) => (
          <button 
            key={index}
            onClick={() => setCurrentSlide(index)}
            style={{
              width: '12px',
              height: '12px',
              border: '2px solid white',
              borderRadius: '50%',
              backgroundColor: currentSlide === index ? 'white' : 'transparent',
              transition: 'background-color 0.3s'
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
