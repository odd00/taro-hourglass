import { useState, useEffect } from "react";
import { getAllTasks, TaskRecord } from "../../services/apiTimer";

const useGetTimerData = (): {
  tasks: TaskRecord[];
  isLoading: boolean;
  error: string | null;
} => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTaskData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const tasks = await getAllTasks();
        setTasks(tasks);
      } catch (err) {
        setError(err);
        console.error("更新数据遇到问题:", err);
        setTasks([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadTaskData();
  }, []);
  return { tasks, isLoading, error };
};

export default useGetTimerData;
