"use client";
import React, { useState } from 'react';
import { Calendar, Clock, MapPin, User, Phone, Bike, Car, CheckCircle2, Smartphone, CreditCard } from 'lucide-react';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    address: '',
    type: 'Bike', // Car or Bike
    vehicleNumber: '',
    date: new Date().toISOString().split('T')[0],
    slot: ''
  });

  const [step, setStep] = useState(1); // 1: Form & Slot, 2: Confirmation
  const [generatedOtp, setGeneratedOtp] = useState('');

  // Generate slots from 8:00 AM to 7:00 PM in 15-min intervals
  const generateSlots = () => {
    const slots = [];
    let current = new Date();
    current.setHours(8, 0, 0, 0);
    const end = new Date();
    end.setHours(19, 0, 0, 0);

    while (current <= end) {
      slots.push(current.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      current.setMinutes(current.getMinutes() + 15);
    }
    return slots;
  };

  const slots = generateSlots();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBooking = (e) => {
    e.preventDefault();
    if (!formData.slot) {
      alert("Please select a time slot first.");
      return;
    }
    setStep(2); // Go to Payment
  };

  const handlePayment = () => {
    // Simulate payment processing
    setStep(3); // Go to Confirmation
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(otp);
    console.log("Mock OTP sent to", formData.mobile, ":", otp);
  };

  if (step === 2) {
    return (
      <div className="container section-padding" style={{ maxWidth: '500px' }}>
        <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
          <h3 style={{ marginBottom: '20px', textAlign: 'center' }}>Secure Payment</h3>
          <div style={{ backgroundColor: 'var(--background)', padding: '20px', borderRadius: '12px', marginBottom: '30px' }}>
            <p style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}><span>Service Fee:</span> <span>{formData.type === 'Car' ? '₹200' : '₹60'}</span></p>
            <p style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '1.2rem', borderTop: '1px solid #ddd', paddingTop: '10px' }}><span>Total:</span> <span>{formData.type === 'Car' ? '₹200' : '₹60'}</span></p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <button onClick={handlePayment} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', backgroundColor: '#528ff0', color: 'white', padding: '15px', borderRadius: '12px', fontWeight: 600 }}>
              <Smartphone size={20} /> Pay via UPI / Scan QR
            </button>
            <button onClick={handlePayment} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', border: '1px solid #ddd', padding: '15px', borderRadius: '12px', fontWeight: 600 }}>
              <CreditCard size={20} /> Credit / Debit Card
            </button>
          </div>
          
          <p style={{ textAlign: 'center', color: 'var(--text-light)', fontSize: '0.8rem', marginTop: '20px' }}>
            Secured by Razorpay • Advance booking payment required
          </p>
        </div>
      </div>
    );
  }

  if (step === 3) {
    return (
      <div className="container section-padding" style={{ maxWidth: '600px', textAlign: 'center' }}>
        <div style={{ backgroundColor: 'white', padding: '60px 40px', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
          <div style={{ color: 'var(--accent)', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
            <CheckCircle2 size={80} />
          </div>
          <h2 style={{ fontSize: '2rem' }}>Booking Confirmed!</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', margin: '20px 0 40px' }}>
            Thanks for choosing our Smart Washing System. Your slot booking has confirmed.
          </p>
          
          <div style={{ backgroundColor: 'var(--background)', padding: '30px', borderRadius: '12px', marginBottom: '40px' }}>
            <p style={{ fontWeight: 600, color: 'var(--text-light)', marginBottom: '10px' }}>Your OTP for Confirmation</p>
            <h3 style={{ fontSize: '2.5rem', color: 'var(--accent)', letterSpacing: '5px' }}>{generatedOtp}</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginTop: '20px' }}>
              Please provide this OTP to our washing operator after the service is completed to satisfy your vehicle washing.
            </p>
          </div>

          <div style={{ textAlign: 'left', borderTop: '1px solid #eee', paddingTop: '30px' }}>
            <p><strong>Customer:</strong> {formData.name}</p>
            <p><strong>Vehicle:</strong> {formData.vehicleNumber} ({formData.type})</p>
            <p><strong>Time:</strong> {formData.slot} on {formData.date}</p>
            <p><strong>Address:</strong> {formData.address}</p>
          </div>

          <button onClick={() => setStep(1)} className="btn-outline" style={{ marginTop: '40px' }}>
            Make Another Booking
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container section-padding">
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 style={{ fontSize: '2.5rem' }}>Book Your Smart Wash</h2>
        <p style={{ color: 'var(--text-light)' }}>Professional cleaning at your preferred time and place</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
        {/* Left: Booking Form */}
        <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <h3 style={{ marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <User size={24} color="var(--accent)" /> Customer Details
          </h3>
          <form onSubmit={handleBooking} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Full Name</label>
              <input 
                type="text" 
                name="name" 
                required 
                value={formData.name}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ddd' }} 
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Mobile Number</label>
              <input 
                type="tel" 
                name="mobile" 
                required 
                value={formData.mobile}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ddd' }} 
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Address for Washing</label>
              <textarea 
                name="address" 
                required 
                value={formData.address}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ddd', minHeight: '100px' }} 
              ></textarea>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Vehicle Type</label>
                <select 
                  name="type" 
                  value={formData.type}
                  onChange={handleInputChange}
                  style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ddd' }}
                >
                  <option value="Bike">Bike</option>
                  <option value="Car">Car</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Vehicle Number</label>
                <input 
                  type="text" 
                  name="vehicleNumber" 
                  required 
                  value={formData.vehicleNumber}
                  onChange={handleInputChange}
                  style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ddd' }} 
                />
              </div>
            </div>
            
            <div style={{ marginTop: '20px' }}>
              <button 
                type="submit" 
                className="btn-primary" 
                style={{ width: '100%', opacity: formData.slot ? 1 : 0.6 }}
              >
                Book Now
              </button>
            </div>
          </form>
        </div>

        {/* Right: Slot Selection */}
        <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <h3 style={{ marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Calendar size={24} color="var(--accent)" /> Select Date & Time
          </h3>
          
          <input 
            type="date" 
            name="date"
            min={new Date().toISOString().split('T')[0]}
            value={formData.date}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ddd', marginBottom: '30px' }}
          />

          <p style={{ fontWeight: 600, marginBottom: '15px' }}>Available Slots (15-min Intervals)</p>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))', 
            gap: '10px',
            maxHeight: '400px',
            overflowY: 'auto',
            paddingRight: '10px'
          }}>
            {slots.map((slotTime, index) => (
              <button
                key={index}
                onClick={() => setFormData(prev => ({ ...prev, slot: slotTime }))}
                style={{
                  padding: '10px 5px',
                  borderRadius: '6px',
                  border: '1px solid',
                  borderColor: formData.slot === slotTime ? 'var(--accent)' : '#eee',
                  backgroundColor: formData.slot === slotTime ? 'var(--accent)' : 'white',
                  color: formData.slot === slotTime ? 'white' : 'var(--text)',
                  fontSize: '0.85rem',
                  fontWeight: formData.slot === slotTime ? 600 : 400,
                  transition: 'all 0.2s'
                }}
              >
                {slotTime}
              </button>
            ))}
          </div>
          
          {formData.slot && (
            <div style={{ marginTop: '30px', padding: '15px', backgroundColor: 'var(--background)', borderRadius: '8px', borderLeft: '4px solid var(--accent)' }}>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>
                Selected Slot: <strong>{formData.slot}</strong> on {formData.date}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
