import Article from "@/src/modalMongodb/Article";
import { connect } from "@/src/utils/ConnectDB";
import { NextResponse } from "next/server";
export const dynamic = 'force-static'

export const GET = async () => {
  try {
    await connect();
    const articles = await Article.find();
    return new NextResponse(JSON.stringify(articles), { status: 200 });
  } catch (err) {
    console.error(err);
    return new NextResponse("Error database", { status: 500 });
  }
};
