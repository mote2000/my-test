import Vue from 'vue'
import Router from 'vue-router'

import UserProfile from '../UserProfile.vue'
import UserHome from '../UserHome.vue'
import UserPosts from '../UserPosts.vue'
import User from '../User.vue'

Vue.use(Router)

export default new Router ({
  routes: [
    { path: '/user/:id', component: User,
      children: [
        // UserHome will be rendered inside User's <router-view>
        // when /user/:id is matched
        { path: '', component: UserHome },
				
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        { path: 'profile', component: UserProfile },

        // UserPosts will be rendered inside User's <router-view>
        // when /user/:id/posts is matched
        { path: 'posts', component: UserPosts }
      ]
    }
  ]
})