import { JSX } from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div>
      <h3>Admin Layout</h3>
      <br />
      {children}
    </div>
  )
}