<template>
  <footer class="footer">
    <div class="text-wrap">
      <a
        class="link"
        href="https://github.com/9sako6/9sako6-blog"
        target="_blank"
        rel="noopener noreferrer"
      >
        9sako6/9sako6-blog
      </a>
    </div>
    <div class="text-wrap">
      <nuxt-link class="link" to="/about">
        運営者情報
      </nuxt-link>
    </div>
    <div class="text-wrap">
      <nuxt-link class="link" to="/policy">
        プライバシーポリシー
      </nuxt-link>
    </div>
    <div class="text-wrap">
      <nuxt-link class="link" to="/contact">
        お問い合わせ
      </nuxt-link>
    </div>
    <div class="text-wrap">
      &copy; 2019-2020 9sako6 All Rights Reserved
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
footer {
  margin-top: auto;
  text-align: center;
  padding: 1em;
}
.text-wrap {
  padding: 0.4em 0;
  word-wrap: break-word;
}
.light-mode a, .sepia-mode a {
  word-break: break-all;

  &:hover {
    // @apply text-blue-700;
    text-decoration: underline;
  }
}
.dark-mode a {
  word-break: break-all;

  &:hover {
    // @apply text-teal-400;
    text-decoration: underline;
  }
}
</style>
