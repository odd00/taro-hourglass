/**
 * 将总秒数格式化为 HH:MM:SS 格式
 * @param totalSeconds 总秒数
 * @returns 格式化后的时间字符串
 */
export const formatTime = (totalSeconds: number): string => {
  const seconds = Math.max(0, Math.floor(totalSeconds));
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  const pad = (num: number) => num.toString().padStart(2, "0");

  return `${pad(hours)}:${pad(minutes)}:${pad(remainingSeconds)}`;
};
