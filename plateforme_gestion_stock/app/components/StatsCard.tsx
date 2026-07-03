type StatsCardProps = {
  title: string;
  value: number | string;
};

export default function StatsCard({ title, value }: StatsCardProps) {
  return (
    <div className="border rounded p-4 bg-white shadow-sm">
      <h3 className="text-sm font-semibold text-gray-600">{title}</h3>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  );
}
