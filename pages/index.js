import { useEffect } from "react";
import { api } from "../api";
import BlockDonate from "../components/BlockDonate";
import BlockSignin from "../components/BlockSignin";
import Footer from "../components/Footer";
import TextRich from "../components/TextRich";

const Home = (props) => {
  const {totalDonado} = props

  console.log(totalDonado)
  
  return (
    <>
    <div className="flex justify-center">
      <div className="w-full max-w-screen-xl flex gap-20">
        <div className="w-2/3 mb-20">
          <TextRich />
        </div>
        <div className="w-1/3 pt-20 flex flex-col gap-20">
         

          <BlockDonate totalDonado={totalDonado}/>
          <BlockSignin />
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;

export async function getServerSideProps(context) {
  const {data} = await api.totalDonations()
  
  return {
    props: data, // will be passed to the page component as props
  }
}