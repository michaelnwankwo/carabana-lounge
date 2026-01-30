// main.js - Updated: Featured Menu/Events fixes + new overlay styles

document.addEventListener("DOMContentLoaded", () => {
  // ── Elements ────────────────────────────────────────────────
  const menuGrid = document.getElementById("menuGrid");
  const featuredGrid = document.getElementById("featuredGrid");
  const featuredEventsGrid = document.getElementById("featuredEventsGrid");
  const categoryButtons = document.querySelectorAll(".category-btn");
  const searchInput = document.getElementById("menu-search");
  const searchBtn = document.querySelector(".search-icon-btn");

  let currentCategory = "tequilla";

  // ── Render Menu ─────────────────────────────────────────────
  // function renderMenu(category = currentCategory, scrollToItem = "") {
  //   if (!menuGrid || !menuData?.[category]) return;

  //   menuGrid.innerHTML = "";

  //   menuData[category].forEach((item) => {
  //     const card = document.createElement("div");
  //     card.className = "menu-card";
  //     card.setAttribute("data-name", item.name.toLowerCase());
  //     card.innerHTML = `
  //       <img src="${item.image}" alt="${item.name}" loading="lazy">
  //       <div class="content">
  //         <h3>${item.name}</h3>
  //         <div class="price">₦${item.price.toLocaleString()}</div>
  //       </div>
  //     `;
  //     menuGrid.appendChild(card);
  //   });

  //   // Scroll to matched item if search triggered it
  //   if (scrollToItem) {
  //     const target = menuGrid.querySelector(
  //       `[data-name="${scrollToItem.toLowerCase()}"]`,
  //     );
  //     if (target) {
  //       target.scrollIntoView({ behavior: "smooth", block: "center" });
  //     }
  //   }
  // }

  // // ── Category Switching ──────────────────────────────────────
  // categoryButtons.forEach((btn) => {
  //   btn.addEventListener("click", () => {
  //     categoryButtons.forEach((b) => b.classList.remove("active"));
  //     btn.classList.add("active");
  //     currentCategory = btn.dataset.category;
  //     if (searchInput) searchInput.value = "";
  //     renderMenu();
  //   });
  // });

  // ── Search Functionality ────────────────────────────────────
  // function performSearch() {
  //   const query = searchInput?.value?.trim().toLowerCase();
  //   if (!query) return;

  //   let foundCategory = null;
  //   let foundItem = null;

  //   for (const cat in menuData) {
  //     const match = menuData[cat].find((item) =>
  //       item.name.toLowerCase().includes(query),
  //     );
  //     if (match) {
  //       foundCategory = cat;
  //       foundItem = match.name;
  //       break;
  //     }
  //   }

  //   if (foundCategory) {
  //     // Switch category if needed
  //     if (foundCategory !== currentCategory) {
  //       currentCategory = foundCategory;
  //       categoryButtons.forEach((b) =>
  //         b.classList.toggle("active", b.dataset.category === foundCategory),
  //       );
  //     }
  //     renderMenu(foundCategory, foundItem);
  //   } else {
  //     alert("No drink found matching: " + query);
  //   }
  // }

  // // Search triggers
  // if (searchInput) {
  //   searchInput.addEventListener("keypress", (e) => {
  //     if (e.key === "Enter") performSearch();
  //   });
  // }

  // if (searchBtn) {
  //   searchBtn.addEventListener("click", performSearch);
  // }

  // // Initial render
  // if (menuGrid) renderMenu();

  // ── Featured Drinks – with semi-transparent bottom overlay ──
  if (featuredGrid && menuData) {
    featuredGrid.innerHTML = "";

    Object.values(menuData)
      .flat()
      .filter((item) => item.featured)
      .forEach((item) => {
        const card = document.createElement("div");
        card.className = "featured-card";
        card.innerHTML = `
          <img src="${item.image}" alt="${item.name}" loading="lazy">
          <div class="featured-overlay">
            <h3>${item.name}</h3>
            <div class="price">₦${item.price.toLocaleString()}</div>
          </div>
        `;
        featuredGrid.appendChild(card);
      });
  }

  // ── Featured Events – NO text overlay, image only ───────────
  if (featuredEventsGrid && featuredEvents) {
    featuredEventsGrid.innerHTML = "";

    featuredEvents.forEach((event) => {
      const card = document.createElement("div");
      card.className = "featured-event-card";
      card.innerHTML = `
        <img src="${event.image}" alt="${event.title}" loading="lazy">
        <!-- No event-info div anymore – pure image -->
      `;
      featuredEventsGrid.appendChild(card);
    });
  }

  // ── Carousel Initialization ─────────────────────────────────
  function initCarousel(
    wrapperSelector,
    slidesToShow = 1,
    autoplay = false,
    interval = 5000,
  ) {
    const wrapper = document.querySelector(wrapperSelector);
    if (!wrapper) return;

    const track = wrapper.querySelector(".carousel-track");
    const prev = wrapper.querySelector(".carousel-prev");
    const next = wrapper.querySelector(".carousel-next");

    if (!track || !prev || !next) return;

    let slides = Array.from(track.children);
    let currentIndex = 0;
    let slideWidth = 0;

    function updateSlideWidth() {
      if (!slides.length) return;
      slideWidth = slides[0].getBoundingClientRect().width;
      slides.forEach((slide, i) => {
        slide.style.left = `${i * slideWidth}px`;
        slide.style.minWidth = `${slideWidth}px`;
      });
      goToSlide(currentIndex, false);
    }

    function goToSlide(index, animate = true) {
      currentIndex = index % slides.length;
      if (currentIndex < 0) currentIndex += slides.length;

      track.style.transition = animate ? "transform 0.5s ease-in-out" : "none";
      track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    next.addEventListener("click", () =>
      goToSlide(currentIndex + slidesToShow),
    );
    prev.addEventListener("click", () =>
      goToSlide(currentIndex - slidesToShow),
    );

    if (autoplay) {
      let timer = setInterval(
        () => goToSlide(currentIndex + slidesToShow),
        interval,
      );
      wrapper.addEventListener("mouseenter", () => clearInterval(timer));
      wrapper.addEventListener("mouseleave", () => {
        timer = setInterval(
          () => goToSlide(currentIndex + slidesToShow),
          interval,
        );
      });
    }

    window.addEventListener("resize", updateSlideWidth);
    updateSlideWidth();
    goToSlide(0, false);
  }

  // Initialize carousels with responsive slides
  initCarousel(
    ".featured-menu",
    window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3,
    true,
    5000,
  );

  initCarousel(".featured-events", 1, true, 6500);
});

// ── Carousel Initialization ─────────────────────────────────
function initCarousel(
  wrapperSelector,
  slidesToShow = 1,
  autoplay = false,
  interval = 5000,
) {
  const wrapper = document.querySelector(wrapperSelector);
  if (!wrapper) return;

  const track = wrapper.querySelector(".carousel-track");
  const prev = wrapper.querySelector(".carousel-prev");
  const next = wrapper.querySelector(".carousel-next");

  if (!track || !prev || !next) return;

  let slides = Array.from(track.children);
  let currentIndex = 0;
  let slideWidth = 0;
  let isDragging = false;
  let startPos = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;

  function updateSlideWidth() {
    if (!slides.length) return;
    slideWidth = slides[0].getBoundingClientRect().width;
    slides.forEach((slide, i) => {
      slide.style.left = `${i * slideWidth}px`;
      slide.style.minWidth = `${slideWidth}px`;
    });
    goToSlide(currentIndex, false);
  }

  function goToSlide(index, animate = true) {
    currentIndex = index % slides.length;
    if (currentIndex < 0) currentIndex += slides.length;

    track.style.transition = animate ? "transform 0.55s ease-in-out" : "none";
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    prevTranslate = -currentIndex * slideWidth;
  }

  // ── Touch / Drag support ────────────────────────────────
  track.addEventListener("touchstart", (e) => {
    isDragging = true;
    startPos = e.touches[0].clientX;
    currentTranslate = prevTranslate;
    track.style.transition = "none";
  });

  track.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    const currentPosition = e.touches[0].clientX;
    const diff = currentPosition - startPos;
    currentTranslate = prevTranslate + diff;
    track.style.transform = `translateX(${currentTranslate}px)`;
  });

  track.addEventListener("touchend", () => {
    if (!isDragging) return;
    isDragging = false;

    const movedBy = currentTranslate - prevTranslate;

    // Decide if we should snap to next/prev slide
    if (movedBy < -slideWidth * 0.25) {
      // Swipe left → next
      goToSlide(currentIndex + slidesToShow);
    } else if (movedBy > slideWidth * 0.25) {
      // Swipe right → previous
      goToSlide(currentIndex - slidesToShow);
    } else {
      // Not enough movement → snap back
      goToSlide(currentIndex);
    }
  });

  // Also support mouse drag (good for testing on desktop)
  track.addEventListener("mousedown", (e) => {
    isDragging = true;
    startPos = e.clientX;
    currentTranslate = prevTranslate;
    track.style.transition = "none";
    track.style.cursor = "grabbing";
  });

  track.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const currentPosition = e.clientX;
    const diff = currentPosition - startPos;
    currentTranslate = prevTranslate + diff;
    track.style.transform = `translateX(${currentTranslate}px)`;
  });

  track.addEventListener("mouseup", () => {
    if (!isDragging) return;
    isDragging = false;
    track.style.cursor = "grab";

    const movedBy = currentTranslate - prevTranslate;
    if (movedBy < -slideWidth * 0.25) {
      goToSlide(currentIndex + slidesToShow);
    } else if (movedBy > slideWidth * 0.25) {
      goToSlide(currentIndex - slidesToShow);
    } else {
      goToSlide(currentIndex);
    }
  });

  track.addEventListener("mouseleave", () => {
    if (isDragging) {
      isDragging = false;
      track.style.cursor = "grab";
      goToSlide(currentIndex);
    }
  });

  // Arrow buttons
  next.addEventListener("click", () => goToSlide(currentIndex + slidesToShow));
  prev.addEventListener("click", () => goToSlide(currentIndex - slidesToShow));

  // Autoplay
  if (autoplay) {
    let timer = setInterval(
      () => goToSlide(currentIndex + slidesToShow),
      interval,
    );

    wrapper.addEventListener("mouseenter", () => clearInterval(timer));
    wrapper.addEventListener("mouseleave", () => {
      timer = setInterval(
        () => goToSlide(currentIndex + slidesToShow),
        interval,
      );
    });
  }

  window.addEventListener("resize", updateSlideWidth);
  updateSlideWidth();
  goToSlide(0, false);
}

// Toggle Mobile Menu
// Get the elements
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// 1. Toggle menu when clicking the hamburger
menuToggle.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevents the click from immediately reaching the 'window'
  menuToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// 2. Close menu when clicking ANYWHERE on the screen
window.addEventListener("click", (e) => {
  // If the menu is open AND the click was NOT on the menu itself
  if (
    navLinks.classList.contains("active") &&
    !navLinks.contains(e.target) &&
    !menuToggle.contains(e.target)
  ) {
    menuToggle.classList.remove("active");
    navLinks.classList.remove("active");
  }
});

// 3. Close menu when clicking a link inside the menu
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navLinks.classList.remove("active");
  });
});
