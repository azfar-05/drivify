// Vehicle Data Example (can be fetched from API)
const vehicleData = [
  {
    name: "Honda Civic",
    type: "Sedan",
    price: 749000,
    image: "images/honda_civic.png",
    description: "A stylish and comfortable sedan for everyday use.",
    fuelType: "Petrol",
    seatingCapacity: 5,
  },
  {
    name: "Jaguar F-Pace",
    type: "SUV",
    price: 7990000,
    image: "images/jaguar_f-pace.png",
    description:
      "A luxury SUV combining elegance, performance, and advanced technology.",
    fuelType: "Petrol",
    seatingCapacity: 5,
  },
  {
    name: "Jaguar XE",
    type: "Sedan",
    price: 4600000,
    image: "images/jaguar_xe.jpg",
    description:
      "A compact luxury sedan with sporty dynamics and cutting-edge features.",
    fuelType: "Petrol",
    seatingCapacity: 5,
  },
  {
    name: "Jaguar I-Pace",
    type: "SUV",
    price: 11000000,
    image: "images/jaguar_i-pace.jpg",
    description:
      "An all-electric luxury SUV with premium features and advanced technology.",
    fuelType: "Electric",
    seatingCapacity: 5,
  },
  {
    name: "Land Rover Range Rover",
    type: "SUV",
    price: 11500000,
    image: "images/land_rover_range_rover.jpg",
    description:
      "A premium SUV with ultimate luxury, off-road capability, and refinement.",
    fuelType: "Diesel",
    seatingCapacity: 5,
  },
  {
    name: "Land Rover Defender 90",
    type: "SUV",
    price: 9500000,
    image: "images/land_rover_defender_90.jpg",
    description:
      "An iconic 4x4 with rugged design, powerful performance, and advanced tech.",
    fuelType: "Petrol",
    seatingCapacity: 5,
  },
  {
    name: "Land Rover Discovery",
    type: "SUV",
    price: 7500000,
    image: "images/land_rover_discovery.jpg",
    description:
      "A versatile luxury SUV with advanced off-road capability and premium features.",
    fuelType: "Diesel",
    seatingCapacity: 7,
  },
  {
    name: "Mini Cooper S",
    type: "Hatchback",
    price: 600000,
    image: "images/mini_cooper_s.jpg",
    description:
      "A high-performance version of the iconic Mini, offering sporty handling.",
    fuelType: "Petrol",
    seatingCapacity: 4,
  },
  {
    name: "Mini Countryman",
    type: "SUV",
    price: 800000,
    image: "images/mini_countryman.jpg",
    description:
      "A larger Mini with SUV-like dimensions and a more spacious interior.",
    fuelType: "Petrol",
    seatingCapacity: 5,
  },
  {
    name: "Mini Electric",
    type: "Hatchback",
    price: 950000,
    image: "images/mini_electric.jpg",
    description:
      "A fully electric version of the Mini Cooper, combining fun and sustainability.",
    fuelType: "Electric",
    seatingCapacity: 4,
  },
  {
    name: "Lexus RX",
    type: "SUV",
    price: 8500000,
    image: "images/lexus_rx.jpg",
    description:
      "A luxury crossover offering a smooth drive, elegant styling, and hybrid efficiency.",
    fuelType: "Hybrid",
    seatingCapacity: 5,
  },
  {
    name: "Lexus NX",
    type: "SUV",
    price: 7500000,
    image: "images/lexus_nx.jpg",
    description:
      "A compact luxury SUV with modern design, performance, and technology.",
    fuelType: "Hybrid",
    seatingCapacity: 5,
  },
  {
    name: "Lexus LX",
    type: "SUV",
    price: 12000000,
    image: "images/lexus_lx.jpg",
    description:
      "A luxury full-size SUV combining power, off-road prowess, and refinement.",
    fuelType: "Petrol",
    seatingCapacity: 7,
  },
  {
    name: "Lexus ES",
    type: "Sedan",
    price: 6500000,
    image: "images/lexus_es.jpg",
    description:
      "A luxury sedan with a smooth ride, advanced safety features, and a spacious interior.",
    fuelType: "Petrol",
    seatingCapacity: 5,
  },
  {
    name: "Bentley Continental GT",
    type: "Coupe",
    price: 24000000,
    image: "images/bentley_continental_gt.jpg",
    description:
      "A grand tourer that exudes luxury, performance, and craftsmanship.",
    fuelType: "Petrol",
    seatingCapacity: 4,
  },
  {
    name: "Bentley Bentayga",
    type: "SUV",
    price: 30000000,
    image: "images/bentley_bentayga.jpg",
    description:
      "A luxury SUV with exquisite craftsmanship, powerful performance, and high-tech features.",
    fuelType: "Diesel",
    seatingCapacity: 5,
  },
  {
    name: "Bentley Flying Spur",
    type: "Sedan",
    price: 32000000,
    image: "images/bentley_flying_spur.jpg",
    description:
      "A luxury sedan that combines performance with ultimate comfort and elegance.",
    fuelType: "Petrol",
    seatingCapacity: 5,
  },
  {
    name: "Rolls-Royce Phantom",
    type: "Sedan",
    price: 38000000,
    image: "images/rolls_royce_phantom.jpg",
    description:
      "The epitome of luxury, with unmatched elegance, craftsmanship, and technology.",
    fuelType: "Petrol",
    seatingCapacity: 5,
  },
  {
    name: "Rolls-Royce Cullinan",
    type: "SUV",
    price: 45000000,
    image: "images/rolls_royce_cullinan.jpg",
    description:
      "A luxury SUV offering opulence, advanced technology, and off-road capabilities.",
    fuelType: "Petrol",
    seatingCapacity: 5,
  },
  {
    name: "Rolls-Royce Wraith",
    type: "Coupe",
    price: 40000000,
    image: "images/rolls_royce_wraith.jpg",
    description:
      "A grand coupe with supreme luxury, performance, and attention to detail.",
    fuelType: "Petrol",
    seatingCapacity: 4,
  },
  {
    name: "Rolls-Royce Ghost",
    type: "Sedan",
    price: 42000000,
    image: "images/rolls_royce_ghost.jpg",
    description:
      "An ultra-luxury sedan offering unmatched comfort, refinement, and performance.",
    fuelType: "Petrol",
    seatingCapacity: 5,
  },
  {
    name: "Toyota Corolla",
    type: "Hatchback",
    price: 1600000,
    image: "images/toyota_corolla.png",
    description: "A reliable and efficient hatchback with modern features.",
    fuelType: "Diesel",
    seatingCapacity: 5,
  },
  {
    name: "Hyundai i10",
    type: "Hatchback",
    price: 487000,
    image: "images/hyundai_i10.png",
    description:
      "A compact car with excellent fuel efficiency and urban driving comfort.",
    fuelType: "Petrol",
    seatingCapacity: 5,
  },
  {
    name: "Maruti Suzuki Ertiga",
    type: "SUV",
    price: 870000,
    image: "images/Ertiga.png",
    description: "A spacious and fuel-efficient SUV suitable for families.",
    fuelType: "Diesel",
    seatingCapacity: 7,
  },
  {
    name: "BMW 5 Series",
    type: "Luxury",
    price: 6000000,
    image: "images/bmw_5_series.png",
    description:
      "A premium luxury sedan with cutting-edge technology and comfort.",
    fuelType: "Diesel",
    seatingCapacity: 5,
  },
  {
    name: "Audi A6",
    type: "Luxury",
    price: 5500000,
    image: "images/audi_a6.png",
    description: "A sophisticated luxury sedan with advanced features.",
    fuelType: "Petrol",
    seatingCapacity: 5,
  },
  {
    name: "Mercedes-Benz GLC",
    type: "SUV",
    price: 7200000,
    image: "images/mercedes.png",
    description: "A stylish and powerful luxury SUV with premium comfort.",
    fuelType: "Diesel",
    seatingCapacity: 5,
  },
  {
    name: "Tata Nexon",
    type: "SUV",
    price: 999000,
    image: "images/tata_nexon.png",
    description: "An eco-friendly electric SUV with great features and safety.",
    fuelType: "Electric",
    seatingCapacity: 5,
  },
  {
    name: "Kia Seltos",
    type: "SUV",
    price: 1500000,
    image: "images/kia_seltos.png",
    description: "A modern SUV with advanced features and a sleek design.",
    fuelType: "Petrol",
    seatingCapacity: 5,
  },
  {
    name: "Hyundai Creta",
    type: "SUV",
    price: 1650000,
    image: "images/hyundai_creta.png",
    description: "A versatile SUV with excellent performance and comfort.",
    fuelType: "Diesel",
    seatingCapacity: 5,
  },
  {
    name: "Maruti Suzuki Swift",
    type: "Hatchback",
    price: 550000,
    image: "images/maruti_suzuki_swift.png",
    description: "A compact and sporty hatchback with great mileage.",
    fuelType: "Petrol",
    seatingCapacity: 5,
  },
  {
    name: "Ford Mustang",
    type: "Sports",
    price: 7500000,
    image: "images/ford_mustang.png",
    description: "An iconic sports car known for its power and style.",
    fuelType: "Petrol",
    seatingCapacity: 4,
  },
  {
    name: "Porsche 911",
    type: "Sports",
    price: 13500000,
    image: "images/porsche_911.png",
    description: "A high-performance sports car with luxurious interiors.",
    fuelType: "Petrol",
    seatingCapacity: 2,
  },
  {
    name: "Chevrolet Camaro",
    type: "Sports",
    price: 8000000,
    image: "images/chevrolet_camaro.png",
    description: "A stylish and powerful sports car for thrill seekers.",
    fuelType: "Petrol",
    seatingCapacity: 4,
  },
  {
    name: "Mahindra XUV700",
    type: "SUV",
    price: 2200000,
    image: "images/mahindra_xuv700.png",
    description: "A feature-packed SUV with advanced safety and technology.",
    fuelType: "Diesel",
    seatingCapacity: 7,
  },
  {
    name: "Volkswagen Polo",
    type: "Hatchback",
    price: 650000,
    image: "images/volkswagen_polo.png",
    description:
      "A premium hatchback with excellent build quality and performance.",
    fuelType: "Petrol",
    seatingCapacity: 5,
  },
  {
    name: "Toyota Glanza",
    type: "Hatchback",
    price: 686000,
    image: "images/toyota-glanza.png",
    description: "A stylish and fuel-efficient hatchback.",
    fuelType: "Petrol",
    seatingCapacity: 5,
  },
  {
    name: "Toyota Urban Cruiser Taisor",
    type: "Compact SUV",
    price: 774000,
    image: "images/toyota-urban cruiser taisor.png",
    description: "A compact SUV with bold looks and advanced features.",
    fuelType: "Petrol",
    seatingCapacity: 5,
  },
  {
    name: "Toyota Rumion",
    type: "MUV",
    price: 1044000,
    image: "images/Toyota-Rumion.png",
    description: "A spacious and reliable MUV for family trips.",
    fuelType: "Petrol",
    seatingCapacity: 7,
  },
  {
    name: "Toyota Urban Cruiser Hyryder",
    type: "SUV",
    price: 1114000,
    image: "images/toyota-urban cruiser hyryder.png",
    description: "A hybrid SUV with modern features and great mileage.",
    fuelType: "Petrol",
    seatingCapacity: 5,
  },
  {
    name: "Toyota Innova Hycross",
    type: "MUV",
    price: 1994000,
    image: "images/toyota-innova hycross.png",
    description: "A premium MUV with hybrid technology and spacious interiors.",
    fuelType: "Petrol",
    seatingCapacity: 7,
  },
  {
    name: "Toyota Innova Crysta",
    type: "MUV",
    price: 1999000,
    image: "images/toyota-innova crysta.png",
    description: "A robust MUV designed for comfort and performance.",
    fuelType: "Diesel",
    seatingCapacity: 7,
  },
  {
    name: "Toyota Fortuner",
    type: "SUV",
    price: 3343000,
    image: "images/toyota-fortuner.png",
    description:
      "A rugged SUV with premium features and unmatched performance.",
    fuelType: "Diesel",
    seatingCapacity: 7,
  },
  {
    name: "Toyota Fortuner Legender",
    type: "SUV",
    price: 4366000,
    image: "images/toyota-fortuner legender.png",
    description:
      "A premium variant of the Fortuner with additional luxury features.",
    fuelType: "Diesel",
    seatingCapacity: 7,
  },
  {
    name: "Toyota Hilux",
    type: "Pickup Truck",
    price: 3040000,
    image: "images/toyota-hilux.png",
    description: "A robust pickup truck built for heavy-duty performance.",
    fuelType: "Diesel",
    seatingCapacity: 5,
  },
  {
    name: "Toyota Camry",
    type: "Sedan",
    price: 4800000,
    image: "images/toyota-camry.png",
    description: "A hybrid luxury sedan with excellent fuel efficiency.",
    fuelType: "Petrol-Hybrid",
    seatingCapacity: 5,
  },
  {
    name: "Toyota Vellfire",
    type: "MUV",
    price: 12200000,
    image: "images/toyota-vellfire.png",
    description: "An ultra-luxury MUV with advanced hybrid technology.",
    fuelType: "Petrol-Hybrid",
    seatingCapacity: 7,
  },
  {
    name: "Toyota Land Cruiser",
    type: "SUV",
    price: 21000000,
    image: "images/toyota-landcruiser.png",
    description: "A legendary SUV with unmatched off-road capabilities.",
    fuelType: "Diesel",
    seatingCapacity: 5,
  },
  {
    name: "Renault Kwid",
    type: "Hatchback",
    price: 470000,
    image: "images/renault-kwid.png",
    description: "A budget-friendly hatchback with modern styling.",
    fuelType: "Petrol",
    seatingCapacity: 5,
  },
  {
    name: "Renault Triber",
    type: "MUV",
    price: 633000,
    image: "images/renault-triber.png",
    description: "An affordable MUV with modular seating options.",
    fuelType: "Petrol",
    seatingCapacity: 7,
  },
  {
    name: "Renault Kiger",
    type: "SUV",
    price: 650000,
    image: "images/renault-kiger.png",
    description: "A compact SUV with bold looks and great features.",
    fuelType: "Petrol",
    seatingCapacity: 5,
  },
  {
    name: "Nissan Magnite",
    type: "Compact SUV",
    price: 664000,
    image: "images/nissan-magnite.png",
    description: "A value-packed compact SUV with a striking design.",
    fuelType: "Petrol",
    seatingCapacity: 5,
  },
  {
    name: "Nissan X-Trail",
    type: "SUV",
    price: 5468000,
    image: "images/nissan- x-trail.png",
    description: "A premium SUV with advanced safety features and comfort.",
    fuelType: "Petrol",
    seatingCapacity: 5,
  },
  {
    name: "Volkswagen Virtus",
    type: "Sedan",
    price: 1156000,
    image: "images/volkswagen-virtus.png",
    description: "A sleek sedan with German engineering and performance.",
    fuelType: "Petrol",
    seatingCapacity: 5,
  },
  {
    name: "Volkswagen Taigun",
    type: "SUV",
    price: 1170000,
    image: "images/volkswagen-taigun.png",
    description: "A compact SUV with a premium feel and powerful performance.",
    fuelType: "Petrol",
    seatingCapacity: 5,
  },
  {
    name: "Volkswagen Tiguan",
    type: "SUV",
    price: 3817000,
    image: "images/volkswagen-tiguan.png",
    description: "A luxury SUV with top-notch features and comfort.",
    fuelType: "Petrol",
    seatingCapacity: 5,
  },
  {
    name: "BMW 3 Series",
    type: "Sedan",
    price: 5400000,
    image: "images/BMW 3 series.png",
    fuelType: "Petrol/Diesel",
    seatingCapacity: 5,
    description:
      "A sophisticated luxury sedan with sporty handling and premium features",
  },
  {
    name: "BMW X1",
    type: "SUV",
    price: 4800000,
    image: "images/BMW X1.png",
    fuelType: "Petrol/Diesel",
    seatingCapacity: 5,
    description:
      "A compact luxury SUV offering style, comfort, and versatility",
  },
  {
    name: "BMW X5",
    type: "SUV",
    price: 9600000,
    image: "images/BMW X5.png",
    fuelType: "Petrol/Diesel",
    seatingCapacity: 5,
    description:
      "A premium luxury SUV with powerful performance and advanced technology",
  },
  {
    name: "BMW 7 Series",
    type: "Sedan",
    price: 13500000,
    image: "images/BMW 7 series.png",
    fuelType: "Petrol",
    seatingCapacity: 5,
    description:
      "A flagship sedan combining luxury, technology, and supreme comfort",
  },
  {
    name: "BMW X6",
    type: "SUV",
    price: 11000000,
    image: "images/BMW X6.png",
    fuelType: "Diesel/Petrol",
    seatingCapacity: 5,
    description:
      "A bold luxury SUV coupe with striking design and dynamic performance",
  },
  {
    name: "Audi Q3",
    type: "SUV",
    price: 4500000,
    image: "images/Audi Q3.png",
    fuelType: "Petrol",
    seatingCapacity: 5,
    description:
      "A compact luxury SUV designed for urban adventures with cutting-edge tech",
  },
  {
    name: "Tata Punch",
    type: "SUV",
    price: 619990,
    image: "images/Punch.jpg",
    fuelType: "Petrol",
    seatingCapacity: 5,
    description:
      "A stylish, compact SUV perfect for city driving with a modern design and solid performance.",
  },
  {
    name: "Tata Curvv",
    type: "SUV",
    price: 999990,
    image: "images/Curvv.jpeg",
    fuelType: "Diesel",
    seatingCapacity: 5,
    description:
      "A futuristic SUV with a sleek design and advanced features, ideal for those who seek adventure.",
  },
  {
    name: "Tata Tiago",
    type: "Hatchback",
    price: 499990,
    image: "images/Tiago.jpg",
    fuelType: "CNG/Petrol",
    seatingCapacity: 5,
    description:
      "A smart, fuel-efficient hatchback offering a blend of performance and practicality.",
  },
  {
    name: "Tata Harrier",
    type: "SUV",
    price: 1499990,
    image: "images/Harrier.jpg",
    fuelType: "Diesel",
    seatingCapacity: 5,
    description:
      "A powerful and stylish SUV with impressive road presence, ideal for long drives and off-roading.",
  },
  {
    name: "Tata Safari",
    type: "SUV",
    price: 1549990,
    image: "images/Safari.jpg",
    fuelType: "Diesel",
    seatingCapacity: "6-7",
    description:
      "A robust SUV designed for families, offering ample space, comfort, and performance.",
  },
  {
    name: "Tata Altroz",
    type: "Hatchback",
    price: 664990,
    image: "images/Altroz.jpg",
    fuelType: "Diesel",
    seatingCapacity: 5,
    description:
      "A premium hatchback with top-tier safety features and a stylish design.",
  },
  {
    name: "Tata Tigor",
    type: "Sedan",
    price: 599990,
    image: "images/Tigor.jpg",
    fuelType: "CNG",
    seatingCapacity: 5,
    description:
      "A stylish sedan offering great comfort, modern features, and excellent fuel efficiency.",
  },
  {
    name: "Mahindra Scorpio",
    type: "SUV",
    price: 1399200,
    image: "images/Scorpio.jpg",
    fuelType: "Diesel",
    seatingCapacity: 7,
    description:
      "A rugged SUV with a commanding presence, perfect for long road trips and off-road adventures.",
  },
  {
    name: "Mahindra Thar",
    type: "SUV",
    price: 1298999,
    image: "images/Thar.jpg",
    fuelType: "Petrol/Diesel",
    seatingCapacity: 4,
    description:
      "An iconic off-roading SUV with modern features, perfect for adventure enthusiasts.",
  },
  {
    name: "Mahindra Bolero",
    type: "SUV",
    price: 979400,
    image: "images/Bolero.jpg",
    fuelType: "Diesel/Petrol",
    seatingCapacity: 7,
    description:
      "A tough and reliable SUV built for rugged terrains and tough roads.",
  },
  {
    name: "Mahindra XUV700",
    type: "SUV",
    price: 1399001,
    image: "images/XUV700.jpg",
    fuelType: "Petrol/Diesel",
    seatingCapacity: 7,
    description:
      "A premium SUV with cutting-edge technology, luxury features, and a powerful performance.",
  },
  {
    name: "Mahindra XUV300",
    type: "SUV",
    price: 798999,
    image: "images/XUV300.jpeg",
    fuelType: "Petrol",
    seatingCapacity: 5,
    description:
      "A compact SUV with a sporty design, powerful engine, and excellent safety features.",
  },
  {
    name: "Mahindra Marazzo",
    type: "MUV",
    price: 1459400,
    image: "images/Marazzo.jpg",
    fuelType: "Diesel",
    seatingCapacity: 7,
    description:
      "A family-friendly MUV with spacious interiors and smooth driving comfort.",
  },
  {
    name: "Kia Seltos",
    type: "SUV",
    price: 1112900,
    image: "images/Seltos.jpg",
    fuelType: "Petrol",
    seatingCapacity: 5,
    description:
      "A stylish SUV that offers a premium driving experience with advanced tech and comfort.",
  },
  {
    name: "Kia Carrens",
    type: "MPV",
    price: 1944000,
    image: "images/Carrens.jpg",
    fuelType: "Petrol,Diesel",
    seatingCapacity: 7,
    description:
      "A versatile MPV with spacious seating, perfect for families on the go.",
  },
  {
    name: "Kia Sonet",
    type: "SUV",
    price: 799900,
    image: "images/Sonet.jpg",
    fuelType: "Petrol,Diesel",
    seatingCapacity: 5,
    description:
      "A compact SUV that combines modern features, excellent performance, and stylish design.",
  },
  {
    name: "Kia Carnival",
    type: "MUV",
    price: 6390000,
    image: "images/Carnival.jpg",
    fuelType: "Diesel",
    seatingCapacity: 7,
    description:
      "A luxury MUV with premium features and an ultra-comfortable cabin.",
  },
  {
    name: "Maruti Suzuki Wagon R",
    type: "Hatchback",
    price: 554500,
    image: "images/Wagon R.jpg",
    fuelType: "Petrol",
    seatingCapacity: 5,
    description:
      "A spacious and practical hatchback known for its comfort and fuel efficiency.",
  },
  {
    name: "Maruti Suzuki Dzire",
    type: "Sedan",
    price: 679000,
    image: "images/Dzire.jpg",
    fuelType: "Petrol",
    seatingCapacity: 5,
    description:
      "A compact sedan offering a smooth ride with excellent fuel economy and modern features.",
  },
  {
    name: "Hyundai Creta",
    type: "SUV",
    price: 1110900,
    image: "images/Creta.jpg",
    fuelType: "Diesel",
    seatingCapacity: 5,
    description:
      "A stylish and feature-packed SUV offering a blend of comfort, style, and performance.",
  },
  {
    name: "Hyundai Venue",
    type: "SUV",
    price: 794100,
    image: "images/Venue.jpg",
    fuelType: "Petrol",
    seatingCapacity: 5,
    description:
      "A compact SUV perfect for urban driving, combining modern features and excellent efficiency.",
  },
  {
    name: "Hyundai Alcazar",
    type: "SUV",
    price: 1499000,
    image: "images/Alcazar.jpg",
    fuelType: "Diesel",
    seatingCapacity: 7,
    description:
      "A premium 7-seater SUV offering a luxurious experience with modern tech and comfort.",
  },
  {
    name: "Hyundai Verna",
    type: "Sedan",
    price: 1107400,
    image: "images/Verna.jpg",
    fuelType: "Petrol",
    seatingCapacity: 5,
    description:
      "A stylish sedan with cutting-edge features and a smooth, refined driving experience.",
  },
  {
    name: "Hyundai i20",
    type: "Hatchback",
    price: 704400,
    image: "images/i20.jpg",
    fuelType: "Petrol",
    seatingCapacity: 5,
    description:
      "A premium hatchback offering a perfect blend of style, comfort, and advanced features.",
  },
  {
    name: "Hyundai Exter",
    type: "SUV",
    price: 620300,
    image: "images/Exter.jpg",
    fuelType: "Petrol",
    seatingCapacity: 5,
    description:
      "A compact, stylish SUV with a modern design and excellent efficiency.",
  },
  {
    name: "Hyundai Aura",
    type: "Sedan",
    price: 620300,
    image: "images/Aura.jpg",
    fuelType: "Petrol",
    seatingCapacity: 5,
    description:
      "A compact sedan with a premium feel, ideal for city driving and offering great value.",
  },
  {
    name: "Hyundai Tucson",
    type: "SUV",
    price: 2926000,
    image: "images/Tucson.jpg",
    fuelType: "Diesel",
    seatingCapacity: 5,
    description:
      "A premium SUV with advanced safety features, a stylish design, and superb comfort.",
  },
  {
    name: "Hyundai Grand i10 Nios",
    type: "Hatchback",
    price: 598300,
    image: "images/Nios.jpg",
    fuelType: "Petrol",
    seatingCapacity: 5,
    description:
      "A stylish, compact hatchback offering excellent performance and value for money.",
  },
  {
    name: "Honda Elevate",
    type: "SUV",
    price: 1169000,
    image: "images/Elevate.jpg",
    fuelType: "Petrol",
    seatingCapacity: 5,
    description:
      "A premium SUV designed for the modern driver, offering a blend of performance and luxury.",
  },
  {
    name: "Honda City",
    type: "Sedan",
    price: 1182000,
    image: "images/City.jpg",
    fuelType: "Petrol",
    seatingCapacity: 5,
    description:
      "A spacious sedan offering comfort, style, and a refined driving experience.",
  },
  {
    name: "Honda Amaze",
    type: "Sedan",
    price: 799900,
    image: "images/Amaze.jpg",
    fuelType: "Petrol",
    seatingCapacity: 5,
    description:
      "A compact sedan offering excellent value, performance, and features.",
  },
  {
    name: "Maruti Suzuki Swift",
    type: "Hatchback",
    price: 649000,
    image: "images/Swift.jpg",
    fuelType: "Petrol",
    seatingCapacity: 5,
    description:
      "A popular hatchback known for its sporty design, fuel efficiency, and driving dynamics.",
  },
  {
    name: "Maruti Suzuki Ertiga",
    type: "MUV",
    price: 869000,
    image: "images/Ertiga.jpg",
    fuelType: "Petrol",
    seatingCapacity: 7,
    description:
      "A family-friendly MUV offering great value, space, and efficiency.",
  },
  {
    name: "Maruti Suzuki FRONX",
    type: "SUV",
    price: 751500,
    image: "images/Fronx.jpg",
    fuelType: "Petrol,CNG",
    seatingCapacity: 5,
    description:
      "A compact SUV combining innovative design and practicality for urban and highway driving.",
  },
  {
    name: "Maruti Suzuki Brezza",
    type: "SUV",
    price: 834000,
    image: "images/Brezza.jpg",
    fuelType: "Petrol,CNG",
    seatingCapacity: 5,
    description:
      "A compact SUV designed for city living, offering great efficiency and style.",
  },
  {
    name: "Maruti Suzuki Grand Vitara",
    type: "SUV",
    price: 1099000,
    image: "images/Vitara.jpg",
    fuelType: "Petrol",
    seatingCapacity: 5,
    description:
      "A premium SUV combining rugged capability with luxury features.",
  },
  {
    name: "Maruti Suzuki Baleno",
    type: "Hatchback",
    price: 666000,
    image: "images/Baleno.jpg",
    fuelType: "Petrol",
    seatingCapacity: 5,
    description:
      "A spacious hatchback offering a refined driving experience and great efficiency.",
  },
  {
    name: "Maruti Suzuki Alto",
    type: "Hatchback",
    price: 375000,
    image: "images/Alto.jpg",
    fuelType: "Petrol",
    seatingCapacity: 5,
    description:
      "A compact and affordable hatchback, perfect for city commuting and tight budgets.",
  },
  {
    name: "Maruti Suzuki Jimny",
    type: "SUV",
    price: 1274000,
    image: "images/Jimny.jpg",
    fuelType: "Petrol",
    seatingCapacity: 4,
    description:
      "A small, rugged SUV built for off-road adventures and thrilling drives.",
  },
  {
    name: "Maruti Suzuki Celerio",
    type: "Hatchback",
    price: 536000,
    image: "images/Celerio.jpg",
    fuelType: "Petrol",
    seatingCapacity: 5,
    description:
      "A compact, fuel-efficient hatchback designed for urban driving.",
  },
  {
    name: "Maruti Suzuki XL6",
    type: "MUV",
    price: 1161000,
    image: "images/Xl6.jpg",
    fuelType: "Petrol",
    seatingCapacity: 6,
    description:
      "A stylish MUV offering a spacious and comfortable cabin, perfect for family drives.",
  },
  {
    name: "Maruti Suzuki Ignis",
    type: "Hatchback",
    price: 584000,
    image: "images/Ignis.jpg",
    fuelType: "Petrol",
    seatingCapacity: 5,
    description:
      "A compact hatchback that offers unique styling and a fun driving experience.",
  },
  {
    name: "Maruti Suzuki Ciaz",
    type: "Sedan",
    price: 940000,
    image: "images/Ciaz.jpg",
    fuelType: "Petrol",
    seatingCapacity: 5,
    description:
      "A premium sedan offering excellent comfort, space, and a refined driving experience.",
  },
  {
    name: "Maruti Suzuki S-presso",
    type: "Hatchback",
    price: 426500,
    image: "images/S-presso.jpg",
    fuelType: "Petrol",
    seatingCapacity: 5,
    description:
      "A compact and quirky hatchback perfect for city driving and small families.",
  },
  {
    name: "Maruti Suzuki Invicto",
    type: "MUV",
    price: 2521000,
    image: "images/Invicto.jpg",
    fuelType: "Petrol",
    seatingCapacity: 7,
    description:
      "A premium MUV that offers luxury, comfort, and advanced technology for families.",
  },
  {
    name: "Audi A6",
    type: "Sedan",
    price: 6100000,
    image: "images/Audi A6.png",
    fuelType: "Petrol",
    seatingCapacity: 5,
    description:
      "A sleek luxury sedan with advanced safety and innovative technology",
  },
  {
    name: "Audi Q7",
    type: "SUV",
    price: 8500000,
    image: "images/Audi Q7.png",
    fuelType: "Petrol",
    seatingCapacity: 7,
    description:
      "A spacious luxury SUV with exceptional comfort and powerful performance",
  },
  {
    name: "Audi RS5",
    type: "Sports",
    price: 13000000,
    image: "images/Audi RS5.png",
    fuelType: "Petrol",
    seatingCapacity: 4,
    description:
      "A high-performance sports car with striking design and impressive speed",
  },
  {
    name: "Audi Q5",
    type: "SUV",
    price: 7500000,
    image: "images/Audi Q5.png",
    fuelType: "Petrol",
    seatingCapacity: 5,
    description:
      "A refined SUV with dynamic performance and luxurious interiors",
  },
  {
    name: "Porsche Cayenne",
    type: "SUV",
    price: 14500000,
    image: "images/Porshce cayenne.png",
    fuelType: "Petrol",
    seatingCapacity: 5,
    description:
      "A luxury SUV with thrilling performance and unmatched versatility",
  },
  {
    name: "Porsche Macan",
    type: "SUV",
    price: 8500000,
    image: "images/Porshce Macan.png",
    fuelType: "Petrol",
    seatingCapacity: 5,
    description:
      "A compact luxury SUV with sporty dynamics and premium features",
  },
  {
    name: "Porsche Panamera",
    type: "Sedan",
    price: 16000000,
    image: "images/Porshce panamera.png",
    fuelType: "Petrol",
    seatingCapacity: 5,
    description:
      "A luxury sedan offering sports car performance and premium comfort",
  },
  {
    name: "Porsche Taycan",
    type: "Sedan",
    price: 18000000,
    image: "images/Porsche Taycan.png",
    fuelType: "Electric",
    seatingCapacity: 5,
    description:
      "A futuristic electric sedan combining speed, luxury, and sustainability",
  },
  {
    name: "MG Astor",
    type: "SUV",
    price: 1048000,
    image: "images/MG Astor.png",
    fuelType: "Petrol",
    seatingCapacity: 5,
    description:
      "A stylish SUV with advanced safety features and a tech-rich interior",
  },
  {
    name: "MG Gloster",
    type: "SUV",
    price: 3200000,
    image: "images/MG Gloster.png",
    fuelType: "Diesel",
    seatingCapacity: 7,
    description:
      "A full-size SUV offering premium comfort and powerful performance",
  },
  {
    name: "MG ZS EV",
    type: "SUV",
    price: 2198000,
    image: "images/MG ZS EV.png",
    fuelType: "Electric",
    seatingCapacity: 5,
    description:
      "An eco-friendly electric SUV with excellent range and advanced tech",
  },
  {
    name: "MG Hector",
    type: "SUV",
    price: 1600000,
    image: "images/MG hector.png",
    fuelType: "Petrol/Diesel",
    seatingCapacity: 5,
    description: "A spacious and feature-packed SUV designed for families",
  },
  {
    name: "MG Hector Plus",
    type: "SUV",
    price: 1900000,
    image: "images/MG Hector Plus.png",
    fuelType: "Petrol/Diesel",
    seatingCapacity: 6,
    description:
      "A premium SUV with three-row seating and advanced safety features",
  },
  {
    name: "Citroen C3",
    type: "Hatchback",
    price: 800000,
    image: "images/Citroen C3.png",
    fuelType: "Petrol",
    seatingCapacity: 5,
    description:
      "A trendy hatchback with a unique design and excellent performance",
  },
  {
    name: "Citroen C5 Aircross",
    type: "SUV",
    price: 3300000,
    image: "images/Citroen C5 Aircross.png",
    fuelType: "Diesel",
    seatingCapacity: 5,
    description:
      "A comfortable and stylish SUV with innovative suspension technology",
  },
  {
    name: "Citroen eC3",
    type: "Hatchback",
    price: 1150000,
    image: "images/Citroen eC3.png",
    fuelType: "Electric",
    seatingCapacity: 5,
    description:
      "An electric hatchback combining efficiency, style, and convenience",
  },
  {
    name: "Jeep Compass",
    type: "SUV",
    price: 1899000,
    image: "images/Jeep_Compass.png",
    description: "Excellent offroading vehicle.",
    fuelType: "petrol",
    seatingCapacity: 4,
  },
  {
    name: "Jeep Meridian",
    type: "SUV",
    price: 2499000,
    image: "images/Jeep_Meridian.png",
    description: "Excellent offroading vehicle.",
    fuelType: "petrol",
    seatingCapacity: 7,
  },
  {
    name: "Jeep Wrangler",
    type: "SUV",
    price: 6765000,
    image: "images/Jeep_Wrangler.png",
    description: "Excellent offroading vehicle.",
    fuelType: "petrol",
    seatingCapacity: 5,
  },
  {
    name: "Jeep Grand Cherokee",
    type: "SUV",
    price: 6750000,
    image: "images/Jeep_Grand_Cherokee.png",
    description: "Excellent offroading vehicle.",
    fuelType: "petrol",
    seatingCapacity: 5,
  },
  {
    name: "Jeep Avenger",
    type: "SUV",
    price: 800000,
    image: "images/Jeep_Avenger.png",
    description: "Excellent offroading vehicle.",
    fuelType: "petrol",
    seatingCapacity: 4,
  },
  {
    name: "Volvo XC90",
    type: "SUV",
    price: 10100000,
    image: "images/Volvo_XC90.png",
    description: "5 star rated for safety and performance.",
    fuelType: "petrol",
    seatingCapacity: 5,
  },
  {
    name: "Volvo S90",
    type: "sedan",
    price: 6825000,
    image: "images/Volvo_S90.png",
    description: "5 star rated for safety and performance.",
    fuelType: "petrol",
    seatingCapacity: 4,
  },
  {
    name: "Volvo XC60",
    type: "SUV",
    price: 6990000,
    image: "images/Volvo_XC60.png",
    description: "5 star rated for safety and performance.",
    fuelType: "petrol",
    seatingCapacity: 5,
  },
  {
    name: "Volvo EX40",
    type: "SUV",
    price: 5610000,
    image: "images/Volvo_EX40.png",
    description: "5 star rated for safety and performance.",
    fuelType: "Electric",
    seatingCapacity: 5,
  },
  {
    name: "Volvo C40 Recharge",
    type: "SUV",
    price: 6295000,
    image: "images/Volvo_C40_Recharge.png",
    description: "5 star rated for safety and performance.",
    fuelType: "Electric",
    seatingCapacity: 5,
  },
  {
    name: "Volvo EX30",
    type: "SUV",
    price: 4000000,
    image: "images/Volvo_EX30.png",
    description: "5 star rated for safety and performance.",
    fuelType: "Electric",
    seatingCapacity: 4,
  },
  {
    name: "Volvo EX90",
    type: "SUV",
    price: 10000000,
    image: "images/Volvo_EX90.png",
    description: "5 star rated for safety and performance.",
    fuelType: "Electric",
    seatingCapacity: 6,
  },
  {
    name: "Maserati Ghibli",
    type: "sedan",
    price: 12000000,
    image: "images/Maserati_Ghibli.png",
    description: "Excellence in perfomance and speed.",
    fuelType: "petrol",
    seatingCapacity: 4,
  },
  {
    name: "Maserati Quattroporte",
    type: "sedan",
    price: 18000000,
    image: "images/Maserati_Quattroporte.png",
    description: "Excellence in perfomance and speed.",
    fuelType: "petrol",
    seatingCapacity: 4,
  },
  {
    name: "Maserati MC20",
    type: "sports",
    price: 36500000,
    image: "images/Maserati_MC20.png",
    description: "Excellence in perfomance and speed.",
    fuelType: "petrol",
    seatingCapacity: 2,
  },
  {
    name: "Maserati Levante",
    type: "SUV",
    price: 14500000,
    image: "images/Maserati_Levante.png",
    description: "Excellence in perfomance and speed.",
    fuelType: "petrol",
    seatingCapacity: 5,
  },
  {
    name: "Maserati GranTurismo",
    type: "sports",
    price: 27200000,
    image: "images/Maserati_GranTurismo.png",
    description: "Excellence in perfomance and speed.",
    fuelType: "petrol",
    seatingCapacity: 2,
  },
  {
    name: "Maserati Grecale",
    type: "SUV",
    price: 13100000,
    image: "images/Maserati_Grecale.png",
    description: "Excellence in perfomance and speed.",
    fuelType: "petrol",
    seatingCapacity: 4,
  },
  {
    name: "Aston Martin DB12",
    type: "Sports",
    price: 45900000,
    image: "images/Aston_Martin_DB12.png",
    description: "The car of the JAMES BOND!.",
    fuelType: "petrol",
    seatingCapacity: 2,
  },
  {
    name: "Aston Martin DB11",
    type: "Sports",
    price: 32900000,
    image: "images/Aston_Martin_DB11.png",
    description: "The car of the JAMES BOND!.",
    fuelType: "petrol",
    seatingCapacity: 2,
  },
  {
    name: "Aston Martin Vantage",
    type: "Sports",
    price: 39900000,
    image: "images/Aston_Martin_Vantage.png",
    description: "The car of the JAMES BOND!.",
    fuelType: "petrol",
    seatingCapacity: 2,
  },
  {
    name: "Aston Martin DBX",
    type: "Sports",
    price: 46300000,
    image: "images/Aston_Martin_DBX.png",
    description: "The car of the JAMES BOND!.",
    fuelType: "petrol",
    seatingCapacity: 4,
  },
  {
    name: "Ferrari Purosangue SUV",
    type: "Sports",
    price: 105000000,
    image: "images/Ferrari_Purosangue_SUV.png",
    description: "A Stylish luxury sports car with raging horse.",
    fuelType: "petrol",
    seatingCapacity: 2,
  },
  {
    name: "Ferrari 296 GTB",
    type: "Sports",
    price: 54000000,
    image: "images/Ferrari_296_GTB.png",
    description: "A Stylish luxury sports car with raging horse.",
    fuelType: "petrol",
    seatingCapacity: 2,
  },
  {
    name: "Ferrari Roma",
    type: "Sports",
    price: 37600000,
    image: "images/Ferrari_Roma.png",
    description: "A Stylish luxury sports car with raging horse.",
    fuelType: "petrol",
    seatingCapacity: 2,
  },
  {
    name: "Ferrari 296 GTS",
    type: "Sports",
    price: 62400000,
    image: "images/Ferrari_296_GTS.png",
    description: "A Stylish luxury sports car with raging horse.",
    fuelType: "petrol",
    seatingCapacity: 2,
  },
  {
    name: "Ferrari F8 Tributo",
    type: "Sports",
    price: 40200000,
    image: "images/Ferrari_F8_Tributo.png",
    description: "A Stylish luxury sports car with raging horse.",
    fuelType: "petrol",
    seatingCapacity: 2,
  },
  {
    name: "Ferrari Portofino",
    type: "Sports",
    price: 35000000,
    image: "images/Ferrari_Portofino.png",
    description: "A Stylish luxury sports car with raging horse.",
    fuelType: "petrol",
    seatingCapacity: 2,
  },
  {
    name: "Lamborghini Huracan Evo",
    type: "Sports",
    price: 32200000,
    image: "images/Lamborghini_Huracan_Evo.png",
    description: "A stylish luxury raging Bull.",
    fuelType: "petrol",
    seatingCapacity: 2,
  },
  {
    name: "Lamborghini Revuelto",
    type: "Sports",
    price: 88900000,
    image: "images/Lamborghini_Revuelto.png",
    description: "A stylish luxury raging Bull.",
    fuelType: "petrol",
    seatingCapacity: 2,
  },
  {
    name: "Lamborghini Urus SE",
    type: "Sports",
    price: 45700000,
    image: "images/Lamborghini_Urus_SE.png",
    description: "A stylish luxury raging Bull.",
    fuelType: "petrol",
    seatingCapacity: 5,
  },
  {
    name: "Lamborghini Huracan Tecnica",
    type: "Sports",
    price: 40400000,
    image: "images/Lamborghini_Huracan_Tecnica.png",
    description: "A stylish luxury raging Bull.",
    fuelType: "petrol",
    seatingCapacity: 2,
  },
  {
    name: "Lamborghini Huracan Evo Spyder",
    type: "Sports",
    price: 35400000,
    image: "images/Lamborghini_Huracan_Evo_Spyder.png",
    description: "A stylish luxury raging Bull.",
    fuelType: "petrol",
    seatingCapacity: 2,
  },
  {
    name: "Lamborghini Huracan STO",
    type: "Sports",
    price: 49900000,
    image: "images/Lamborghini_Huracan_STO.png",
    description: "A stylish luxury raging Bull.",
    fuelType: "petrol",
    seatingCapacity: 2,
  },
  {
    name: "Lamborghini Huracan Sterrato",
    type: "Sports",
    price: 46100000,
    image: "images/Lamborghini_Huracan_Sterrato.png",
    description: "A stylish luxury raging Bull.",
    fuelType: "petrol",
    seatingCapacity: 2,
  },
  {
    name: "McLaren 750S",
    type: "Sports",
    price: 59100000,
    image: "images/McLaren_750S.png",
    description: "A car with perfect Aerodynamics flying in the air.",
    fuelType: "petrol",
    seatingCapacity: 2,
  },
  {
    name: "McLaren 720S",
    type: "Sports",
    price: 46500000,
    image: "images/McLaren_720s.png",
    description: "A car with perfect Aerodynamics flying in the air.",
    fuelType: "petrol",
    seatingCapacity: 2,
  },
  {
    name: "McLaren GT",
    type: "Sports",
    price: 37200000,
    image: "images/McLaren_GT.png",
    description: "A car with perfect Aerodynamics flying in the air.",
    fuelType: "petrol",
    seatingCapacity: 2,
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
    if (fuelType && vehicle.fuelType.toLowerCase() !== fuelType.toLowerCase()) {
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
