'use client';

import { useState } from 'react';

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
}

const LoginForm = ({ onLogin }: LoginFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setError('');
    onLogin(email, password);
  };

  return (
    <div className="card border-t-4 border-primary">
      <h2 className="text-2xl font-bold mb-6 text-center text-foreground">Sign In</h2>
      
      {error && (
        <div className="bg-red-900/30 border border-red-500/50 text-red-300 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
        </div>
        
        <div className="mb-6">
          <div className="flex items-center justify-between mb-1">
            <label htmlFor="password" className="block text-sm font-medium text-gray">
              Password
            </label>
            <a href="#" className="text-sm text-primary hover:text-primary-light">
              Forgot Password?
            </a>
          </div>
          <input
            type="password"
            id="password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
          />
        </div>
        
        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            id="remember-me"
            className="h-4 w-4 text-primary border-gray rounded"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray">
            Remember me
          </label>
        </div>
        
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-primary to-warning text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginForm; 