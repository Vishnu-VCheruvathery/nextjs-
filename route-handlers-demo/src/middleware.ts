import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest){
    
    const response = NextResponse.next()
    const themePreference = request.cookies.get("theme")
    if(!themePreference){
        request.cookies.set("theme", "dark");
    }

    response.headers.set("custom-header", "custom-value")

    return response;
    // return NextResponse.redirect(new URL("/", request.url))
    // if(request.nextUrl.pathname === '/profile'){
    //     return NextResponse.rewrite(new URL("/hello", request.nextUrl))
    // }
}

// export const config = {
//     matcher: "/profile"
// }