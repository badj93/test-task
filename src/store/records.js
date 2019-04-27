import { records } from './db.js'

export default {
    state: {
        records: records
    },
    mutations: {
        addRecord (state, payload) {
            state.records.unshift(payload)
            for (let i in state.records) {
                state.records[i].id = i
            }
        },
        removeRecord (state, payload) {
            state.records = state.records.filter(item => {
                return item.id !== payload
            })
            for (let i in state.records) {
                state.records[i].id = i
            }
        }  
    },
    actions: {
        addRecord ({ commit }, payload) {
            commit('addRecord', payload)
        },
        removeRecord ({ commit }, payload) {
            commit('removeRecord', payload)
        }
    },
    getters: {
        getRecords (state) {
            return state.records
        }
    }
}