// src/app/api/auth/user/register/route.ts

import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';

export async function POST(req: NextRequest) {
  const { email, password, mobile_no } = await req.json();

  if (!email || !password || !mobile_no) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  try {
    await dbConnect();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: 'Email already exists.' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      email,
      mobile_no,
      password: hashedPassword,
      role: 'user',
      purchased_projects: [],
    });

    return NextResponse.json({
      message: 'User registered successfully',
      user: {
        _id: newUser._id,
        email: newUser.email,
        mobile_no: newUser.mobile_no,
        role: newUser.role,
      },
    }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
