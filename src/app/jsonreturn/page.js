import Link from "next/link";
import { getJsonResponse } from "../../../lib/apiRequests";

export default async function JSONReturn() {

    const resData = await getJsonResponse();
    
    return (
        <div>
            <div className="border p-10 mx-80 bg-orange-100">
                <p>JSON Response:</p>
                <p>{
                    JSON.stringify(resData)
                }</p>
            </div>
            
            <div className="mt-60 flex flex-col items-center">
                <Link href={'http://localhost:3000/api/redirect'} className="p-3 bg-slate-300 rounded-lg w-48">Redirect to home</Link>
                <p className="w-96">Here the redirect is applied on the above link. You can see the url if you hover the cursour over the link. But after clicking the link it will redirect you to root insted of that link</p>
            </div>
        </div>
    );
}