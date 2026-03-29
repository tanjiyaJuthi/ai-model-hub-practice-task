import { use } from "react";
import ModelCard from "../ModelCard/ModelCard";

const Models = ({ modelPromise, cart, setCart }) => {
  const models = use(modelPromise);

  return (
    <div className="max-w-7xl mx-auto px-10 lg:px-0">
      <div className="text-center">
        <h2 className="text-2xl md:text-5xl font-bold">ChooseYour AI Model</h2>
        <p className="pt-5 text-sm md:text-lg">
          One subscription gives you access to all frontier AI models.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 mb-10">
        {models.map((model) => (
          <ModelCard
            key={model.id}
            model={model}
            cart={cart}
            setCart={setCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Models;
