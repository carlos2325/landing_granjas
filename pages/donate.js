import React, { useEffect, useState } from "react";
import { ArrowIcon, CancelIcon, CheckIcon, SSLIcon } from "../components/icons";
import Link from "next/link";
import FormCheckout from "../components/FormCheckout";
import Paypal from "../components/Paypal";

const donate = () => {
  const [isCheckout, setCheckout] = useState(false);
  const [data, setData] = useState({});

  return (
    <>
    <Head>
      <title>Defendamos Nuestras Granjas | Donar</title>
    </Head>
    <div className="bg-gray-100 h-full py-10 flex justify-center w-full">
      <div className="flex justify-center max-w-screen-lg w-full gap-12 mt-10">
        {isCheckout ? (
          <StepTwo values={data} set={(accion) => setCheckout(accion)} />
        ) : (
          <StepOne
            checkout={(accion) => setCheckout(accion)}
            set2={(accion) => setData(accion)}
            set={(accion) => setCheckout(accion)}
          />
        )}
      </div>
    </div>
    </>
  );
};

export default donate;

const StepOne = ({ set, set2, checkout }) => {
  const handleCheckout = (e) => {
    e.preventDefault();
    set(true);
  };
  return (
    <div className="w-5/6 md:w-2/3 bg-white rounded-xl shadow-md p-8">
      <div className="border-b w-full py-2">
        <Link href="/">
          <p className="text-sm font-body flex gap-2 items-center cursor-pointer">
            <ArrowIcon className="w-5 h-5 text-gray-700" /> Volver a la pagina
            principal
          </p>
        </Link>
      </div>
      <div className="py-4 flex gap-3 items-center">
        <img src="chanchito.png" className="w-28 rounded h-auto object-cover" />
        <p className="font-body text-sm">
          Estás apoyando a 
          <b className="text-green-500">
             Ayuda al sector porcino antes de que sea demasiado tarde
          </b>
        </p>
      </div>

      <div className="py-4 flex gap-3 flex-col justify-center">
        <h3>Ingresa tu donación</h3>
        <FormCheckout
          checkout={(accion) => checkout(accion)}
          set={(accion) => set2(accion)}
        />
      </div>
    </div>
  );
};

const StepTwo = ({ set, values }) => {
  const [result, setResult] = useState({ result: "payment", data: {} });

  const modules = {
    payment: <Paypal set={(accion) => set(accion)} values={values} setResult={value => setResult(value)}/>,
    paid: <Paid result={result}/>,
    error: <Error />,
  };

  return (
    <div className="w-5/6 md:w-2/3 bg-white rounded-xl shadow-md p-8">
      {modules[result.result]}
    </div>
  );
};

const Paid = ({result}) => {
  return (
    <div>
      <div className="border-b w-full py-2 mb-6">
        <Link href="/">
          <p className="text-sm font-body flex gap-2 items-center cursor-pointer">
            <ArrowIcon className="w-5 h-5 text-gray-700" /> Volver a la pagina
            principal
          </p>
        </Link>
      </div>
      <h2 className="text-2xl font-display font-bold text-center w-full text-green-500">
        ¡Pago Exitoso!
      </h2>
      <p className="text-sm font-display w-full text-center">N° de orden: {result.data.orderID}</p>
      <CheckIcon className="w-28 h-28 text-green-500 mx-auto inset-x-0" />
      <h3 className="text-xl font-display font-bold text-center w-full text-gray-700 mt-6">
        La razón está de nuestro lado
      </h3>
      <p className="font-body text-center text-sm mt-2">
        Tus donaciones permitirán fortalecer la plataforma para que, a través de
        tus testimonios y otros recursos, puedas defender la producción del
        porcino en España.
      </p>
    </div>
  );
};

const Error = () => {
  return (
    <div>
    <div className="border-b w-full py-2 mb-6">
      <Link href="/">
        <p className="text-sm font-body flex gap-2 items-center cursor-pointer">
          <ArrowIcon className="w-5 h-5 text-gray-700" /> Volver a la pagina
          principal
        </p>
      </Link>
    </div>
    <h2 className="text-2xl font-display font-bold text-center w-full text-red-500">
      ¡Ups, ha ocurrido un error!
    </h2>
    <h3 className="text-md font-display font-bold text-center w-full text-gray-700">
      Intentalo en otro momento
    </h3>
    <CancelIcon className="w-28 h-28 text-red-500 mx-auto inset-x-0" />
    
  </div>
  )
};
