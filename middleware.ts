// middleware.ts
import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host");
  const url = request.nextUrl;

  // Если запрошен корневой путь, переписываем его на /[host]
  if (url.pathname === "/" || url.pathname === "") {
    url.pathname = `/${host}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
