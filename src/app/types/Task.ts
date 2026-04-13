export interface Task  {
  title: string,
  completed: boolean,
  description: string
  id: string
}

export interface PropsForm {
  addTaskForm: ({ title, description, id, completed }: Task) => void;
}
 export interface Props {
   task: Task;
   onToggle: (id: string) => void;
   onDelete: (id: string) => void;
   onEdit: (task: Task) => void;
 }
export interface PropsTasks {
  initialTasks: Task[];
}
export interface EditTaskModalProps {
  task: Task; 
  onClose: () => void; 
  onSave: (updatedTask: Task) => void; 
}
