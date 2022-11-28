import { Button } from "@beyounglabs/ui-react";
import type { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Componentes/Button",
  component: Button,

  args: {
    children: "Enviar",
  },
} as Meta;

export const Primary: StoryObj = {};
export const Secondary: StoryObj = {};
