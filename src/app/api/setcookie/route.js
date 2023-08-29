import { NextResponse } from "next/server";

export async function GET(req,res) {


    return NextResponse.json({msg:"succes"},{
        headers: {
            'Set-Cookie': ['language=en; Path=/; Expires=Wed, 31 Aug 2023 10:42:45 GMT;','theme=dark; Path=/; Expires=Wed, 31 Aug 2023 10:42:45 GMT;']
            
        }
    })
}