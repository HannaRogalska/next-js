export interface Task  {
  title: string,
  completed: boolean,
  id: number
}

export interface PropsTasks {
  initialTasks: Task[]
}
 export interface Props {
   task: Task;
   onToggle: (id: number) => void;
 }