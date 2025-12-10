import { View, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import TaskCard from "@/components/business/TaskCard";
import useGetTimerData from "@/features/timer/useGetTimerData";
import Spinner from "@/components/common/Spinner";
import CircleButton from "@/components/common/CircleButton";
import TimerAddIcon from "@/assets/icons/timer-add.png";

export default function Index() {
  const { tasks, isLoading, error } = useGetTimerData();

  if (error) {
    Taro.showToast({
      title: "数据加载失败",
      icon: "error",
      duration: 2000,
    });
  }

  const handleCardClick = (
    taskId: string,
    taskName: string,
    totalTime: number
  ) => {
    Taro.navigateTo({
      url: `/packages/timerPackage/pages/timer/timer?name=${encodeURIComponent(
        taskName
      )}&time=${totalTime}&id=${taskId}`,
    });
  };

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <View className="page-wrapper">
        {tasks.map((task) => (
          <TaskCard
            taskId={task._id}
            taskName={task.taskName}
            totalTimeInSeconds={task.totalDuration}
            onClick={() =>
              handleCardClick(task._id, task.taskName, task.totalDuration)
            }
          />
        ))}
      </View>
      <CircleButton
        position="fixed"
        children={<Image src={TimerAddIcon} className="circle-button__icon" />}
        onClick={() => {
          Taro.navigateTo({
            url: "/packages/newTaskPackage/pages/newTask/newTask",
          });
        }}
      />
    </>
  );
}
