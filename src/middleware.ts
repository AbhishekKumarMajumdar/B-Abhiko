import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('auth_token')?.value;

  const isAuth = !!token;
  const url = req.nextUrl;

  // 1️⃣ If user is logged in and tries to access /login → redirect to /dashboard
  if (isAuth && url.pathname === '/login') {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  // 2️⃣ If user is NOT logged in and tries to access /dashboard → redirect to /login
  if (!isAuth && url.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}
