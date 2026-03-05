export interface Task  {
  title: string,
  completed: boolean,
  description?: string
  id: number
}

export interface PropsTasks {
  initialTasks: Task[]
}
 export interface Props {
   task: Task;
   onToggle: (id: number) => void;
 }
export interface PropsForm {
  addTaskForm: ({ title, description, id, completed }: Task) => void;
}
