import Link from "next/link";
import { useEffect, useState } from "react";
import { api } from "../api";

const BlockDonate = ({ totalDonado, donations }) => {
  const [total, setTotal] = useState(totalDonado);
  const meta = 100000;

  return (
    <div className="h-max bg-white shadow w-full rounded-xl px-4 py-8">
      <h2 className="text-3xl py-4 text-center w-full font-bold text-green-500 font-display">¡DONA AQUI!</h2>
      <span className="flex items-center gap-1">
        <h2 className="font-display text-xl font-semibold">€ {total}</h2>
        <p className="font-body text-sm">recaudado de €100.000 </p>
      </span>
      <div className="h-2 bg-green-100 rounded">
        <svg
          className="h-full bg-green-500 rounded"
          width={(total / meta) * 100}
        />
      </div>
      <Link href="/donate">
        <button className="h-12 w-full bg-green-500 rounded mt-10 hover:opacity-70 transition">
          <p className="font-display font-semibold text-lg text-white">
            Donar ahora
          </p>
        </button>
      </Link>
      <button className="h-12 w-full bg-white rounded mt-3 border-2 border-green-500 transition">
        <p className="font-display font-semibold text-lg text-green-500">
          Compartir
        </p>{" "}
      </button>
      <h3 className="text-display font-semibold text-lg mt-4 pt-4 border-t text-green-500 text-center w-full">
        Ultimos Donativos{" "}
      </h3>
      <Donantes donations={donations} />
    </div>
  );
};

export default BlockDonate;

const Donantes = ({ donations }) => {
  const [users, setUsers] = useState(donations);
  return (
    <div className="border-t w-full mt-4 h-60 overflow-y-auto px-4">
      {users.map((user) => (
        <div
          key={user._id}
          className="py-4 flex gap-6 items-center justify-start border-b w-full relative"
        >
          <img
            src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
            alt={user.firstName}
            className="w-9 h-9 rounded-full object cover"
          />
          <p className="text-md text-left font-body text-gray-600">{`${user.firstName} ${user.lastName}`}</p>
          <p className="font-display text-md font-base text-green-500 absolute right-1 top-1/3">€ {parseInt(user.amount).toFixed(2) ?? parseInt(0).toFixed(2)} </p>
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
