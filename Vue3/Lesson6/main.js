const app = Vue.createApp({
  data() {
      return {
          cart:0,
          product: 'Socks',
          brand: 'Puma',
          isActive: true,
          selectedVariant:0,
          details: ['50% cotton', '30% wool', '20% polyester'],
          variants: [
            { id: 2234, color: 'green', image: './assets/images/socks-green-onWhite.jpg', quantity: 50 },
            { id: 2235, color: 'blue', image: './assets/images/socks-blue.png', quantity: 0 },
          ]
      }
  },
  methods: {
    addToCart(){
      this.cart += 1
    },
    removeFromCart(){
      if (this.cart >0){
        this.cart -=1    
      } 
    },
    updateVariant(index){
      this.selectedVariant = index
    }

  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    image(){
      return this.variants[this.selectedVariant].image
    },
    inStock(){
      return this.variants[this.selectedVariant].quantity
    } 
  }
})
