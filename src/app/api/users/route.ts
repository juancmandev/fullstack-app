import prisma from '@/libs/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await prisma.user.findMany();

    if (!res || res.length === 0) {
      return NextResponse.json({
        ok: false,
        status: 404,
        message: 'No records',
      });
    }

    return NextResponse.json({
      ok: true,
      status: 200,
      data: res,
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({
        ok: false,
        status: 500,
        message: error.message,
      });
    }

    return NextResponse.json({
      ok: false,
      status: 500,
      message: 'Internal server error',
    });
  }
}
