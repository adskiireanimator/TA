import { createStore } from 'vuex'
import post from './modules/post'
import friends from './modules/friends'

export default createStore({
  modules: {
    post,
    friends
  }
})
