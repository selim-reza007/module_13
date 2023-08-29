"use client"

import { useState } from "react";
import { getCookies, setCookiesApi } from "../../../lib/apiRequests";

export default function Cookie() {

    const [cookies, setCookies] = useState();

    const setCookiesFun = () => {
        let res = setCookiesApi();
        alert("2 cookies successfully added!");
    }

    const getCookiesFun = async () => {
        let res = await getCookies();
        setCookies(res.cookie);
    }
    
    return (
        <div>
            <div className="flex justify-center gap-2">
                <button className="p-5 bg-lime-400 rounded-lg" onClick={setCookiesFun}>Set Cookies</button>
                <button className="p-5 bg-lime-400 rounded-lg" onClick={getCookiesFun}>Get Cookies</button>
            </div>
            <div className="border mt-5 p-32 mx-80 bg-orange-100 ">
                {cookies?.map((ci,i)=> {
                    return (
                        <p key={i}>Cookie {i+1} = Name : {ci['name']} - Value : {ci['value']}</p>
                    )
                })}
            </div>
        </div>
    );
}