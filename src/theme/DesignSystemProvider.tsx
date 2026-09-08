import { ConfigProvider } from "antd";
import type { PropsWithChildren } from "react";
import { designSystemTheme } from "./tokens";

export function DesignSystemProvider({ children }: PropsWithChildren) {
  return <ConfigProvider theme={designSystemTheme}>{children}</ConfigProvider>;
}
