'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { Github, Mail, Lock, LogIn, User , Phone} from 'lucide-react';

export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen bg-[#060010] text-white flex items-center justify-center px-4">
      <div className="bg-[#0e0e12] border border-[#2a2a38] p-8 rounded-xl shadow-2xl max-w-md w-full space-y-6">
        <h1 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          {isSignUp ? 'Create Account' : 'Welcome Back'}
        </h1>

        <form className="space-y-4">
          {isSignUp && (
            <div className="flex items-center border border-[#2a2a38] rounded px-3 py-2 bg-[#1b1b23]">
              <User className="w-4 h-4 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-transparent text-white focus:outline-none text-sm"
              />
            </div>
          )}
          <div className="flex items-center border border-[#2a2a38] rounded px-3 py-2 bg-[#1b1b23]">
            <Phone className="w-4 h-4 text-gray-400 mr-2" />
            <input
              type="Number"
              placeholder="Mobile No."
              className="w-full bg-transparent text-white focus:outline-none text-sm"
            />
          </div>
          <div className="flex items-center border border-[#2a2a38] rounded px-3 py-2 bg-[#1b1b23]">
            <Mail className="w-4 h-4 text-gray-400 mr-2" />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-transparent text-white focus:outline-none text-sm"
            />
          </div>
          <div className="flex items-center border border-[#2a2a38] rounded px-3 py-2 bg-[#1b1b23]">
            <Lock className="w-4 h-4 text-gray-400 mr-2" />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-transparent text-white focus:outline-none text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-2 rounded font-semibold shadow-md hover:scale-[1.02] transition-all"
          >
            {isSignUp ? 'Sign Up' : 'Login'}
          </button>
        </form>

        <div className="text-center text-sm text-gray-400">
          — Or continue with —
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => signIn('google')}
            className="flex-1 py-2 border border-[#2a2a38] bg-[#1b1b23] hover:bg-[#232333] text-sm rounded text-white shadow hover:shadow-md transition-all"
          >
            <span className="mr-2"></span> Google
          </button>
          <button
            onClick={() => signIn('github')}
            className="flex-1 py-2 border border-[#2a2a38] bg-[#1b1b23] hover:bg-[#232333] text-sm rounded text-white shadow hover:shadow-md transition-all"
          >
            <Github className="inline w-4 h-4 mr-2" /> GitHub
          </button>
        </div>

        <div className="text-center text-sm text-gray-400">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-blue-400 hover:underline"
          >
            {isSignUp ? 'Login' : 'Sign Up'}
          </button>
        </div>
      </div>
    </div>
  );
}
