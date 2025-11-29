import { Outlet } from "react-router";
import Header from "./Header";

export default function RootLayout() {
  return (
    <div className="p-4">
      <Header />
      <main className="">
        <Outlet />
      </main>
      
    </div>
  )
}
