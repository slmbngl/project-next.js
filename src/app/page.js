import Navbar from "./Navbar";
import Cards from "./Cards";
import Footer from "./components/Footer";

export default function Home() {
  
  return (
    <>
      <header><Navbar /></header>
      <main className="flex md:min-h-screen flex-col items-center justify-between md:p-24  ">      
      <Cards />
      </main>
      <footer>
			<Footer />
      </footer>
    </>
  );
}
