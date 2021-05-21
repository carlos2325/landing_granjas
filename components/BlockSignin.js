import { useState } from 'react';
import FormFirma from './FormFirma'
import { CheckIcon } from './icons';
import {Donantes} from './BlockDonate'
const BlockSignin = ({signatures, totalSignatures}) => {
    const [state, setState] = useState(false)
    const [total, setTotal] = useState(totalSignatures)
    const meta = 10000
  return (
    <div className="h-max bg-white shadow w-full rounded-xl p-8">
      <div className="border-b w-full py-2 mb-6">
          <p className="text-2xl text-center font-body flex gap-2 items-center">
            ¡Hagamos a que nuestra voz sea más fuerte!
          </p>
      </div>
    <div className="w-full h-max flex items-center flex-col  border-b">
      <p className="font-display text-lg font-semibold py-2 text-green-500">Ayudanos a conseguir 10.000</p>
      <p className="font-display text-md">{total} personas han firmado</p>
      <div className="h-2 bg-green-100 w-full rounded my-2">
        <svg
          className="h-2 bg-green-500 rounded"
          width={(total / meta) * 100}
        />
      </div>
      <span className="flex justify-between w-full py-2">
      <p className="font-body text-xs">Firmas alcanzadas</p>
      <p className="font-body text-xs">{(total / meta) * 100}%</p>
      </span>
      </div>
      {state ? <Thanks/> : <FormFirma set={signal => setState(signal)} />}
      <h3 className="text-display font-semibold text-lg mt-4 pt-4 border-t text-green-500 text-center w-full">
       Firmas recientes
      </h3>
      <FirmasRealizadas firmas={signatures}/>
      
    </div>
  );
};

export default BlockSignin;

const Thanks = () => {
    return (
        <div className="py-10">
        <h2 className="text-2xl font-display font-bold text-center w-full text-green-500">
        ¡Firma enviada!
      </h2>
      <CheckIcon className="w-28 h-28 text-green-500 mx-auto inset-x-0" />
      <h3 className="text-xl font-display font-bold text-center w-full text-gray-700 mt-6">
        La razón está de nuestro lado
      </h3>
      <p className="font-body text-center text-sm mt-2">
        Tu firma permitirá fortalecer la plataforma para que, a través de testimonios y otros recursos, podamos defender la producción del
        porcino en España.
      </p>
      </div>
    )
}


const FirmasRealizadas = ({firmas}) => {
    const [users, setUsers] = useState(firmas);
    return (
              <div className="border-t w-full mt-4 h-60 overflow-y-auto px-4">
                {users.map((user) => (
                  <div
                    key={user._id}
                    className="py-2 flex gap-4 items-center justify-start border-b w-full"
                  >
                    <img
                      src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                      alt={user.firstName}
                      className="w-8 h-8 rounded-full object cover"
                    />
                    <p className="text-sm font-body text-gray-600">{`${user.firstName} ${user.lastName}`}</p>
                  </div>
                ))}
                <style jsx global>
                  {`
                  ::-webkit-scrollbar {
                    width: 6px;
                  }
                  ::-webkit-scrollbar-track {
                    background: #f1f1f1
                    border-radius: 6px;
                  }
          
                  ::-webkit-scrollbar-thumb {
                    background: rgba(16, 185, 129, 1);
                    border-radius: 6px;
                    height: 10%;
                  }
                `}
                </style>
              </div>
            );
          };

