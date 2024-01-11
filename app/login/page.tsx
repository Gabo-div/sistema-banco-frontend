export default function Home() {
  return (
    <main className="relative flex min-h-screen">
      <div className="flex grow bg-red-300">
      </div>
      <div className="flex absolute top-0 bottom-0 right-0 left-0 items-center justify-center sm:py-12 lg:p-0 lg:static">
        <div className="flex flex-col justify-center bg-white px-12 py-12 w-full h-full sm:w-[550px] sm:rounded-xl lg:rounded-none">
          <h1 className="text-4xl font-bold text-center mb-8">LOGO</h1>

          <form className="flex flex-col">
            <label>
              <span className="ml-1 mb-2 block">Correo</span>
              <input type="text" className="w-full px-3 py-3 rounded-xl bg-gray-100" placeholder="ejemplo@ejemplo.com" />
            </label>

            <label className="mt-6">
              <span className="ml-1 mb-2 block">Contraseña</span>
              <input type="password" className="w-full px-3 py-3 rounded-xl bg-gray-100" placeholder="*******" />
            </label>

            <button type="submit" className="mt-8 w-full px-3 py-3 rounded-xl bg-blue-500 text-white">Iniciar Sesion</button>
          </form>
          <div className="mt-6">
            <p>¿No tienes cuenta? <a href="#" className="text-blue-500">Registrate</a></p>
          </div>
        </div>
      </div >
    </main >
  )
}
