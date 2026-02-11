import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CarCard from './components/CarCard';

function App() {
    const testCar = {
        id: 1,
        brand: "BMW",
        model: "X5",
        price: 3000,
        image: "BMW X5 Image",
        transmission: "Автомат",
        rating: 5.0
    };

    const handleRent = (car) => {
        alert(`Ви хочете орендувати: ${car.brand} ${car.model}`);
    };

    return (
        <>
            <Header />

            <main className="container">
                <section>
                    <h2>Наш автопарк (Тест React)</h2>
                    <div className="car-grid">
                        <CarCard car={testCar} onRent={handleRent} />
                        <CarCard car={testCar} onRent={handleRent} />
                        <CarCard car={testCar} onRent={handleRent} />
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default App;