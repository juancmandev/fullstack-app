import prisma from '@/libs/db';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    if (!req.body) {
      return NextResponse.json({
        ok: false,
        status: 400,
        message: 'Data required',
      });
    }

    const json = await req.json();
    const res = await prisma.post.create({
      data: json,
    });

    return NextResponse.json({
      ok: true,
      status: 201,
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

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const res = await prisma.post.update({
      where: { id: body.id },
      data: {
        title: body.title,
        content: body.content,
      },
    });

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

export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json();
    const res = await prisma.post.delete({
      where: { id: body.id },
    });

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
