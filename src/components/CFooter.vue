<template>
  <div class="card-carousel-wrapper">
    <!-- 橘色卡片 -->
    <div class="card mb-5">
      <div class="card-content">
        <!-- 左側校區資訊 -->
        <div class="location-info">
          <h3>校區資訊</h3>
          <p><strong>台北校區</strong> - 臺北市中山北路五段250號 | 02-2882-4564</p>
          <p><strong>桃園校區</strong> - 桃園市龜山區德明路5號 | 03-350-7001</p>
          <p><strong>基河校區</strong> - 臺北市基河路130號4樓 | 02-2882-4564</p>
          <p><strong>金門校區</strong> - 金門縣金沙鎮德明路105號 | 082-355-233</p>
          <p><strong>美國分校(Michigan Location)</strong> - Gilbertson Hall, Saginaw Valley State University, 7400 Bay Road, Saginaw, MI 48710 U.S.A. <br />
            Telephone: 1-989-964-2497 (U.S.); +886 2 2882-4564 (Taiwan)
          </p>
        </div>

        <!-- 右側信息 -->
        <div class="right-info">
          <!-- 瀏覽人次 -->
          <h3>瀏覽人次</h3>
          <div class="view-count">
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
              </svg>
            </p>
            <p class="count">1,234,567</p>
          </div>

          <!-- 底部社交圖標 -->
          <div class="social-icons mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-facebook" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-instagram" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-youtube" viewBox="0 0 16 16">
              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-envelope" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
            </svg>
          </div>

          <!-- 右下角logo -->
          <div class="logo">
            <img src="../assets/MCUlogo.png" alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CFooter',
  setup() {
    // 可以在這裡添加一些邏輯
  }
};
</script>

<style scoped>
.card-carousel-wrapper {
  display: flex;
  margin-top: 2.5rem; /* 40px */
}

.card {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #ff6f00; /* 橙色背景 */
  border-radius: 1.25rem; /* 20px */
  padding: 1.25rem; /* 20px */
  box-sizing: border-box;
}

.card-content {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.location-info, .right-info {
  flex: 1;
  color: #fff;
  margin-bottom: 1.25rem; /* 20px */
}

.location-info h3, .right-info h3 {
  font-size: 1.5rem; /* 24px */
  font-weight: bold;
  margin-bottom: 1.25rem; /* 20px */
}

.location-info p, .right-info p {
  margin: 0.625rem 0; /* 10px */
  font-size: 1rem; /* 16px */
  text-align: left;
}

.view-count {
  background-color: white;
  color: #000;
  width: 100%;
  height: 3.125rem; /* 50px */
  border-radius: 0.625rem; /* 10px */
  display: flex;
  justify-content: center; /* 置中對齊 */
  align-items: center;
  padding: 0 0.9375rem; /* 15px */
}

.view-count p {
  margin: 0;
}

.view-count .count {
  font-size: 1.25rem; /* 20px */
  font-weight: bold;
}

.social-icons {
  display: flex;
  justify-content: center; /* 置中對齊 */
  width: 100%;
  margin-bottom: 1.25rem; /* 20px */
}

.social-icons svg {
  margin: 0.3125rem; /* 5px */
  cursor: pointer;
}

.logo {
  align-self: flex-end;
}

.logo img {
  max-width: 15.625rem; /* 250px */
}

/* Media Queries for Responsive Design */
@media (min-width: 48rem) { /* 768px */
  .card-content {
    flex-direction: row;
    justify-content: space-between;
  }

  .location-info, .right-info {
    flex: 1;
    color: #fff;
    margin-bottom: 1.25rem; /* 20px */
    text-align: center; /* 置中對齊 */
  }
}

@media (max-width: 48rem) { /* 768px */
  .location-info p {
    margin: 0.625rem 0; /* 10px */
    font-size: 0.875rem; /* 16px */
    text-align: center; /* 置中對齊 */
  }

  .us-campus {
    display: none;
  }
}
</style>