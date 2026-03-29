import React from 'react';

const CartCard = ({ crt, handleRemove }) => {
    return (
        <div className="flex items-center justify-between gap-10 mb-5 border border-zinc-200 p-2 bg-zinc-100 rounded-xl">
            <div className="flex items-center gap-3">
                <img className="w-20 h-20 object-contain" src={crt.image} alt={crt.name} />

                <div>
                    <h3 className="text-xl font-bold">{crt.title}</h3>
                    <p className="text-sm md:text-lg text-zinc-500">{crt.description}</p>
                </div>
            </div>

            <div className="flex items-center gap-5">
                <p className="text-lg md:text-2xl font-bold">
                    ${crt.price} / month
                </p>

                <button
                    onClick={() => handleRemove(crt.id)}
                    className="btn bg-red-500 text-white"
                >
                    Remove
                </button>
            </div>
        </div>
    );
};

export default CartCard;