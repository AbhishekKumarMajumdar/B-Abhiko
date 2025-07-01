'use client';

import { useState } from 'react';
import { Github, Mail, Lock } from 'lucide-react';
import { signIn } from 'next-auth/react';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';
import api from '@/lib/axios';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await api.post('/auth/user/login', { email, password });

      if (!data?.token) {
        toast.error('Token missing in response');
        return;
      }

      // 🍪 store token (7 days)
      Cookies.set('auth_token', data.token, { expires: 7 });

      toast.success('Login successful! Redirecting...');
      setTimeout(() => (window.location.href = '/dashboard'), 1500);
    } catch (err: any) {
      const msg = err.response?.data?.error || 'Login failed';
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#060010] text-white flex items-center justify-center px-4">
      <div className="bg-[#0e0e12] border border-[#2a2a38] p-8 rounded-xl shadow-2xl max-w-md w-full space-y-6">
        <h1 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          Login
        </h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex items-center bg-[#1b1b23] border border-[#2a2a38] rounded px-3 py-2">
            <Mail className="w-4 h-4 text-gray-400 mr-2" />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-transparent focus:outline-none text-sm"
            />
          </div>

          <div className="flex items-center bg-[#1b1b23] border border-[#2a2a38] rounded px-3 py-2">
            <Lock className="w-4 h-4 text-gray-400 mr-2" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-transparent focus:outline-none text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 rounded font-semibold shadow-md bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:scale-[1.02] transition-all"
          >
            {loading ? 'Logging in…' : 'Login'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-400">— Or continue with —</p>

        <div className="flex gap-4">
          <button
            onClick={() => signIn('google')}
            className="flex-1 py-2 bg-[#1b1b23] border border-[#2a2a38] rounded hover:bg-[#232333] text-sm shadow hover:shadow-md"
          >
            Google
          </button>
          <button
            onClick={() => signIn('github')}
            className="flex-1 py-2 bg-[#1b1b23] border border-[#2a2a38] rounded hover:bg-[#232333] text-sm shadow hover:shadow-md"
          >
            <Github className="inline w-4 h-4 mr-2" /> GitHub
          </button>
        </div>
      </div>
    </div>
  );
}
