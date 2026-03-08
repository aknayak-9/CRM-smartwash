import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, ShieldCheck } from 'lucide-react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '60px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{ 
                width: '32px', 
                height: '32px', 
                backgroundColor: 'var(--accent)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'white'
              }}>
                <ShieldCheck size={20} />
              </div>
              <h3 style={{ margin: 0, color: 'white' }}>CMR SMART WASH</h3>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
              The Future of Car & Bike Cleaning. Smart, modern, clean, technology-focused washing service at your doorstep.
            </p>
          </div>

          <div>
            <h4 style={{ color: 'white', marginBottom: '20px' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><Link href="/" style={{ color: 'rgba(255,255,255,0.7)' }}>Home</Link></li>
              <li><Link href="/booking" style={{ color: 'rgba(255,255,255,0.7)' }}>Book for Washing</Link></li>
              <li><Link href="/contact" style={{ color: 'rgba(255,255,255,0.7)' }}>Contact Us</Link></li>
              <li><Link href="/partner" style={{ color: 'rgba(255,255,255,0.7)' }}>Franchise Partner</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'white', marginBottom: '20px' }}>Internal Access</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><Link href="/admin" style={{ color: 'rgba(255,255,255,0.7)' }}>Admin Login</Link></li>
              <li><Link href="/operator" style={{ color: 'rgba(255,255,255,0.7)' }}>Operator Login</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'white', marginBottom: '20px' }}>Follow Us</h4>
            <div style={{ display: 'flex', gap: '15px' }}>
              <a href="#" style={{ color: 'white', backgroundColor: 'rgba(255,255,255,0.1)', padding: '10px', borderRadius: '50%' }}><Facebook size={20} /></a>
              <a href="#" style={{ color: 'white', backgroundColor: 'rgba(255,255,255,0.1)', padding: '10px', borderRadius: '50%' }}><Instagram size={20} /></a>
              <a href="#" style={{ color: 'white', backgroundColor: 'rgba(255,255,255,0.1)', padding: '10px', borderRadius: '50%' }}><Twitter size={20} /></a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
            © 2026 CMR SMART WASH – Smart Technology for a Cleaner Ride
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
