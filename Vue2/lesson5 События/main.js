var app = new Vue ({
    el:'#app',
    data: {
        product: "Socks",
        image: "./assets/vmSocks-green-onWhite.jpg",
        inStock: true,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
          {
            variantId: 2234,
            variantColor: "green",
            variantImage: "./assets/vmSocks-green-onWhite.jpg"    
          },
          {
            variantId: 2235,
            variantColor: "blue",
            variantImage: "./assets/vmSocks-blue.png" 
          }
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        cart: 0
    },
    methods: {
          addToCart(){
            this.cart +=1
          },
          removeFromCart(){
          if (this.cart>0) this.cart -=1
          else this.cart = 0  
          },
          updateProduct(variantImage){
            this.image = variantImage      
          }  

    }


})