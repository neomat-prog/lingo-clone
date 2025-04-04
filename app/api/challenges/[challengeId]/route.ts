// import { eq } from "drizzle-orm";
// import { NextResponse, type NextRequest } from "next/server";

// import db from "@/db/drizzle";
// import { challenges } from "@/db/schema";
// import { isAdmin } from "@/lib/admin";

// export const GET = async (
//   _req: NextRequest,
//   { params }: { params: { challengeId: string } }
// ) => {
//   if (!isAdmin) return new NextResponse("Unauthorized", { status: 401 });

//   const data = await db.query.challenges.findFirst({
//     where: eq(challenges.id, Number(params.challengeId)),
//   });

//   return NextResponse.json(data);
// };

// export const PUT = async (
//   req: NextRequest,
//   { params }: { params: { challengeId: string } }
// ) => {
//   if (!isAdmin) return new NextResponse("Unauthorized", { status: 401 });

//   const body = await req.json();
//   const data = await db
//     .update(challenges)
//     .set(body)
//     .where(eq(challenges.id, Number(params.challengeId)))
//     .returning();

//   return NextResponse.json(data[0]);
// };

// export const DELETE = async (
//   _req: NextRequest,
//   { params }: { params: { challengeId: string } }
// ) => {
//   if (!isAdmin) return new NextResponse("Unauthorized", { status: 401 });

//   const data = await db
//     .delete(challenges)
//     .where(eq(challenges.id, Number(params.challengeId)))
//     .returning();

//   return NextResponse.json(data[0]);
// };