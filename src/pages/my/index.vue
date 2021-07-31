<template>
    <div>
        <van-button type="primary">33</van-button>
        <Tabber :initActive="2"></Tabber>
    </div>
</template>
<script>
import Tabber from '@/components/nav/Tabbers.vue'
export default {
    components: {
        Tabber
    },
    data(){
        return{
            // initActve:'2'
        }
    }
}
</script>