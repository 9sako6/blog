<template>
  <section class="page">
    <h2>{{ error.statusCode }}</h2>
    <p v-if="error.statusCode === 404">
      The requested URL was not found on this server.
    </p>
    <h2 v-else>
      error
    </h2>
    <div class="post-tags">
      <nuxt-link to="/">
        <span class="post-tag"> Home</span>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    error: { type: Function, default: () => {} }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/post.scss";
@import "@/assets/scss/tag.scss";
</style>
