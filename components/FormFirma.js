import { ErrorMessage, Formik } from "formik";
import { useEffect, useRef, useState } from "react";
import { api } from "../api";
import InputField from "./InputField";

const FormFirma = ({ set }) => {
  const validacion = (values) => {
    let errors = {};

    if (!values.firstName) {
      errors.firstName = "Nombre requerido";
    }
    if (!values.lastName) {
      errors.lastName = "Apellido requerida";
    }

    if (!values.email) {
      errors.email = "Correo requerido";
    }

    if (!values.type) {
        errors.type = "Tipo requerido";
    }

    if (values.type == "ganadero" && !values.phone) {
        errors.phone = "Telefono requerido";
    }


    return errors;
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        type: "",
      }}
      onSubmit={async (values, actions) => {
          try {
              actions.setSubmitting(true)
              const res = await api.registerSignature(values)
          } catch (error) {
              console.log(error)
          } finally {
              set(true)
              actions.setSubmitting(false)
          }
      }}
      validate={validacion}
    >
      {(props) => <BasicForm {...props} />}
    </Formik>
  );
};

export default FormFirma;

const BasicForm = ({ handleChange, handleSubmit, values, isSubmitting }) => {
    const [check, setCheck] = useState("")

    const handleClick = (value) => {
        values.type = value
        setCheck(value)
    }
  return (
    <form onSubmit={handleSubmit} className="py-4">
      <div className="relative ">
        <InputField
          name="firstName"
          label="Nombre"
          onChange={handleChange}
          value={values.firstName}
          type="text"
        />
      </div>
      <div className="pt-4">
        <InputField
          name="lastName"
          label="Apellido"
          onChange={handleChange}
          value={values.lastName}
          type="text"
        />
      </div>

      <div className="pt-4">
        <InputField
          name="email"
          label="Correo electronico"
          onChange={handleChange}
          value={values.email}
          type="email"
        />
      </div>

      

      <div className="pt-6 w-full relative">
      <label className="font-display text-sm text-gray-900 w-full">Tipo de firmante</label>
      <div>
        <button
          onClick={() => handleClick("simpatizante")}
          value="simpatizante"
          type="button"
          className={`focus:outline-none h-12 w-1/2 border-2 rounded-l-lg hover:bg-green-500 transition hover:text-white font-display font-semibold text-sm  ${check == "simpatizante" ? "bg-green-500 text-white" : "bg-white text-green-500"}`}
        >
          Simpatizante
        </button>
        <button
          onClick={() => handleClick("ganadero")}
          value="ganadero"
          type="button"
          className={`focus:outline-none h-12 w-1/2 border-r-2 border-t-2 border-b-2 rounded-r-lg hover:bg-green-500 transition hover:text-white font-display font-semibold text-sm  ${check == "ganadero" ? "bg-green-500 text-white" : "bg-white text-green-500"}`}
        >
          Ganadero
        </button>
        </div>
        <span className="font-display absolute bottom-0 left-0 transform translate-y-full text-xs text-red-500 mt-1">
        <ErrorMessage name="type"/>
        </span>
      </div>
      {values.type == "ganadero" ? 
      <div className="pt-4">
        <InputField
          name="phone"
          label="Telefono"
          onChange={handleChange}
          value={values.phone}
          type="tel"
        />
      </div>
      : null }
      <button
        disabled={isSubmitting}
        type="submit"
        className={`${
          isSubmitting ? "bg-blue-300" : "hover:bg-green-400 bg-green-500"
        } focus:outline-none w-full  mt-8 py-4  px-2 text-white rounded-lg font-display font-bold text-lg transition`}
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
