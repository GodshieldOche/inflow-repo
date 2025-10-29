import { NextRequest, NextResponse } from 'next/server';
import paddle from '@/lib/paddle';
import { tiers } from '@/lib/pricing-config';

export async function POST(req: NextRequest) {
  const { priceId, email } = await req.json();

  try {
    const checkout = await paddle.checkouts.create({
      items: [{ price_id: priceId, quantity: 1 }],
      customer: { email },
    });

    return NextResponse.json({ url: checkout.url });
  } catch (error) {
    console.error(error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
