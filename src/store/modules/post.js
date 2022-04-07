export default{
    state: {
        posts:[]
    },
    getters: {
        allposts(state){
            return state.posts
        }
    },
    mutations: {
        updateposts(state,posts){
            state.posts=posts;
        }
    },
    actions: {
        async fetchposts(ctx){
            const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
            const posts=await res.json();
            ctx.commit('updateposts',posts)
        }
    },
}