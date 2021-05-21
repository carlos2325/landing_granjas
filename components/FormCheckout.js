import { ErrorMessage, Formik } from "formik";
import { useEffect, useRef, useState } from "react";
import InputField from "./InputField";

const FormCheckout = ({ set, checkout }) => {
  const [state, setState] = useState(false);

  const validacion = (values) => {
    let errors = {};

    if (state == false) {
      if (!values.firstName) {
        errors.firstName = "Nombre requerido";
      }
      if (!values.lastName) {
        errors.lastName = "Apellido requerida";
      }

      if (!values.email) {
        errors.email = "Correo requerido";
      }
    }

    if (!values.amount) {
      errors.amount = "Monto requerido";
    }

    return errors;
  };

  return (
    <Formik
      initialValues={{
        amount: "",
        firstName: "",
        lastName: "",
        email: "",
      }}
      onSubmit={(values, actions) => {
        actions.setSubmitting(true);
        try {
          set({ ...values, firstName: "Anónimo" });
        } catch (error) {
          console.log(error);
        } finally {
          actions.setSubmitting(false);
          checkout(true);
        }
      }}
      validate={validacion}
    >
      {(props) => (
        <BasicForm isAnonymous={(signal) => setState(signal)} {...props} />
      )}
    </Formik>
  );
};

export default FormCheckout;

const BasicForm = ({
  handleChange,
  handleSubmit,
  values,
  isSubmitting,
  isAnonymous,
  setValues,
  ...props
}) => {
  const [checked, setChecked] = useState(false);
  const [amount, setAmount] = useState("")

  useEffect(() => {
    isAnonymous(checked);
    values.firstName = "";
    values.lastName = "";
    values.email = "";
  }, [checked]);

  const Montos = [10, 25, 50, 75, 100, 250, 500];

  useEffect(() => {
    console.log(props)
    values.amount = amount
  }, [amount])

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="relative">
        <input
          className="py-4 px-2 appearance-none border-2 rounded text-2xl text-right font-display font-bold w-full pr-24 text-gray-700 "
          type="number"
          value={values.amount}
          onChange={handleChange}
          name="amount"
        />
        <div className="absolute font-bold text-gray-700 top-4 right-3 flex-col flex">
          <span className="text-2xl">.00 EUR</span>
        </div>
        <span className="font-display absolute bottom-0 left-0 transform translate-y-full text-xs text-red-500 mt-1">
          <ErrorMessage name="amount" />
        </span>
        <div className="w-full py-4 grid grid-cols-3 gap-2 sm:grid-cols-4 gap-4">  
          {Montos.map((item, idx) => (
            <div key={idx} onClick={() => setValues(old => ({...old, amount: item}))} value={item} name="amount" className={` hover:bg-green-600 transition cursor-pointer w-full h-16 grid place-items-center rounded ${values.amount == item ? "bg-green-600" : "bg-green-500" }`}>
              <p className="text-white font-display text-lg font-semibold">
                {item} EUR
              </p>
            </div>
          ))}
          <div className={`bg-green-500 hover:bg-green-600 transition cursor-pointer w-full h-16 grid place-items-center rounded ${Montos.findIndex(item => item == values.amount) == -1 && values.amount !== "" ? "bg-green-600" : "bg-green-500" }`}>
              <p className="text-white font-display text-xs text-center font-semibold">
                Cantidad personalizada
              </p>
            </div>
        </div>
      </div>
      <div className="pt-4">
        <InputField
          name="firstName"
          label="Nombre"
          onChange={handleChange}
          value={values.firstName}
          type="text"
          disabled={checked}
          className={checked ? "bg-gray-200" : ""}
        />
      </div>
      <div className="pt-4">
        <InputField
          name="lastName"
          label="Apellido"
          onChange={handleChange}
          value={values.lastName}
          type="text"
          disabled={checked}
          className={checked ? "bg-gray-200" : ""}
        />
      </div>

      <div className="pt-4">
        <InputField
          name="email"
          label="Correo electronico"
          onChange={handleChange}
          value={values.email}
          type="email"
          disabled={checked}
          className={checked ? "bg-gray-200" : ""}
        />
      </div>
      <div className="pt-6 flex gap-2 items-center">
        <input
          type="checkbox"
          defaultChecked={checked}
          onChange={() => setChecked(!checked)}
        />
        <p className="font-body text-sm">Donacion anonima</p>
      </div>
      <button
        disabled={isSubmitting}
        type="submit"
        className={`${
          isSubmitting ? "bg-blue-300" : "hover:bg-green-400 bg-green-500"
        } focus:outline-none w-full  mt-4 py-4 px-2 text-white rounded-lg font-display font-bold text-lg transition`}
      >
        Continuar
      </button>
      <style jsx>
        {`
          input[type="number"]::-webkit-outer-spin-button,
          input[type="number"]::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
        `}
      </style>
    </form>
  );
};
