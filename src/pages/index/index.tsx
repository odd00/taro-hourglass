import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import TaskCard from "../../components/business/TaskCard";

// 测试用数据列表，实际从后端获取
const mockTasks = [
  { id: 1, name: "画素描", time: 7200 + 45 * 60 + 30 }, // 2小时45分30秒
  { id: 2, name: "运动健身", time: 3600 + 15 * 60 }, // 1小时15分钟
  { id: 3, name: "阅读", time: 450 }, // 7分30秒
];

export default function Index() {
  const handleCardClick = (
    taskId: number,
    taskName: string,
    totalTime: number
  ) => {
    Taro.navigateTo({
      url: `/packages/timerPackage/pages/timer/timer?name=${encodeURIComponent(
        taskName
      )}&time=${totalTime}&id=${taskId}`,
    });
  };

  return (
    <View className="page-wrapper">
      {mockTasks.map((task) => (
        <TaskCard
          taskId={task.id}
          taskName={task.name}
          totalTimeInSeconds={task.time}
          onClick={() => handleCardClick(task.id, task.name, task.time)}
        />
      ))}
    </View>
  );
}
