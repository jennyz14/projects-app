import ProjectLayout from '@/modules/projects/layouts/ProjectLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'projects',
      component: ProjectLayout,
    },
  ],
});

export default router;
