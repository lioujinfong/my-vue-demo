import { createRouter, createWebHistory } from 'vue-router'
import PartAll from '../PartAll/PartAll.vue'
import PartHome from '../PartTwo/PartHome.vue'
import PartOne from '../PartOne/PartOne.vue'
import PartTwo from '../PartTwo/PartTwo.vue'
import PartFour from '../PartTwo/PartFour.vue'
import WorkOne from '../PartAll/WorkOne.vue'
import WorkTwo from '../PartAll/WorkTwo.vue'
import PartThree from "@/PartTwo/PartThree.vue";

const routes = [
  {
    path: '/',
    name: 'PartAll',
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
  },
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

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
