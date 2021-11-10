import React, { FC, ReactNode } from "react";
import { Header } from "./Header";

type Props = {
  children: ReactNode;
};

export const HeaderLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
