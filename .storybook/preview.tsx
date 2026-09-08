import type { Preview } from "@storybook/react-vite";
import { DesignSystemProvider } from "../src";

const preview: Preview = {
  decorators: [
    (Story) => (
      <DesignSystemProvider>
        <Story />
      </DesignSystemProvider>
    ),
  ],
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    a11y: { test: "error" },
  },
};

export default preview;
