<template>
  <div>Client page!</div>
</template>

<script lang="ts">
import Vue from "vue";
import { User } from "@/types"; // Our interface

export default Vue.extend({
  name: "Client" as string,
  components: {},
  data() {
    return {
      user: {} as User // Declaring reactive data as type User
    };
  },
  mounted() {
    this.user = {
      firstName: `Dave`,
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