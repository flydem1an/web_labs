import React, { useState } from 'react';
import CarCard from '../components/CarCard';
import BookingModal from '../components/BookingModal';

export default function Catalog() {
    const cars = [
        { id: 1, brand: "Toyota", model: "Camry", price: 1200, image: "Toyota Camry", transmission: "Автомат", rating: 4.8 },
        { id: 2, brand: "BMW", model: "3 Series", price: 2500, image: "BMW 3 Series", transmission: "Автомат", rating: 5.0 },
        { id: 3, brand: "Renault", model: "Logan", price: 800, image: "Renault Logan", transmission: "Механіка", rating: 4.5 },
        { id: 4, brand: "Mercedes", model: "Vito", price: 1000, image: "Mercedes Vito", transmission: "Механіка", rating: 4.7 },
        { id: 5, brand: "Audi", model: "A5", price: 3000, image: "Audi A5", transmission: "Автомат", rating: 4.9 },
        { id: 6, brand: "Skoda", model: "Octavia", price: 900, image: "Skoda Octavia", transmission: "Механіка", rating: 4.6 },
    ];

    const [selectedCar, setSelectedCar] = useState(null);

    const handleRentClick = (car) => {
        setSelectedCar(car);
    };

    const handleCloseModal = () => {
        setSelectedCar(null);
    };

    return (
        <div className="container">
            <section>
                <h2>Наш автопарк</h2>

                <div className="car-grid">
                    {cars.map((car) => (
                        <CarCard
                            key={car.id}
                            car={car}
                            onRent={handleRentClick}
                        />
                    ))}
                </div>
            </section>

            <BookingModal
                car={selectedCar}
                isOpen={!!selectedCar}
                onClose={handleCloseModal}
            />
        </div>
    );
}