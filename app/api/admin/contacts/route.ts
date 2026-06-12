import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { cookies } from 'next/headers'

async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies()
  const token = cookieStore.get('admin_token')?.value
  return !!token && token === process.env.ADMIN_PASSWORD
}

export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const submissions = await prisma.contactSubmission.findMany({
    orderBy: { createdAt: 'desc' },
  })

  return NextResponse.json(submissions)
}

export async function PATCH(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id, read } = await req.json()
  const updated = await prisma.contactSubmission.update({
    where: { id },
    data: { read },
  })

  return NextResponse.json(updated)
}
