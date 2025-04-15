import { JSX } from "react";

export default function CustomerLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div>
      <h3>Customer Layout</h3>
      <br />
      {children}
    </div>
  )
}