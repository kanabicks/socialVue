<template>
  <v-app>
    <v-navigation-drawer
      v-model="navigation"
      app
      color="dark-grey"
      dark
      expand-on-hover
      hide-overlay
      permanent
      right
    >
      <v-list>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img :src=" `https://randomuser.me/api/portraits/men/${ $store.state.userId }` " />
          </v-list-item-avatar>

          <v-list-item-content class="text-left">
            <v-list-item-title class="font-weight-black">
              SocialLink
            </v-list-item-title>
            <v-list-item-subtitle>Alexander Pavlovich</v-list-item-subtitle>
            <router-link/>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-folder</v-icon>
          </v-list-item-icon>
          <v-list-item-title> <router-link to="../User.vue">Главная</router-link></v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-account-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title
            ><router-link to="/social/src/views/User.vue"
              >My profile</router-link
            ></v-list-item-title
          >
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Найти друзей</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="px-12 py-3">
      <v-container fluid>
        
      </v-container>
    </v-main>
    
    <v-footer
    color="primary lighten-1"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col
        class="primary lighten-2 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Social Network

        </strong>
      </v-col>
    </v-row>
  </v-footer>

  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    navigation: false,
    links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],
  }),
};
</script>

<style>
</style>