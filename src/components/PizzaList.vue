<template>
  <div>
    <h1>Listado de Pizzas</h1>
    <div >
     <ul  v-auth = "'admin'" >
       <li>
          <router-link to="/Pizzaadd">Pizza Add</router-link>
       </li>
        <li>
       <router-link to="/Pizzaedit/2">Pizza Edit</router-link>
       </li>
     </ul>
    </div>
  </div>
</template>

<script>

        
import {AuthDirective} from '../userLib/authDirective';

export default {
  name: 'PizzaList',
  
  directives:{ 
    AuthDirective

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
