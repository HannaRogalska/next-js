import { getStats, allTasks } from "@/api/fakeApi";
import { TaskCard } from "@/components/TaskCard";

export default async function DashboardPage() {
    const getData = await getStats();
    const getTasks = await allTasks();
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
          {getTasks.map((el) => (
              <TaskCard key={el.id} title={el.title} completed={ el.completed} id={el.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}
