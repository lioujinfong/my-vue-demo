<template>
  <div class="sidebar-wrapper">
    <!-- 選單按鈕：僅手機顯示 -->
    <button class="menu-toggle d-md-none" @click="toggleMenu">
      ☰ 選單
    </button>

    <!-- 卡片列表：手機選單展開才顯示，桌機永遠顯示 -->
    <div class="card-carousel-wrapper" v-if="!isMobile || showMenu">
      <router-link
        :to="item.path"
        v-for="item in items"
        :key="item.title"
        class="card-link"
        @click="onSelect"
      >
        <div
          class="card"
          :class="{ active: isActive(item.path) }"
          :style="getCardStyle(item.path)"
        >
          <div class="card-content">
            <div class="card-icon">
              <i class="bi" :class="item.icon"></i>
            </div>
            <div class="card-item">
              <div class="card-title"><h3>{{ $t(item.titleKey) }}</h3></div>
              <div class="card-number">
                <p class="number">{{ item.number }}</p>
                <div class="number-line"></div>
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>


<script>
export default {
  name: 'CSidebar',
  data() {
    return {
      items: [
        {
          titleKey: 'sidebar_isp.partAll',
          path: '/partAll',
          icon: 'bi-house-fill',
          color: '#D10000'
        },
        {
          titleKey: 'sidebar_isp.home',
          path: '/parthome',
          icon: 'bi-person-fill',
          color: '#2894FF'
        },
        {
          titleKey: 'sidebar_isp.hcm',
          path: '/partone',
          icon: 'bi-graph-up-arrow',
          color: '#0035CE'
        },
        {
          titleKey: 'sidebar_isp.cost',
          path: '/parttwo',
          icon: 'bi-diagram-3-fill',
          color: '#FDC607'
        },
        {
          titleKey: 'sidebar_isp.analysis',
          path: '/partthree',
          icon: 'bi-layout-text-window-reverse',
          color: '#4E9E47'
        },
        {
          titleKey: 'sidebar_isp.tax',
          path: '/partfour',
          icon: 'bi bi-layers',
          color: '#FA5015'
        }
      ],
      isMobile: false,
      showMenu: false
    }
  },
  mounted() {
    this.isMobile = window.innerWidth <= 768
    window.addEventListener('resize', this.checkMobile)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkMobile)
  },
  methods: {
    isActive(path) {
      return this.$route.path === path
    },
    getCardStyle(path) {
      const activeItem = this.items.find(item => item.path === path)
      if (this.isActive(path) && activeItem) {
        return {
          backgroundColor: activeItem.color,
          color: 'white'
        }
      }
      return {}
    },
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
    onSelect() {
      if (this.isMobile) this.showMenu = false
    },
    checkMobile() {
      this.isMobile = window.innerWidth <= 768
      if (!this.isMobile) {
        this.showMenu = false
      }
    }
  }
}
</script>


<style scoped>
.card-carousel-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card {
  display: flex;
  width: 12.5rem; /* 200px */
  height: 8.125rem; /* 130px */
  margin: 1.25rem; /* 20px */
  border: none;
  border-radius: 1.25rem; /* 20px */
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  justify-content: center;
}

.router-link-active .card,
.router-link-exact-active .card {
  background-color: white;
  color: black;
}

.router-link-active .card:not(.router-link-exact-active),
.router-link-exact-active .card:not(.router-link-active) {
  background-color: #faaa15;
  color: white;
}

.card-content {
  display: flex;
  width: 100%;
  justify-content: center;
}

.card-icon {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-item, .card-item-all {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card-item h3, .card-item-all h3 {
  font-size: 1.25rem; /* 20px */
  font-weight: bold;
}

.card-item p, .card-item-all p {
  font-size: 1rem; /* 16px */
  font-weight: bold;
  margin-bottom: 1.25rem; /* 20px */
  margin: 0;
}

.number-line, .number-line-all {
  height: 0.3125rem; /* 5px */
  width: 1.25rem; /* 20px */
  margin: 0;
}

a {
  text-decoration: none;
}

@media (max-width: 768px) {
  .card {
    width: 10rem; /* 160px */
    height: 6.25rem; /* 100px */
    margin: 1rem; /* 16px */
  }

  .card-item h3, .card-item-all h3 {
    font-size: 1rem; /* 16px */
  }

  .card-item p, .card-item-all p {
    font-size: 0.875rem; /* 14px */
  }

  .number-line, .number-line-all {
    height: 0.25rem; /* 4px */
    width: 1rem; /* 16px */
  }
}
.card-icon i{
  font-size: 60px;
}

.sidebar-wrapper {
  width: 100%;
}

.menu-toggle {
  background-color: #fa5015;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  font-weight: bold;
  width: 100%;
  text-align: left;
  cursor: pointer;
  display: none;
}

.menu-toggle:hover {
  background-color: #e04b10;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }
}
</style>