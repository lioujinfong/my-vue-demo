<template>
  <div class="card-carousel-wrapper">
    <button 
      class="card-carousel--nav__left"
      @click="moveCarousel(-1)"
      :disabled="atHeadOfList"
    >
      &lt;
    </button>
    <div class="card-carousel">
      <div class="card-carousel--overflow-container">
        <div 
          class="card-carousel-cards"
          :style="{ transform: 'translateX(' + currentOffset + 'px)' }"
        >
          <div class="card-container" v-for="(item, index) in items" :key="index">
            <a href="#" class="btn">
              <div class="card">
                <img :src="item.image" alt="Card Image"/>
                <div class="card-body text-start">
                  <h5 class="card-title">{{ item.name }}</h5>
                  <div class="card-footer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                    </svg>
                    <span class="count">123</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <button 
      class="card-carousel--nav__right"
      @click="moveCarousel(1)"
      :disabled="atEndOfList"
    >
      &gt;
    </button>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  name: 'CItem2',
  setup() {
    const currentOffset = ref(0);
    const windowSize = ref(4);
    const paginationFactor = ref(270); // Adjusted to match the card width
    const items = ref([
      { image: require('@/assets/mcu2.png'), name: 'Tycoon Thai', tag: "Thai" },
      { image: require('@/assets/mcu3.png'), name: 'Ippudo', tag: "Japanese" },
      { image: require('@/assets/mcu1.jpg'), name: 'Milano', tag: "Pizza" },
      { image: require('@/assets/mcu2.png'), name: 'Tsing Tao', tag: "Chinese" },
      { image: require('@/assets/mcu3.png'), name: 'Frances', tag: "French" },
    ]);

    const atEndOfList = computed(() => {
      return currentOffset.value <= -(paginationFactor.value * (items.value.length - windowSize.value));
    });

    const atHeadOfList = computed(() => {
      return currentOffset.value === 0;
    });

    const moveCarousel = (direction) => {
      if (direction === 1 && !atEndOfList.value) {
        currentOffset.value -= paginationFactor.value;
      } else if (direction === -1 && !atHeadOfList.value) {
        currentOffset.value += paginationFactor.value;
      }
    };

    return {
      currentOffset,
      windowSize,
      paginationFactor,
      items,
      atEndOfList,
      atHeadOfList,
      moveCarousel
    };
  }
};
</script>

<style scoped>
.card-carousel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 40px;
  color: #666a73;
}

.card-carousel {
  display: flex;
  justify-content: center;
  width: 100%; /* Adjusted to be responsive */
  max-width: 990px;
}

.card-carousel--overflow-container {
  overflow: hidden;
}

.card-carousel-cards {
  display: flex; /* Align cards in a row */
  transition: transform 150ms ease-out;
}

.card-container {
  width: 400px; /* Card width to match pagination */
  margin: 0 15px;
  cursor: pointer;
}

.card {
  width: 250px;
  height: 380px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 15px 15px 0 0;
  border-bottom: solid 2px #f0f0f0;
}

.card-body {
  padding: 15px;
  flex-grow: 1;
}

.card-title {
  font-size: 1.3em;
  font-weight: bold;
  color: #333;
  margin-bottom: 15px;
  line-height: 1.4;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-top: solid 2px #f0f0f0;
}

.card-footer svg {
  color: #42b883;
}

.count {
  font-size: 16px;
  color: #42b883;
  font-weight: bold;
}

.card-carousel--nav__left,
.card-carousel--nav__right {
  background-color: rgba(255, 255, 255, 0.5);
  border: 2px solid #42b883;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.card-carousel--nav__left:hover,
.card-carousel--nav__right:hover {
  background-color: #42b883;
  color: #fff;
}

.card-carousel--nav__left[disabled],
.card-carousel--nav__right[disabled] {
  opacity: 0.3;
  cursor: not-allowed;
}
</style>
