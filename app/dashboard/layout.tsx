import Link from "next/link";
import { IoMdSettings } from "react-icons/io";

export default function DashboardLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full">
      <div className="py-8 h-full min-w-[350px] flex flex-col items-center border-r border-gray-300">
        <div className="flex flex-col items-center">
          <div className="bg-blue-500 h-20 w-20 rounded-full">
          </div>
          <h1 className="text-xl mt-2 capitalize">Gabo</h1>
        </div>

        <div className="mt-12 w-full px-8 space-y-4">
          <p className="text-xs font-medium text-gray-700 uppercase">Principal</p>
          <Link className="block bg-blue-500 text-white w-full p-2 text-center rounded-full" href="/dashboard">
            Mi Cuenta
          </Link>
          <p className="text-xs font-medium text-gray-700 uppercase">Transferencias</p>
          <Link className="block ring-2 ring-blue-500 text-blue-500 w-full p-2 text-center rounded-full" href="/dashboard">
            Propias
          </Link>
          <Link className="block ring-2 ring-blue-500 text-blue-500 w-full p-2 text-center rounded-full" href="/dashboard">
            Terceros
          </Link>
        </div>

        <div className="mt-auto w-full px-8">
          <button className="hover:text-blue-500"><IoMdSettings className="text-xl" /></button>
        </div>
      </div>
      <div className="grow h-full px-12 py-12 overflow-y-auto">
        {children}
      </div>
    </div>
  )
}
