import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/lib/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Test MongoDB connection
    const pingResult = await prismadb.$runCommandRaw({ ping: 1 });

    // Test a simple query (optional)
    const testUser = await prismadb.user.findFirst();

    res.status(200).json({
      success: true,
      ping: pingResult, // Should return { ok: 1 }
      testUser, // Returns the first user (if any)
    });
  } catch (error) {
    console.error("DB Test Error:", error);
    res.status(500).json({
      success: false,
      error: "MongoDB connection failed",
      details: error.message,
    });
  }
}
