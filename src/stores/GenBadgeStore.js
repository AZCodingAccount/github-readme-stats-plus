import create from 'zustand';
import { persist } from 'zustand/middleware';

// 存储卡片生成的信息
const createBadgeStore = create(
  persist(
    (set) => ({
      // 初始状态
      staticIniValues: {
        firstContent: 'github',
        lastContent: 'AZCodingAccount',
        staticColor: '#1677ff',
        style: 'flat',
        align: 'center',
        link: 'https://github.com/AZCodingAccount',
      },
      updateStaticIniValues: (values) => set((state) => ({ staticIniValues: values })),
      dynamicIniValues: {
        type: 'userAll',
        username: 'AZCodingAccount',
        repoName: 'iTime',
        style: 'flat',
        logoColor: '#1677ff',
        labelColor: 'rgb(89, 89, 89)',
        color: 'rgb(3, 126, 187)',
        align: 'center',
      },
      updateDynamicIniValues: (values) => set((state) => ({ dynamicIniValues: values })),
      type: 'staticBadge',
      updateType: (type) => set((state) => ({ type: type })),

      // badgeStore
      staticBadge: [],
      addStaticBadge: (badge) =>
        set((state) => {
          state.staticBadge.unshift(badge);
          return { staticBadge: [...state.staticBadge] };
        }), // 新增静态徽章
      delStaticBadge: (id) =>
        set((state) => ({ staticBadge: state.staticBadge.filter((item) => item.id !== id) })), // 删除信息统计卡

      dynamicBadge: [],
      addDynamicBadge: (info) =>
        set((state) => {
          state.dynamicBadge.unshift(info);
          return { dynamicBadge: [...state.dynamicBadge] };
        }), // 新增动态徽章
      delDynamicBadge: (id) =>
        set((state) => ({ dynamicBadge: state.dynamicBadge.filter((item) => item.id !== id) })), // 删除动态徽章
    }),
    {
      name: 'badge',
      getStorage: () => localStorage,
    },
  ),
);

export default createBadgeStore;
