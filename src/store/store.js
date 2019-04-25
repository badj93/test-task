import Vue from 'vue'
import Vuex from 'vuex'
import Records from './records.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
      Records
    }
})
