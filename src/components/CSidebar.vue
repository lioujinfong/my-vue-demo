<template>
  <div class="card-carousel-wrapper">
    <router-link :to="item.path" v-for="item in items" :key="item.title" class="card-link">
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
</template>

<script>
export default {
  name: 'CSidebar',
  data() {
    return {
      items: [
          {
            titleKey: 'sidebar.partAll',
            path: '/partAll',
            icon: 'bi-house-fill',
            color: '#D10000'
          },
          {
            titleKey: 'sidebar.home',
            path: '/parthome',
            icon: 'bi-calendar-check',
            color: '#2894FF'
          },
          {
            titleKey: 'sidebar.hcm',
            path: '/partone',
            icon: 'bi-calendar-check',
            color: '#0035CE'
          },
          {
            titleKey: 'sidebar.cost',
            path: '/parttwo',
            icon: 'bi-diagram-3-fill',
            color: '#FDC607'
          },
          {
            titleKey: 'sidebar.analysis',
            path: '/partthree',
            icon: 'bi-layout-text-window-reverse',
            color: '#4E9E47'
          },
          {
            titleKey: 'sidebar.tax',
            path: '/partfour',
            icon: 'bi bi-layers',
            color: '#FA5015'
          }
        ]
    };
  },
  methods: {
    isActive(path) {
      return this.$route.path === path;
    },
    getCardStyle(path) {
      const activeItem = this.items.find(item => item.path === path);
      if (this.isActive(path) && activeItem) {
        return {
          backgroundColor: activeItem.color,
          color: 'white'
        };
      }
      return {};
    }
  }
};
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

/* Media Queries for Responsive Design */
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
</style>