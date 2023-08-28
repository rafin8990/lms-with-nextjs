import Counts from "@/components/Counts/Counts";
import Courses from "@/components/Courses/Courses";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import HomeExtra from "@/components/HomeExtra/HomeExtra";
import Learning from "@/components/Learning/Learning";
import Navbar from "@/components/Navbar/Navbar";
import Queries from "@/components/Queries/Queries";
import Service from "@/components/Service/Service";
import Vission from "@/components/Vission/Vission";
import Logos from "@/components/logos/Logos";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Counts></Counts>
      <Logos></Logos>
      <Courses></Courses>
      <Service></Service>
      <Learning></Learning>
      <Vission></Vission>
      <Queries></Queries>
      <HomeExtra></HomeExtra>
      <Footer></Footer>
    </div>
  );
};

export default Home;
