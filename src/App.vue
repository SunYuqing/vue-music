<template>
  <div id="app">
    <div class="tab">
      <div class="tab-item">
        <router-link to="./findMusic">
          <i class="icon iconfont icon-wangyiyunyinlezizhi-copy"></i>
          <span>发现音乐</span>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="./myMusic">
          <i class="icon iconfont icon-yinle"></i>
          <span>我的音乐</span>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="./friend">
          <i class="icon iconfont icon-pengyou"></i>
          <span>朋友</span></router-link>
      </div>
      <div class="tab-item">
        <router-link to="./accounts">
          <i class="icon iconfont icon-zhanghao"></i>
          <span>帐号</span></router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="sass" rel="stylesheet/sass">
  @import "./assets/page/app.scss"
  @import "./common/iconfont/iconfont.css"
</style>
