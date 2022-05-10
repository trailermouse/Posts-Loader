<template>
  <div id="app" class="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/> -->
    <PostForm />
    <h2 class="app__count">Currently displaying: {{ postsCount }} posts</h2>
    <div class="app__post" v-for="post in validPosts" :key="post.id">
      <h3 class="app-post__title">{{ post.title }}</h3>
      <p class="app-post__text">{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PostForm from "./components/PostForm.vue";

export default {
  name: "app",
  computed: mapGetters(["validPosts", "postsCount"]),
  methods: mapActions(["fetchPosts"]),
  components: { PostForm },
  async mounted() {
    this.fetchPosts();
  },
};
</script>

<style lang="scss">
.app {
  max-width: 60rem;
  width: 100%;
  margin: 7rem auto;
  font-size: 1.6rem;
  color: $color-text;
  background-color: $color-main-bg;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__count {
    margin-bottom: 2rem;
    color: $color-text;
    font-size: 2rem;
    align-self: flex-start;
  }

  &__post {
    width: 100%;
    border: 1px solid $color-text;
    border-radius: 1rem;
    margin-bottom: 1.6rem;
    padding: 2rem;
  }

  &-post {
    &__title {
      color: $color-heading;
      font-size: 2.4rem;
      font-weight: 600;
    }
  }
}
</style>
