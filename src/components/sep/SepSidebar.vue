<template>
  <div class="card-carousel-wrapper">
    <router-link
      :to="item.path"
      v-for="item in items"
      :key="item.title"
      class="card-link"
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
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'SepSidebar',
  data() {
    return {
      items: [
        {
          titleKey: 'sidebar_sep.home',
          path: '/sep/home',
          icon: 'bi-house-door-fill', // 更通用的主頁 icon
          color: '#D10000'
        },
        {
          titleKey: 'sidebar_sep.hcm',
          path: '/sep/hcm',
          icon: 'bi-people-fill', // 人力資本建議用多人 icon
          color: '#2894FF'
        },
        {
          titleKey: 'sidebar_sep.cost',
          path: '/sep/cost',
          icon: 'bi-cash-stack', // 成本花費可用錢堆 icon
          color: '#FDC607'
        },
        {
          titleKey: 'sidebar_sep.analysis',
          path: '/sep/analysis',
          icon: 'bi-bar-chart-line-fill', // 分析用 bar chart
          color: '#4E9E47'
        },
        {
          titleKey: 'sidebar_sep.tax',
          path: '/sep/tax',
          icon: 'bi-receipt-cutoff', // 稅務建議用發票 icon
          color: '#FA5015'
        }
      ]
    }
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
  width: 12.5rem;
  height: 8.125rem;
  margin: 1.25rem;
  border: none;
  border-radius: 1.25rem;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  justify-content: center;
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

.card-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card-title h3 {
  font-size: 1.25rem;
  font-weight: bold;
}

a {
  text-decoration: none;
}

.card-icon i {
  font-size: 60px;
}
</style>
