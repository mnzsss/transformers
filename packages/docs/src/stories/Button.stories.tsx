import { Button, ButtonProps } from "@beyounglabs/ui-react";
import type { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Componentes/Button",
  component: Button,

  args: {
    children: "Enviar",
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};
export const Secondary: StoryObj<ButtonProps> = {};
