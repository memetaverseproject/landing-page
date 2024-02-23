"use client";
import React, { HTMLAttributeAnchorTarget, ReactNode } from "react";

interface Props {
  children: ReactNode;
  href: string;
  className?: string;
  target?: HTMLAttributeAnchorTarget | undefined;
  onClick?: () => void;
}

const ButtonLink = ({
  children,
  className = "base-button clip-left text-[#FFFFFF]",
  ...props
}: Props) => {
  return (
    <a className={className} {...props}>
      {children}
    </a>
  );
};

export default ButtonLink;
