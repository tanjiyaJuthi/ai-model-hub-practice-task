import React from 'react';

const ModelCard = ({
    model, 
    cart, 
    setCart
}) => {
    const isSubscribed = cart.some(item => item.id === model.id);

    const handleSubscription =() => {
        if (isSubscribed) {
            const updatedCart = cart.filter(item => item.id !== model.id);

            setCart(updatedCart);
        } else {
            setCart([...cart, model]);
        };

    };

    return (
        <div className="shadow-lg rounded-lg border border-zinc-300 overflow-hidden flex flex-col h-full">
            
            <div className="flex justify-center items-center h-56 bg-zinc-200">
                <img
                    className="h-40 w-40 object-contain"
                    src={model.image}
                    alt={model.name}
                />
            </div>

            <div className="p-4 flex flex-col grow space-y-3">
                <h2 className="text-md md:text-2xl font-bold">{model.title}</h2>

                <p>{model.description}</p>

                <p className="text-md md:text-2xl font-bold">${model.price}/month</p>

                <button
                    onClick={handleSubscription}
                    className="btn w-full bg-red-500 text-white rounded-lg mt-auto"
                >
                    {
                        isSubscribed
                        ? 'Subscribed'
                        : 'Subscribe Now'
                    }
                </button>
            </div>
        </div>
    );
};

export default ModelCard;