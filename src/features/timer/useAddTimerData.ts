import { useState } from "react";
import { addTask } from "@/services/apiTimer";

type UseAddTimerDataReturn = {
  add: (taskName: string) => Promise<void>;
  isAdding: boolean;
  error: any;
};

const useAddTimerData = (): UseAddTimerDataReturn => {
  const [isAdding, setIsAdding] = useState(false);
  const [error, setError] = useState<any>(null);
  const add = async (taskName: string) => {
    setIsAdding(true);
    setError(null);
    try {
      await addTask(taskName);
    } catch (err) {
      setError(err);
      console.error("添加数据遇到问题:", err);
    } finally {
      setIsAdding(false);
    }
  };

  return {
    add,
    isAdding,
    error,
  };
};

export default useAddTimerData;
