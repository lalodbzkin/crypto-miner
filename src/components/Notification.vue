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

        <form @submit.prevent="editCoin">

          <input type="text" placeholder="Valor Inicial" v-model="coin.min">
          <input type="text" placeholder="Valor Final" v-model="coin.max">

          <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>

      </form>


      <table>

        <thead>

          <tr>

            <th>Valor</th>

            <th>Data</th>

          </tr>

        </thead>

        <tbody>

          <tr v-for="(notification) in coin.notifications.reverse()" :key="notification.id">
               <td> {{notification.value}} </td>
               <td> {{notification.timestamp.substring(0,10)}} - {{notification.timestamp.substring(11,19)}} </td>
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
        "mPrices": [],
        "max": '',
        "min": '' 
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

    editCoin(){
        Configs.editPrices(this.coin).then(resp => {
          window.location.replace("#/detalhes/".concat(this.id));
        })
    },
     
  } 
}

</script>

<style>
.preloader-wrapper{
  display: none;
  margin-top: 2em;
} 
</style>
