<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <!-- 左側 logo 和標題 -->
      <div class="left-section">
        <div class="circle">
          <img src="@/assets/mcu_logo.png" alt="Logo" class="circle-img" />
        </div>
        <a class="navbar-brand">{{ $t('navbar.title') }}</a>
      </div>

      <!-- 右側資訊區 -->
      <div class="right-section">
        <!-- 使用者資訊 -->
        <div class="user-info">
          <img src="@/assets/user-icon.png" alt="User Icon" class="user-icon" />
          <span class="user-name">{{ $t('navbar.user') }}</span>
        </div>

        <!-- 語言切換 -->
        <div class="lang-switch">
          <button class="lang-btn" @click="switchLang('zh')">中文</button>
          <button class="lang-btn" @click="switchLang('en')">EN</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

function switchLang(lang) {
  locale.value = lang
  localStorage.setItem('lang', lang)
}
</script>

<style scoped>
.navbar {
  background: #fa5015 !important;
  box-shadow: 0 2px 2px rgba(230, 230, 230, 0.6);
}

.container-fluid {
  display: flex;
  flex-wrap: wrap; /* 手機可換行 */
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
}

.left-section {
  display: flex;
  align-items: center;
  flex: 1 1 auto;
}

.navbar-brand {
  color: white;
  font-weight: bold;
  font-size: 1.75rem;
  margin-left: 0.5rem;
}

.circle {
  width: 3.5rem;
  height: 3.5rem;
  background-color: white;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle-img {
  width: 2.75rem;
  height: 2.75rem;
  object-fit: cover;
}

.right-section {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  justify-content: flex-end;
  flex: 1 1 auto;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.user-icon {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  object-fit: cover;
}

.user-name {
  color: white;
  font-size: 1rem;
  font-weight: bold;
}

.lang-switch {
  display: flex;
  gap: 0.5rem;
}

.lang-btn {
  background-color: white;
  border: none;
  color: #fa5015;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
}

.lang-btn:hover {
  background-color: #ffd6c2;
}

/* 手機版 */
@media (max-width: 768px) {
  .container-fluid {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }

  .right-section {
    width: 100%;
    justify-content: space-between;
  }

  .navbar-brand {
    font-size: 1.5rem;
  }

  .circle {
    width: 3rem;
    height: 3rem;
  }

  .circle-img {
    width: 2.25rem;
    height: 2.25rem;
  }
}
</style>
