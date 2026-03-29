import React from 'react';
import CartCard from '../CartCard/CartCard';

const Cart = ({ cart, setCart }) => {
    // console.log(cart);

    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    const handleRemove = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        
        setCart(updatedCart);
    };

    const handlePayment = () => {
        setCart([]);
    };

    return (
        <div className='max-w-7xl mx-auto px-10 lg:px-0 mb-10'>
            <div className="">
                {
                    cart.map((crt, index) =>
                        <CartCard
                            key={`${crt.id}-${index}`}
                            crt={crt}
                            handleRemove={handleRemove}
                        />
                    )
                }
            </div>

            { (cart.length  === 0)
                ? (
                    <div className="h-50 mt-10 mb-10 border-zinc-200 p-2 bg-zinc-100 rounded-xl flex  items-center justify-center">
                        <p>No Model has added yet!</p>
                    </div>)
                : (
                    <div>
                        <div className="flex items-center justify-between bg-black text-white p-5 mt-10 mb-5 font-bold rounded-xl">
                            <div>Total</div>
                            <div>${ totalPrice } / month</div>
                        </div>

                        <button 
                            onClick={ handlePayment }
                            className="btn w-full bg-red-500 text-white text-xl py-6 rounded-xl"
                        >
                                Proceed to Checkout
                            </button>
                    </div>
                )
            }
        </div>
    );
};

export default Cart;