document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector(".logo-container");
    const descriptionPoints = document.querySelectorAll(".description-point");

    // Show description points one by one after the logo animation ends
    logo.addEventListener("animationend", () => {
        descriptionPoints.forEach((point, index) => {
            setTimeout(() => {
                point.classList.add("animated");
            }, index * 500); // Staggered animation (0.5s delay between points)
        });
    });
});

// Sidebar toggle functionality
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}


// Sidebar toggle functionality
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}

  // Ensure the uploaders appear only after the logo animation finishes
  window.onload = () => {
    const uploaders = document.getElementById("uploaders");
    
    // Delay display of the uploaders by matching the logo animation duration (2s)
    setTimeout(() => {
      uploaders.style.visibility = "visible";
      uploaders.style.opacity = "1"; // Ensure it's visible
    }, 2000); // Matches the duration of the logo animation
  };

  // Function to toggle the sidebar
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
}

// Toggle the sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

// Display the uploaded image
function displayUploadedImage() {
    const fileInput = document.getElementById('uploadImage');
    const preview = document.getElementById('uploadedImagePreview');
    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            preview.innerHTML = `<img src="${e.target.result}" alt="Uploaded Image">`;
        };
        reader.readAsDataURL(fileInput.files[0]);
    }
}

// Handle skin tone selection
function selectSkinTone(tone) {
    alert(`You selected: ${tone}`);
}

// Navigate to the event chooser page
function goToEventPage() {
    window.location.href = "event-chooser.html";
}

// Function to toggle sidebar visibility
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}

// Function to select a skin tone and display it
function selectSkinTone(name, color) {
    const selectedToneDiv = document.getElementById("selected-tone");
    selectedToneDiv.innerHTML = `
        <div style="background-color: ${color}; width: 100px; height: 100px; border-radius: 50%; margin: auto;"></div>
        <p>${name}</p>
    `;
}

// Handle Event Click
function handleEventClick(eventName, eventImageSrc) {
    // Update the selected event display
    const eventNameElement = document.getElementById("eventName");
    const eventImageElement = document.getElementById("eventImage");

    // Update the event name and image
    eventNameElement.textContent = eventName;
    eventImageElement.src = eventImageSrc;
    eventImageElement.style.display = "block"; // Ensure the image is visible
}

// Elements for custom event
const customEventInput = document.getElementById("customEventName");
const addCustomEventButton = document.getElementById("addCustomEvent");

addCustomEventButton.addEventListener("click", () => {
    const customEventName = customEventInput.value.trim();

    if (customEventName === "") {
        alert("Please enter a valid event name.");
        return;
    }

    // Automatically display the custom event in the "Selected Event" section
    displaySelectedEvent(customEventName, null);

    // Clear the input field
    customEventInput.value = "";
});

// Add click functionality for predefined events
const eventGrid = document.querySelector(".event-grid");
const eventNameElement = document.getElementById("eventName");
const eventImageElement = document.getElementById("eventImage");

eventGrid.addEventListener("click", (e) => {
    const eventItem = e.target.closest(".event-item");

    if (eventItem && eventItem.dataset.name) {
        const eventName = eventItem.dataset.name;
        const eventImage = eventItem.querySelector("img");

        displaySelectedEvent(eventName, eventImage ? eventImage.src : null);
    }
});

// Function to display the selected event in the "Selected Event" section
function displaySelectedEvent(eventName, imageSrc) {
    eventNameElement.textContent = eventName; // Update the event name
    eventNameElement.style.display = "block";

    if (imageSrc) {
        eventImageElement.src = imageSrc; // Update the event image if available
        eventImageElement.style.display = "block";
    } else {
        eventImageElement.style.display = "none"; // Hide the image for custom events
    }
}

// Function to preview the uploaded image
function previewImage(input, previewId) {
    const preview = document.getElementById(previewId);
    
    // Check if a file is selected
    const file = input.files[0];
    
    if (file) {
        const reader = new FileReader();
        
        reader.onload = function (e) {
            // Display the image preview
            preview.innerHTML = `<img src="${e.target.result}" alt="Dress Preview">`;
        };
        
        reader.readAsDataURL(file);
    } else {
        // If no file is selected, reset the preview text
        preview.innerHTML = `Upload Dress ${previewId.charAt(previewId.length - 1)}`;
    }
}

// Optional: Function to handle the form submission
document.querySelector('.submit-btn').addEventListener('click', function() {
    // Get the uploaded files
    const file1 = document.getElementById('file1').files[0];
    const file2 = document.getElementById('file2').files[0];
    const file3 = document.getElementById('file3').files[0];
    
    if (!file1 && !file2 && !file3) {
        alert("Please upload at least one dress image.");
        return;
    }

    // You can proceed to process the files here, e.g., sending them to a server.
    alert("Dress images uploaded successfully!");
    
    // Clear the file input fields after submission (optional)
    document.getElementById('file1').value = "";
    document.getElementById('file2').value = "";
    document.getElementById('file3').value = "";

    // Reset previews (optional)
    document.getElementById('preview1').innerHTML = "Upload Dress 1";
    document.getElementById('preview2').innerHTML = "Upload Dress 2";
    document.getElementById('preview3').innerHTML = "Upload Dress 3";
});

