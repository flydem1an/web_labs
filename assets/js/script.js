const cars = [
    {
        id: 1,
        brand: "Toyota",
        model: "Camry",
        price: 1200,
        image: "Toyota Camry",
        transmission: "Автомат",
        rating: 4.8
    },
    {
        id: 2,
        brand: "BMW",
        model: "3 Series",
        price: 2500,
        image: "BMW 3 Series",
        transmission: "Автомат",
        rating: 5.0
    },
    {
        id: 3,
        brand: "Renault",
        model: "Logan",
        price: 800,
        image: "Renault Logan",
        transmission: "Механіка",
        rating: 4.5
    },
    {
        id: 4,
        brand: "Mercedes",
        model: "Vito",
        price: 1000,
        image: "Mercedes Vito",
        transmission: "Механіка",
        rating: 4.7
    },
    {
        id: 5,
        brand: "Audi",
        model: "A5",
        price: 3000,
        image: "Audi A5",
        transmission: "Автомат",
        rating: 4.9
    }
];

const carGrid = document.querySelector('.car-grid');
const bookingGrid = document.getElementById('my-bookings');

function renderCars() {
    carGrid.innerHTML = '';

    let i = 0;
    while (i < cars.length) {
        const car = cars[i];

        const carHTML = `
            <article class="car-card">
                <div class="car-image-placeholder">${car.image}</div>
                <h3>${car.brand} ${car.model}</h3>
                <p class="price">${car.price} грн/доба</p>
                <ul class="car-details">
                    <li>Трансмісія: ${car.transmission}</li>
                    <li>Рейтинг: ⭐ ${car.rating}</li>
                </ul>
                <button class="btn-rent" onclick="rentCar(${car.id}, this)">Орендувати</button>
            </article>
        `;
        carGrid.innerHTML += carHTML;
        i++;
    }
}

renderCars();


function rentCar(carId, buttonElement) {
    if (buttonElement.classList.contains('booked')) {
        return;
    }

    buttonElement.classList.add('booked');
    buttonElement.textContent = "Заброньовано";

    const car = cars.find(c => c.id === carId);

    const today = new Date().toLocaleDateString();

    const bookingHTML = `
        <div class="booking-item" style="animation: fadeIn 0.5s;">
            <h4>${car.brand} ${car.model}</h4>
            <p>📅 Дата: ${today}</p>
            <p class="status confirmed" style="color: green;">Статус: Активно</p>
            <p class="price">Ціна: ${car.price} грн</p>
        </div>
    `;

    bookingGrid.insertAdjacentHTML('afterbegin', bookingHTML);
}