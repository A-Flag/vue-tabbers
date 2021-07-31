<template>
    <div>
        <h2 class="title">登陆页</h2>
        
        <van-button type="primary">Primary</van-button>
    </div>
</template>
<script>
import { Button } from 'vant'
export default {
    components: {
      [Button.name]: Button
    }
  }

</script>
<style>
    .title{
        font-size: 30px;
    }
</style>
