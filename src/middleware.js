import { NextResponse } from "next/server";

export function middleware(req, res) {
    if (req.nextUrl.pathname.startsWith('/api/moddheader')) {
        const reqHeader = new Headers(req.headers);
        const token = reqHeader.get("Authorization");

        console.log(token); //Here while I am requesting from postman, I am getting exact token value. But when I am doing the same thing from browser I am gettig null as token value. If you identify the problem please kindly mention it while giving assignment feedback. 
        
        if (token === "ABC-DEF") {
            const res = NextResponse.next();
            res.headers.set("Authorization", `Bearer-${token}`);
            return res;
        }
        else {
            return NextResponse.json({ msg: "Failed from middleware" });
        }

    }
}