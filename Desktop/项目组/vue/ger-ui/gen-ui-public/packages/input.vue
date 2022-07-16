<template>
  <div :class="['gen-input', showSuffix ? 'suffix' : '']">
  <!-- <div class="gen-input" :class="{'gen-input__suffix': showSuffix }"> -->
      <input
      class="gen-input__inner"
      :class="['gen-input__inner', disabled ? 'is-disabled' : '']"
      :placeholder="placeholder"
      :type="showPassword ? (passwordVisiable ? 'text' : 'password') : type"
      :name="name"
      :disabled="disabled"
      :value="value"
      @input="handleInput"
       >
      <!-- <gen-button  :icon="['icon-laohu1']">

      </gen-button> -->
           <span class="gen-input__suffix" v-if="showSuffix">
             <i 
              :class="['icon-laohu1']"
              v-if="clearable && value"
              @click="clearInput"
             ></i>
          <span
              class="icon-laohu1"
              v-if="showPassword && value"
              @click="handlePassword"
              :class="[passwordVisiable ? 'active' : '']"
            />
    </span>
  </div>
</template>

<script>
export default {
 name:'GenInput',
 data(){
     return {
      passwordVisiable: false
    }
 },
  props:{
     placeholder:{
        type:String,
        default:''
    },
    type:{
      type:String,
      default:'text'
    },
    name:{
        type:String,
        default:''
    },
    disabled:{
        type:Boolean,
        default:false
    },
    value:{
        type:String,
        default:null
    },
    clearable:{
        type:Boolean,
        default:false
    },
      showPassword:{
        type:Boolean,
        default:false
    }
  },
  methods:{
    handleInput(e){
       this.$emit('input',e.target.value)
    },
    clearInput(){
      this.$emit('input','')
    },
    handlePassword(){
        this.passwordVisiable = !this.passwordVisiable
    }
  },
  computed: {
    showSuffix() {
      return this.clearable || this.showPassword
    }
  },
}
</script>

<style scoped lang="scss">
.gen-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  .gen-input__textarea {
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    padding: 10px 15px;
    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
  .gen-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 10px 15px;
    width: 100%;
    &:focus {
      outline: none;
      border-color: #409eff;
    }

    // input禁用样式
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
.gen-input.suffix {
  .gen-input_inner {
    padding-right: 30px;
  }
  .gen-input__suffix {
    position: absolute;
    right: 10px;
    height: 100%;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    cursor: pointer;
    z-index: 900;
    fai {
      color: #c0c4cc;
      font-size: 14px;
    }
    & .active {
      color: #666;
    }
  }
}
</style>
