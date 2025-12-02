import { Outlet } from "react-router";
import Header from "./Header";
import { design } from "@/lib/design";

export default function RootLayout() {
  return (
    <div className= "md:px-10 md:py-5 sm:px-8 sm:py-3 px-4 py-2" >
      <Header />
      <main className=" ">
        <Outlet />
      </main>
      
    </div>
  )
}
