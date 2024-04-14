export default [
  {
    path: '/user',
    layout: false,
    routes: [
      { name: '登录', path: '/user/login', component: './User/Login' },
      { name: '注册', path: '/user/register', component: './User/Register' },
    ],
  },
  { path: '/gen_card', name: '卡片生成', icon: 'CreditCardOutlined', component: './GenCard' },
  { path: '/make_badge', name: '徽章制作', icon: 'smile', component: './Welcome' },
  { path: '/other', name: '第三方集成', icon: 'MoreOutlined', component: './Welcome' },
  { path: '/my_gen_record', name: '我的生成记录', icon: 'UserAddOutlined', component: './Welcome' },
  // {
  //   path: '/admin',
  //   name: '管理页',
  //   icon: 'crown',
  //   access: 'canAdmin',
  //   routes: [
  //     { path: '/admin', redirect: '/admin/sub-page' },
  //     { path: '/admin/sub-page', name: '二级管理页', component: './Admin' },
  //   ],
  // },
  // { name: '查询表格', icon: 'table', path: '/list', component: './TableList' },
  { path: '/', redirect: '/gen_card' },
  { path: '*', layout: false, component: './404' },
];
