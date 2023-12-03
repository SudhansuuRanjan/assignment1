import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#fff6f1] from-5% via-transparent via-30% to-transparent to-80%">
      <NavBar />
      <main className="flex flex-col">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;