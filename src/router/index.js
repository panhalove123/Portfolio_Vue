import { createRouter, createWebHistory } from 'vue-router'
import AboutPage from '@/views/AboutPage.vue'
import ResumePage from '@/views/ResumePage.vue'
import ProjectPage from '@/views/ProjectPage.vue'
import ContactPage from '@/views/ContactPage.vue'

const routes = [
  { path: '/', name: 'About', component: AboutPage },
  { path: '/resume', name: 'Resume', component: ResumePage },
  { path: '/project', name: 'Projects', component: ProjectPage },
  { path: '/contact', name: 'Contact', component: ContactPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

