import Link from "next/link";

const BlockDonate = () => {
  return (
    <div className="h-max bg-white shadow w-full rounded-xl p-8">
        <span className="flex items-center gap-1">
      <h2 className="font-display text-xl font-semibold">
        €35,770
      </h2>
      <p className="font-body text-sm">recaudado de €100,000 </p>
      </span>
      <div className="h-2 bg-green-100 rounded">
        <svg className="h-full bg-green-500 rounded" width="10%"/>
      </div>
      <Link href="/donate">
      <button className="h-12 w-full bg-green-500 rounded mt-10 hover:opacity-70 transition">
        <p className="font-display font-semibold text-lg text-white">Donar ahora</p>
      </button>
      </Link>
      <button className="h-12 w-full bg-white rounded mt-3 border-2 border-green-500 transition">
        <p className="font-display font-semibold text-lg text-green-500">Compartir</p>      </button>
        <div className="border-t w-full mt-8">
            <div className="py-4 flex gap-4 items-center border-b w-full">
                <img src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y" alt="profile" className="w-9 h-9 rounded-full object cover"/>
                <p className="text-md font-body text-gray-600">Francisco Montilla</p>
            </div> 
        </div>
    </div>
  );
};

export default BlockDonate;
