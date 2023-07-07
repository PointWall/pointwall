// @ts-nocheck
import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export default async function handler(req: NextRequest, res: NextResponse) {
  if (req.method == "POST") {
    const { value } = req.body;
    console.log(req.body);

    const newTag = await prisma.tag.create({
      data: {
        value
      },
    });

    return res.status(200).json({ newTag });
  }

  if (req.method == "GET") {
    const tags = await prisma.tag.findMany()
    return res.status(200).json({ tags });
  }

  if (req.method == 'PUT') {
    const { value } = req.body;

      const updatedTag = await prisma.tag.create({
        data: {
          value
        },
      });
      
    return res.status(200).json({ updatedTag })
  }

  if (req.method == 'DELETE') {
    const { value } = req.body
    await prisma.post.delete({
      where: {
        value: value,
      },
    })
    return res.status(200).json({ message: 'ok' })
  }
}
