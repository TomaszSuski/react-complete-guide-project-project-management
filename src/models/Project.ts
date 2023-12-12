import Task from "./Task";

export default interface Project {
  id: number;
  title: string;
  description: string;
  dueDate: string | Date;
  tasks: Task[];
}
