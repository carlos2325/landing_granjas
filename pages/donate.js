import React, { useState } from "react";
import { ArrowIcon, SSLIcon } from "../components/icons";
import Link from "next/link";
import FormCheckout from "../components/FormCheckout";
import Paypal from "../components/Paypal";

const donate = () => {
  const [isCheckout, setCheckout] = useState(false);
  return (
    <div className="bg-gray-100 h-full py-10 flex justify-center w-full">
      <div className="flex justify-center max-w-screen-lg w-full gap-12 mt-10">
        <div className="w-2/3 bg-white rounded-xl shadow-md p-8">
          <div className="border-b w-full py-2">
            <Link href="/">
              <p className="text-sm font-body flex gap-2 items-center cursor-pointer">
                <ArrowIcon className="w-5 h-5 text-gray-700" /> Volver a la
                pagina principal
              </p>
            </Link>
          </div>
          <div className="py-4 flex gap-3 items-center">
            <img
              src="chanchito.png"
              className="w-28 rounded h-auto object-cover"
            />
            <p className="font-body text-sm">
              Estás apoyando a{" "}
              <b className="text-green-500">
                Ayuda al sector porcino antes de que sea demasiado tarde
              </b>
            </p>
          </div>

          <div className="py-4 flex gap-3 flex-col justify-center">
            <h3>Ingresa tu donación</h3>
            <FormCheckout/>
           {isCheckout ? <Paypal/> : <button onClick={e => setCheckout(true)}>Checkout</button>}
           
              <button className="focus:outline-none hover:bg-green-400 py-4 px-2 text-white bg-green-500 rounded-lg font-display font-bold text-lg transition">
                Continuar
              </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default donate;
