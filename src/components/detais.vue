<template>
  <div id="app">


  <nav class = "nav-center">
      <div class="nav-wrapper blue darken-1">
      <router-link to="/" class="center">CrypPasta</router-link>
      </div>
    </nav>

  <ul class="sidenav" id="mobile-demo">

    <li style = "margin-bottom:10%"><router-link to="/" class="center sidenav-close"></router-link></li>

  </ul>

    <div class="container">

        <h5>{{coin.name}}</h5>
        <button class=" green darken-3 btn-small"><router-link :to="'/notification/' + coin.id " class="router-link">  <i class="material-icons center">remove_red_eye</i></router-link></button>


      <table>

        <thead>

          <tr>

            <th>Valor Médio</th>

            <th>Data</th>

          </tr>

        </thead>

        <tbody>

          <tr v-for="(mPrice) in coin.mPrices" :key="mPrice.id">
               <td> {{mPrice.value}} </td>
               <td> {{mPrice.timestamp.substring(0,10)}} </td>
          </tr>

        </tbody>
      
      </table>

      

    </div>

  </div>
</template>

<script>

import Configs from '../services/configs';

export default{

  props:[
  'id'
  ],


  data(){
    return{
      configs:[],
      coin:{
        "name": '',
        "cod": '',
        "rtPrices": [],
        "mPrices": [] 
      },

      }
  },

  mounted(){
    this.findCoin();

  },
  methods:{

    findCoin(){
      Configs.findPrices(this.id).then(resp => {
          this.coin = resp.data
          console.log(this.coin);
        })
    },
     
  } 
}

</script>

<style scoped>
.preloader-wrapper{
  display: none;
  margin-top: 2em;
}

.router-link{
  color: white;
}
</style>
