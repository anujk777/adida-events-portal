import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Ensure react-router-dom is installed

const Login = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [status, setStatus] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Logging in...');

        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials),
            });
            const data = await response.json();

            if (response.ok) {
                setStatus('Login successful!');
                localStorage.setItem('token', data.token); // Save JWT token
                navigate('/'); // Redirect to home or dashboard
            } else {
                setStatus(data.message || 'Invalid credentials.');
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
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '10px' }}>Welcome Back!</h1>
                <div style={{ height: '4px', width: '60px', background: 'linear-gradient(to right, #3b82f6, #ec4899)', marginBottom: '20px' }}></div>
                <p style={{ fontSize: '1.1rem', marginBottom: '40px', maxWidth: '400px', lineHeight: '1.5' }}>
                    Login to your account and continue planning memorable events.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                        <div style={{ background: 'rgba(255,255,255,0.2)', padding: '12px', borderRadius: '50%' }}>🔒</div>
                        <div>
                            <h3 style={{ margin: '0 0 5px 0', fontSize: '1.1rem' }}>Secure Login</h3>
                            <p style={{ margin: '0', fontSize: '0.9rem', color: '#e5e7eb' }}>Your data is protected with advanced security.</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                        <div style={{ background: 'rgba(255,255,255,0.2)', padding: '12px', borderRadius: '50%' }}>⏱️</div>
                        <div>
                            <h3 style={{ margin: '0 0 5px 0', fontSize: '1.1rem' }}>Seamless Access</h3>
                            <p style={{ margin: '0', fontSize: '0.9rem', color: '#e5e7eb' }}>Quickly access your dashboard and events.</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                        <div style={{ background: 'rgba(255,255,255,0.2)', padding: '12px', borderRadius: '50%' }}>📅</div>
                        <div>
                            <h3 style={{ margin: '0 0 5px 0', fontSize: '1.1rem' }}>Manage Everything</h3>
                            <p style={{ margin: '0', fontSize: '0.9rem', color: '#e5e7eb' }}>Track bookings, inquiries, and more in one place.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side: Login Form */}
            <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
                <div style={{ background: 'white', padding: '50px', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', width: '100%', maxWidth: '450px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111', margin: '0 0 10px 0' }}>Login</h2>
                        <p style={{ color: '#6b7280', margin: '0' }}>Enter your credentials to access your account</p>
                    </div>

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="✉️ Email Address" 
                            value={credentials.email} 
                            onChange={handleChange} 
                            required 
                            style={{ padding: '15px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '1rem', outline: 'none' }}
                        />
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="🔒 Password" 
                            value={credentials.password} 
                            onChange={handleChange} 
                            required 
                            style={{ padding: '15px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '1rem', outline: 'none' }}
                        />
                        
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem' }}>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#4b5563', cursor: 'pointer' }}>
                                <input type="checkbox" /> Remember me
                            </label>
                            <Link to="/forgot-password" style={{ color: '#a855f7', textDecoration: 'none' }}>Forgot Password?</Link>
                        </div>

                        <button type="submit" style={{ 
                            background: 'linear-gradient(to right, #3b82f6, #ec4899)', 
                            color: 'white', padding: '15px', border: 'none', borderRadius: '8px', 
                            fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px'
                        }}>
                            Login
                        </button>
                    </form>

                    {status && <p style={{ textAlign: 'center', marginTop: '15px', color: status.includes('successful') ? 'green' : 'red' }}>{status}</p>}

                    <p style={{ textAlign: 'center', marginTop: '25px', fontSize: '0.95rem', color: '#4b5563' }}>
                        Don't have an account? <Link to="/signup" style={{ color: '#a855f7', textDecoration: 'none', fontWeight: 'bold' }}>Sign Up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;