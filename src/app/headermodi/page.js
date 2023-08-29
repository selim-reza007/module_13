"use client"

import { useEffect } from "react";
import { modifyHeader, setHeader } from "../../../lib/apiRequests";

export default function HeaderModification() {

    const setHeaderFun = async () => {
        let res = await setHeader();

        if (res.msg === "success") {
            alert("New header added successful!")
        }
    };


    const modifyHeaderFun = async () => {
        let res = await modifyHeader();

        // if (res.msg === "success") {
        //     alert("Header modified successful!")
        // }else{
        //     alert(res.msg)
        // }
    };

    return (
        <div className="flex flex-col">
            <div>
                To modify header first you need to add header. To add header<button onClick={setHeaderFun} className="p-1 bg-lime-400 rounded-lg">Click  here</button>
            </div>
            <div>
                <button onClick={modifyHeaderFun} className="p-1 bg-lime-400 rounded-lg">Click  here</button> to modify header
            </div>
        </div>
    );
}