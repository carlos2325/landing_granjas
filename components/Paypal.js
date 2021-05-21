import { useEffect, useRef } from "react"
import { api } from "../api"

const Paypal = ({values, set, setResult}) => {
    const paypalRef = useRef()


    useEffect(() => {
      setTimeout(() => {
        
        window.paypal.Buttons({
            createOrder: (data, actions) => {
                return actions.order.create({
                  intent: "CAPTURE",
                  purchase_units: [
                    {
                      description: 'Donativo "Defendamos nuestras granjas"',
                      amount: {
                        currency_code: "EUR",
                        value: values.amount,
                      },
                    },

                  ],
                });
              },
              onApprove: async (data, actions) => {
                try {
                  await api.registerDonation(values)
                } catch (error) {
                  console.log(error)
                } finally {
                  setResult({result: "paid", data: data});
                }
              },
              onError: (err) => {
                  setResult({result: "error", data: err}),
                  console.error(err);
                },
        }).render(paypalRef.current) 
      }, 500);
    }, [])

    const handleCheckout = (e) => {
        e.preventDefault();
        set(false);
      };

    return (
        <>
        <div className="border-b w-full pb-4 pt-2">
            <p className="text-xl font-bold text-center w-full">
             Enviar donación
            </p>
        </div>
        <div className="py-10 flex flex-col gap-3 w-full items-center justify-center">
            <span className="flex justify-between w-4/5 md:w-1/2 px-2 ">
            <p className="font-display font-bold text-sm text-gray-700 ">Tu donación</p>
            <p>{values.amount.toFixed(2)}€</p>
            </span>
            <span className="flex justify-between w-4/5 md:w-1/2 border-b border-gray-700 pb-1 px-2 ">
            <p className="font-display font-bold text-sm text-gray-700 ">Comision por transacción</p>
            <p>0.00 €</p>
            </span>
            <span className="flex justify-end w-4/5 md:w-1/2 gap-4 items-center" >
                <p>TOTAL</p>
                <p className="font-display text-xl font-bold text-gray-700">{values.amount.toFixed(2)}€</p>
            </span>
        </div>
        <div className="pt-10 w-full">
        <h3 className="w-full font-semibold text-md font-display text-center font-gray-700">Metodos de pago</h3>
        <div ref={paypalRef}></div>      
        <button
          onClick={(e) => handleCheckout(e)}
          className="w-full focus:outline-none hover:bg-green-400 py-2 text-white bg-green-500 rounded-lg font-display font-bold text-md transition"
        >
          Ir a atrás
        </button>
        </div>
        </>
    )
}

export default Paypal