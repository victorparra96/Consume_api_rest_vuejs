<template>
    <v-container>
    <v-row class="text-center">      
      <v-col class="mb-4">
        <h2 class="display-2 font-weight-bold mb-3">
          Listado de compradores
        </h2>       
      </v-col>        
    </v-row>
    <v-row class="text-center">
    <v-col cols="12">
        <v-app>
            <v-main>
                <v-card class="mx-auto mt-5" max-with="900">
                    <v-data-table :headers="columnas" :items="buyer_list" class="elevation-19">
                        <template v-slot:item.action="{ item }">
                            <v-btn :to="{name:'information', params:{id:item.id}}" fab small color="primary"><v-icon>mdi-pencil</v-icon></v-btn>
                        </template>
                    </v-data-table>
                </v-card>
            </v-main>
        </v-app>
    </v-col>
    </v-row>
    </v-container>
</template>

<script>
import axios from 'axios';
export default {
    name:'buyer',
    mounted(){
        this.getBuyers();
    },
    data(){
        return{       
            columnas:[
                {text:'Id', value:'id', class:'green accent-2'},
                {text:'Name', value:'name', class:'green accent-2'},
                {text:'Age', value:'age', class:'green accent-2'},
                {text:'Total', value:'total_buys', class:'green accent-2'},
                {text: "Information", value: "action", class:'green accent-2' }
            ],     
            buyer_list:[],
            id:null,
        }
    },
    methods:{
        getBuyers(){
            axios.get('http://localhost:3000/buyers')
            .then(r => {
                this.buyer_list = r.data.buyer_list
                console.log(this.buyer_list);
            })
            .catch(function(error){
                console.log(error);
            })
        },
    }
}
</script>