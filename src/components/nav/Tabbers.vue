<template>
  <van-tabbar v-model="active" class="tab-wrap" active-color="#CC00FF">
    <van-tabbar-item
      v-for="(item,index) in tabbars"
      :key="index"
      :to="item.url"
    >
      <template>
        <img class="tab-image-class" :class="active===item.index ?'anmi':''" :src="active===item.index ? item.active : item.initActive">
      </template>
      <span class="tab-title-class">{{item.title}}</span>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
//   name: "Tabbar",
  props:{
    initActive:{
        tpye:Number,
        default:0
    }
      
  },
  data() {
    return {
      currIndex: 0,
      active: this.initActive,
      tabbars: [
        {
          index:0,
          name: "home",
          title: "首页",
          url:"Home",
          active: require("@/assets/tab-images/home-have-style.svg"),
          initActive: require("@/assets/tab-images/home-no-style.svg")
        },
        {
          index:1,
          name: "run",
          title: "运行",
          url:"Run",
          active: require("@/assets/tab-images/run-have-style.svg"),
          initActive: require("@/assets/tab-images/run-no-style.svg")
        },
        {
          index:2,
          name: "my",
          title: "我的",
          url:"My",
          active: require("@/assets/tab-images/my-have-style.svg"),
          initActive: require("@/assets/tab-images/my-no-style.svg")
        }
      ]
    };
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
  .tab-wrap{
      height: 140px;
  }
    .active_tab img {
      width: 26px;
      height: 26px;
    }

    .van-tabbar-item--active {
      color: #CC00FF;
    }
    .tabber-text-color{
      color: red;
    }
    .tab-title-class{
      display: block;
      font-size: 27px;
      margin-top:6px;
    }
    // .tab-icon,.iconfont{
    //   font-size: 27px;
    // }
    // .tab-icon.icon-shouye-copy.iconfont::before,.tab-icon.icon-shouye.iconfont::before{
    //     font-size: 46px;
    // }
    // .tab-icon.icon-yunhang1-copy-copy:before,.icon-yunxingzhong-copy:before{
    //     font-size: 46px;
    // }
    // .icon-wode4-copy-copy:before,.tab-icon[data-v-521e856d]{
    //    font-size: 46px;
    // }
    .anmi{
      animation: lalala 1s ease-in-out;
    }
    @keyframes lalala {
        0%{
          transform: rotate(45deg) scale(0.8);
          opacity: 0.2;
        }
        50%{
          transform: rotate(0deg) scale(2);
          opacity: 0.5;
        }
        75%{
          transform: rotate(-45deg) scale(0.8);
          opacity: 0.8;
        }
        100%{
          transform: rotate(0deg) scale(1);
          opacity: 1;
        }
    }
    .tab-wrap img{
       width: 46px;
       height: 46px;
    }
</style>