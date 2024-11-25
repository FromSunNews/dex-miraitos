import {
  Header,
  // Sidebar, 
  // Footer 
} from "@/layouts/childs";
import { Outlet } from "react-router-dom";


export function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Desktop Header */}
      <Header />

      {/* Mobile Sidebar */}
      {/* <Sidebar className="md:hidden" /> */}

      <main className="flex-1 md:pt-20">
        <Outlet />
      </main>
      {/* <Footer /> */}

      {/* Floating Elements */}
      {/* <ScrollToTop />
      <SocialFloat /> */}
    </div>
  )
}
