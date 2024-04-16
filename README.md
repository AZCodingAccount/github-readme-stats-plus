# Github-readme-stats++

## 基于的开源项目 🌹

- 卡片生成 [anuraghazra/github-readme-stats: :zap: Dynamically generated stats for your github readmes](https://github.com/anuraghazra/github-readme-stats)

- 徽章生成 [badges/shields: Concise, consistent, and legible badges in SVG and raster format (github.com)](https://github.com/badges/shields)

- wakatime 徽章 [WakaTime - Dashboards for developers](https://wakatime.com/)
- 访问量徽章 [antonkomarev/github-profile-views-counter: It counts how many times your GitHub profile has been viewed.](https://github.com/antonkomarev/github-profile-views-counter)
- streak-stats [DenverCoder1/github-readme-streak-stats: 🔥 Stay motivated and show off your contribution streak! 🌟 Display your total contributions, current streak, and longest streak on your GitHub profile README](https://github.com/denvercoder1/github-readme-streak-stats)
- 奖杯 [ryo-ma/github-profile-trophy: 🏆 Add dynamically generated GitHub Stat Trophies on your readme](https://github.com/ryo-ma/github-profile-trophy)

## 项目背景

这个项目的主要背景是本人想给自己的 Github 主页润润色，找了一些开源项目，找到了该开源项目[anuraghazra/github-readme-stats](https://github.com/anuraghazra/github-readme-stats)，里面的 Readme 写的很详细，但是中文显然不够完整且很难 get 到每个功能的完善度，因此创建此项目。

## 项目实现方案

本项目采用 React+ Ant Design Ant Design pro 实现，没有后端，主要是可视化界面部分，实际上的底层原理是用户勾选以后程序自动将所需参数拼接到 url 后面，达到所见即所得的效果，调整完毕后让用户将代码直接复制到 md 文档即可，不需阅读复杂的项目文档去实现自己想要的定制化功能。

## 需求分析

1. Github 统计卡

   - 更换语言
   - 隐藏部分信息
   - 更换主题
   - 卡片大小

2. 热门语言卡

   - 更换语言
   - 显示语言的个数
   - 更改语言显示主题
   - 更换大小

3. wakatime 卡片（未实现、wakatime 官网的统计足够详细，若仍需，请反馈）

   - 显示的语言个数
   - 主题配置

4. 徽章制作

   - wakatime 徽章制作
   - 热门语言徽章制作
   - profile views 徽章制作

5. 第三方开源项目集成（集成优秀开源项目的基础用法）
