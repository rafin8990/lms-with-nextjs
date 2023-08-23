import Counts from "@/components/Counts/Counts";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Logos from "@/components/logos/Logos";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Counts></Counts>
      <Logos></Logos>
    </div>
  );
};

export default Home;
