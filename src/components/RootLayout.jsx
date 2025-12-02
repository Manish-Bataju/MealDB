import { Outlet } from "react-router";
import Header from "./Header";
import { design } from "@/lib/design";

export default function RootLayout() {
  return (
    <div className= "m-5" >
      <Header />
      <main className=" ">
        <Outlet />
      </main>
      
    </div>
  )
}
