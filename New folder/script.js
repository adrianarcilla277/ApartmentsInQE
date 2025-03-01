
document.addEventListener("DOMContentLoaded", () => {
    // Select the Sign-Up Link
    const signUpLink = document.getElementById("sign-up-link");

    // Add Click Event Listener
    signUpLink.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default link behavior
        alert("The  Sign Up is not available yet");
    });
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1, // Show only one card at a time
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    effect: "slide",
    speed: 500 // Smooth transition speed
  });
  function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
}
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const searchContainer = document.querySelector(".search-container");

    // Expand the search bar when clicked
    searchInput.addEventListener("focus", function () {
        searchContainer.style.width = "350px";
    });

    
    searchInput.addEventListener("blur", function () {
        if (searchInput.value === "") {
            searchContainer.style.width = "300px";
        }
    });
});

// Sample data for autocomplete
const searchSuggestions = [
    "Good Apartments",
    "Affordable Apartments",
    "Bed",
    "Wifi",
    "Pet-Friendly Rentals",
    "Price",
    "Near",
    "Queens Row East",



];

// Listahan ng search terms at kanilang links
const searchData = {
    "good apartments": "Untitled-1.html",
    "Bed": "Untitled-1.html",
    "affordable apartments": "Untitled-1.html",
    "Wifi": "Untitled-1.html",
    "Near": "Untitled-1.html",
    "Price": "Untitled-1.html",
    "Queens Row East": "Untitled-1.html",
    "Pet-Friendly Rentals":"Untitled-1.html"
};

// Function to filter and show suggestions
function showSuggestions() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let suggestionBox = document.getElementById("suggestions");

    // Clear previous suggestions
    suggestionBox.innerHTML = "";

    if (input === "") {
        suggestionBox.style.display = "none";
        return;
    }

    // Filter suggestions (case insensitive)
    let filteredSuggestions = searchSuggestions.filter(item =>
        item.toLowerCase().includes(input)
    );

    if (filteredSuggestions.length === 0) {
        suggestionBox.style.display = "none";
        return;
    }

    // Display suggestions
    filteredSuggestions.forEach(suggestion => {
        let li = document.createElement("li");
        li.textContent = suggestion;
        li.style.cursor = "pointer"; // Para mukhang clickable

        // Kapag clinic, ilalagay sa input at ire-redirect kung may link
        li.onclick = function () {
            document.getElementById("searchInput").value = suggestion;
            suggestionBox.style.display = "none";

            if (searchData[suggestion.toLowerCase()]) {
                window.open(searchData[suggestion.toLowerCase()], "_blank"); // Open in new tab
            }
        };

        suggestionBox.appendChild(li);
    });

    suggestionBox.style.display = "block";
}

// Hide suggestions when clicking outside
document.addEventListener("click", function (e) {
    if (!document.querySelector(".search-container").contains(e.target)) {
        document.getElementById("suggestions").style.display = "none";
    }
});

// Function para sa magnifying glass button
document.getElementById("searchIcon").addEventListener("click", function () {
    let inputValue = document.getElementById("searchInput").value.toLowerCase(); // Convert to lowercase
    
    if (searchData[inputValue]) {
        window.open(searchData[inputValue], "_blank"); // Open in new tab
    } else {
        alert("Walang nahanap na resulta. Subukang muli."); // Message kung walang match
    }
});


//hanggang dito yung para sa search bar 
document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("loginBtn");
    const loginModal = document.getElementById("loginModal");
    const closeBtn = document.querySelector(".close");

    // Show modal on click
    loginBtn.addEventListener("click", function (event) {
        event.preventDefault();
        loginModal.style.display = "flex";
    });

    // Close modal on clicking the close button
    closeBtn.addEventListener("click", function () {
        loginModal.style.display = "none";
    });

    // Close modal when clicking outside
    window.addEventListener("click", function (event) {
        if (event.target === loginModal) {
            loginModal.style.display = "none";
        }
    });
});
// Toggle password visibility/eye icon/
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", function () {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password";
        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");
    }
});
//for amenities//
document.addEventListener("DOMContentLoaded", function () {
    const amenities = document.querySelectorAll(".amenity");

    amenities.forEach(amenity => {
        amenity.addEventListener("mouseover", function () {
            this.style.opacity = "0.8";
        });

        amenity.addEventListener("mouseleave", function () {
            this.style.opacity = "1";
        });
    });
});
//para sa link nung img sa mga rental //
document.getElementById("feature1").addEventListener("click", function() {
    window.location.href = "Untitled-1.html";
});

document.getElementById("feature2").addEventListener("click", function() {
    window.location.href = "Untitled-1.html";
});

document.getElementById("feature3").addEventListener("click", function() {
    window.location.href = "Untitled-1.html";
});

document.getElementById("feature4").addEventListener("click", function() {
    window.location.href = "Untitled-1.html";
});
function redirectTo(url) {
    window.location.href = url;
}
 
document.getElementById("rental1").addEventListener("click", function() {
    window.location.href = "Untitled-1.html";
});

document.getElementById("rental2").addEventListener("click", function() {
    window.location.href = "Untitled-1.html";
});

document.getElementById("rental3").addEventListener("click", function() {
    window.location.href = "Untitled-1.html";
});

document.getElementById("rental4").addEventListener("click", function() {
    window.location.href = "Untitled-1.html";
});
function redirectTo(url) {
    window.location.href = url;
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1200: { slidesPerView: 4 }
    }
});

