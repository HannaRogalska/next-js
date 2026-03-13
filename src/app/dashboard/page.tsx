import { getStats, allTasks } from "@/api/fakeApi";
import TasksClient from "@/components/TasksClient";

export default async function DashboardPage() {
  const [getData, getTasks] = await Promise.all([getStats(), allTasks()]);
 

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Overview</h1>
        <p className="text-gray-600">Welcome to TaskFlow</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Recent tasks</h2>
          <TasksClient initialTasks={getTasks} />
      </div>
    </div>
  );
}
