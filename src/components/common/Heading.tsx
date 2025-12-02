import { Text } from "@tarojs/components";
import { FC } from "react";

interface HeadingProps {
  /** 标题文本 */
  text: string;
}

const Heading: FC<HeadingProps> = ({ text }) => {
  return <Text className="heading">{text}</Text>;
};
export default Heading;
