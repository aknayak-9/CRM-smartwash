import React from 'react';
import { Users, Briefcase, TrendingUp, CheckCircle, Bike, Car } from 'lucide-react';

const PartnerPage = () => {
  const bikePricing = [
    { item: 'Normal Wash', price: '₹60' },
    { item: 'Bike Policing', price: '₹20' },
    { item: 'Bike Tyre Policing', price: '₹20' }
  ];

  const carPricing = [
    { item: 'Single Foam Wash', price: '₹200' },
    { item: 'Double Foam Wash', price: '₹300' },
    { item: 'Car Policing', price: '₹50' },
    { item: 'Deep Cleaning with Dashboard', price: '₹100' },
    { item: 'Car Tyre Policing', price: '₹50' }
  ];

  return (
    <div className="container section-padding">
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <span style={{ color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Partnership</span>
        <h2 style={{ fontSize: '3rem', marginTop: '10px' }}>Grow With CMR SMART WASH</h2>
        <p style={{ color: 'var(--text-light)', maxWidth: '700px', margin: '20px auto' }}>
          Join the future of automated cleaning. We offer lucrative partnership opportunities for operators and franchise owners.
        </p>
      </div>

      {/* Partner Types */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px', marginBottom: '80px' }}>
        <div style={{ backgroundColor: 'white', padding: '50px 40px', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', borderTop: '5px solid var(--accent)' }}>
          <div style={{ color: 'var(--accent)', marginBottom: '20px' }}>
            <Users size={48} />
          </div>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>Operator Partner</h3>
          <p style={{ color: 'var(--text-light)', lineHeight: 1.7, marginBottom: '30px' }}>
            Perfect for skilled professionals who want to provide on-site smart washing services using our technology.
          </p>
          <div style={{ backgroundColor: 'var(--background)', padding: '20px', borderRadius: '12px', marginBottom: '30px', textAlign: 'center' }}>
            <p style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '5px' }}>Revenue Share</p>
            <h4 style={{ fontSize: '2rem', color: 'var(--primary)' }}>60% <span style={{ fontSize: '1rem', fontWeight: 400 }}>Partner</span> / 40% <span style={{ fontSize: '1rem', fontWeight: 400 }}>Company</span></h4>
          </div>
          <button className="btn-primary" style={{ width: '100%' }}>Apply as Operator</button>
        </div>

        <div style={{ backgroundColor: 'var(--primary)', padding: '50px 40px', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)', color: 'white' }}>
          <div style={{ color: 'var(--accent)', marginBottom: '20px' }}>
            <Briefcase size={48} />
          </div>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '15px', color: 'white' }}>Franchise Partner</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: '30px' }}>
            Own and operate a CMR SMART WASH center in your city. Full branding and technology support included.
          </p>
          <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '12px', marginBottom: '30px', textAlign: 'center' }}>
            <p style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '5px', color: 'rgba(255,255,255,0.7)' }}>Revenue Share</p>
            <h4 style={{ fontSize: '2rem', color: 'white' }}>80% <span style={{ fontSize: '1rem', fontWeight: 400 }}>Partner</span> / 20% <span style={{ fontSize: '1rem', fontWeight: 400 }}>Company</span></h4>
          </div>
          <button className="btn-primary" style={{ width: '100%' }}>Apply for Franchise</button>
        </div>
      </div>

      {/* Pricing Logic Section */}
      <h3 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '40px' }}>Pricing & Revenue Logic</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
        <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
            <Bike color="var(--accent)" size={32} />
            <h4 style={{ fontSize: '1.4rem' }}>Bike Services</h4>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              {bikePricing.map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '15px 0', color: 'var(--text-light)' }}>{row.item}</td>
                  <td style={{ padding: '15px 0', textAlign: 'right', fontWeight: 700 }}>{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
            <Car color="var(--accent)" size={32} />
            <h4 style={{ fontSize: '1.4rem' }}>Car Services</h4>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              {carPricing.map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '15px 0', color: 'var(--text-light)' }}>{row.item}</td>
                  <td style={{ padding: '15px 0', textAlign: 'right', fontWeight: 700 }}>{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div style={{ marginTop: '60px', textAlign: 'center', backgroundColor: '#e6f0ff', padding: '30px', borderRadius: '15px' }}>
        <p style={{ margin: 0, color: 'var(--primary)', fontWeight: 600 }}>
          <TrendingUp size={20} style={{ verticalAlign: 'middle', marginRight: '10px' }} />
          All revenue is automatically calculated and split in the partner backend.
        </p>
      </div>
    </div>
  );
};

export default PartnerPage;
