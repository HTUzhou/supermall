<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <RecommendView :recommends="recommends"></RecommendView>
    <Feature></Feature>
    <TabControl class="tab-control" :titles="['流行', '新款', '精选']"></TabControl>

    <ul>
      <li>列表87</li>
      <li>列表88</li>
      <li>列表89</li>
      <li>列表90</li>
      <li>列表91</li>
      <li>列表92</li>
      <li>列表93</li>
      <li>列表94</li>
      <li>列表95</li>
      <li>列表96</li>
      <li>列表97</li>
      <li>列表98</li>
      <li>列表99</li>
      <li>列表100</li>
      <li>列表100</li>
      <li>列表100</li>
      <li>列表100</li>
      <li>列表100</li>
      <li>列表100</li>
      <li>列表100</li>
      <li>列表100</li>
      <li>列表100</li>
      <li>列表100</li>
      <li>列表100</li>
      <li>列表100</li>
      <li>列表100</li>
      <li>列表100</li>
      <li>列表100</li>
      <li>列表100</li>
      <li>列表100</li>
      <li>列表100</li>
      <li>列表100</li>
      <li>列表100</li>
      <li>列表100</li>
      <li>列表100</li>
      <li>列表100</li>
      <li>列表100</li>
      <li>列表100</li>
      <li>列表100</li>
      <li>列表100</li>
    </ul>
  </div>
</template>

<script>
  import HomeSwiper from "./childComps/HomeSwiper";
  import Feature from "./childComps/Feature";
  import RecommendView from "./childComps/RecommendView";

  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabcontrol/TabControl";

  import {getHomeMulitidata} from "network/home";


  export default {
    name: "Home",
    components: {NavBar, HomeSwiper, RecommendView, Feature, TabControl},
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'news': {page: 0, list: []},
          'sell': {page: 0, list: []},
        }
      }
    },
    created() {
    //  请求多个数据
      getHomeMulitidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        console.log(res);
      })
    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .tab-control {
    /*实现吸顶效果*/
    position: sticky;
    background-color: #fff;
    top: 44px;
  }
</style>
