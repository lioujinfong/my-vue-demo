import { createRouter, createWebHistory } from 'vue-router'

// 控制首頁類
import HomePage from '@/views/HomePage.vue'
import StudentStay from '@/views/StudentStay.vue'

// Part 模組
import PartAll from '../PartAll/PartAll.vue'
import PartHome from '../PartTwo/PartHome.vue'
import PartOne from '../PartOne/PartOne.vue'
import PartTwo from '../PartTwo/PartTwo.vue'
import PartThree from '@/PartTwo/PartThree.vue'
import PartFour from '../PartTwo/PartFour.vue'

// Work 模組
import WorkOne from '../PartAll/WorkOne.vue'
import WorkTwo from '../PartAll/WorkTwo.vue'

//控制頁
const controlRoutes = [
  {
    path: '/',
    component: HomePage,
    meta: { layout: 'none' }
  },
  {
    path: '/student-stay',
    component: StudentStay,
    meta: { layout: 'default' }
  }
]

//國際生留台追蹤平台
const partRoutes = [
  {
    path: '/partAll',
    name: 'partAll',
    component: PartAll
  },
  {
    path: '/parthome',
    name: 'PartHome',
    component: PartHome
  },
  {
    path: '/partone',
    name: 'PartOne',
    component: PartOne
  },
  {
    path: '/parttwo',
    name: 'PartTwo',
    component: PartTwo
  },
  {
    path: '/partthree',
    name: 'PartThree',
    component: PartThree
  },
  {
    path: '/partfour',
    name: 'PartFour',
    component: PartFour
  }
]
//國際生留台追蹤平台
const workRoutes = [
  {
    path: '/workone',
    name: 'WorkOne',
    component: WorkOne
  },
  {
    path: '/worktwo',
    name: 'WorkTwo',
    component: WorkTwo
  }
]

// 合併所有路由
const routes = [
  ...controlRoutes,
  ...partRoutes,
  ...workRoutes
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
