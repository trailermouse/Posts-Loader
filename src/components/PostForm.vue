<template>
  <form class="form" @submit.prevent="submitPost">
    <h1 class="form__heading">Add new post</h1>
    <input class="form__input" type="text" placeholder="Enter title" v-model="title" />
    <input class="form__input" type="text" placeholder="Enter text" v-model="body" />
    <div class="form__btn-box">
      <button class="form__button" type="submit" :disabled="title === '' && body === ''">Create post</button>
    </div>
  </form>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      title: '',
      body: '',
    }
  },
  methods: {
    ...mapMutations(['createPost']),
    submitPost() {
      this.createPost({
        title: this.title,
        body: this.body,
        id: Date.now(),
      });
      this.title = this.body = '';
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  max-width: 60rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6rem;
  flex-direction: column;
  gap: 2rem;

  &__heading {
    text-transform: uppercase;
    color: $color-heading;
    font-weight: 700;
    letter-spacing: 0.2rem;
    font-size: 3.4rem;
  }

  &__input {
    width: 100%;
    border-radius: 0.8rem;
    border: 1px solid $color-text;
    padding: 1.5rem;
    color: $color-text;
    font-size: 1.6rem;

    &::placeholder {
      color: $color-text;
      font-size: 1.6rem;
    }
  }

  &__btn-box {
    max-width: 16rem;
    width: 100%;
    height: 4.5rem;
  }

  &__button {
    border: none;
    background-color: $color-orange;
    color: $color-main-bg;
    width: 100%;
    height: 100%;
    padding: 1rem 2rem;
    border-radius: 1rem;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1.4rem;
    cursor: pointer;

    &:hover {
      background-color: #e66d39;
    }
  }
}
</style>
