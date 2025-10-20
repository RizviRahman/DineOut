import SimpleBarChart from './SimpleBarChart';

export default function RevenueChart({ data, months, selectedMonth, setSelectedMonth }) {
  return (
    <section className="glass-card p-4">
      <h2 className="text-lg font-semibold mb-3">
        Revenue {selectedMonth !== null ? `(${months[selectedMonth]})` : '(last 12 months)'}
      </h2>
      <SimpleBarChart 
        data={data}
        months={months}
        selectedBar={selectedMonth}
        onBarClick={setSelectedMonth}
      />
    </section>
  );
}