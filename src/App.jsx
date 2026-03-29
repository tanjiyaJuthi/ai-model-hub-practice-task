import { Suspense, useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Models from './components/Models/Models';
import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart';
import Tab from './components/Tab/Tab';

// fetch function
const getModels = async () => {
  const res = await fetch('/models.json');

  return res.json();
};

const modelPromise = getModels();

function App() {
    const [activeTab, setActiveTab]= useState('model');
    const [cart, setCart] = useState([]);
    
    return (
        <>
        <Navbar />

        <Banner />

        <Tab
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            cart={cart}
        />

        {
            activeTab === "model"
            ? <Models
                modelPromise={modelPromise}
                cart={cart}
                setCart={setCart}
            />
            : <Cart
                cart={cart} 
                setCart={setCart}
            />
        }

        <Footer />
        </>
    );
}

export default App;