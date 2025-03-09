// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const searchBtn = document.getElementById('search-btn');
const carListingsContainer = document.querySelector('.car-listings');
const carListingForm = document.getElementById('car-listing-form');
const testimonialDots = document.querySelectorAll('.dot');
const testimonials = document.querySelectorAll('.testimonial');

// Sample vehicle data (in a real application, this would come from a database)
const carsData = [
    {
        id: 1,
        make: 'Toyota',
        model: 'Camry',
        year: 2022,
        category: 'sedan',
        price: 3500,
        location: 'Mumbai',
        image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
        features: ['Automatic', 'Bluetooth', 'Backup Camera']
    },
    {
        id: 2,
        make: 'Honda',
        model: 'CR-V',
        year: 2021,
        category: 'suv',
        price: 4200,
        location: 'Delhi',
        image: 'https://images.unsplash.com/photo-1568844293986-ca9c5c1bc2e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
        features: ['AWD', 'Sunroof', 'Apple CarPlay']
    },
    {
        id: 3,
        make: 'BMW',
        model: '5 Series',
        year: 2023,
        category: 'luxury',
        price: 7800,
        location: 'Bangalore',
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
        features: ['Leather Seats', 'Navigation', 'Premium Sound']
    },
    {
        id: 4,
        make: 'Ford',
        model: 'Mustang',
        year: 2022,
        category: 'sports',
        price: 6500,
        location: 'Chennai',
        image: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
        features: ['V8 Engine', 'Convertible', 'Sport Mode']
    },
    {
        id: 5,
        make: 'Chevrolet',
        model: 'Equinox',
        year: 2021,
        category: 'suv',
        price: 3800,
        location: 'Hyderabad',
        image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
        features: ['Spacious', 'Fuel Efficient', 'Android Auto']
    },
    {
        id: 6,
        make: 'Tesla',
        model: 'Model 3',
        year: 2023,
        category: 'sedan',
        price: 5900,
        location: 'Pune',
        image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
        features: ['Electric', 'Autopilot', 'Long Range']
    },
    {
        id: 7,
        make: 'Maruti Suzuki',
        model: 'Swift',
        year: 2022,
        category: 'hatchback',
        price: 1800,
        location: 'Kolkata',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
        features: ['Fuel Efficient', 'Compact', 'Bluetooth']
    },
    {
        id: 8,
        make: 'Hyundai',
        model: 'Creta',
        year: 2022,
        category: 'suv',
        price: 2900,
        location: 'Jaipur',
        image: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
        features: ['Panoramic Sunroof', 'Touchscreen', 'Cruise Control']
    },
    {
        id: 9,
        make: 'Mahindra',
        model: 'Thar',
        year: 2023,
        category: 'suv',
        price: 4500,
        location: 'Goa',
        image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
        features: ['4x4', 'Convertible', 'Adventure Ready']
    },
    {
        id: 10,
        make: 'Audi',
        model: 'A6',
        year: 2022,
        category: 'luxury',
        price: 8200,
        location: 'Delhi',
        image: 'https://images.unsplash.com/photo-1617814076668-8dfc6fe3b324?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
        features: ['Premium Interior', 'Virtual Cockpit', 'Bang & Olufsen Sound']
    },
    {
        id: 11,
        make: 'Royal Enfield',
        model: 'Classic 350',
        year: 2022,
        category: 'motorcycle',
        price: 800,
        location: 'Delhi',
        image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
        features: ['350cc', 'Cruiser', 'ABS']
    },
    {
        id: 12,
        make: 'Bajaj',
        model: 'Pulsar NS200',
        year: 2023,
        category: 'motorcycle',
        price: 600,
        location: 'Mumbai',
        image: 'https://images.unsplash.com/photo-1622185135505-2d795003994a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
        features: ['200cc', 'Sports', 'Fuel Efficient']
    },
    {
        id: 13,
        make: 'Honda',
        model: 'CB350',
        year: 2022,
        category: 'motorcycle',
        price: 900,
        location: 'Bangalore',
        image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
        features: ['350cc', 'Modern Classic', 'Bluetooth']
    }
];

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    
    // Toggle hamburger animation
    const bars = document.querySelectorAll('.bar');
    if (hamburger.classList.contains('active')) {
        bars[0].style.transform = 'translateY(8px) rotate(45deg)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'translateY(-8px) rotate(-45deg)';
    } else {
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        
        // Reset hamburger
        const bars = document.querySelectorAll('.bar');
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
    });
});

// Active navigation link based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Display car listings
function displayCarListings(cars) {
    if (!carListingsContainer) return; // Exit if container doesn't exist on this page
    
    carListingsContainer.innerHTML = '';
    
    if (cars.length === 0) {
        carListingsContainer.innerHTML = '<p class="no-results">No cars found matching your criteria. Please try a different search.</p>';
        return;
    }
    
    cars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.classList.add('car-card');
        
        // Create features HTML
        let featuresHTML = '';
        car.features.forEach(feature => {
            featuresHTML += `<span class="feature">${feature}</span>`;
        });
        
        carCard.innerHTML = `
            <div class="car-image">
                <img src="${car.image}" alt="${car.make} ${car.model}">
            </div>
            <div class="car-details">
                <div class="car-title">
                    <h3>${car.make} ${car.model}</h3>
                    <span class="car-price">₹${car.price}/day</span>
                </div>
                <div class="car-info">
                    <span>${car.year}</span>
                    <span>${car.category.charAt(0).toUpperCase() + car.category.slice(1)}</span>
                    <span>${car.location}</span>
                </div>
                <div class="car-features">
                    ${featuresHTML}
                </div>
                <div class="car-actions">
                    <a href="booking.html?car=${car.id}" class="btn btn-primary">Rent Now</a>
                    <button class="btn view-details-btn" data-id="${car.id}">View Details</button>
                </div>
            </div>
        `;
        
        carListingsContainer.appendChild(carCard);
    });
    
    // Add event listeners to the view details buttons
    document.querySelectorAll('.view-details-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const carId = e.target.getAttribute('data-id');
            viewCarDetails(carId);
        });
    });
}

// Search functionality
if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        const location = document.getElementById('location')?.value.toLowerCase() || '';
        const pickupDate = document.getElementById('pickup-date')?.value || '';
        const returnDate = document.getElementById('return-date')?.value || '';
        const carType = document.getElementById('car-type')?.value.toLowerCase() || '';
        
        // Validate dates
        if (pickupDate && returnDate) {
            const pickup = new Date(pickupDate);
            const returnD = new Date(returnDate);
            
            if (returnD <= pickup) {
                alert('Return date must be after pickup date');
                return;
            }
        }
        
        // Filter cars based on search criteria
        let filteredCars = [...carsData];
        
        if (location) {
            filteredCars = filteredCars.filter(car => 
                car.location.toLowerCase().includes(location)
            );
        }
        
        if (carType) {
            filteredCars = filteredCars.filter(car => 
                car.category === carType
            );
        }
        
        // Display filtered cars
        displayCarListings(filteredCars);
        
        // Scroll to results
        if (carListingsContainer) {
            carListingsContainer.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// View car details function
function viewCarDetails(carId) {
    const car = carsData.find(car => car.id == carId);
    
    if (!car) return;
    
    // In a real application, this would open a modal or redirect to a details page
    alert(`${car.make} ${car.model} (${car.year})
Category: ${car.category}
Price: ₹${car.price}/day
Location: ${car.location}
Features: ${car.features.join(', ')}

In a real application, this would show a detailed page with more information and images.`);
}

// Car listing form submission
if (carListingForm) {
    carListingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const make = document.getElementById('car-make').value;
        const model = document.getElementById('car-model').value;
        const year = document.getElementById('car-year').value;
        const category = document.getElementById('car-category').value;
        const dailyRate = document.getElementById('daily-rate').value;
        const description = document.getElementById('car-description').value;
        
        // In a real application, this would send the data to a server
        alert(`Thank you for listing your ${make} ${model}! Your car has been submitted for review. In a real application, this would be saved to a database.`);
        
        // Reset form
        carListingForm.reset();
    });
}

// Testimonial slider
let currentTestimonial = 0;

function showTestimonial(index) {
    if (!testimonials.length) return; // Exit if no testimonials on this page
    
    testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === index ? 'block' : 'none';
    });
    
    testimonialDots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// Initialize testimonial display
if (testimonials.length > 0) {
    showTestimonial(currentTestimonial);
    
    // Add click event to dots
    testimonialDots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            currentTestimonial = i;
            showTestimonial(currentTestimonial);
        });
    });
    
    // Auto-rotate testimonials
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 5000);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Hover effects for car cards
document.addEventListener('mouseover', (e) => {
    if (e.target.closest('.car-card')) {
        e.target.closest('.car-card').classList.add('hovered');
    }
});

document.addEventListener('mouseout', (e) => {
    if (e.target.closest('.car-card')) {
        e.target.closest('.car-card').classList.remove('hovered');
    }
});

// Handle direct navigation to booking page
document.addEventListener('DOMContentLoaded', function() {
    // Initialize car listings on page load if we're on the rent-car page
    if (window.location.pathname.includes('rent-car.html') || window.location.pathname === '/' || window.location.pathname.includes('index.html')) {
        if (carListingsContainer) {
            displayCarListings(carsData);
        }
    }
    
    // If we're on the booking page, load the car details based on URL parameter
    if (window.location.pathname.includes('booking.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const carId = urlParams.get('car');
        
        if (carId) {
            console.log('Loading car details for car ID:', carId);
            // Find the car in our data
            const car = carsData.find(c => c.id == carId);
            
            if (car) {
                // Update the car details in the booking page
                const selectedCarElement = document.getElementById('selected-car');
                if (selectedCarElement) {
                    selectedCarElement.innerHTML = `
                        <div class="car-image">
                            <img src="${car.image}" alt="${car.make} ${car.model}">
                        </div>
                        <div class="car-info-booking">
                            <h3>${car.make} ${car.model}</h3>
                            <div class="car-specs">
                                <span><i class="fas fa-calendar-alt"></i> ${car.year}</span>
                                <span><i class="fas fa-car"></i> ${car.category.charAt(0).toUpperCase() + car.category.slice(1)}</span>
                                <span><i class="fas fa-map-marker-alt"></i> ${car.location}</span>
                            </div>
                            <div class="car-features-booking">
                                ${car.features.map(feature => `<span class="feature">${feature}</span>`).join('')}
                            </div>
                            <div class="car-price-booking">
                                <span class="price">₹${car.price}/day</span>
                            </div>
                        </div>
                    `;
                }
                
                // Show/hide motorcycle options based on vehicle type
                const motorcycleOptions = document.querySelectorAll('.motorcycle-option');
                if (car.category === 'motorcycle') {
                    motorcycleOptions.forEach(option => option.classList.add('show'));
                    
                    // Hide car-specific options
                    const childSeatOption = document.getElementById('child-seat');
                    const additionalDriverOption = document.getElementById('additional-driver');
                    if (childSeatOption) childSeatOption.parentElement.style.display = 'none';
                    if (additionalDriverOption) additionalDriverOption.parentElement.style.display = 'none';
                } else {
                    motorcycleOptions.forEach(option => option.classList.remove('show'));
                }
                
                // Update the booking summary
                const bookingSummary = document.querySelector('.booking-summary');
                if (bookingSummary) {
                    const summaryItems = bookingSummary.querySelectorAll('.summary-item');
                    if (summaryItems.length > 0) {
                        // Update the car rental price (assuming 3 days)
                        const rentalPrice = car.price * 3;
                        summaryItems[0].innerHTML = `
                            <span>Vehicle Rental (3 days)</span>
                            <span>₹${rentalPrice}</span>
                        `;
                        
                        // Recalculate total
                        const insurancePrice = 500 * 3; // ₹500/day for 3 days
                        const gpsPrice = 200 * 3; // ₹200/day for 3 days
                        const subtotal = rentalPrice + insurancePrice + gpsPrice;
                        const taxes = Math.round(subtotal * 0.18); // 18% GST
                        const total = subtotal + taxes;
                        
                        // Update taxes
                        summaryItems[3].innerHTML = `
                            <span>Taxes & Fees (18% GST)</span>
                            <span>₹${taxes}</span>
                        `;
                        
                        // Update total
                        summaryItems[4].innerHTML = `
                            <span>Total Amount</span>
                            <span>₹${total}</span>
                        `;
                        
                        // Update confirmation page details
                        const amountPaid = document.getElementById('amount-paid');
                        if (amountPaid) {
                            amountPaid.textContent = `₹${total}`;
                        }
                        
                        // Update car name in confirmation
                        const carNameElement = document.querySelector('.booking-details p:nth-child(2)');
                        if (carNameElement) {
                            carNameElement.innerHTML = `<strong>Vehicle:</strong> ${car.make} ${car.model}`;
                        }
                    }
                }
            }
        }
    }
    
    // Handle FAQ toggles
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            faqItem.classList.toggle('active');
            
            // Toggle icon if it exists
            const icon = this.querySelector('i');
            if (icon) {
                if (faqItem.classList.contains('active')) {
                    icon.classList.remove('fa-plus');
                    icon.classList.add('fa-minus');
                } else {
                    icon.classList.remove('fa-minus');
                    icon.classList.add('fa-plus');
                }
            }
        });
    });
}); 