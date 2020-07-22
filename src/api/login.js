import VueAxios from 'vue-axios'
methods: {
    async createPost() {
      let post = {
        title: 'foo',
        body: 'bar',
        userId: 1
      };
      let response = await axios.post("https://jsonplaceholder.typicode.com/posts/1", post)
      console.log(response.data);
    }
  },
  created() {
    this.createPost();
  }
  
  