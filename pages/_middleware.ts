import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const { nextUrl, ua } = req;

  if (hasPlatfromPrefix(nextUrl.pathname)) {
    nextUrl.pathname = nextUrl.pathname.replace(regExp, "");
    return NextResponse.redirect(nextUrl);
  }

  const platform: Platform = ua?.device?.type === "mobile" ? "mobile" : "desktop";
  nextUrl.pathname = `/${platform}${nextUrl.pathname}`;
  return NextResponse.rewrite(nextUrl);
}

const platforms = ["mobile" as const, "desktop" as const];

type Platform = typeof platforms[number];

const hasPlatfromPrefix = (pathname: string): boolean => {
  return platforms.some((platform) => {
    return pathname === `/${platform}` || pathname.startsWith(`/${platform}/`);
  });
};

const regExp = /\/[^/]*/;
