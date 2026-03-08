"use client";
import React, { useState } from 'react';
import { Phone, Lock, User, ShieldCheck, ArrowRight, Smartphone } from 'lucide-react';
import Link from 'next/link';

const LoginPage = () => {
  const [loginMode, setLoginMode] = useState('otp'); // 'otp' or 'admin'
  const [mobile, setMobile] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [adminCreds, setAdminCreds] = useState({ email: '', password: '' });

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (mobile.length < 10) return;
    setOtpSent(true);
    console.log("Mock OTP sent to", mobile, ": 1234");
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    // In a real app, verify with backend. Here we mock login.
    alert("Login successful! Redirecting to dashboard...");
    window.location.href = '/';
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    alert("Admin login successful! Redirecting to admin dashboard...");
    window.location.href = '/admin';
  };

  return (
    <div className="container section-padding" style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: '450px' }}>
        <div style={{ backgroundColor: 'white', padding: '50px 40px', borderRadius: '24px', boxShadow: '0 25px 50px rgba(0,0,0,0.1)' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ 
              width: '60px', 
              height: '60px', 
              backgroundColor: 'var(--primary)', 
              borderRadius: '16px', 
              display: 'inline-flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: 'white',
              marginBottom: '20px'
            }}>
              {loginMode === 'otp' ? <Smartphone size={30} /> : <ShieldCheck size={30} />}
            </div>
            <h2 style={{ fontSize: '1.8rem' }}>{loginMode === 'otp' ? 'Login via OTP' : 'Admin Login'}</h2>
            <p style={{ color: 'var(--text-light)', marginTop: '10px' }}>
              {loginMode === 'otp' ? 'Users, Operators & Partners' : 'Strictly for CRM SMART WASH Admins'}
            </p>
          </div>

          {loginMode === 'otp' ? (
            <form onSubmit={otpSent ? handleVerifyOtp : handleSendOtp} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {!otpSent ? (
                <div>
                  <label style={{ display: 'block', marginBottom: '10px', fontWeight: 600 }}>Mobile Number</label>
                  <div style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }}>
                      <Phone size={18} />
                    </span>
                    <input 
                      type="tel" 
                      placeholder="Enter 10 digit mobile" 
                      required
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      style={{ width: '100%', padding: '15px 15px 15px 45px', borderRadius: '12px', border: '1px solid #ddd', fontSize: '1rem' }} 
                    />
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginTop: '10px' }}>
                    Available for User, Operator & Partner roles.
                  </p>
                </div>
              ) : (
                <div>
                  <label style={{ display: 'block', marginBottom: '10px', fontWeight: 600 }}>Enter OTP</label>
                  <div style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }}>
                      <Lock size={18} />
                    </span>
                    <input 
                      type="text" 
                      placeholder="Enter 4-digit code" 
                      required
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      style={{ width: '100%', padding: '15px 15px 15px 45px', borderRadius: '12px', border: '1px solid #ddd', fontSize: '1.2rem', letterSpacing: '8px' }} 
                    />
                  </div>
                  <button type="button" onClick={() => setOtpSent(false)} style={{ color: 'var(--accent)', fontSize: '0.9rem', marginTop: '10px', fontWeight: 600 }}>
                    Change Number
                  </button>
                </div>
              )}

              <button type="submit" className="btn-primary" style={{ height: '55px', fontSize: '1.1rem', marginTop: '10px' }}>
                {otpSent ? 'Verify & Login' : 'Send OTP'}
              </button>
            </form>
          ) : (
            <form onSubmit={handleAdminLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '10px', fontWeight: 600 }}>Email Address</label>
                <input 
                  type="email" 
                  placeholder="admin@cmrsmartwash.com" 
                  required
                  value={adminCreds.email}
                  onChange={(e) => setAdminCreds({...adminCreds, email: e.target.value})}
                  style={{ width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid #ddd' }} 
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '10px', fontWeight: 600 }}>Password</label>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  required
                  value={adminCreds.password}
                  onChange={(e) => setAdminCreds({...adminCreds, password: e.target.value})}
                  style={{ width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid #ddd' }} 
                />
              </div>
              <button type="submit" className="btn-primary" style={{ height: '55px', fontSize: '1.1rem', marginTop: '10px' }}>
                Secure Admin Login
              </button>
            </form>
          )}

          <div style={{ marginTop: '40px', textAlign: 'center', borderTop: '1px solid #eee', paddingTop: '30px' }}>
            <button 
              onClick={() => {
                setLoginMode(loginMode === 'otp' ? 'admin' : 'otp');
                setOtpSent(false);
              }}
              style={{ color: 'var(--primary)', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', margin: '0 auto' }}
            >
              Switch to {loginMode === 'otp' ? 'Admin Access' : 'OTP Login'} <ArrowRight size={16} />
            </button>
          </div>

          {loginMode === 'otp' && (
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>
                Don't have an account? <Link href="/signup" style={{ color: 'var(--accent)', fontWeight: 600 }}>Sign Up</Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
