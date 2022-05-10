export default {
  state: {
    posts: [],
  },
  getters: {
    allPosts(state) {
      return state.posts;
    },
    validPosts(state) {
      return state.posts.filter((p) => {
        return p.title && p.body;
      })
    },
    postsCount(state, getters) {
      return getters.validPosts.length;
    },
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts;
    },
    createPost(state, newPost) {
      state.posts.unshift(newPost);
    },
  },
  actions: {
    async fetchPosts(context, limit = 10) {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=" + limit
      );
      const posts = await response.json();
      context.commit("updatePosts", posts);
    },
  },
};
