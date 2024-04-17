import create from 'zustand';
import { persist } from 'zustand/middleware';

// 存储卡片生成的信息
const createCardStore = create(
  persist(
    (set) => ({
      infoStatus: [],
      addInfoStatus: (info) =>
        set((state) => {
          state.infoStatus.unshift(info);
          return { infoStatus: [...state.infoStatus] };
        }), // 新增Github信息统计卡
      delInfoStatus: (id) =>
        set((state) => ({ infoStatus: state.infoStatus.filter((item) => item.id !== id) })), // 删除信息统计卡

      topLanguage: [],
      addTopLanguage: (info) =>
        set((state) => {
          state.topLanguage.unshift(info);
          return { topLanguage: [...state.topLanguage] };
        }), // 新增常用语言卡
      delTopLanguage: (id) =>
        set((state) => ({ topLanguage: state.topLanguage.filter((item) => item.id !== id) })), // 删除常用语言卡
    }),
    {
      name: 'card',
      getStorage: () => localStorage,
    },
  ),
);

export default createCardStore;
