import Vue from 'vue';
import Filter from './filter';
import Mixin from './mixin';
import Utils from './utils';
import Storage from './storage';
import Loading from './loading';

Vue.use(Filter);
Vue.use(Utils);
Vue.use(Storage);
Vue.use(Loading);
Vue.mixin(Mixin);
