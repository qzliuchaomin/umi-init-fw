# umi project

## Getting Started

安装依赖包：

```bash
$ yarn
```

运行开发程序：

```bash
$ yarn start
```

## 说明

目录结构：

```
./src
├── layouts
│   ├── index.less
│   └── index.tsx
└── pages
    ├── index.less
    ├── index.tsx
    ├── login.css
    ├── login.tsx
    ├── register.css
    └── register.tsx
```

src文件中，在 umi 自动生成的框架中，增加了 layout 布局的文件。
另外，调整了 `.umirc.ts` 文件，内容为

```js
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
```

`.umirc.ts` 文件，主要根据新的代码文件，增加 layout 及两个页面的路由。具体的路由规则，可以查阅：https://v3.umijs.org/zh-CN/docs/convention-routing

## 利用 umi 快速新建页面：

```bash
npx umi g page login  --typescript  
```

命令会创建出两个文件 `src/pages/login.tsx` 和 `src/pages/login.css`。

## git 下拉使用

```bash
git clone --depth=1 https://github.com/qzliuchaomin/umi-init-fw
```

增加 --depth=1 参数，会下载最新版本代码，避免下载整个 git 提交的历史信息。

