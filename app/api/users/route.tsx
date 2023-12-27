import schema from './schema';
import { NextResponse, NextRequest } from 'next/server';

export function GET(request: NextRequest) {
  return NextResponse.json([
    {
      id: 1,
      name: 'Manuel',
    },
    {
      id: 2,
      name: 'Mosh',
    },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  return NextResponse.json({ id: 1, name: body.name });
}
