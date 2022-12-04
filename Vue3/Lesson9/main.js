const app = Vue.createApp({
  data(){
    return{
      cart:[],
      premium: false
    }

  },
  methods:{
    addToCartMain(id){
      this.cart.push(id)
    },
    removeFromCart(id){
      if (this.cart.indexOf(id) > -1){
        this.cart.splice(this.cart.indexOf(id), 1);
      }
    }
  },

  computed:{

  }
})
