<template>
    <v-container>
        <v-card class="mx-auto mt-5" max-with="900">
            <v-card-text v-for="h in history" :key="h.id">
            <div class="text-center"><h2>Historial</h2></div>
            <div>
                <p>Codigo: {{h.id}}</p>
                <p>Nombre: {{h.name}}</p>
                <p>Edad: {{h.age}}</p>
            </div>
            <v-simple-table fixed-header height="300px">
                <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-left">ID</th>
                        <th class="text-left">Ip</th>
                        <th class="text-left">Device</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="t in h.transaction_list" :key="t.id">
                        <td>{{t.id_transaction}}</td>
                        <td>{{t.ip}}</td>
                        <td>{{t.device}}</td>
                    </tr>
                </tbody>
                </template>
            </v-simple-table>
            </v-card-text>
        </v-card>
        <v-card class="mx-auto mt-5" max-with="900">
            <div class="text-center"><h2>Otros compradores usando la misma IP</h2></div>
            <v-simple-table fixed-header height="300px">
                <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-left">Ip</th>
                        <th class="text-left">Total compradores</th>
                    </tr>
                </thead>
                <tbody v-for="ip in find_ip" :key="ip.id">
                    <tr v-for="groupby in ip.groupby" :key="groupby.id">
                        <td>{{groupby.ip}}</td>
                        <td>{{groupby.total_buyers}}</td>
                    </tr>
                </tbody>
                </template>
            </v-simple-table>
        </v-card>
        <v-card class="mx-auto mt-5" max-with="900">
            <div class="text-center"><h2>Recomendaciones de productos</h2></div>
            <v-simple-table fixed-header height="300px">
                <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-left">ID</th>
                        <th class="text-left">Producto</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="r in recomendation" :key="r.id">
                        <td>{{r.id_product}}</td>
                        <td>{{r.name_product}}</td>
                    </tr>
                </tbody>
                </template>
            </v-simple-table>
        </v-card>
    </v-container>
</template>

<script>
import axios from 'axios';
export default {
    name:'information',
    mounted(){
        this.id = this.$route.params.id;
        console.log(this.$route);
        axios.get('http://localhost:3000/buyers/'+this.id)
        .then(r =>{
            this.history = r.data.buy_history
            this.find_ip = r.data.find_ip
            this.recomendation = r.data.find_product_recomendation
            console.log(r.data.find_product_recomendation)
        })
        .catch(function(error){
            console.log(error);
        });
    },
    data(){
      return{
        id:null,
        recomendation:null,
        history:null,
        find_ip:null,
      }
    },
}
</script>