import React from 'react';
import Link from 'next/link';
import { Settings, User, MapPin, Phone, ShieldCheck } from 'lucide-react';

const Header = () => {
  return (
    <header>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ 
            width: '40px', 
            height: '40px', 
            backgroundColor: 'var(--primary)', 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            color: 'white'
          }}>
            <ShieldCheck size={24} />
          </div>
          <div>
            <h1 style={{ fontSize: '1.2rem', margin: 0, lineHeight: 1 }}>CMR</h1>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent)', letterSpacing: '1px' }}>SMART WASH</span>
          </div>
        </Link>

        <nav style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <Link href="/" style={{ fontWeight: 500 }}>Home</Link>
          <Link href="/booking" style={{ fontWeight: 500 }}>Book for Washing</Link>
          <Link href="/contact" style={{ fontWeight: 500 }}>Contact Us</Link>
          <Link href="/login" className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <User size={18} />
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
