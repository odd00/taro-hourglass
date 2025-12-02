import { View, Image } from "@tarojs/components";
import { FC, useState } from "react";
import { useTaskData } from "../../features/useTaskData";
import Heading from "@/components/common/Heading";
import TimerCircle from "../../components/TimerCircle";
import CircleButton from "@/components/common/CircleButton";

import TimerEndIcon from "../../assets/icons/timer-end.png";
import TimerContinueIcon from "../../assets/icons/timer-continue.png";
import TimerPauseIcon from "../../assets/icons/timer-pause.png";

const Timer: FC = () => {
  const { taskId, taskName, totalTime } = useTaskData();
  const [isRunning, setIsRunning] = useState(false);

  return (
    <View className="page-wrapper">
      <Heading text={taskName} />
      <TimerCircle
        isRunning={isRunning}
        totalTimeInSeconds={Number(totalTime)}
      />
      <View className="button-wrapper">
        <CircleButton
          onClick={() => {}}
          children={
            <Image src={TimerEndIcon} className="circle-button__icon" />
          }
        />
        <CircleButton
          onClick={() => {
            setIsRunning(!isRunning);
          }}
          children={
            <Image
              src={isRunning ? TimerPauseIcon : TimerContinueIcon}
              className="circle-button__icon"
            />
          }
        />
      </View>
    </View>
  );
};

export default Timer;
