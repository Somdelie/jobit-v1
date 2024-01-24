import Navbar from "@/components/client/Navbar";
import Footer from "@/components/client/Footer";

const Layout = async ({ children }) => {
  return (
    <div>
      <main className="">
        <Navbar />
        <div className="mainContent">
          <div className="mainWrapper">{children}</div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
