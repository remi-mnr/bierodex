const App = () => {
  return (
    <main className="flex flex-col items-center md:p-4 space-y-4 h-screen max-md:bg-slate-50">
      <div className="md:rounded-lg md:border bg-card text-card-foreground md:shadow-sm w-full md:max-w-lg divide-y divide-slate-200 overflow-hidden">
        <div className="flex flex-col space-y-1.5 px-6 py-4 bg-emerald-500">
          <h2 className="text-2xl font-semibold bold text-white">⛽ Prix Essence</h2>
        </div>
        <div className="flex flex-col gap-y-3 px-4 py-6 h-full bg-slate-50">
        </div>
      </div>
    </main>
  )
}

export default App
