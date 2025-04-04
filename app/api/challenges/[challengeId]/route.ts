import { eq } from "drizzle-orm";
import { NextResponse, type NextRequest } from "next/server";

import db from "@/db/drizzle";
import { challenges } from "@/db/schema";
import { isAdmin } from "@/lib/admin";

// GET handler
export async function GET(
  _req: NextRequest,
  { params }: { params: { challengeId: string } }
) {
  return NextResponse.json({ challengeId: params.challengeId });
}

console.log(typeof challenges.id);

// PUT handler
export async function PUT(
  req: NextRequest,
  context: { params: { challengeId: string } }
) {
  if (!isAdmin()) return new NextResponse("Unauthorized", { status: 401 });

  const body = await req.json();
  const data = await db
    .update(challenges)
    .set(body)
    .where(eq(challenges.id, Number(context.params.challengeId)))
    .returning();

  return NextResponse.json(data[0]);
}

// DELETE handler
export async function DELETE(
  _req: NextRequest,
  context: { params: { challengeId: string } }
) {
  if (!isAdmin()) return new NextResponse("Unauthorized", { status: 401 });

  const data = await db
    .delete(challenges)
    .where(eq(challenges.id, Number(context.params.challengeId)))
    .returning();

  return NextResponse.json(data[0]);
}
