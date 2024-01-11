import Link from 'next/link'

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center bg-white px-12 py-12 w-full h-screen space-y-2">
      <Link href="/login" className="font-bold text-3xl hover:underline">Login</Link>
      <Link href="/register" className="font-bold text-3xl hover:underline">Register</Link>
    </div>
  )
}
