import React from "react";
interface ChildrenProps {
  readonly children: React.ReactNode;
}

function WorkLayout({ children }: ChildrenProps) {
  return <div className="md:max-w-7xl w-full">{children}</div>;
}

export default WorkLayout;
