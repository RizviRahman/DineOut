import FrequencyChart from './FrequencyChart';

export default function ItemFrequencyChart({ items, month }) {
  return (
    <section className="glass-card p-4">
      <h2 className="text-lg font-semibold mb-3">
        Items sold in {month ? `(${month})` : '(Current Month)'}
      </h2>
      <FrequencyChart items={items} />
    </section>
  );
}