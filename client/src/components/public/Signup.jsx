import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = useState({
        fullName: '', email: '', phone: '', password: '', confirmPassword: ''
    });
    const [status, setStatus] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setStatus("Passwords do not match.");
            return;
        }
        
        setStatus('Creating account...');

        try {
            const response = await fetch('http://localhost:5000/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.fullName, // Adjust to match your Mongoose schema
                    email: formData.email,
                    password: formData.password
                    // Include phone if your schema requires it
                }),
            });
            const data = await response.json();

            if (response.ok) {
                setStatus('Account created successfully!');
                setTimeout(() => navigate('/login'), 2000); // Send to login after 2s
            } else {
                setStatus(data.message || 'Registration failed.');
            }
        } catch (error) {
            setStatus('Server error. Please try again.');
        }
    };

    return (
        <div style={{ display: 'flex', minHeight: '80vh', fontFamily: 'sans-serif', backgroundColor: '#f9fafb' }}>
            
            {/* Left Side: Gradient Design */}
            <div style={{ 
                flex: '1', 
                background: 'linear-gradient(135deg, #3b0764 0%, #c026d3 100%)', 
                color: 'white', 
                padding: '60px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                borderBottomRightRadius: '250px' // Simulates the wave curve
            }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '10px' }}>Create Your Account</h1>
                <div style={{ height: '4px', width: '60px', background: 'linear-gradient(to right, #3b82f6, #ec4899)', marginBottom: '20px' }}></div>
                <p style={{ fontSize: '1.1rem', marginBottom: '40px', maxWidth: '400px', lineHeight: '1.5' }}>
                    Join Adida Events and let us help you plan extraordinary experiences.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                        <div style={{ background: 'rgba(255,255,255,0.2)', padding: '12px', borderRadius: '50%' }}>🛡️</div>
                        <div>
                            <h3 style={{ margin: '0 0 5px 0', fontSize: '1.1rem' }}>Easy & Secure Registration</h3>
                            <p style={{ margin: '0', fontSize: '0.9rem', color: '#e5e7eb' }}>Your information is safe with us.</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                        <div style={{ background: 'rgba(255,255,255,0.2)', padding: '12px', borderRadius: '50%' }}>⚡</div>
                        <div>
                            <h3 style={{ margin: '0 0 5px 0', fontSize: '1.1rem' }}>Quick Access</h3>
                            <p style={{ margin: '0', fontSize: '0.9rem', color: '#e5e7eb' }}>Get started in just a few steps.</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                        <div style={{ background: 'rgba(255,255,255,0.2)', padding: '12px', borderRadius: '50%' }}>👤</div>
                        <div>
                            <h3 style={{ margin: '0 0 5px 0', fontSize: '1.1rem' }}>Personalized Experience</h3>
                            <p style={{ margin: '0', fontSize: '0.9rem', color: '#e5e7eb' }}>We tailor events to your unique needs.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side: Sign Up Form */}
            <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
                <div style={{ background: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', width: '100%', maxWidth: '550px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111', margin: '0 0 10px 0' }}>Sign Up</h2>
                        <p style={{ color: '#6b7280', margin: '0' }}>Fill in the details below to create your account</p>
                    </div>

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        
                        {/* Two Column Row 1 */}
                        <div style={{ display: 'flex', gap: '20px' }}>
                            <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required 
                                style={{ flex: '1', padding: '15px', border: '1px solid #d1d5db', borderRadius: '8px', outline: 'none' }} />
                            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required 
                                style={{ flex: '1', padding: '15px', border: '1px solid #d1d5db', borderRadius: '8px', outline: 'none' }} />
                        </div>

                        {/* Two Column Row 2 */}
                        <div style={{ display: 'flex', gap: '20px' }}>
                            <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required 
                                style={{ flex: '1', padding: '15px', border: '1px solid #d1d5db', borderRadius: '8px', outline: 'none' }} />
                            <input type="password" name="password" placeholder="🔒 Password" value={formData.password} onChange={handleChange} required 
                                style={{ flex: '1', padding: '15px', border: '1px solid #d1d5db', borderRadius: '8px', outline: 'none' }} />
                        </div>

                        {/* Full Width Confirm Password */}
                        <input type="password" name="confirmPassword" placeholder="🔒 Confirm Password" value={formData.confirmPassword} onChange={handleChange} required 
                            style={{ width: '100%', padding: '15px', border: '1px solid #d1d5db', borderRadius: '8px', outline: 'none', boxSizing: 'border-box' }} />
                        
                        <label style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#4b5563', fontSize: '0.9rem', cursor: 'pointer' }}>
                            <input type="checkbox" required /> 
                            <span>I agree to the <span style={{ color: '#a855f7' }}>Terms of Service</span> and <span style={{ color: '#a855f7' }}>Privacy Policy</span></span>
                        </label>

                        <button type="submit" style={{ 
                            background: 'linear-gradient(to right, #3b82f6, #ec4899)', 
                            color: 'white', padding: '15px', border: 'none', borderRadius: '8px', 
                            fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer'
                        }}>
                            Create Account
                        </button>
                    </form>

                    {status && <p style={{ textAlign: 'center', marginTop: '15px', color: status.includes('successfully') ? 'green' : 'red' }}>{status}</p>}

                    <p style={{ textAlign: 'center', marginTop: '25px', fontSize: '0.95rem', color: '#4b5563' }}>
                        Already have an account? <Link to="/login" style={{ color: '#a855f7', textDecoration: 'none', fontWeight: 'bold' }}>Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;