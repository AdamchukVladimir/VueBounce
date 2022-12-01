var app = new Vue ({
    el:'#app',
    data: {
        product: "Socks",
        selectedVariant: 0,
        inventory: 0,
        brand:'Puma',
        onSale: true,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
          {
            variantId: 2234,
            variantColor: "green",
            variantImage: "./assets/vmSocks-green-onWhite.jpg",
            variantQuantity: 10    
          },
          {
            variantId: 2235,
            variantColor: "blue",
            variantImage: "./assets/vmSocks-blue.png",
            variantQuantity: 0 
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
          updateProduct(index){
            this.selectedVariant = index;     
          },  
    },
    computed: {
      title(){
        return this.brand + ' ' + this.product;
      },
     image() {
      return this.variants[this.selectedVariant].variantImage;   
     },
     inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
     },
     sale() {
      if (this.onSale) {
        return this.brand + ' ' + this.product + ' are on sale!'
      } 
        return  this.brand + ' ' + this.product + ' are not on sale'
    }
    }
    


})