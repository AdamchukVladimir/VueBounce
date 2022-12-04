app.component('product-display',{
    props:{
      premium:{
        type:Boolean,
        required: true
      }      
    },
    template:
    /*html*/
   `<div class="product">
   <div class="product-image">
     <img :src="image" />
   </div>

   <div class="product-info">
     <h1>{{ title }}</h1>
     <p v-show="inStock">В наличии</p>
     <p v-if="inStock">In stock</p>
     <p v-else>Out of Stock</p>
     <ul>
         <li v-for="detail in details">{{ detail}}</li>
     </ul>
     <p>Shipping: {{ shipping }}</p>
     <div 
       class="color-circle"
       :class="{active: isActive}"
       v-for="(variant, index) in variants" :key="variant.id"
       @mouseover="updateVariant(index)"
       :style="{backgroundColor: variant.color}"> 
     </div>
     <div class="cart">
       <button class="button"
       :class="{disabledButton: !inStock}"
       :disabled="!inStock" 
       @click="addToCart">Add to cart</button>
       <br>
       <button @click="removeFromCart">Remove from cart</button>
     </div>
     </div>
    </div>`,
    data() {
        return {
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
        this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
      },
      removeFromCart(){
        this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
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
      },
      shipping(){
        if (this.premium){
            return 'Free'
        }
        {
            return 2.99
        }
      }

    } 



})