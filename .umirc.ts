import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts',
      routes: [
        {
          name: '首页',
          path: '/',
          component: '@/pages/index',
        },
        {
          name: '登录',
          path: '/login',
          component: '@/pages/login',
        },
        {
          name: '注册',
          path: '/register',
          component: '@/pages/register',
        },
      ],
    },
  ],
  fastRefresh: {},
});
