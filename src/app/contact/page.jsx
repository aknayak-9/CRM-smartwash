import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="container section-padding">
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 style={{ fontSize: '2.5rem' }}>Contact Us</h2>
        <p style={{ color: 'var(--text-light)' }}>Have questions? We're here to help you.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>
        {/* Contact Info */}
        <div>
          <h3 style={{ marginBottom: '30px' }}>Business Details</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={{ color: 'var(--accent)', backgroundColor: 'rgba(255,127,80,0.1)', padding: '15px', borderRadius: '12px' }}>
                <MapPin size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Our Location</h4>
                <p style={{ color: 'var(--text-light)' }}>123 Smart Wash Avenue, Clean City, ST 12345</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={{ color: 'var(--accent)', backgroundColor: 'rgba(255,127,80,0.1)', padding: '15px', borderRadius: '12px' }}>
                <Phone size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Phone Number</h4>
                <p style={{ color: 'var(--text-light)' }}>+91 98765 43210</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={{ color: 'var(--accent)', backgroundColor: 'rgba(255,127,80,0.1)', padding: '15px', borderRadius: '12px' }}>
                <Mail size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Support Email</h4>
                <p style={{ color: 'var(--text-light)' }}>support@cmrsmartwash.com</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '50px', padding: '30px', backgroundColor: 'var(--primary)', borderRadius: '15px', color: 'white' }}>
            <h4 style={{ color: 'white', marginBottom: '15px' }}>Operating Hours</h4>
            <p style={{ margin: '5px 0', opacity: 0.8 }}>Monday - Sunday</p>
            <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>8:00 AM - 7:00 PM</p>
          </div>
        </div>

        {/* Contact Form */}
        <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
          <h3 style={{ marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <MessageSquare size={24} color="var(--accent)" /> Send a Message
          </h3>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Your Name</label>
                <input type="text" placeholder="John Doe" style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ddd' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Email Address</label>
                <input type="email" placeholder="john@example.com" style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ddd' }} />
              </div>
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Subject</label>
              <input type="text" placeholder="How can we help?" style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ddd' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Message</label>
              <textarea placeholder="Write your message here..." style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ddd', minHeight: '150px' }}></textarea>
            </div>
            <button type="submit" className="btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
              <Send size={18} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
