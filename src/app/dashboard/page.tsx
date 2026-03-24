
import { getTasks } from "@/app/actions/taskActions";
import TasksClient from "@/components/TasksClient";
import { Task } from "@/types/Task";


export default async function DashboardPage() {

  const tasks: Task[] = await getTasks();
  
  

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Overview</h1>
        <p className="text-gray-600">Welcome to TaskFlow</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Recent tasks</h2>
        <TasksClient initialTasks={tasks} />
      </div>
    </div>
  );
}
