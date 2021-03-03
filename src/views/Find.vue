<template>
  <div>
    <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="`https://randomuser.me/api/portraits/men/${userId}.jpg`"
      height="200px"
    ></v-img>

    <v-card-title>
      {{userData.name}}
    </v-card-title>

    <v-card-subtitle>
      {{ userData.address.city }}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        {{ userData.company.name }}
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  </div>
</template>

<script>
export default {
  name: "Find",
  data() {
    return {
      userData: "",
      userId: '2',
      posts: [],
      address: ''
    };
  },
  methods: {
    getUserData() {
      this.axios(
        {
          url: `http://jsonplaceholder.typicode.com/users/${this.userId}`,
          method: 'GET'
        })
        .then((response) => {
          this.userData = response.data;
          this.$store.commit('setName', this.userData.name);
        });
    },
    },
  watch: {
    $route() {
      this.initPage();
    },
  },
};
</script>

<style>
</style>