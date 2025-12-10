import { Button, ITouchEvent } from "@tarojs/components";
import { FC, PropsWithChildren } from "react";

interface CircleButtonProps {
  /** 按钮的颜色类型 */
  type?: "primary" | "secondary";
  /**按钮的位置类型 */
  position?: "" | "fixed";
  /** 按钮点击事件 */
  onClick: (event: ITouchEvent) => void;
  /** 按钮的文本或图标内容 */
  children: PropsWithChildren<any>;
  /** 是否禁用按钮 */
  disabled?: boolean;
}

const CircleButton: FC<CircleButtonProps> = ({
  type = "primary",
  position = "",
  onClick,
  children,
  disabled = false,
}) => {
  const positionClass = position ? ` circle-button--${position}` : "";
  const buttonClass = `circle-button circle-button--${type}` + positionClass;

  return (
    <Button className={buttonClass} onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  );
};

export default CircleButton;
