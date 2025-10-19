export default function DashboardHeader({ summary }) {
  return (
    <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 glass-card p-4">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <div className="flex gap-3">
        {summary.map(({ label, value }) => (
          <div key={label} className="bg-white/3 rounded-md px-4 py-2 text-sm">
            <div className="text-xs text-zinc-300">{label}</div>
            <div className="font-semibold">{value}</div>
          </div>
        ))}
      </div>
    </header>
  );
}