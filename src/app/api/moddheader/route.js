import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET(req, res) {

    // let headersList = headers();
    // let authorization = headersList.get('Authorization');
    return NextResponse.json({ msg: "success" });
}