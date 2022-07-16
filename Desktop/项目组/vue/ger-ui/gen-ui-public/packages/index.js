//整个包的入口

import './fonts/iconfont.css'
import GenButton from './button'
import GenDialog from './dialog.vue'
import GenInput from './input.vue'
import GenSwitch from './switch.vue'
import GenRadio from './radio.vue'
import GenRadioGroup from './radio-group.vue'
import GenCheckbox from './checkbox.vue'
import GenCheckboxGroup from './checkbox-group.vue'
import GenForm from './form.vue'
import GenFormItem from './form-item.vue'


const components = [
    GenButton,
    GenDialog,
    GenInput,
    GenSwitch,
    GenRadio,
    GenRadioGroup,
    GenCheckbox,
    GenCheckboxGroup,
    GenForm,
    GenFormItem
]
const install = function(Vue){
    console.log('112131')
    components.forEach((item)=>{
        Vue.component(item.name,item)
    })
}

if(typeof window !=='undefined'&&window.Vue){
    install(window.Vue)
}
export default {
    install
}