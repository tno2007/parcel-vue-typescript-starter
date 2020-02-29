<template>
  <Client></Client>
</template>


<script lang="ts">
import Vue from "vue";
import { User } from "@/types"; // Our interface
import Client from "./views/Client.vue";

export default Vue.extend({
  name: "App" as string,
  components: {
    Client
  },
  data() {
    return {
      user: {} as User // Declaring reactive data as type User
    };
  },
  mounted() {
    this.user = {
      firstName: "12345",
      lastName: `Berning`,
      twitterHandle: `@daveberning`,
      location: {
        city: `Cincinnati`,
        state: `OH`
      }
    };
  }
});
</script>