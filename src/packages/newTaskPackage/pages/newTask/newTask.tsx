import { useState } from "react";
import { View, Input, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import useAddTimerData from "@/features/timer/useAddTimerData";

export default function NewTask() {
  const [name, setName] = useState<string>("");
  const { add, isAdding, error } = useAddTimerData();

  const handleSubmit = async () => {
    const trimmed = name.trim();
    if (!trimmed) {
      Taro.showToast({ title: "请输入任务名称", icon: "none" });
      return;
    }

    await add(trimmed);

    if (!error) {
      Taro.showToast({ title: "提交成功", icon: "success" });
      setName("");
    } else {
      Taro.showToast({ title: "提交失败，请重试", icon: "none" });
    }
  };

  return (
    <View className="new-task-page">
      <View>新建任务</View>

      <Input
        value={name}
        placeholder="输入任务名称"
        onInput={(e: any) => setName(e?.detail?.value ?? "")}
      />

      <Button onClick={handleSubmit} disabled={isAdding} loading={isAdding}>
        提交
      </Button>
    </View>
  );
}
