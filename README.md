<h1 align="center">GeneralInnPro（Java）</h1>
<h4 align="center">🚀GeneralInnPro-AdminPC、📱GeneralInnPro-AdminH5、✅分开管理联合平台</h4> 
<p align="center">
<a href="https://www.java.com/zh-CN/download/"><img src="https://img.shields.io/badge/JAVA-8-d74f11"> </a><a href="#"> <img src="https://img.shields.io/badge/Spring Boot-2-5ea931"> </a><a href="https://www.tslang.cn/"><img src="https://img.shields.io/badge/TypeScript-3-294e80"></a> <a href="#"><img src="https://img.shields.io/badge/Vue.js-3-4eb883"> </a><a href="#"><img src="https://img.shields.io/badge/vite-2-ffc018"> </a><a href="#"><img src="https://img.shields.io/badge/Element Plus-2-409eff"> </a><a target="_blank" href="https://www.docker.com/"><img src="https://img.shields.io/badge/Docker--139cff"></a>
<div align="center">
  <img  width="80%"  src="https://www.hualigs.cn/image/641fdd4dac243.jpg" /><br>
</div>
 <br>



将军小栈小商场系统。

Spring Boot Spring Cloud后端 + Vue管理员前端 + 微信小程序用户前端 + Vue用户移动端

* [文档](https://github.com/liy159872/GeneralInnPro/blob/master/CHANGELOG.md)
* [贡献](https://github.com/liy159872/GeneralInnPro/blob/master/SECURITY.md)

## 👀项目代码

* [GitHub]( https://github.com/liy159872/GeneralInnPro)

## 🧐项目架构
![](./doc/pics/readme/project-structure.png)

## 🐙技术栈

> 1. Spring Boot Spring Cloud
> 2. Vue
> 3. 微信小程序

![](doc/pics/readme/technology-stack.png)

## 🐹 功能

### 小商城功能

* 首页
* 专题列表、专题详情
* 分类列表、分类详情
* 品牌列表、品牌详情
* 新品首发、人气推荐
* 优惠券列表、优惠券选择
* 团购
* 搜索
* 商品详情、商品评价、商品分享
* 购物车
* 下单
* 订单列表、订单详情、订单售后
* 地址、收藏、足迹、意见反馈
* 客服

### 管理平台功能

* 会员管理
* 商城管理
* 商品管理
* 推广管理
* 系统管理
* 配置管理
* 统计报表

## 快速启动

1. 配置最小开发环境：
    * [MySQL](https://dev.mysql.com/downloads/mysql/)
    * [JDK1.8或以上](http://www.oracle.com/technetwork/java/javase/overview/index.html)
    * [Maven](https://maven.apache.org/download.cgi)
    * [Nodejs](https://nodejs.org/en/download/)
    * [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
    
2. 数据库依次导入litemall-db/sql下的数据库文件
    * litemall_schema.sql
    * litemall_table.sql
    * litemall_data.sql

3. 启动小商场和管理后台的后端服务

    打开命令行，输入以下命令
    ```bash
    cd GeneralInnPro
    mvn GeneralInnPro
    mvn clean package
    java -Dfile.encoding=UTF-8 -jar GeneralInnPro-all/target/GeneralInnPro-all-0.1.0-exec.jar
    ```
    
4. 启动管理后台前端

    打开命令行，输入以下命令
    ```bash
    cd GeneralInnPro/litemall-admin
    npm install --registry=https://registry.npm.taobao.org
    npm run dev
    ```
    此时，浏览器打开，输入网址`http://localhost:9527`, 此时进入管理后台登录页面。
    
5. 启动小商城前端
   
   这里存在两套小商场前端litemall-wx和renard-wx，开发者可以分别导入和测试：
   
   1. 微信开发工具导入litemall-wx项目;
   2. 项目配置，启用“不校验合法域名、web-view（业务域名）、TLS 版本以及 HTTPS 证书”
   3. 点击“编译”，即可在微信开发工具预览效果；
   4. 也可以点击“预览”，然后手机扫描登录（但是手机需开启调试功能）。
      
   
   注意：
   > 这里只是最简启动方式，而小商场的微信登录、微信支付等功能需开发者设置才能运行，
> 更详细方案请参考[文档](https://linlinjava.gitbook.io/litemall/project)。
   
6. 启动轻商城前端

    打开命令行，输入以下命令
    ```bash
    cd GeneralInnPro/litemall-vue
    npm install --registry=https://registry.npm.taobao.org
    npm run dev
    ```
    此时，浏览器（建议采用chrome 手机模式）打开，输入网址`http://localhost:6255`, 此时进入轻商场。

    注意：
    > 现在功能很不稳定，处在开发阶段。
    
## 开发计划

当前版本[v1.8.0](https://linlinjava.gitbook.io/litemall/changelog)

目前项目开发中，存在诸多不足，以下是目前规划的开发计划。

V 1.0.0 完成以下目标：

1. 除了部分功能（如优惠券等），小商城的优化和改进基本结束；
2. 管理后台基本实现所有表的CRUD操作；
3. 后端服务能够对参数进行检验。

V 2.0.0 完成以下目标：

1. 小商城和管理后台完成所有基本业务；
2. 管理后台实现统计功能、日志功能、权限功能；
3. 业务代码和细节代码进行调整优化；
4. 轻商城的开发；

V 3.0.0 完成以下目标：

1. 管理后台一些辅助功能
2. 后端服务加强安全功能、配置功能
3. 缓存功能以及优化一些性能

## 警告

> 1. 本项目仅用于学习练习
> 2. 本项目还不完善，仍处在开发中，不承担任何使用后果
> 3. 本项目代码开源[MIT](./LICENSE)，项目文档采用 [署名-禁止演绎 4.0 国际协议许可](https://creativecommons.org/licenses/by-nd/4.0/deed.zh)

## 致谢

本项目基于或参考以下项目：

1. [nideshop-mini-program](https://github.com/tumobi/nideshop-mini-program)

   项目介绍：基于Node.js+MySQL开发的开源微信小程序商城（微信小程序）

   项目参考：
   
   1. litemall项目数据库基于nideshop-mini-program项目数据库；
   2. litemall项目的litemall-wx模块基于nideshop-mini-program开发。

2. [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)
  
   项目介绍： 一个基于Vue和Element的后台集成方案
  
   项目参考：litemall项目的litemall-admin模块的前端框架基于vue-element-admin项目修改扩展。

3. [mall-admin-web](https://github.com/macrozheng/mall-admin-web)

   项目介绍：mall-admin-web是一个电商后台管理系统的前端项目，基于Vue+Element实现。

   项目参考：litemall项目的litemall-admin模块的一些页面布局样式参考了mall-admin-web项目。

4. [biu](https://github.com/CaiBaoHong/biu)

   项目介绍：管理后台项目开发脚手架，基于vue-element-admin和springboot搭建，前后端分离方式开发和部署。

   项目参考：litemall项目的权限管理功能参考了biu项目。

5. [vant--mobile-mall](https://github.com/qianzhaoy/vant--mobile-mall)

   项目介绍：基于有赞 vant 组件库的移动商城。

   项目参考：litemall项目的litemall-vue模块基于vant--mobile-mall项目开发。

## 推荐

1. [Flutter_Mall](https://github.com/youxinLu/mall)
   
   项目介绍：Flutter_Mall是一款Flutter开源在线商城应用程序。
   
2. [Taro_Mall](https://github.com/jiechud/taro-mall)

    项目介绍：Taro_Mall是一款多端开源在线商城应用程序，后台是基于litemall基础上进行开发，前端采用Taro框架编写。


## 问题

负责人：李一

博客：https://blog.csdn.net/LetterLJHX

邮箱：2080863176@qq.com

对这个工程不明白的地方可以通过该联系方式与负责人联系


