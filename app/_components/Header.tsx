"use client";

import { ReactNode } from "react";
import { Layout as AntdLayout } from "antd";

type Props = {
  children: ReactNode;
};

export const Header = (props: Props) => {
  return (
    <>
      <AntdLayout.Header data-id="Header" style={{
        backgroundColor: "cadetblue",
        fontWeight: "bold",
        fontSize: "2em"
      }}>{props.children}</AntdLayout.Header>
    </>
  );
};
