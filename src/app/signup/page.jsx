"use client";
import React, { useState } from 'react';
import { User, Phone, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    address: '',
    role: 'USER' // Could let them choose if they are applying to be a partner
  });

  const handleSignup = (e) => {
    e.preventDefault();
    alert("Signup successful! You can now login via OTP.");
    window.location.href = '/login';
  };

  return (
    <div className="container section-padding" style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: '450px' }}>
        <div style={{ backgroundColor: 'white', padding: '50px 40px', borderRadius: '24px', boxShadow: '0 25px 50px rgba(0,0,0,0.1)' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.8rem' }}>Create Account</h2>
            <p style={{ color: 'var(--text-light)', marginTop: '10px' }}>Join CMR SMART WASH today</p>
          </div>

          <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '10px', fontWeight: 600 }}>Full Name</label>
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: '15px', top: '53%', transform: 'translateY(-50%)', color: 'var(--text-light)' }}>
                  <User size={18} />
                </span>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  style={{ width: '100%', padding: '15px 15px 15px 45px', borderRadius: '12px', border: '1px solid #ddd' }} 
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '10px', fontWeight: 600 }}>Mobile Number</label>
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: '15px', top: '53%', transform: 'translateY(-50%)', color: 'var(--text-light)' }}>
                  <Phone size={18} />
                </span>
                <input 
                  type="tel" 
                  placeholder="10 digit mobile" 
                  required
                  value={formData.mobile}
                  onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                  style={{ width: '100%', padding: '15px 15px 15px 45px', borderRadius: '12px', border: '1px solid #ddd' }} 
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '10px', fontWeight: 600 }}>Home Address</label>
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: '15px', top: '20px', color: 'var(--text-light)' }}>
                  <MapPin size={18} />
                </span>
                <textarea 
                  placeholder="Enter your full address" 
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  style={{ width: '100%', padding: '15px 15px 15px 45px', borderRadius: '12px', border: '1px solid #ddd', minHeight: '100px' }} 
                ></textarea>
              </div>
            </div>

            <button type="submit" className="btn-primary" style={{ height: '55px', fontSize: '1.1rem', marginTop: '10px' }}>
              Create Account
            </button>
          </form>

          <div style={{ marginTop: '40px', textAlign: 'center', borderTop: '1px solid #eee', paddingTop: '30px' }}>
            <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>
              Already have an account? <Link href="/login" style={{ color: 'var(--primary)', fontWeight: 600 }}>Login Now</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
