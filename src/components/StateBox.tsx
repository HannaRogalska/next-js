import { PropsTasks} from '@/types/Task';


const StateBox = ({ initialTasks }: PropsTasks) => {
   const completed = initialTasks.filter((task) => task.completed).length;
    const inProcess = initialTasks.filter((task) => !task.completed).length;
   
    
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-gray-500">Total tasks</h3>
        <p className="text-3xl font-bold mt-2">{initialTasks.length}</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-gray-500">In process</h3>
        <p className="text-3xl font-bold mt-2">{inProcess}</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-gray-500">Completed</h3>
        <p className="text-3xl font-bold mt-2">{completed}</p>
      </div>
    </div>
  );
}

export default StateBox
