export default function Dashboard() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center w-full text-center p-8 bg-blue-500 rounded-md">
        <p className="flex flex-col items-start text-white">
          <span className="text-xs font-medium">Balance Total</span>
          <span className="text-4xl font-medium">$100.000,00</span>
        </p>
      </div>

      <div className="mt-8 border overflow-hidden border-blue-300 rounded-md">
        <div className="bg-blue-500 px-6 py-4 text-center border-b border-blue-300">
          <h3 className="font-medium text-white">Historial de Transferencias</h3>
        </div>
        <ol className="list-none space-y-4 py-4 px-6">
          <li>Transacción recibida: <span className="text-green-600">+$100.00</span></li>
          <li>Transacción enviada: <span className="text-red-600">-$100.00</span></li>
        </ol>

      </div>
    </div>
  )
}
