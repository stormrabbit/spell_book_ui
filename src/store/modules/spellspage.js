import {
    put
} from '../../request/http';
export default {
    namespaced: true,
    state: {
        spells: []
    },
    getters: {
        spells: state => {
            return state.spells
        },
    },
    mutations: {
        putSpells(state, spells) {
            state.spells = [
                ...spells,
            ]
        }
    },
    actions: {
        async updateSpell({
            commit
        }, {
            id,
            spell,
        }) {
            const result = await put(`http://localhost:3000/personal/${id}`, {}, spell);
            commit('putSpells', result);
        }
    }
}