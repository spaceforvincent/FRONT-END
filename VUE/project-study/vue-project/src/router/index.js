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
import DataBindingList2 from '../views/DataBinding/DataBindingList2.vue'
import renderingVif from '../views/Rendering/Renderingvif.vue'
import EventClick from '../views/Event/EventClick.vue'
import EventChange from '../views/Event/EventChange.vue'
import Computed from '../views/ComputedWatch/Computed.vue'
import Watch from '../views/ComputedWatch/Watch.vue'
import NestedComponent from '../views/NestedComponent.vue'
import ParentComponent from '../views/ParentToChild/ParentComponent.vue'
import ParentComponentSecond from '../views/ParentToChild/ParentComponent2.vue'
import ParentComponentThird from '../views/ParentToChild/ParentComponent3.vue'
import ParentComponentFourth from '../views/ChildToParent/ParentComponent4.vue'
import ParentComponentFifth from '../views/ParentToChild/ParentComponent5.vue'
import ProvideInject from '../views/ProvideInject/ProvideInject.vue'

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
    path:'/databindingList2',
    name:'DataBindingList2',
    component: DataBindingList2
  },
  {
    path:'/renderingvif',
    name:'renderingVif',
    component: renderingVif
  },
  {
    path:'/eventclick',
    name:'EventClick',
    component: EventClick
  },
  {
    path:'/eventchange',
    name:'EventChange',
    component: EventChange
  },
  {
    path:'/computed',
    name:'Computed',
    component: Computed
  },
  {
    path:'/watch',
    name:'Watch',
    component: Watch
  },
  {
    path:'/nestedcomponent',
    name:'NestedComponent',
    component: NestedComponent
  },
  {
    path:'/parentcomponent',
    name:'ParentComponent',
    component: ParentComponent
  },
  {
    path:'/parentcomponent2',
    name:'ParentComponentSecond',
    component: ParentComponentSecond
  },
  {
    path:'/parentcomponent3',
    name:'ParentComponentThird',
    component: ParentComponentThird
  },
  {
    path:'/parentcomponent4',
    name:'ParentComponentFourth',
    component: ParentComponentFourth
  },
  {
    path:'/parentcomponent5',
    name:'ParentComponentFifth',
    component: ParentComponentFifth
  },
  {
    path:'/provideinject',
    name:'ProvideInject',
    component: ProvideInject
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
