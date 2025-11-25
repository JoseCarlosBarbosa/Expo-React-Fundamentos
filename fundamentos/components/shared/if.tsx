import React from "react";

export interface IfProps {
  teste?: any;
  children: React.ReactNode;
}

export default function If({ teste, children }: IfProps) {
  if (!teste) return null;
  return <>{children}</>;
}
