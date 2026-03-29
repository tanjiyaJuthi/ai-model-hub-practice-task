const Tab = ({ 
    activeTab, 
    setActiveTab, 
    cart
}) => {
  return (
    <div className="tabs justify-center mb-10">
        <input
            onClick={() => setActiveTab('model')}
            type="radio"
            name="my_tabs_1"
            className={`tab rounded-full w-40 ${activeTab === "model" ? "bg-linear-to-r from-pink-500 to-red-500 text-white" : ""}`}
            aria-label="Models"
            defaultChecked
        />

        <input
            onClick={() => setActiveTab('cart')}
            type="radio" 
            name="my_tabs_2" 
            className={`tab rounded-full w-40 ${activeTab === "cart" ? "bg-linear-to-r from-pink-500 to-red-500 text-white" : ""}`}
            aria-label={`Cart (${cart.length})`}
        />
    </div>
  );
};

export default Tab;
