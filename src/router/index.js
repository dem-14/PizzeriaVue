import Vue from 'vue'
import VueRouter from 'vue-router'
import Pizzas from '../views/Pizzas.vue'
import guard from '../userLib/userGuardService'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Pizzas',
    component: Pizzas
  },
  {
    path: '/pizzaadd',
    name: 'Pizzaadd',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "pizzaadd" */ '../views/PizzaAdd.vue'),
    /*
    meta: {                  //aunque esté comentado poner el chunkname
      role: 'admin'
    }
    */

  },
  {
    path: '/pizzaedit/:id',
    name: 'PizzaEdit',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "pizzaedit" */ '../views/PizzaEdit.vue'),
    
    /*
    meta: {                  //aunque esté comentado poner el chunkname
      role: 'admin'
    }
    */

  },
  
  {
    path: '/ingredients',
    name: 'Ingredientes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ingredients" */ '../views/Ingredients.vue'),
    meta: {                  //aunque esté comentado poner el chunkname
      role: 'admin'
    }

  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),

  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue'),

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//si estas autorizado (por ejem ingredientes) accede, si no te redirige a login
router.beforeEach(async (to, from, next) => {
  const { role } = to.meta || {}
  const isAutorize = await guard(role)
  if (!isAutorize) {
    next({ name: 'Login' })
  }
  else {
    next();
  }

})

export default router
