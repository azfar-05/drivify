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
    description:
      "A compact SUV with great fuel economy and city driving comfort.",
    fuelType: "petrol",
    seatingCapacity: 5,
  },
  {
    name: "Maruti suzuki Ertiga",
    type: "SUV",
    price: 870000,
    image: "images/car_images/Ertiga.png",
    description:
      "A compact SUV with great fuel economy and city driving comfort.",
    fuelType: "diesel",
    seatingCapacity: 7,
  },
  {
    name: "BMW 5 Series",
    type: "Luxury",
    price: 6000000,
    image: "images/car_images/bmw_5_series.png",
    fuelType: "Diesel",
    seatingCapacity: 5,
  },
  {
    name: "Audi A6",
    type: "Luxury",
    price: 5500000,
    image: "images/car_images/audi_a6.png",
    fuelType: "Petrol",
    seatingCapacity: 5,
  },
  {
    name: "Mercedes-Benz GLC",
    type: "SUV",
    price: 7200000,
    image: "images/car_images/mercedes.png",
    fuelType: "Diesel",
    seatingCapacity: 5,
  },
  {
    name: "Tata Nexon",
    type: "SUV",
    price: 999000,
    image: "images/car_images/tata_nexon.png",
    fuelType: "Electric",
    seatingCapacity: 5,
  },
  {
    name: "Kia Seltos",
    type: "SUV",
    price: 1500000,
    image: "images/car_images/kia_seltos.png",
    fuelType: "Petrol",
    seatingCapacity: 5,
  },
  {
    name: "Hyundai Creta",
    type: "SUV",
    price: 1650000,
    image: "images/car_images/hyundai_creta.png",
    fuelType: "Diesel",
    seatingCapacity: 5,
  },
  {
    name: "Maruti Suzuki Swift",
    type: "Hatchback",
    price: 550000,
    image: "images/car_images/maruti_suzuki_swift.png",
    fuelType: "Petrol",
    seatingCapacity: 5,
  },
  {
    name: "Ford Mustang",
    type: "Sports",
    price: 7500000,
    image: "images/car_images/ford_mustang.png",
    fuelType: "Petrol",
    seatingCapacity: 4,
  },
  {
    name: "Porsche 911",
    type: "Sports",
    price: 13500000,
    image: "images/car_images/porsche_911.png",
    fuelType: "Petrol",
    seatingCapacity: 2,
  },
  {
    name: "Chevrolet Camaro",
    type: "Sports",
    price: 8000000,
    image: "images/car_images/chevrolet_camaro.png",
    fuelType: "Petrol",
    seatingCapacity: 4,
  },
  {
    name: "Mahindra XUV700",
    type: "SUV",
    price: 2200000,
    image: "images/car_images/mahindra_xuv700.png",
    fuelType: "Diesel",
    seatingCapacity: 7,
  },
  {
    name: "Volkswagen Polo",
    type: "Hatchback",
    price: 650000,
    image: "images/car_images/volkswagen_polo.png",
    fuelType: "Petrol",
    seatingCapacity: 5,
  },
];

// Get query parameters from URL
const urlParams = new URLSearchParams(window.location.search);
const priceRange = urlParams.get("priceRange");
const fuelType = urlParams.get("fuelType");
const carType = urlParams.get("carType");
const seatingCapacity = urlParams.get("seatingCapacity");

// Function to filter vehicles based on selected filters
function filterVehicles() {
  const filteredVehicles = vehicleData.filter((vehicle) => {
    let matchesPrice = true;
    let matchesFuel = true;
    let matchesType = true;
    let matchesSeats = true;

    // Price Range Filter
    if (priceRange) {
      if (priceRange === "under-5-lakh" && vehicle.price >= 500000) {
        matchesPrice = false;
      } else if (
        priceRange === "5-10-lakh" &&
        (vehicle.price < 500000 || vehicle.price >= 1000000)
      ) {
        matchesPrice = false;
      } else if (
        priceRange === "10-20-lakh" &&
        (vehicle.price < 1000000 || vehicle.price >= 2000000)
      ) {
        matchesPrice = false;
      } else if (priceRange === "above-20-lakh" && vehicle.price < 2000000) {
        matchesPrice = false;
      }
    }

    // Fuel Type Filter
    if (fuelType && vehicle.fuelType !== fuelType) {
      matchesFuel = false;
    }

    // Car Type Filter
    if (carType && vehicle.type.toLowerCase() !== carType.toLowerCase()) {
      matchesType = false;
    }

    // Seating Capacity Filter
    if (
      seatingCapacity &&
      vehicle.seatingCapacity !== parseInt(seatingCapacity)
    ) {
      matchesSeats = false;
    }

    return matchesPrice && matchesFuel && matchesType && matchesSeats;
  });

  return filteredVehicles;
}

// Function to display filtered vehicles
function displayResults() {
  const filteredVehicles = filterVehicles();
  const resultsContainer = document.getElementById("results-container");
  resultsContainer.innerHTML = "";

  if (filteredVehicles.length === 0) {
    resultsContainer.innerHTML =
      "<p>No vehicles found based on your filters.</p>";
    return;
  }

  filteredVehicles.forEach((vehicle) => {
    const vehicleCard = document.createElement("div");
    vehicleCard.classList.add("vehicle-card");
    vehicleCard.innerHTML = `
                    <img src="${vehicle.image}" alt="${
      vehicle.name
    }" class="vehicle-image">
                    <h3>${vehicle.name}</h3>
                    <p>Type: ${vehicle.type}</p>
                    <p>Price: ₹${vehicle.price.toLocaleString()}</p>
                    <p>Description: ${vehicle.description}</p>
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

  // Get values from the form
  const carType = document.getElementById("carType").value;
  const seatingCapacity = document.getElementById("seatingCapacity").value;
  const priceRange = document.getElementById("priceRange").value;
  const fuelType = document.getElementById("fuelType").value;

  // Update the URL with selected filters
  const newParams = new URLSearchParams();
  if (carType) newParams.set("carType", carType);
  if (seatingCapacity) newParams.set("seatingCapacity", seatingCapacity);
  if (priceRange) newParams.set("priceRange", priceRange);
  if (fuelType) newParams.set("fuelType", fuelType);

  // Redirect to the filtered URL
  window.location.search = newParams.toString();
});

// Function to toggle the visibility of the filter section
function toggleFilter() {
  const filterSection = document.getElementById("filterSection");
  if (
    filterSection.style.display === "none" ||
    filterSection.style.display === ""
  ) {
    filterSection.style.display = "block";
  } else {
    filterSection.style.display = "none";
  }
}
