<template>
  <div class="carousel-container">
    <!-- Image container -->
    <div class="carousel-images">
      <img :src="images[currentIndex]" alt="carousel image" class="carousel-image" />
    </div>

    <!-- Navigation buttons -->
    <button @click="prevImage" class="carousel-btn prev-btn">Prev</button>
    <button @click="nextImage" class="carousel-btn next-btn">Next</button>

    <!-- Indicator (optional) -->
    <div class="carousel-indicator">
      <span v-for="(image, index) in images" :key="index" :class="['indicator', { active: index === currentIndex }]"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CCarousel2',
  data() {
    return {
      // Array of image URLs
      images: [
        require('@/assets/mcu1.jpg'),
        require('@/assets/mcu2.png'),
        require('@/assets/mcu1.jpg'),
        require('@/assets/mcu3.png'),
      ],
      currentIndex: 0,
    };
  },
  methods: {
    // Go to the previous image
    prevImage() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    // Go to the next image
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
  },
};
</script>

<style scoped>
.carousel-container {
  position: relative;
  width: 100%;
  max-width: 1000px;  /* You can change this to control the carousel width */
  margin: 0 auto;
  overflow: hidden;
  border-radius: 10px;
}

.carousel-images {
  position: relative;
  width: 100%;
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  font-size: 1rem; /* Changed to rem for responsiveness */
  padding: 0.5rem; /* Changed to rem for responsiveness */
  cursor: pointer;
}

.prev-btn {
  left: 0.5rem; /* Changed to rem for responsiveness */
}

.next-btn {
  right: 0.5rem; /* Changed to rem for responsiveness */
}

.carousel-indicator {
  display: flex;
  justify-content: center;
  margin-top: 0.5rem; /* Changed to rem for responsiveness */
}

.indicator {
  width: 1rem; /* Changed to rem for responsiveness */
  height: 1rem; /* Changed to rem for responsiveness */
  margin: 0.5rem; /* Changed to rem for responsiveness */
  background-color: #bbb;
  border-radius: 50%;
  cursor: pointer;
}

.indicator.active {
  background-color: #42b883;
}

/* Media Queries for Responsive Design */
@media (max-width: 768px) {
  .carousel-btn {
    font-size: 0.875rem; /* Adjusted for smaller screens */
    padding: 0.4rem; /* Adjusted for smaller screens */
  }

  .prev-btn {
    left: 0.4rem; /* Adjusted for smaller screens */
  }

  .next-btn {
    right: 0.4rem; /* Adjusted for smaller screens */
  }

  .indicator {
    width: 0.875rem; /* Adjusted for smaller screens */
    height: 0.875rem; /* Adjusted for smaller screens */
    margin: 0.4rem; /* Adjusted for smaller screens */
  }
}

@media (max-width: 480px) {
  .carousel-btn {
    font-size: 0.75rem; /* Adjusted for smaller screens */
    padding: 0.3rem; /* Adjusted for smaller screens */
  }

  .prev-btn {
    left: 0.3rem; /* Adjusted for smaller screens */
  }

  .next-btn {
    right: 0.3rem; /* Adjusted for smaller screens */
  }

  .indicator {
    width: 0.75rem; /* Adjusted for smaller screens */
    height: 0.75rem; /* Adjusted for smaller screens */
    margin: 0.3rem; /* Adjusted for smaller screens */
  }
}
</style>