<template>
  <div>
    <v-divider></v-divider>

    <h2 class="my-8">Возможные друзья</h2>

    <v-row v-for="(post, i) in posts" v-bind:key="i">
        <v-col sm="8">
            <v-card>
              <v-card-title>
                <v-icon large left> mdi-format-quote-open </v-icon>
                <span class="title font-weight-bold headline">{{posts.title}}</span>
              </v-card-title>
        
              <v-card-text>
                "{{post.body}}"
              </v-card-text>
        
              <v-card-actions>
                <v-list-item class="grow">
                  <v-list-item-avatar color="grey darken-3">
                    <v-img
                      class="elevation-6"
                      alt=""
                      
                    ></v-img>
                  </v-list-item-avatar>
        
                  <v-list-item-content>
                    <v-list-item-title>{{userData.name}}</v-list-item-title>
                  </v-list-item-content>
        
                  <v-row align="center" justify="end">
                    <v-icon class="mr-1"> mdi-heart </v-icon>
                    <button><span class="subheading mr-2">256</span></button>
                    <span class="mr-1">·</span>
                    <v-icon class="mr-1"> mdi-share-variant </v-icon>
                    <span class="subheading">45</span>
                  </v-row>
                </v-list-item>
              </v-card-actions>
            </v-card>
        </v-col>
    </v-row>

  </div>
</template>

<script>
export default {
  name: "Find",
  data() {
    return {
      userData: "",
      userId: '',
      posts: [],
      address: ''
    };
  },
  methods: {
    getUserData() {
      this.axios(
        {
          url: `http://jsonplaceholder.typicode.com/users/1`,
          method: 'GET'
        })
        .then((response) => {
          this.userData = response.data;
          this.$store.commit('setName', this.userData.name);
        });
    },
    getUserPosts() {
      this.axios
        .get(
          `http://jsonplaceholder.typicode.com/posts?userId=${this.userId}`
        )
        .then((response) => {
          this.posts = response.data;
        });
    },
  },
};
</script>