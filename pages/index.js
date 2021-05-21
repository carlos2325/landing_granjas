import Head from "next/head";
import { useEffect } from "react";
import { api } from "../api";
import BlockDonate from "../components/BlockDonate";
import BlockSignin from "../components/BlockSignin";
import TextRich from "../components/TextRich";

const Home = (props) => {
  const {total, donations, signatures, totalSignatures} = props
  
  return (
    <>
    <Head>
      <title>Defendamos Nuestras Granjas | Inicio</title>
    </Head>
    
    <div className="flex justify-center" >
      <div className="w-full max-w-screen-xl px-5 md-px-0 md:flex gap-20 pb-10">
        <div className="w-full md:w-2/3 mb-20">
          <TextRich />
        </div>
        <div className="w-full md:w-1/3 pt-20 flex flex-col gap-20">
         

          <BlockDonate totalDonado={total.totalDonado} donations={donations.donaciones}/>
          <BlockSignin signatures={signatures.firmas} totalSignatures={totalSignatures.totalFirmas} />
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;

export async function getStaticProps(context) {
  const {data:total} = await api.totalDonations()
  const {data:donations} = await api.fetchDonations()
  const {data:signatures} = await api.fetchSignatures()
  const {data:totalSignatures} = await api.totalSignatures()
  
  return {
    props: {donations, total, signatures, totalSignatures}, // will be passed to the page component as props
  }
}