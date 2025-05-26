import React, { useState } from 'react';
import TypewriterText from './TypewriterText';

interface LoginProps {
  onLogin: (username: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      onLogin(username.trim());
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', position: 'relative' }}>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <TypewriterText 
          text="Test your coding skills and debug like a pro!" 
          speed={30} 
          className="text-2xl font-semibold biorhyme-regular text-blue-800" 
        />
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ marginBottom: '10px', textAlign: 'center' }}>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2 biorhyme-regular">
              Username:
            </label>
          </div>
          
          <div style={{ marginTop: '15px' }}>
            <input
              type="text"
              id="username"
              className="input w-64 biorhyme-regular text-center"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: '20px', width: '100%', textAlign: 'center' }}>
          <button
            type="submit"
            style={{
              backgroundColor: username.trim() ? '#2ecc71' : '#a7e9c3',
              color: 'white',
              cursor: username.trim() ? 'pointer' : 'not-allowed',
              padding: '12px 24px',
              borderRadius: '6px',
              border: 'none',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
              transition: 'all 0.3s ease',
              fontSize: '16px',
              fontWeight: 'bold',
              display: 'inline-block'
            }}
            disabled={!username.trim()}
          >
            Start Playing 🚀
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
