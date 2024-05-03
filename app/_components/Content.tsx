"use client";

import { ReactNode } from "react";
import { Layout as AntdLayout } from "antd";

type Props = {
  children: ReactNode;
};

export const Content = (props: Props) => {
  return (
    <>
      <AntdLayout.Content data-id="Content">{props.children}</AntdLayout.Content>
    </>
  );
};
