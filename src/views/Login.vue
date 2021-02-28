<template>
    <div class="d-flex justify-center">
        <v-card width="600px" class="mt-12 pa-10">
            <v-card-title>
                Войдите в аккаунт
            </v-card-title>

            <v-text-field
                label="Введите логин"
                v-model="login"
                outlined
            ></v-text-field>

            <v-text-field
                label="Введите пароль"
                v-model="password"
                outlined
            ></v-text-field>

            <v-btn @click="authenticate">
                Войти
            </v-btn>
        </v-card>
    </div>
</template> 

<script>
export default {
    name: "Login", 
    data(){
        return {
            login: '',
            password: '',
            myId: '-1'
        }
    },
    methods:{
        authenticate(){
            this.axios.get('http://37.77.104.246/api/jsonstorage/?id=a113723ec6c779a773ab8afe0ff83331')
            .then(
                (response)=>{
                    let users = response.data;
                    let found = false;
                    for(let user of users){
                        if(this.login == user.login && this.password == user.password){
                            this.$store.commit('setUID', user.id);
                            this.$store.commit('setFirstName', user.name);
                            this.$router.push('/users/' + this.$store.state.userData.id);
                            found = true;
                            break;
                        }
                    }
                    if(!found)
                        window.alert('Incorrect login or password')
                }
            )
        }
    }
}
</script>

<style>

</style>