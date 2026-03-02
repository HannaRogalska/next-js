import { getStats } from "@/api/fakeApi";

export default async function DashboardPage() {
  const getData = await getStats();
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Overview</h1>
        <p className="text-gray-600">Welcome to TaskFlow</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Total tasks</h3>
          <p className="text-3xl font-bold mt-2">{getData.total}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">In process</h3>
          <p className="text-3xl font-bold mt-2">{getData.inProgress}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Completed</h3>
          <p className="text-3xl font-bold mt-2">{getData.completed}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Recent tasks</h2>

        <ul className="space-y-3">
          <li className="border-b pb-2">Make a design dashboard</li>
          <li className="border-b pb-2">Configure the database</li>
          <li>Add authorization</li>
        </ul>
      </div>
    </div>
  );
}
