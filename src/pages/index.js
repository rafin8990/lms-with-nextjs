import Counts from "@/components/Counts/Counts";
import Courses from "@/components/Courses/Courses";
import Header from "@/components/Header/Header";
import Learning from "@/components/Learning/Learning";
import Navbar from "@/components/Navbar/Navbar";
import Service from "@/components/Service/Service";
import Students from "@/components/Students/Students";
import Logos from "@/components/logos/Logos";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Counts></Counts>
      <Logos></Logos>
      <Students></Students>
      <Courses></Courses>
      <Learning></Learning>
      <Service></Service>
    </div>
  );
};

export default Home;
