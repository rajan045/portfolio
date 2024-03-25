import Header from "organism/Header";
import Homepage from "organism/Homepage";
import Footer from "organism/Footer";
import Steppers from "@/components/molecules/Steppers";
import Skill from "organism/Skill";
import NewsLetter from "organism/NewsLetter";
import CursorCircle from "atom/CursorCircle";

export default function Home() {
  return (
    <>
      <div className="h-screen bg-black border-[#e86830] border-b-[20px]">
        <Header />
        <Homepage />
      </div>
      <Steppers />

      {/* <Skill /> */}
      {/* <NewsLetter /> */}
      {/* <CursorCircle /> */}
      <Footer />
    </>
  );
}
