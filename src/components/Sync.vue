<template>
    <v-container>
        <v-row class="text-center">
        <v-col cols="12">
            <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="200"/>
        </v-col>
        <v-col class="mb-4">
            <h1 class="display-2 font-weight-bold mb-3">Test</h1>
        </v-col>        
        </v-row>
        <v-row class="text-center">
        <v-col class="mb-4">   
            <h1 class="display-5 font-weight-bold mb-3">API Rest con Go y chi</h1>
            <v-btn @click="sync()" depressed color="primary">Sincronizar</v-btn>   
        </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios';
export default {
    name:'sync',
    methods:{
        sync(){
            axios.post('http://localhost:3000/buyers')
            .then(r => {
                console.log(r.data);
            })
            .catch(function(error){
                console.log(error);
            })
        },
    }
}
</script>