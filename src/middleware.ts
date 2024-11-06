import { NextResponse, type NextRequest } from 'next/server'
import { updateSession } from './utils/supabase/middleware'
import { createClient } from './utils/supabase/server'


const protectedRoutes = ['/dashboard', '/user']

export async function middleware(request: NextRequest) {
  const supabase = await createClient();
  const { data, error} = await supabase.auth.getUser()

  
  if(!data && protectedRoutes.includes(request.nextUrl.pathname) ) {
    const absoluteUrl = new URL("/", request.nextUrl.origin);
    return NextResponse.redirect(absoluteUrl.toString())

  }

  return await updateSession(request)
}

export const config = {
  matcher: ['/dashboard', '/user'],
}