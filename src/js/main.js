// Main JavaScript file for Dicardo project
// Persian RTL website for digital account purchases

document.addEventListener("DOMContentLoaded", function () {
  // Initialize all components
  initCountdownTimer();
  initProductSelection();
  initWarrantySelection();
  initCategoryTabs();
  initBuyButtons();
  initAnimations();
});

// Countdown Timer
function initCountdownTimer() {
  const timerElement = document.querySelector(".timer");
  if (!timerElement) return;

  let timeLeft = 11 * 60 + 59; // 11:59 in seconds

  function updateTimer() {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    const timeString = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    timerElement.textContent = timeString;

    if (timeLeft > 0) {
      timeLeft--;
    } else {
      timeLeft = 11 * 60 + 59; // Reset timer
    }
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

// Product Selection
function initProductSelection() {
  const productCards = document.querySelectorAll(".product-card");

  productCards.forEach((card) => {
    card.addEventListener("click", function () {
      // Remove active class from all cards
      productCards.forEach((c) => c.classList.remove("selected"));

      // Add active class to clicked card
      this.classList.add("selected");

      // Add visual feedback
      this.style.transform = "scale(1.02)";
      setTimeout(() => {
        this.style.transform = "";
      }, 200);
    });
  });
}

// Warranty Selection
function initWarrantySelection() {
  const warrantyButtons = document.querySelectorAll(".warranty-btn");

  warrantyButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const parentCard = this.closest(".product-card");
      const allButtons = parentCard.querySelectorAll(".warranty-btn");

      // Remove active class from all buttons in this card
      allButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      this.classList.add("active");
    });
  });
}

// Category Tabs
function initCategoryTabs() {
  const tabButtons = document.querySelectorAll(".tab-button");

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all tabs
      tabButtons.forEach((tab) => tab.classList.remove("active"));

      // Add active class to clicked tab
      this.classList.add("active");

      // Here you can add logic to filter products based on category
      const category = this.textContent.trim();
      filterProductsByCategory(category);
    });
  });
}

// Filter products by category
function filterProductsByCategory(category) {
  const productCards = document.querySelectorAll(".product-card");

  productCards.forEach((card) => {
    // For now, just show all products
    // In a real implementation, you would filter based on category
    card.style.display = "block";
  });
}

// Buy Buttons
function initBuyButtons() {
  const buyButtons = document.querySelectorAll(".buy-button, .buy-now-button");

  buyButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      // Add click animation
      this.style.transform = "scale(0.95)";
      setTimeout(() => {
        this.style.transform = "";
      }, 150);

      // Show purchase modal or redirect to checkout
      showPurchaseModal();
    });
  });
}

// Show purchase modal
function showPurchaseModal() {
  // Create modal element
  const modal = document.createElement("div");
  modal.className = "purchase-modal";
  modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>خرید محصول</h3>
                <button class="close-modal">&times;</button>
            </div>
            <div class="modal-body">
                <p>آیا مطمئن هستید که می‌خواهید این محصول را خریداری کنید؟</p>
                <div class="modal-actions">
                    <button class="btn-confirm">تأیید خرید</button>
                    <button class="btn-cancel">انصراف</button>
                </div>
            </div>
        </div>
    `;

  // Add modal styles
  modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    `;

  const modalContent = modal.querySelector(".modal-content");
  modalContent.style.cssText = `
        background: white;
        padding: 2rem;
        border-radius: 15px;
        max-width: 400px;
        width: 90%;
        text-align: center;
    `;

  document.body.appendChild(modal);

  // Close modal functionality
  const closeModal = modal.querySelector(".close-modal");
  const cancelBtn = modal.querySelector(".btn-cancel");

  function closeModalFunc() {
    document.body.removeChild(modal);
  }

  closeModal.addEventListener("click", closeModalFunc);
  cancelBtn.addEventListener("click", closeModalFunc);
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeModalFunc();
    }
  });

  // Confirm purchase
  const confirmBtn = modal.querySelector(".btn-confirm");
  confirmBtn.addEventListener("click", function () {
    alert("خرید با موفقیت انجام شد!");
    closeModalFunc();
  });
}

// Animations
function initAnimations() {
  // Fade in animation for elements
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe all sections
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(section);
  });
}

// Utility functions
function formatPrice(price) {
  return new Intl.NumberFormat("fa-IR").format(price);
}

function formatCurrency(amount, currency = "تومان") {
  return `${formatPrice(amount)} ${currency}`;
}

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add loading animation
window.addEventListener("load", function () {
  document.body.classList.add("loaded");
});

// Add RTL support for form inputs
document.querySelectorAll("input, textarea, select").forEach((input) => {
  input.style.direction = "rtl";
  input.style.textAlign = "right";
});
