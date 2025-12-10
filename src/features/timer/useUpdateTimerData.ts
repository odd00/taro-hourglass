import { useState } from "react";
import { updateTask } from "../../services/apiTimer";

export function useUpdateData() {
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState<any>(null);

  const update = async (
    taskId: string,
    durationInSeconds: number,
    taskName?: string
  ) => {
    setIsUpdating(true);
    setError(null);

    try {
      await updateTask(taskId, durationInSeconds, taskName);
    } catch (err) {
      setError(err);
      console.error("更新数据遇到问题:", err);
    } finally {
      setIsUpdating(false);
    }
  };

  return {
    update,
    isUpdating,
    error,
  };
}
