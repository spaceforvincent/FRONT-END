import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding/DataBinding.vue'
import DataBindingHtml from '../views/DataBinding/DataBindingHtml.vue'
import DataBindingInputText from '../views/DataBinding/DataBindingInputText.vue'
import DataBindingInputNumber from '../views/DataBinding/DataBindingInputNumber.vue'
import DataBindingTextarea from '../views/DataBinding/DataBindingTextarea.vue'
import DataBindingSelect from '../views/DataBinding/DataBindingSelect.vue'
import DataBindingCheckBox from '../views/DataBinding/DataBindingCheckBox.vue'
import DataBindingCheckBox2 from '../views/DataBinding/DataBindingCheckBox2.vue'
import DataBindingRadio from '../views/DataBinding/DataBindingRadio.vue'
import DataBindingAttribute from '../views/DataBinding/DataBindingAttribute.vue'
import DataBindingButton from '../views/DataBinding/DataBindingButton.vue'
import DataBindingClass from '../views/DataBinding/DataBindingClass.vue'
import DataBindingClass2 from '../views/DataBinding/DataBindingClass2.vue'
import DataBindingStyle from '../views/DataBinding/DataBindingStyle.vue'
import DataBindingStyle2 from '../views/DataBinding/DataBindingStyle2.vue'
import DataBindingList from '../views/DataBinding/DataBindingList.vue'
import renderingVif from '../views/Rendering/Renderingvif.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/databinding',
    name:'DataBinding',
    component: DataBinding
  },
  {
    path:'/databindinghtml',
    name:'DataBindingHtml',
    component: DataBindingHtml
  },
  {
    path:'/databindinginputtext',
    name:'DataBindingInputText',
    component: DataBindingInputText
  },
  {
    path:'/databindinginputnumber',
    name:'DataBindingInputNumber',
    component: DataBindingInputNumber
  },
  {
    path:'/databindingtextarea',
    name:'DataBindingTextarea',
    component: DataBindingTextarea
  },
  {
    path:'/databindingselect',
    name:'DataBindingSelect',
    component: DataBindingSelect
  },
  {
    path:'/databindingcheckbox',
    name:'DataBindingCheckBox',
    component: DataBindingCheckBox
  },
  {
    path:'/databindingcheckbox2',
    name:'DataBindingCheckBox2',
    component: DataBindingCheckBox2
  },
  {
    path:'/databindingradio',
    name:'DataBindingRadio',
    component: DataBindingRadio
  },
  {
    path:'/databindingattribute',
    name:'DataBindingAttribute',
    component: DataBindingAttribute
  },
  {
    path:'/databindingbutton',
    name:'DataBindingButton',
    component: DataBindingButton
  },
  {
    path:'/databindingclass',
    name:'DataBindingClass',
    component: DataBindingClass
  },
  {
    path:'/databindingclass2',
    name:'DataBindingClass2',
    component: DataBindingClass2
  },
  {
    path:'/databindingstyle',
    name:'DataBindingStyle',
    component: DataBindingStyle
  },
  {
    path:'/databindingstyle2',
    name:'DataBindingStyle2',
    component: DataBindingStyle2
  },
  {
    path:'/databindingList',
    name:'DataBindingList',
    component: DataBindingList
  },
  {
    path:'/renderingvif',
    name:'renderingVif',
    component: renderingVif
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
