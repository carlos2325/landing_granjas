import Head from "next/head";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
const DefaultLayout = ({ children }) => {

    const ApiKey = `AVVpIW9G4_srvTKl4RAzr_6EBx8oYKhjgNkvPcRFLJzc2OSAiBWhxz1FKIFoUmH497CO8gevENoraIlN`
  return (
    <>
      <Head>
        <script src={`https://www.paypal.com/sdk/js?client-id=${ApiKey}&currency=EUR`}>
        </script>
      </Head>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;