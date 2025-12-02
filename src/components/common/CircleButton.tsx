import { Button, ITouchEvent } from "@tarojs/components";
import { FC, PropsWithChildren } from "react";

interface CircleButtonProps {
  /** 按钮的颜色/类型：primary (主色调) 或 secondary (辅助色) */
  type?: "primary" | "secondary";
  /** 按钮点击事件 */
  onClick: (event: ITouchEvent) => void;
  /** 按钮的文本或图标内容 */
  children: PropsWithChildren<any>;
  /** 是否禁用按钮 */
  disabled?: boolean;
}

const CircleButton: FC<CircleButtonProps> = ({
  type = "primary",
  onClick,
  children,
  disabled = false,
}) => {
  const buttonClass = `circle-button circle-button--${type}`;

  return (
    <Button className={buttonClass} onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  );
};

export default CircleButton;
