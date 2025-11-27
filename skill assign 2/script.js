// Mock data simulating GET API responses
const destinations = [
    { id: 1, name: "Panambur Beach", category: "Beach", description: "Beautiful beach with golden sand.", image_url: "images/beach.jpg" },
    { id: 2, name: "Kudroli Temple", category: "Temple", description: "Historic temple with stunning architecture.", image_url: "images/temple.jpg" },
    { id: 3, name: "Kudremukh Trek", category: "Trekking", description: "Scenic trekking destination in the Western Ghats.", image_url: "images/trek.jpg" }
];

const hotels = [
    { id: 1, name: "Sea View Resort", location: "Mangalore", price_per_night: 2500, rating: 4.5, image_url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" },
    { id: 2, name: "Hilltop Stay", location: "Chikmagalur", price_per_night: 1800, rating: 4.2, image_url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" }
];



// Display destinations with filter
function loadDestinations(filter = "All") {
    const container = document.getElementById("destinations-list");
    if (!container) return;
    container.innerHTML = "";
    destinations
        .filter(dest => filter === "All" || dest.category === filter)
        .forEach(dest => {
            container.innerHTML += `
                <div class="card">
                    <img src="${dest.image_url}" alt="${dest.name}">
                    <h3>${dest.name}</h3>
                    <p>${dest.description}</p>
                    <small>Category: ${dest.category}</small>
                </div>
            `;
        });
}

// Display hotels
function loadHotels() {
    const container = document.getElementById("hotels-list");
    if (!container) return;
    container.innerHTML = "";
    hotels.forEach(hotel => {
        container.innerHTML += `
            <div class="card">
                <img src="${hotel.image_url}" alt="${hotel.name}">
                <h3>${hotel.name}</h3>
                <p>Location: ${hotel.location}</p>
                <p>Price: ₹${hotel.price_per_night} / night</p>
                <p>Rating: ⭐${hotel.rating}</p>
                <button onclick="bookItem(${hotel.id}, 'Hotel')">Book Now</button>
            </div>
        `;
    });
}


function loadEvents() {
    const container = document.getElementById("events-list");
    if (!container) return;
    events.forEach(event => {
        container.innerHTML += `
            <div class="card">
                <img src="${event.image_url}" alt="${event.name}">
                <h3>${event.name}</h3>
                <p>Date: ${event.date}</p>
                <p>Location: ${event.location}</p>
                <p>${event.description}</p>
                <button onclick="bookItem(${event.id}, 'Event')">Register</button>
            </div>
        `;
    });
}


function bookItem(id, type) {
    localStorage.setItem("bookingType", type);
    localStorage.setItem("referenceId", id);
    window.location.href = "booking.html";
}


function submitBooking(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const bookingType = localStorage.getItem("bookingType");
    const referenceId = localStorage.getItem("referenceId");
    const date = document.getElementById("date").value;

    alert(`Booking Submitted!\nName: ${name}\nType: ${bookingType}\nID: ${referenceId}`);
}