import { Formik } from "formik";
import InputField from "./InputField";

const FormCheckout = ({set, checkout}) => {
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

    if(!values.amount) {
      errors.amount = "Monto requerido"
    }


    return errors;
  };

  return (
    <Formik
      initialValues={{
        amount: "",
        firstName: "",
        lastName: "",
        email: ""
      }}
      onSubmit={(values, actions) => {
        actions.setSubmitting(true)
        try {
          set(values)
        } catch (error) {
          console.log(error)
        } finally {
          actions.setSubmitting(false)
          checkout(true)
        }
        
      }}
      validate={validacion}
    >
      {(props) => <BasicForm {...props} />}
    </Formik>
  );
};

export default FormCheckout;

const BasicForm = ({ handleChange, handleSubmit, values, isSubmitting }) => {
    
  return (
    <form  onSubmit={handleSubmit}>
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
      </div>
      <div className="pt-4">
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
      <button 
          disabled={isSubmitting}
          type="submit"
          className={`${isSubmitting ? "bg-blue-300" : "hover:bg-green-400 bg-green-500" } focus:outline-none w-full  mt-4 py-4 px-2 text-white rounded-lg font-display font-bold text-lg transition`}
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
