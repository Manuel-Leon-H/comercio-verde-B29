import Vue from 'vue';

export async function fetchArtesanias({ state, commit, dispatch, rootState }){
    return Vue.axios.get('/artesanias').then(res => {
        commit('setArtesanias',res)
    }).catch(err =>{
        console.log(err)
    }).finally(()=>{
        console.log("artesanias obtenidas")
    });
}

export async function actualizarArtesanias({ state, commit, dispatch, rootState }){
    return Vue.axios.get('/artesanias').then(res => {
        commit('setArtesanias',res)
    }).catch(err =>{
        console.log(err)
    }).finally(()=>{
        console.log("artesanias obtenidas")
    });
}

