import schema from '../schema';
import { NextRequest, NextResponse } from 'next/server';

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10)
    return NextResponse.json({ error: 'Products not found' }, { status: 404 });

  return NextResponse.json({ id: 1, name: 'Milk', price: 5 }, { status: 201 });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // validate the request body & if is invalid return 400 bad request

  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  //fetch the products with the given id If doesn't exist, return 404
  if (params.id > 10)
    return NextResponse.json({ error: 'Products not found' }, { status: 404 });
  //Update the products Return the updated products
  return NextResponse.json({ id: 1, name: body.name, price: body.price });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // Fetch Products from db If   not found, return 404
  if (params.id > 10)
    return NextResponse.json({ error: 'Products not found' }, { status: 404 });

  // Delete the Products return 200
  return NextResponse.json({});
}
