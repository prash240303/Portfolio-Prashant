import React from "react";
interface ChildrenProps {
  readonly children: React.ReactNode;
}

function AboutLayout({ children }: ChildrenProps) {
  return (
    <section className="py-5 dark:text-zinc-200 md:mt-8">{children}</section>
  );
}

export default AboutLayout;
