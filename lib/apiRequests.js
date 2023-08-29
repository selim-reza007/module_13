export async function getJsonResponse() {
    let res = await fetch("http://localhost:3000/api/jsonresponse");
    if (res.status != 200) {
        throw new Error();
    }
    return res.json();
}

export async function setCookiesApi() {
    let res = await fetch("http://localhost:3000/api/setcookie");
    if (res.status != 200) {
        throw new Error();
    }
    return res.json();
}

export async function getCookies() {
    let res = await fetch("http://localhost:3000/api/getcookie");

    if (res.status != 200) {
        throw new Error();
    }
    return res.json();
}

export async function setHeader() {
    let res = await fetch("http://localhost:3000/api/addheader");

    if (res.status != 200) {
        throw new Error();
    }
    return res.json();
}

export async function modifyHeader() {
    let res = await fetch("http://localhost:3000/api/moddheader");

    if (res.status != 200) {
        throw new Error();
    }
    return res.json();
}