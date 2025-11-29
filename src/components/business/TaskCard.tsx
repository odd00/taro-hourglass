import { View, Text } from "@tarojs/components";
import { FC } from "react";

/**
 * 将总秒数格式化为 HH:MM:SS 格式
 * @param totalSeconds 总秒数
 * @returns 格式化后的时间字符串
 */

const formatTime = (totalSeconds: number): string => {
  // 确保输入是正整数
  const seconds = Math.max(0, Math.floor(totalSeconds));

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  // 使用 padStart 确保始终显示两位数
  const pad = (num: number) => num.toString().padStart(2, "0");

  return `${pad(hours)}:${pad(minutes)}:${pad(remainingSeconds)}`;
};

interface TaskCardProps {
  /** 任务的唯一ID */
  taskId: number;

  /** 任务的名称 */
  taskName: string;

  /** 任务已计时的总时间（单位：秒） */
  totalTimeInSeconds: number;

  /** 点击卡片时的处理函数 */
  onClick?: (taskId: number) => void;
}

const TaskCard: FC<TaskCardProps> = ({
  taskId,
  taskName,
  totalTimeInSeconds,
  onClick,
}) => {
  const formattedTime = formatTime(totalTimeInSeconds);

  const handleClick = () => {
    if (onClick) {
      onClick(taskId);
    }
  };

  return (
    <View className="task-card" onClick={handleClick}>
      {/* 任务名称 */}
      <Text className="task-card__name">{taskName}</Text>

      {/* 已计时的总时间 */}
      <View className="task-card__time-wrapper">
        <Text className="task-card__time-label">累计时长</Text>
        <Text className="task-card__time">{formattedTime}</Text>
      </View>
    </View>
  );
};

export default TaskCard;
