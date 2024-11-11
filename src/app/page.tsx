import FifthFooter from "./components/FifthFooter";
import FouthImages from "./components/FouthImages";
import Navbar from "./components/Navbar";
import Third from "./components/Third";
import Video from "./components/Video";
const page = () => {
  return (
    <div>
      <Navbar />
      <Video />
      <Third />
      <FouthImages />
      <FifthFooter />
    </div>
  );
};

export default page;
