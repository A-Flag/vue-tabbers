<template>
    <div class="gen-button" :class="[`gen-button--${type}`,{
        'is-plain':plain,
        'is-round':round,
        'is-circle':circle,
        'is-disabled':disabled,
    }]"
    :disabled="disabled"
    @click="!disabled?handleClick():''"
    >
          <i :class="icon"></i>
        <span v-if="$slots.default">
            <slot></slot>
        </span>
    </div>
</template>

<script>
export default {
    name:'GenButton',
    //封装一个通用组件，会对props进行校验
    props:{
        type:{
            type:String,
            default:'default'
        },
        plain:{
            type:Boolean,
            default:false
        },
        round:{
            type:Boolean,
            default:false
        },
        circle:{
            type:Boolean,
            default:false
        },
        icon:{
            type:String,
            default:'default'
        },
        disabled:{
            type:Boolean,
            default:false
        }
    },
    created(){
        console.log(this.type,this.icon)
         console.log(this.$slots)
    },
    methods:{
        handleClick(e){
            console.log('e',this.disabled)
            this.$emit('click',e)
        }
    }

}
</script>

<style lang="scss" scoped>
    $normal-color: #fff;
    $normal-active-color: #409eff;
    $primary-color: #409eff;
    $primary-active-color: #66b1ff;
    $info-color: #909399;
    $info-active-color: #a6a9ad;
    $success-color: #67c23a;
    $success-active-color: #85ce61;
    $warning-color: #e6a23c;
    $warning-active-color: #ebb563;
    $danger-color: #f56c6c;
    $danger-active-color: #f78989;
    .gen-button{
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: #ffffff;
        border: 1px solid #dcdfe6;
        color: #606266;
        -webkit-appearance: none;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        margin: 0;
        transition: 0.1s;
        font-weight: 500;
        //禁止元素的文字被选中
        -moz-user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        padding: 12px 20px;
        font-size: 14px;
        border-radius: 4px;
        &:hover,
        &:hover{
        color: #409eff;
        border-color: #c6e2ff;
        background-color: #ecf5ff;
        }
    }

        .gen-button--primary {
            color: #fff;
            background-color: $primary-color;
            border-color: $primary-color;
            //   box-shadow: inset 3px 6px 10px #337ecc, inset -3px -7px 10px #4dbeff;
            &:hover,
            &:focus {
                background: $normal-active-color;
                background-color: $normal-active-color;
                color: #fff;
            }
        }
        .gen-button--success {
            color: #fff;
            background-color: $success-color;
            border-color: $success-color;
            &:hover,
            &:focus {
                background: $success-active-color;
                background-color: $success-active-color;
                color: #fff;
            }
        }

        .gen-button--info {
            color: #fff;
            background-color: $info-color;
            border-color: $info-color;
            &:hover,
            &:focus {
                background: $info-active-color;
                background-color: $info-active-color;
                color: #fff;
            }
        }
        .gen-button--warning {
            color: #fff;
            background-color: $warning-color;
            border-color: $warning-color;
            &:hover,
            &:focus {
                background: $warning-active-color;
                background-color: $warning-active-color;
                color: #fff;
            }
        }
        .gen-button--danger {
            color: #fff;
            background-color: $danger-color;
            border-color: $danger-color;
            &:hover,
            &:focus {
                background: $danger-active-color;
                background-color: $danger-active-color;
                color: #fff;
            }
        }

        // 拟态
        .gen-button.is-mimicry {
            box-shadow: inset 3px 6px 10px #ccc, inset -3px -7px 10px #fff;
        }

        .gen-button--primary.is-mimicry {
            box-shadow: inset 3px 6px 10px #337ecc, inset -3px -7px 10px #4dbeff;
        }
        .gen-button--info.is-mimicry {
            box-shadow: inset 3px 6px 10px #73767a, inset -3px -7px 10px #adb0b8;
        }
        .gen-button--success.is-mimicry {
            box-shadow: inset 3px 6px 10px #6aa54e, inset -3px -7px 10px #a0f774;
        }
        .gen-button--warning.is-mimicry {
            box-shadow: inset 3px 6px 10px #bc914f, inset -3px -7px 10px #ffd977;
        }
        .gen-button--danger.is-mimicry {
            box-shadow: inset 3px 6px 10px #c45656, inset -3px -7px 10px #ff8282;
        }

        // 朴素按钮

        .gen-button.is-plain {
            box-shadow: unset;
            &:hover,
            &:focus {
                background: #fff;
                border-color: #489eff;
                color: #409eff;
            }
        }
        .gen-button--primary.is-plain {
            box-shadow: unset;
            color: #409eff;
            background: #ecf5ff;
            &:hover,
            &:focus {
                background: #409eff;
                border-color: #409eff;
                color: #fff;
            }
        }
        .gen-button--success.is-plain {
            box-shadow: unset;
            color: #67c23a;
            background: #c2e7b0;
            &:hover,
            &:focus {
                background: #67c23a;
                border-color: #67c23a;
                color: #fff;
            }
        }
        .gen-button--info.is-plain {
            box-shadow: unset;
            color: #909399;
            background: #d3d4d6;
            &:hover,
            &:focus {
                background: #909399;
                border-color: #909399;
                color: #fff;
            }
        }
        .gen-button--warning.is-plain {
            box-shadow: unset;
            color: #e6a23c;
            background: #f5dab1;
            &:hover,
            &:focus {
                background: #e6a23c;
                border-color: #e6a23c;
                color: #fff;
            }
        }
        .gen-button--danger.is-plain {
            box-shadow: unset;
            color: #f56c6c;
            background: #fbc4c4;
            &:hover,
            &:focus {
                background: #f56c6c;
                border-color: #f56c6c;
                color: #fff;
            }
        }
        // round
        .gen-button.is-round {
            border-radius: 20px;
            padding: 12px 23px;
        }
        // 圆形按钮
        .gen-button.is-circle {
            border-radius: 50%;
            padding: 12px;
        }
        // 让图标和文字之间空开
        .gen-button [class*='icon'] + span {
            margin-left: 5px;
        }
        // 禁用
        .gen-button.gen-button.is-disabled .mask {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: rgba(148, 146, 146, 0.39);
            left: 0;
            top: 0;
            box-shadow: 2px 2px 3px rgba(216, 213, 213, 0.3);
            border-radius: 4px;
            z-index: 100;
        }
        .gen-button.is-round .mask {
            border-radius: 20px;
        }

        .gen-button.is-circle .mask {
            border-radius: 50%;
        }
        .gen-button.is-disabled {
            cursor: no-drop;
        }


        [class*='gen-icon'] {
            font-family: "iconfont" !important;
            font-size: 16px;
            font-style: normal;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        .gen-icon-laohu1:before {
            content: "\e697";
        }

</style>