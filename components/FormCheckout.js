import { Formik } from "formik";
import InputField from "./InputField";

const FormCheckout = () => {
  const validacion = (values) => {
    let errors = {};

    if (!values.nombre) {
      errors.nombre = "Nombre requerido";
    }
    if (!values.apellido) {
      errors.apellido = "Apellido requerida";
    }

    return errors;
  };

  return (
    <Formik
      initialValues={{
        nombre: "",
        apellido: "",
      }}
      onSubmit={() => {}}
      validate={validacion}
    >
      {(props) => <BasicForm {...props} />}
    </Formik>
  );
};

export default FormCheckout;

const BasicForm = ({ handleChange, handleSubmit, isSubmitting, values }) => {
    
  return (
    <form  onSubmit={handleSubmit}>
      <div className="relative">
        <input
          className="py-4 px-2 appearance-none border-2 rounded text-2xl text-right font-display font-bold w-full pr-24 text-gray-700 "
          type="number"
        />
        <div className="absolute font-bold text-gray-700 top-4 right-3 flex-col flex">
          <span className="text-2xl">.00 EUR</span>
        </div>
      </div>
      <div className="pt-4">
        <InputField
          name="nombre"
          label="Nombre"
          onChange={handleChange}
          value={values.nombre}
          type="text"
        />
      </div>
      <div className="pt-4">
        <InputField
          name="apellido"
          label="Apellido"
          onChange={handleChange}
          value={values.apellido}
          type="text"
        />
      </div>

      <div className="pt-4">
        <InputField
          name="correo"
          label="Correo"
          onChange={handleChange}
          value={values.correo}
          type="email"
        />
      </div>
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
