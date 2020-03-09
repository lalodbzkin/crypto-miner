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

      <div class="preloader-wrapper big active">
          <div class="spinner-layer spinner-blue-only">
            <div class="circle-clipper left">
              <div class="circle"></div>
            </div><div class="gap-patch">
              <div class="circle"></div>
            </div><div class="circle-clipper right">
              <div class="circle"></div>
            </div>
          </div>
        </div>


      <table>

        <thead>

          <tr>

            <th>Codigo</th>

            <th>Nome</th>

            <th>Valor</th>

          </tr>

        </thead>

        <tbody>

          <tr v-for="(config) in configs" :key="config.id">
              <router-link :to="'detalhes/' + config.id" class="router-link">
                <td style="float:left"> {{config.cod}} </td>
              </router-link>

               <td> {{config.name}} </td>
               <td> {{config.rtPrices[config.rtPrices.length -1].value}} </td>
               
          </tr>

        </tbody>
      
      </table>

      

    </div>

  </div>
</template>

<script>

import Configs from '../services/configs';


  // document.addEventListener('click', function() {
  //   var elems = document.querySelectorAll('.sidenav');
  //   var instances = M.Sidenav.init(elems, {});
  // });

  // document.addEventListener('mouseover', function() {
  //   var elems = document.querySelectorAll('.collapsible');
  //   var instances = M.Collapsible.init(elems, {});
  // });

export default{


  data(){
    return{
      configs:[],
      location: "",
      search: ""
      
      }
  },

  mounted(){
    this.listPrices();

  },
  methods:{

    listFirst(){
      Configs.listPrices().then(resp => {
          this.configs = resp.data
        })
    },

    listPrices(){
      this.listFirst();
      setInterval(function(){
        Configs.listPrices().then(resp => {
          this.configs = resp.data

        })
    }.bind(this), 10000);
    }
     
  } 
}

</script>

<style>
/* nav.nav-center ul {
    text-align: center;
}
nav.nav-center ul li {
    display: inline;
    float: none;
}
nav.nav-center ul li a {
    display: inline-block;
}

.select{
  width:fit-content; 
}

#search{
  border-radius: 10px;
  padding-left: 20px;
}

.card-css{
  height: 28em;
}

.cardOut-css{
  margin-top: 2em;
  margin-bottom: 2em;
  border-radius: 30px;
}

.siteLink{
  color: white;
}

@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700|Open+Sans);


.profile {
  background-color: #f4f4f4;
  width: 45em;
  margin: 10px auto;
  box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.7);
}

.pheader {
  overflow: hidden;
  width: 100%;
  max-height: 200px;
}

h3{
  margin-top: 0.5em; 
}

h4{
  margin-top: 1em;
}

.pheader img{
  width: 30%;
}

.pcontent {
  width: 85%;
  margin: 35px auto;
}

.pcontent h3 {
  font-size: 30px;
  margin-bottom: 0;
  color: #303F9F;
  font-family: 'Montserrat', sans-serif;
}

.pcontent h4 {
  font-size: 14px;
  color: #FF5252;
  font-family: 'Montserrat', sans-serif;
}

.pcontent p {
  color: #727272;
  font-size: 12px;
  font-family: 'Open Sans', sans-serif;
  
}
*/

.preloader-wrapper{
  display: none;
  margin-top: 2em;
}

</style>
