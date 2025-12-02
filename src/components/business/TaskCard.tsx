import { View, Text } from "@tarojs/components";
import { FC } from "react";

import { formatTime } from "../../features/timer/timerFuncs";

interface TaskCardProps {
  /** 任务的唯一ID */
  taskId: number;

  /** 任务的名称 */
  taskName: string;

  /** 任务已计时的总时间（单位：秒） */
  totalTimeInSeconds: number;

  /** 点击卡片时的处理函数 */
  onClick?: (taskId: number, taskName: string, totalTime: number) => void;
}

const TaskCard: FC<TaskCardProps> = ({
  taskId,
  taskName,
  totalTimeInSeconds,
  onClick,
}) => {
  const formattedTime = formatTime(totalTimeInSeconds);

  return (
    <View
      className="task-card"
      onClick={() => onClick?.(taskId, taskName, totalTimeInSeconds)}
    >
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
