'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import {
  User,
  LayoutDashboard,
  LogOut,
  ShieldCheck,
  Activity,
  Briefcase,
} from 'lucide-react';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<{ email?: string; name?: string } | null>(null);

  useEffect(() => {
    const token = Cookies.get('auth_token');

    if (!token) {
      router.push('/login');
    } else {
      // ✅ You can decode token here to extract user info
      setUser({
        email: 'you@example.com',
        name: 'John Doe',
      });
    }
  }, [router]);

  const handleLogout = () => {
    Cookies.remove('auth_token');
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-[#060010] text-white px-6 py-26">
      <div className="max-w-6xl mx-auto space-y-10">
        <header className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            Dashboard
          </h1>
          <button
            onClick={handleLogout}
            className="text-sm bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded shadow"
          >
            <LogOut className="inline w-4 h-4 mr-1" />
            Logout
          </button>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-[#1b1b23] border border-[#2a2a38] rounded-xl p-6 space-y-2 shadow-md">
            <div className="flex items-center space-x-3">
              <User className="w-6 h-6 text-blue-400" />
              <h2 className="text-xl font-semibold">Your Account</h2>
            </div>
            <p className="text-gray-400 text-sm">Name: {user?.name}</p>
            <p className="text-gray-400 text-sm">Email: {user?.email}</p>
          </div>

          <div className="bg-[#1b1b23] border border-[#2a2a38] rounded-xl p-6 space-y-2 shadow-md">
            <div className="flex items-center space-x-3">
              <LayoutDashboard className="w-6 h-6 text-purple-400" />
              <h2 className="text-xl font-semibold">Quick Stats</h2>
            </div>
            <p className="text-gray-400 text-sm">Projects: 12</p>
            <p className="text-gray-400 text-sm">Tasks: 87</p>
          </div>

          <div className="bg-[#1b1b23] border border-[#2a2a38] rounded-xl p-6 space-y-2 shadow-md">
            <div className="flex items-center space-x-3">
              <ShieldCheck className="w-6 h-6 text-green-400" />
              <h2 className="text-xl font-semibold">Security</h2>
            </div>
            <p className="text-gray-400 text-sm">Login Method: Cookie</p>
            <p className="text-gray-400 text-sm">Token Stored: Yes</p>
          </div>
        </section>

        <section className="bg-[#1b1b23] border border-[#2a2a38] rounded-xl p-6 mt-10 shadow-md">
          <div className="flex items-center space-x-3 mb-3">
            <Activity className="w-5 h-5 text-yellow-400" />
            <h2 className="text-lg font-semibold">Recent Activity</h2>
          </div>
          <ul className="text-sm text-gray-400 space-y-1 list-disc pl-5">
            <li>Logged in successfully</li>
            <li>Viewed 5 projects</li>
            <li>Updated profile info</li>
          </ul>
        </section>

        <section className="bg-[#1b1b23] border border-[#2a2a38] rounded-xl p-6 mt-6 shadow-md">
          <div className="flex items-center space-x-3 mb-3">
            <Briefcase className="w-5 h-5 text-cyan-400" />
            <h2 className="text-lg font-semibold">Explore More</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-300">
            <button className="px-4 py-2 rounded bg-blue-800 hover:bg-blue-900 transition">My Projects</button>
            <button className="px-4 py-2 rounded bg-purple-800 hover:bg-purple-900 transition">Edit Profile</button>
            <button className="px-4 py-2 rounded bg-pink-800 hover:bg-pink-900 transition">Settings</button>
          </div>
        </section>
      </div>
    </div>
  );
}
