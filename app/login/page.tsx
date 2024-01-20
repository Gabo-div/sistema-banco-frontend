import LoginForm from "@/components/LoginForm";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-screen">
      <div className="flex grow bg-red-300">
      </div>
      <div className="flex fixed right-0 top-0 left-0 bottom-0 overflow-y-auto justify-center sm:py-12 lg:p-0 lg:static">
        <div className="bg-white px-12 py-12 w-full min-h-full overflow-y-auto sm:min-h-min sm:h-fit sm:w-[550px] sm:rounded-xl lg:rounded-none">
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold text-center mb-8">LOGO</h1>
            <LoginForm />
            <div className="mt-6">
              <p>¿No tienes cuenta? {" "}
                <Link className="text-blue-400 underline" href="/register">Sign in</Link>
              </p>
            </div>

          </div>
        </div>
      </div >
    </main >

  )
}
