import Head from "next/head";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
const DefaultLayout = ({ children }) => {
  const ApiKey = `AVVpIW9G4_srvTKl4RAzr_6EBx8oYKhjgNkvPcRFLJzc2OSAiBWhxz1FKIFoUmH497CO8gevENoraIlN`;
  return (
    <>
      <Head>
        <script
          src={`https://www.paypal.com/sdk/js?client-id=${ApiKey}&currency=EUR`}
        ></script>
        <meta
          name="description"
          content="Los ataques que reciben los productores de cerdos en España reducen la esperanza de vida de las granjas.
Existe una campaña sin tregua en contra de las granjas, cebaderos y todo lo relacionado a la ganadería porcina.
El sector está acorralado. El cierre de las granjas continúa en ascenso.
Los promotores de esta ofensiva, como primera estrategia, se han encargado de dejar sin voz a los granjeros.
La reducción de los espacios tradicionales de explotación porcina está al acecho. No te han permitido la defensa. La mayor parte de los medios están alineados en contra del sector."
        />
        <meta name="keywords" content="Defendamos nuestras granjas, granjas, porcino, marrano, chancho, Murcia, España, defendamos"/>
      </Head>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
