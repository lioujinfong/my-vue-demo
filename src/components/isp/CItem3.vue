<template>
  <div class="section-title">
    <div class="title-box"></div>
    <h2>{{ $t('carousel.title', { count: 10 }) }}</h2>
  </div>
  <div class="card-carousel-wrapper">
    <button 
      class="card-carousel--nav__left"
      @click="moveCarousel(-1)"
    >
      &lt;
    </button>
    <div class="card-carousel">
      <div class="card-carousel--overflow-container">
        <div 
          class="card-carousel-cards"
          :style="{ transform: 'translateX(' + currentOffset + 'px)' }"
        >
          <div class="card-carousel--card" v-for="item in items" :key="item.name">
            <router-link :to="item.routerlink">
              <img :src="item.image" />
              <div class="card-carousel--card--footer">
                <p>{{ $t(`carousel.items.${item.key}`) }}</p>
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                  </svg>
                  {{ item.tag }}
                </p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <button 
      class="card-carousel--nav__right"
      @click="moveCarousel(1)"
    >
      &gt;
    </button>
  </div>
</template>

<script>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

export default {
  name: 'CItem3',
  setup() {
    const currentOffset = ref(0);
    const windowSize = ref(4); // 初始值
    const paginationFactor = ref(0); // 初始值
    const cardWidth = ref(0); // 每個卡片的寬度

    const items = ref([
  { key: "type1", routerlink: "/workone", image: require(`@/assets/mcu2.png`), tag: "123" },
  { key: "type2", routerlink: "/worktwo", image: require(`@/assets/mcu3.png`), tag: "12" },
  { key: "type3", routerlink: "/workone", image: require(`@/assets/mcu1.jpg`), tag: "123" },
  { key: "type4", routerlink: "/workone", image: require(`@/assets/mcu2.png`), tag: "12" },
  { key: "type5", routerlink: "/worktwo", image: require(`@/assets/mcu3.png`), tag: "12" }
]);

    // ➤ 計算最大 offset（最後一頁的位置）
    const getMaxOffset = () => {
      return -(paginationFactor.value * (items.value.length - windowSize.value));
    };

    const atEndOfList = computed(() => {
      return currentOffset.value <= -(paginationFactor.value * (items.value.length - windowSize.value));
    });

    const atHeadOfList = computed(() => {
      return currentOffset.value === 0;
    });

    const moveCarousel = (direction) => {
      const maxOffset = -(paginationFactor.value * (items.value.length - windowSize.value));

      if (direction === 1) {
        // 向右滑
        if (atEndOfList.value) {
          currentOffset.value = 0; // 回到第一頁
        } else {
          currentOffset.value -= paginationFactor.value;
        }
      } else if (direction === -1) {
        // 向左滑
        if (atHeadOfList.value) {
          currentOffset.value = maxOffset; // 滑到最後一頁
        } else {
          currentOffset.value += paginationFactor.value;
        }
      }
    };

    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) {
        windowSize.value = 1;
      } else if (width < 768) {
        windowSize.value = 2;
      } else if (width < 1024) {
        windowSize.value = 3;
      } else {
        windowSize.value = 4;
      }
      // 根據視窗大小和卡片數量計算 paginationFactor
      cardWidth.value = document.querySelector('.card-carousel--card').offsetWidth;
      paginationFactor.value = cardWidth.value + 30; // 卡片寬度加上間距
      // 修正 offset，不超過範圍
      const maxOffset = getMaxOffset();
      if (currentOffset.value < maxOffset) {
        currentOffset.value = maxOffset;
      } else if (currentOffset.value > 0) {
        currentOffset.value = 0;
      }
    };

    onMounted(() => {
      window.addEventListener('resize', handleResize);
      handleResize(); // 初始化時也調用一次
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', handleResize);
    });

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
  color: #666a73;
}

.card-carousel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 40px;
  color: #666a73;
  position: relative; /* 使得内部绝对定位的按钮根据此容器定位 */
}

.section-title {
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem; /* 20px */
  align-items: stretch;
  margin: 1.25rem; /* 20px */
}

.title-box {
  width: 0.9375rem; /* 15px */
  height: 2.5rem; /* 40px */
  background-color: black;
  border-radius: 0.3125rem; /* 5px */
  margin-right: 0.625rem; /* 10px */
}

h2 {
  font-size: 2rem; /* 32px */
  font-weight: bold;
  color: #333;
}

.card-carousel {
  display: flex;
  justify-content: center;
  width: 100%;
}

.card-carousel--overflow-container {
  overflow: hidden;
  width: 100%;
}

.card-carousel-cards {
  display: flex;
  transition: transform 150ms ease-out;
  max-width: 100%; /* 確保不超過父容器的寬度 */
}

.card-carousel--card {
  margin: 0 0.9375rem; /* 15px */
  cursor: pointer;
  box-shadow: 0 0.25rem 0.9375rem 0 rgba(40, 44, 53, .06), 0 0.125rem 0.125rem 0 rgba(40, 44, 53, .08);
  background-color: #fff;
  border-radius: 1.25rem; /* 20px */
  z-index: 3;
}

.card-carousel--card img {
  vertical-align: bottom;
  border-top-left-radius: 1.25rem; /* 20px */
  border-top-right-radius: 1.25rem; /* 20px */
  width: 16.875rem; /* 270px */
  transition: opacity 150ms linear;
}

.card-carousel--card--footer {
  padding: 0.4375rem 0.9375rem; /* 7px 15px */
  height: 9.375rem; /* 150px */
}

.card-carousel--card--footer p {
  padding: 0.1875rem 0; /* 3px 0 */
  margin: 0;
  font-size: 1.1875rem; /* 19px */
  font-weight: 500;
  color: #2c3e50;
}

.card-carousel--nav__left,
.card-carousel--nav__right {
  display: inline-block;
  width: 1.875rem; /* 30px */
  height: 1.875rem; /* 30px */
  background-color: #ffffff;
  border: none;
  color: rgb(0, 0, 0);
  font-size: 1.25rem; /* 20px */
  font-weight: bold;
  text-align: center;
  line-height: 1.875rem; /* 30px */
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  top: 6.875rem; /* 110px */
  transition: transform 150ms ease-in-out, background-color 150ms ease-in-out;
  z-index: 99999;
  opacity: 0.8;
}

.card-carousel--nav__left {
  left: 3%;
}

.card-carousel--nav__right {
  right: 5%;
}

.card-carousel--nav__left:hover,
.card-carousel--nav__right:hover {
  background-color: #d6d6d6;
}

.card-carousel--nav__left[disabled],
.card-carousel--nav__right[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}

a {
  text-decoration: none;
}

/* Media Queries for Responsive Design */
@media (max-width: 768px) {
  .card-carousel {
    width: 100%;
  }

  .card-carousel--card {
    margin: 0 0.625rem; /* 10px */
  }

  .card-carousel--card img {
    width: 12.5rem; /* 200px */
  }

  .card-carousel--card--footer {
    height: 7.5rem; /* 120px */
  }

  .card-carousel--card--footer p {
    font-size: 1rem; /* 16px */
  }

  .card-carousel--nav__left,
  .card-carousel--nav__right {
    width: 1.25rem; /* 20px */
    height: 1.25rem; /* 20px */
    font-size: 1rem; /* 16px */
    line-height: 1.25rem; /* 20px */
    top: 5rem; /* 80px */
  }

  @media (max-width: 768px) {
  .card-carousel--nav__left,
  .card-carousel--nav__right {
    width: 2.5rem;       /* 40px */
    height: 2.5rem;      /* 40px */
    font-size: 1.25rem;  /* 20px */
    line-height: 2.5rem; /* 40px */
  }
}
}
</style>