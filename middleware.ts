import { NextRequest, NextResponse } from "next/server";

const basicAuthUser = process.env.BASIC_AUTH_USER || "";
const basicAuthPass = process.env.BASIC_AUTH_PASS || "";

function isAuthorized(request: NextRequest) {
  const auth = request.headers.get("authorization");
  if (!auth || !auth.startsWith("Basic ")) {
    return false;
  }
  const base64 = auth.slice(6);
  const decoded = Buffer.from(base64, "base64").toString("utf8");
  const [user, pass] = decoded.split(":");
  return user === basicAuthUser && pass === basicAuthPass;
}

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");

  if (!basicAuthUser || !basicAuthPass) {
    return response;
  }

  if (isAuthorized(request)) {
    return response;
  }

  return new NextResponse("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Restricted Area"',
      "X-Robots-Tag": "noindex, nofollow, noarchive",
    },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
