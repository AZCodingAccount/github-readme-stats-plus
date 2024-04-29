# Github-readme-stats++

## 项目介绍

​ 本项目用来为 Github 开发者可视化生成个性的`Github信息统计卡片`、`徽章`、`第三方项目统计信息`等。**无需**阅读项目复杂的配置文档，并有预览功能实现所见即所得的效果。项目集成**多个**Github 优秀的开源项目，并为用户做减法剔除了一些配置项。

## 项目预览

卡片生成页

<img src="https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240417123549966.png" alt="image-20240417123549966" style="zoom:50%;" />

徽章生成页

<img src="https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240417123700224.png" alt="image-20240417123700224"  />

第三方项目

![image-20240417123727256](https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240417123727256.png)

## 基于的开源项目

- 卡片生成 [anuraghazra/github-readme-stats](https://github.com/anuraghazra/github-readme-stats)

- 徽章生成 [badges/shields](https://github.com/badges/shields)

- wakatime 徽章 [WakaTime - Dashboards for developers](https://wakatime.com/)
- 访问量徽章 [antonkomarev/github-profile-views-counter](https://github.com/antonkomarev/github-profile-views-counter)
- streak-stats [DenverCoder1/github-readme-streak-stats](https://github.com/denvercoder1/github-readme-streak-stats)
- 奖杯 [ryo-ma/github-profile-trophy](https://github.com/ryo-ma/github-profile-trophy)

## 项目实现方案

​ 本项目采用 React+ Ant Design Ant Design pro+zustand 实现，没有后端，信息存储到用户本地，主要是可视化界面部分，实际上的底层原理是用户勾选以后程序自动将所需参数拼接到 url 后面，达到所见即所得的效果，调整完毕后让用户将代码直接复制到 md 文档即可，不需阅读复杂的项目文档即可实现自己想要的定制化功能。

## 需求分析

1. Github 统计卡

   - 更换语言
   - 隐藏部分信息
   - 更换主题

2. 热门语言卡

   - 更换语言
   - 显示语言的个数
   - 更改语言显示主题

3. wakatime 卡片（未实现、wakatime 官网的统计足够详细，若仍需，请反馈）

   - 显示的语言个数
   - 主题配置

4. 徽章制作

   - wakatime 徽章制作
   - 热门语言徽章制作
   - profile views 徽章制作

5. 第三方开源项目集成（集成优秀开源项目的基础用法）

## 最后
欢迎[PR](https://github.com/AZCodingAccount/github-readme-stats-plus/pulls)、[issue](https://github.com/AZCodingAccount/github-readme-stats-plus/issues)
