<template>
  <v-app>
    <v-navigation-drawer
      app
      color="dark-grey"
      dark
      expand-on-hover
      hide-overlay
      permanent
      right
    >
      <v-list nav shaped dense>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img
              v-bind:src="`https://randomuser.me/api/portraits/men/${$store.state.userData.id}.jpg`"
            />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              {{ title }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ $store.state.userData.name }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider class="my-3"></v-divider>

        <v-list-item link to="/">
          <v-list-item-icon>
            <v-icon>mdi-home-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content> Главная </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/Find">
          <v-list-item-icon>
            <v-icon>mdi-account-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            Найти друзей
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/users/1">
          <v-list-item-icon>
            <v-icon>mdi-account-box</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            Мой профиль
          </v-list-item-content>
        </v-list-item>
      

      <v-list-item link to="/login">
          <v-list-item-icon>
            <v-icon>mdi-barcode-scan</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            Авторизация
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content class="px-12 py-3" app>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    nav: true,
    title: "SocialVue",
  }),
};
</script>
