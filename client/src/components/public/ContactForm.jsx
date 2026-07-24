import { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const response = await fetch('http://localhost:5000/api/contact/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' }); // Clear the form
            } else {
                setStatus(data.message || 'Something went wrong.');
            }
        } catch (error) {
            setStatus('Server error. Please try again later.');
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '60px 20px', fontFamily: 'sans-serif' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '1000px', width: '100%', gap: '40px' }}>
                
                {/* Left Side: Contact Information */}
                <div style={{ flex: '1 1 400px' }}>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '0 0 15px 0', color: '#111' }}>
                        Get in Touch
                    </h1>
                    <p style={{ color: '#555', lineHeight: '1.6', marginBottom: '40px', fontSize: '1.1rem' }}>
                        Ready to plan your next big event? Contact us today for a free consultation and quotation.
                    </p>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: '#333' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <span style={{ fontSize: '1.5rem', color: '#2563eb' }}>📍</span>
                            <span style={{ fontSize: '1.1rem' }}>Shahdara, Delhi, India</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <span style={{ fontSize: '1.5rem', color: '#2563eb' }}>📞</span>
                            <span style={{ fontSize: '1.1rem' }}>+91 98765 43210</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <span style={{ fontSize: '1.5rem', color: '#2563eb' }}>✉️</span>
                            <span style={{ fontSize: '1.1rem' }}>info@adidaevents.com</span>
                        </div>
                    </div>
                </div>

                {/* Right Side: The Working Form */}
                <div style={{ flex: '1 1 400px', backgroundColor: '#fdfdfd', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', border: '1px solid #eaeaea' }}>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            required 
                            style={{ padding: '14px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '1rem', outline: 'none' }}
                        />
                        
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                            style={{ padding: '14px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '1rem', outline: 'none' }}
                        />
                        
                        <textarea 
                            name="message" 
                            placeholder="Message / Event Type" 
                            value={formData.message} 
                            onChange={handleChange} 
                            required 
                            rows="4"
                            style={{ padding: '14px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '1rem', outline: 'none', resize: 'vertical' }}
                        />
                        
                        <button 
                            type="submit" 
                            style={{ backgroundColor: '#2563eb', color: 'white', padding: '14px', border: 'none', borderRadius: '8px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', transition: '0.3s' }}
                        >
                            Send Enquiry
                        </button>

                    </form>
                    
                    {/* Status Message (Success/Error) */}
                    {status && (
                        <p style={{ marginTop: '20px', textAlign: 'center', fontWeight: 'bold', color: status.includes('successfully') ? '#16a34a' : '#dc2626' }}>
                            {status}
                        </p>
                    )}
                </div>

            </div>
        </div>
    );
};

export default ContactForm;