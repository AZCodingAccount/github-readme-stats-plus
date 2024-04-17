import createBadgeStore from './GenBadgeStore.js';
import createCardStore from './GenCardStore.js';

// 统一导出
export const useCardStore = createCardStore;
export const useBadgeStore = createBadgeStore;
