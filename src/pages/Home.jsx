import Hero from "@/components/home/Hero";
import MainHome from "@/components/home/MainHome";
import Navbar from "@/components/ui/Navbar";

function Home() {
  // Render the Home Page component
  return (
    <>
      <Navbar />
      <Hero />
      <MainHome />
    </>
  );
}

export default Home;
