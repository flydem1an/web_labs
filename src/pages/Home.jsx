import React from 'react';
import CarCard from '../components/CarCard';

export default function Home() {
    // temporary
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
        <section>
            <h2>Наш автопарк</h2>
            <div className="car-grid">
                <CarCard car={testCar} onRent={handleRent} />
                <CarCard car={testCar} onRent={handleRent} />
                <CarCard car={testCar} onRent={handleRent} />
            </div>
        </section>
    );
}