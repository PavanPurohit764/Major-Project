import { Footer } from "./Footer";
import { Navbar } from "./navbar";

interface Layout {
  children: React.ReactNode;
}

const Layout = ({ children }: Layout) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 bg-[#F4F4F0]">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
