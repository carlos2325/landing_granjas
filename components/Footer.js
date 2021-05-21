import { IconOne } from "./icons";

const Footer = () => {
  return (
    <>
      <div className="w-full h-max grid place-items-center overflow-hidden relative py-20">
        <div className="image h-full w-full absolute z-0 opacity-90" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 px-5 md: px-0 gap-20 max-w-screen-lg relative z-10">
          
          <div className="flex flex-col items-center gap-4 justify-start h-full">
            <IconOne />
            <h2 className="text-lg font-display text-white font-semibold text-justify">
              Objetivo 1: Defender la imagen de nuestras grajas
            </h2>
            <p className="text-white font-body text-sm   text-justify">
              Durante años nuestros granjeros han sufrido campañas de
              desinformación y desprestigio de nuestra actividad, nuestro
              objetivo es cambiar esta situación.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 justify-start h-full">
            <IconOne />
            <h2 className="text-lg font-display text-white font-semibold text-justify">
              Objetivo 2: Proponer iniciativas que permita mejorar nuestro
              sector
            </h2>
            <p className="text-white font-body text-sm   text-justify">
              Defendemos nuestras granjas colabora con la difusión de nuevas
              iniciativas y proyectos que ayuden a la renovación del sector y
              apostar por la Ecología y Economía Circular.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 justify-start h-full">
            <IconOne />
            <h2 className="text-lg font-display text-white font-semibold text-justify">
              Objetivo 3: Viabilidad
            </h2>
            <p className="text-white font-body text-sm   text-justify">
              Aparición de nuevos países competidores, la economía de escala, la
              adaptación a los nuevos requerimientos de la administración, esta
              forzando al cierre de pequeñas granjas, nuestra misión es ahudar a
              esos pequeños granjeros para que puedan crecer y no desaparecer
            </p>
          </div>
        </div>
        <p className="text-xs font-body text-blue-900 absolute bottom-2 right-2">Powered by <a target="_blank" href="https://www.fmontilla.com">Francisco Montilla</a></p>
      </div>
      <style jsx>
        {`
          .image {
            background-image: url("background.jpg");
            background-size: cover;
            background-position: bottom;
          }
        `}
      </style>
    </>
  );
};

export default Footer;
