<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <!-- 左側內容 -->
      <div class="left-section">
        <div class="circle">
          <img src="@/assets/mcu_logo.png" alt="Logo" class="circle-img">
        </div>
        <a class="navbar-brand">灝元商務科技</a>
      </div>
      <!-- 右側會員登入 -->
      <div class="user-info">
        <img src="@/assets/user-icon.png" alt="User Icon" class="user-icon">
        <span class="user-name">會員名稱</span>
      </div>
    </div>
  </nav>
</template>

<script>
</script>

<style scoped>
.navbar {
  background: #FA5015 !important;
  box-shadow: 0rem 0.125rem 0.125rem rgb(230, 230, 230); /* 2px = 0.125rem */
  display: flex;
  align-items: center;
}

.navbar > .container-fluid {
  display: flex;
  justify-content: space-between; /* 左右對齊 */
  align-items: center;
}

.left-section {
  display: flex;
  align-items: center;
}

.navbar-brand {
  color: white;
  font-weight: bold;
  font-size: 2.5rem; /* 40px = 2.5rem */
  display: flex;
  align-items: center; /* 垂直居中 */
}

.navbar-brand:hover {
  color: white; /* 保持文字顏色不變 */
  text-decoration: none; /* 確保沒有下劃線 */
}

.circle {
  margin: 1.25rem; /* 20px = 1.25rem */
  width: 4.6875rem; /* 75px = 4.6875rem */
  height: 4.6875rem; /* 75px = 4.6875rem */
  background-color: white;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 0.9375rem; /* 15px = 0.9375rem */
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle-img {
  width: 3.4375rem; /* 55px = 3.4375rem */
  height: 3.4375rem; /* 55px = 3.4375rem */
  object-fit: cover; /* 保持圖片比例，並裁剪超出部分 */
}

.user-info {
  display: flex;
  align-items: center;
  gap: 0.625rem; /* 10px = 0.625rem */
}

.user-icon {
  width: 2.5rem; /* 40px = 2.5rem */
  height: 2.5rem; /* 40px = 2.5rem */
  border-radius: 50%; /* 圖示圓形化 */
  object-fit: cover;
}

.user-name {
  color: white; /* 保持文字顏色不變 */
  font-size: 1.125rem; /* 18px = 1.125rem */
  font-weight: bold;
}
</style>