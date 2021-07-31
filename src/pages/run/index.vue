<template>
    <div>
        <van-button type="primary">22</van-button>
        <Tabber :initActive="1"></Tabber>
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
            // initActve:'1'
        }
    }
}
</script>