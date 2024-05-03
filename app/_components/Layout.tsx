"use client";

import { ReactNode, useEffect, useState } from "react";
import { Layout as AntdLayout } from "antd";

type Props = {
  children: ReactNode;
};

export const Layout = (props: Props) => {
  // MEMO: FOUC(Flash of Unstyled Content)発生に対するWORK AROUND
  const [showScreen, setShowScreen] = useState(false);
  useEffect(() => {
    setShowScreen(true);
  }, []);

  return (
    <>
      {showScreen && <AntdLayout data-id="Layout">{props.children}</AntdLayout>}
    </>
  );
};
