<template>
<div>
    <product-list
        :productos="artesanias.data"
        :categoria="'Artesanias'"
    ></product-list>

</div>
</template>

<script>
import {mapState,mapActions} from 'vuex';

import ProductList from '@/components/ProductList.vue'

export default {
    name:"Artesanias",
    components:{
        ProductList
    },
    computed:{
        ...mapState('artesania',['artesanias'])
    },
    created(){
        this.fetchArtesanias();
    },
    methods:{
        ...mapActions('artesania',['fetchArtesanias'])
    }
}
</script>