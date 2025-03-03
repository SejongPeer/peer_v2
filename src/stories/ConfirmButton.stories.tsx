// stories/ConfirmButton.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { ConfirmButton } from "../components/button/confirmButton";

export default {
  title: "Components/ConfirmButton",
  component: ConfirmButton,
  argTypes: {
    text: { control: "text" },
    textcolor: { control: "color" },
    backgroundcolor: { control: "color" },
    width: { control: "text" },
    height: { control: "text" },
    borderradius: { control: "text" },
    border: { control: "text" },
    onClick: { action: "clicked" },
  },
} as Meta<typeof ConfirmButton>;

// 기본 버튼 스토리
export const Default: StoryObj<typeof ConfirmButton> = {
  args: {
    text: "확인",
    textcolor: "#ffffff",
    backgroundcolor: "#FF4B4B",
    width: "327px",
    height: "52px",
    borderradius: "50px",
    border: "none",
  },
};

// Secondary 버튼
export const Secondary: StoryObj<typeof ConfirmButton> = {
  args: {
    text: "취소",
    textcolor: "#000000",
    backgroundcolor: "#DDDDDD",
    width: "100%",
    height: "42px",
    borderradius: "50px",
    border: "1px solid #000",
  },
};
