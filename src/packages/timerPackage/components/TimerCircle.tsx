import { View, Text } from "@tarojs/components";
import { FC, useState, useEffect, useRef } from "react";
import { formatTime } from "../../../features/timer/timerFuncs";

interface TimerCircleProps {
  /** 任务的总累计时间（仅显示） */
  totalTimeInSeconds: number;
  /** 是否正在运行（控制计时器启动/停止） */
  isRunning: boolean;
  /** 当计时时间更新时触发的回调 */
  onTimeUpdate?: (time: number) => void;
}

const TimerCircle: FC<TimerCircleProps> = ({
  isRunning,
  totalTimeInSeconds,
  onTimeUpdate,
}) => {
  // 1. 核心状态：当前计时器的时间
  const [elapsedTime, setElapsedTime] = useState(0);
  // Ref 用于存储 interval ID，以便在 cleanup 时清除
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // 2. 效果钩子：处理计时器的启动/停止
  useEffect(() => {
    if (isRunning) {
      // 启动计时器
      timerRef.current = setInterval(() => {
        setElapsedTime((prevTime) => {
          const newTime = prevTime + 1;
          if (onTimeUpdate) {
            onTimeUpdate(newTime);
          }
          return newTime;
        });
      }, 1000);
    } else {
      // 停止计时器
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }

    // 清理函数：组件卸载或 isRunning 变化时停止计时器
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isRunning, onTimeUpdate]); // 依赖于 isRunning 状态

  // 3. 效果钩子：处理 initialTime 变化
  // useEffect(() => {
  //   setElapsedTime(initialTime);
  // }, [initialTime]);

  // 格式化当前时间
  const formattedElapsedTime = formatTime(elapsedTime);
  const formattedTotalTime = formatTime(totalTimeInSeconds);

  return (
    <View className="timer-circle-container">
      <View className="timer-circle">
        <Text className="timer-circle__time">{formattedElapsedTime}</Text>

        <View className="timer-circle__total-time">
          <Text className="label">累计:</Text>
          <Text className="value">{formattedTotalTime}</Text>
        </View>
      </View>
    </View>
  );
};

export default TimerCircle;
