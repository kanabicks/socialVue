<template>
  <div class="home">
    <h1>Social Vue</h1>
    <v-divider></v-divider>
    <v-carousel v-model="model" app left>
      <v-carousel-item v-for="(color, i) in colors" :key="color">
        <v-sheet :color="color" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">{{ i + 1 }}</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <h2>lorem</h2>
      <v-divider></v-divider>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, minima natus aliquid autem molestiae dolorem labore quod eum quibusdam assumenda. Ab provident maiores error alias veniam voluptatum deserunt temporibus, at eligendi? Dolores amet minus nisi neque? Fugit dolorum vitae esse quod eligendi, voluptates accusantium mollitia incidunt, deserunt voluptate eum repellat?</p>

  </div>
</template>
<script>
export default {
  name: "home",

  data: () => ({
    model: 0,
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
  }),
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>