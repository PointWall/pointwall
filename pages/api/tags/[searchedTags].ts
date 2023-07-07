// @ts-nocheck
import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export default async function handler(req: NextRequest, res: NextResponse) {
  if (req.method == "GET") {
    const { searchedTags } = req.query
    console.log(searchedTags)

    const tags = await prisma.tag.findMany({
      where: {
        value: {
          contains: searchedTags
        }
      }
    })
    
    return res.status(200).json({ tags });
  }

}
