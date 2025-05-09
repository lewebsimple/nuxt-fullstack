<script setup lang="ts">
const redirect = useRoute().query.redirect as string || "/";
</script>

<template>
  <div>
    TODO: Authentication page (redirect to {{ redirect }})
  </div>
</template>
