// Vehicle Data Example (can be fetched from API)
const vehicleData = [
  {
    name: "Honda Civic",
    type: "Sedan",
    price: 749000,
    image: "images/car_images/honda_civic.png",
    description: "A stylish and comfortable sedan for everyday use.",
    fuelType: "petrol",
    seatingCapacity: 5,
  },
  {
    name: "Toyota Corolla",
    type: "Hatchback",
    price: 1600000,
    image: "images/car_images/toyota_corolla.png",
    description: "A reliable and efficient hatchback with modern features.",
    fuelType: "diesel",
    seatingCapacity: 5,
  },
  {
    name: "Hyundai i10",
    type: "Hatchback",
    price: 487000,
    image: "images/car_images/hyundai_i10.png",
    description: "A compact car with great fuel economy and city comfort.",
    fuelType: "petrol",
    seatingCapacity: 5,
  },
  {
    name: "Maruti Suzuki Ertiga",
    type: "SUV",
    price: 870000,
    image: "images/car_images/ertiga.png",
    description: "A budget-friendly 7-seater SUV for family trips.",
    fuelType: "diesel",
    seatingCapacity: 7,
  },
  {
    name: "BMW 5 Series",
    type: "Luxury",
    price: 6000000,
    image: "images/car_images/bmw_5_series.png",
    description: "A premium luxury sedan with top-notch comfort and power.",
    fuelType: "diesel",
    seatingCapacity: 5,
  },
  {
    name: "Audi A6",
    type: "Luxury",
    price: 5500000,
    image: "images/car_images/audi_a6.png",
    description: "A refined and powerful luxury sedan.",
    fuelType: "petrol",
    seatingCapacity: 5,
  },
  {
    name: "Mercedes-Benz GLC",
    type: "SUV",
    price: 7200000,
    image: "images/car_images/mercedes.png",
    description: "A luxury SUV with advanced features and performance.",
    fuelType: "diesel",
    seatingCapacity: 5,
  },
  {
    name: "Tata Nexon",
    type: "SUV",
    price: 999000,
    image: "images/car_images/tata_nexon.png",
    description: "An electric SUV with futuristic features.",
    fuelType: "electric",
    seatingCapacity: 5,
  },
  {
    name: "Kia Seltos",
    type: "SUV",
    price: 1500000,
    image: "images/car_images/kia_seltos.png",
    description: "A stylish SUV with modern tech.",
    fuelType: "petrol",
    seatingCapacity: 5,
  },
  {
    name: "Hyundai Creta",
    type: "SUV",
    price: 1650000,
    image: "images/car_images/hyundai_creta.png",
    description: "A well-balanced compact SUV.",
    fuelType: "diesel",
    seatingCapacity: 5,
  },
  {
    name: "Maruti Suzuki Swift",
    type: "Hatchback",
    price: 550000,
    image: "images/car_images/maruti_suzuki_swift.png",
    description: "A budget-friendly and fuel-efficient hatchback.",
    fuelType: "petrol",
    seatingCapacity: 5,
  },
  {
    name: "Ford Mustang",
    type: "Sports",
    price: 7500000,
    image: "images/car_images/ford_mustang.png",
    description: "An iconic American muscle car.",
    fuelType: "petrol",
    seatingCapacity: 4,
  },
  {
    name: "Porsche 911",
    type: "Sports",
    price: 13500000,
    image: "images/car_images/porsche_911.png",
    description: "A high-performance sports car for enthusiasts.",
    fuelType: "petrol",
    seatingCapacity: 2,
  },
  {
    name: "Chevrolet Camaro",
    type: "Sports",
    price: 8000000,
    image: "images/car_images/chevrolet_camaro.png",
    description: "A powerful muscle car with a bold design.",
    fuelType: "petrol",
    seatingCapacity: 4,
  },
  {
    name: "Mahindra XUV700",
    type: "SUV",
    price: 2200000,
    image: "images/car_images/mahindra_xuv700.png",
    description: "A tech-loaded SUV with superior safety features.",
    fuelType: "diesel",
    seatingCapacity: 7,
  },
  {
    name: "Volkswagen Polo",
    type: "Hatchback",
    price: 650000,
    image: "images/car_images/volkswagen_polo.png",
    description: "A reliable and premium hatchback.",
    fuelType: "petrol",
    seatingCapacity: 5,
  },
];

// Get query parameters from URL
const urlParams = new URLSearchParams(window.location.search);
const priceRange = urlParams.get("priceRange");
const fuelType = urlParams.get("fuelType")?.toLowerCase();
const carType = urlParams.get("carType")?.toLowerCase();
const seatingCapacity = urlParams.get("seatingCapacity");

// Function to filter vehicles based on selected filters
function filterVehicles() {
  return vehicleData.filter((vehicle) => {
    const matchesPrice =
      !priceRange ||
      (priceRange === "under-5-lakh" && vehicle.price < 500000) ||
      (priceRange === "5-10-lakh" && vehicle.price >= 500000 && vehicle.price < 1000000) ||
      (priceRange === "10-20-lakh" && vehicle.price >= 1000000 && vehicle.price < 2000000) ||
      (priceRange === "above-20-lakh" && vehicle.price >= 2000000);

    const matchesFuel = !fuelType || vehicle.fuelType.toLowerCase() === fuelType;
    const matchesType = !carType || vehicle.type.toLowerCase() === carType;
    const matchesSeats = !seatingCapacity || vehicle.seatingCapacity === parseInt(seatingCapacity);

    return matchesPrice && matchesFuel && matchesType && matchesSeats;
  });
}

// Function to display filtered vehicles
function displayResults() {
  const filteredVehicles = filterVehicles();
  const resultsContainer = document.getElementById("results-container");
  resultsContainer.innerHTML = "";

  if (filteredVehicles.length === 0) {
    resultsContainer.innerHTML = "<p>No vehicles found based on your filters.</p>";
    return;
  }

  filteredVehicles.forEach((vehicle) => {
    const vehicleCard = document.createElement("div");
    vehicleCard.classList.add("vehicle-card");
    vehicleCard.innerHTML = `
      <img src="${vehicle.image || 'images/car_images/default_car.png'}" alt="${vehicle.name}" class="vehicle-image">
      <h3>${vehicle.name}</h3>
      <p>Type: ${vehicle.type}</p>
      <p>Price: ₹${vehicle.price.toLocaleString()}</p>
      <p>Description: ${vehicle.description || "No description available."}</p>
      <p>Fuel Type: ${vehicle.fuelType}</p>
      <p>Seating Capacity: ${vehicle.seatingCapacity}</p>
    `;
    resultsContainer.appendChild(vehicleCard);
  });
}

// Display results
displayResults();

// Apply filters on form submission
document.getElementById("filterForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const newParams = new URLSearchParams(new FormData(this)).toString();
  window.location.search = newParams;
});

// Function to toggle the visibility of the filter section
function toggleFilter() {
  const filterSection = document.getElementById("filterSection");
  filterSection.style.display = filterSection.style.display === "none" ? "block" : "none";
}
