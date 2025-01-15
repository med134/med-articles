import Likes from "@/src/modalMongodb/Likes";
import { connect } from "@/src/utils/ConnectDB";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return new NextResponse("Missing id parameter", { status: 400 });
  }

  try {
    await connect();
    const comments = await Likes.find({ blogId: id });
    return new NextResponse(JSON.stringify(comments), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse("Error database", { status: 500 });
  }
};
