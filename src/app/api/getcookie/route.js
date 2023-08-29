import { NextResponse } from "next/server";

export async function GET(req,res) {

    let cookie_1 = req.cookies.get('theme');
    let cookie_2 = req.cookies.get('language');

    return NextResponse.json({
        cookie: [cookie_1,cookie_2]
    })
}