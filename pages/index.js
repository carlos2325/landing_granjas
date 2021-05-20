import BlockDonate from "../components/BlockDonate";
import BlockSignin from "../components/BlockSignin";
import Footer from "../components/Footer";
import TextRich from "../components/TextRich";

const Home = () => {
  return (
    <>
    <div className="flex justify-center">
      <div className="w-full max-w-screen-xl flex gap-20">
        <div className="w-2/3 mb-20">
          <TextRich />
        </div>
        <div className="w-1/3 pt-20 flex flex-col gap-20">
         

          <BlockDonate />
          <BlockSignin />
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
