import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    reviewItems: [
      {
        id: 1,
        author: 'Самуил',
        review: 'Привет, Верунь! ниче себе ты крутая. фотка класс!!!!!',
        date: '13 Oct 2011'
      },
      {
        id: 2,
        author: 'Самуил',
        review: 'Привет, Верунь! ниче себе ты крутая. фотка класс!!!!',
        date: '13 Oct 2011'
      },
      {
        id: 3,
        author: 'Самуил',
        review: 'Привет, Верунь! ниче себе ты крутая. фотка класс!!!!!!',
        date: '13 Oct 2011'
      }
    ]
  },
  mutations: {
    ADD_REVIEW(state, item){
      state.reviewItems.push(item)
    }
  },
  actions: {
    addReview({commit}, item){
      commit('ADD_REVIEW', item)
    }
  },
  getters: {
    getReviews: state => {
      return state.reviewItems
    }
  }
})
