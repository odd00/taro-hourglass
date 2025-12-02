import { useRouter } from "@tarojs/taro";

export const useTaskData = () => {
  const router = useRouter();
  const taskId = router.params.id || "";
  const taskName = router.params.name
    ? decodeURIComponent(router.params.name)
    : "";
  const totalTime = router.params.time || "0";

  return { taskId, taskName, totalTime };
};
