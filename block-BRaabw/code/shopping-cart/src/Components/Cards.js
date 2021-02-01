import React from 'react';
// import Cart from './Cart';
import data from '../data.json'

class Cards extends React.Component{
    constructor(props){
        super(props)
       
        this.state = {
            order:'',
            allProducts:[...props.products],
            cartProducts:[],
            finalCartProducts:{},
            cartPrices:[],
            toggle:false,
            1:0,
            2:0,
            3:0,
            4:0,
            5:0,
            6:0,
            7:0,
            8:0,
            9:0,
            10:0,
            11:0,
            12:0,
            13:0,
            14:0,
            15:0,
            16:0,

            quanity:{}
        //    cartProducts:[...props.cartProducts]
        }
        
        
    }

    handleOrderBy = (event) => {
         this.setState({
             order:event.target.value
         })
        console.log(event.target.value)
        switch (event.target.value) {
            case 'increase':
                let increasingProducts = this.props.products.sort((a,b) => a.price - b.price)
                this.setState( {
                    allProducts:increasingProducts
                })
               
            break;
            case 'decrease':
                let decreasingProducts = this.props.products.sort((a,b) => b.price - a.price)
                this.setState({
                 allProducts:decreasingProducts
                })
             
                break;
            case 'select':
                    this.setState({
                     allProducts:[...this.props.products]
                    })
                  
            break;
            default:
                break;
        }
   
    }

    

    handleToggle = () => {
        this.setState((state) => {
            return{
                toggle:!state.toggle
            }
        })
    }
   
    handleCartProducts = () => {

        return(
            <>
                <div className='text-2xl text-white text-center'>
                    <h2>Add some products to the cart</h2>
                    <span>:)</span>
                </div>
            </>
        )
    }

    handleCheckout = (totalPrice) => {
        alert(`Your total cart price is : ${totalPrice}`)
    }

    handleRemoveItem = (event) => {
        console.log(event.target.dataset.card)
        let productId = event.target.dataset.card;
        let stateProducts = this.state.cartProducts
        let updatedProducts = stateProducts.filter((product) => product.id !== Number(productId))
        console.log(updatedProducts)
        this.setState((state) => {
            return{
                cartProducts:updatedProducts
            }
        })
    }


    handleQuanity = (event) => {
        let id = event.target.dataset.card
        this.setState((state) => {
            return{
                [id]:this.state[id]+1
            }
        })
    }

    handleDecrement = (event) => {
        let id = event.target.dataset.card;
        this.setState((state) => {
            return{
                [id]:this.state[id] - 1
            }
        })
    }

    handleAddToCart =  (event) => {
      console.log(event.target.dataset)
       let id = event.target.dataset.card
       let addedProducts = data.products.filter((product) => product.id == id)
       
       this.setState((state) => {
          let concatedProducts = state.cartProducts.concat(addedProducts);
         
          let repeatedProducts = concatedProducts.reduce((acc,cv) => {
              let item = acc.find(item => item.id === cv.id)
             
              if(!item){
                  return acc.concat([cv])
              }else{
                  return acc
              }
          },[])
        
          let removeProducts = {};
         
           concatedProducts.forEach((product) => {
               if(removeProducts[product.id]){
                   removeProducts[product.id] += 1
                   return
               }
               removeProducts[product.id] = 1
           })  
           
           let quanityObj = {[id]:1}
         
           return{
               cartProducts:repeatedProducts,
               [id]:this.state[id]+1


           }
       })


       


    }

    render(){
          //adding all cart prices
     let newCartPrices = []
    //  console.log(this.state.cartProducts)
     this.state.cartProducts.forEach((product) => {
         let totalItems = this.state[product.id]
         return newCartPrices.push((product.price) * totalItems)
     })
     let cartPrice =  newCartPrices.reduce((acc,cv) => {
        return Number(acc) + Number(cv)
    },[])


    return(
            <section className='flex-1 mx-20 relative'>
            <div className='flex flex-row justify-between w-full'>
                 <div>
                    <h3 className=''>{this.props.products.length} Product(s) found</h3>
                 </div>
                 <div>
                         <label className='mx-2 font-md' htmlFor='filter' id='filter' >Order By</label>
                         <select onChange={this.handleOrderBy} className='h-8 bg-white border-2 border-gray-100' id='filters' >
                             <option value='select' >Select Order</option>
                             <option   value='decrease'>Highest to lowest</option>
                             <option  value='increase'>Lowest to highest</option>
                         </select>
                 </div>
            </div>
            <div onClick={this.handleAddToCart} htmlFor='addToCart' className='grid grid-cols-4 gap-2'>
               {

                   (this.state.order === '' ?  this.props.products.map((product) => {
                    
                    return  <Card key={product.id} product={product} handleQuanity={this.handleQuanity} />
                  }):

                  this.state.allProducts.map((product) => {
                    
                    return  <Card key={product.id} product={product} handleQuanity={this.handleQuanity} />
                  })

                  )
                }
            </div>
            <div className='absolute -right-20 -top-20'>
                {/* <Cart cartProducts={this.state.cartProducts} cartPrices={newCartPrices} totalPrice={cartPrice} /> */}

                                    <section className='relative'>
                                    <div onClick={this.handleToggle} className={this.state.toggle ? 'hidden' : 'bg-black text-center  absolute right-0 z-10 py-7 cursor-pointer text-white p-4 relative inline'}>
                                        <i className="fas text-3xl fa-shopping-cart"></i>
                                        <span className='  absolute bottom-2 left-9 text-xs w-5 p-1 h-5 bg-yellow-500 rounded-full'>{this.state.cartProducts.length}</span>
                                    </div>
                                    <div className={this.state.toggle ? 'cart-page h-screen  fixed w-96 relative transform translate-x-5 duration-500 delay-100    bg-gray-800 my-2 absolute  right-5 -top-5':'hidden'}>
                                        <div onClick={this.handleToggle} className='cross-toggle cursor-pointer absolute -left-10 bg-black text-white p-5'>
                                            <i class="fas text-white fa-times"></i>
                                        </div>
                                        <div className='flex flex-col justify-between h-full  ' >
                                            <div className=' flex flex-row items-center w-full justify-center py-10  '>
                                                <div className='relative mx-4'>
                                                    <i className="fas text-white text-3xl fa-shopping-cart"></i>
                                                    <span className='  absolute bottom-0 left-5 text-xs w-5 p-1 h-5 bg-yellow-500 rounded-full'>{this.state.cartProducts.length}</span>
                                                </div>
                                                <h3 className='text-white text-2xl'>Cart</h3>
                                            </div>
                                            <div className={this.state.cartProducts.length > 0 ? 'products-adding mx-2 flex-1 overflow-y-scroll flex flex-col bg-local  ':'products-adding mx-2 flex-1  flex flex-col bg-local  '}>
                                                {
                                                    
                                                (this.state.cartProducts.length === 0 ? this.handleCartProducts() :
                                                        //   <Products cart={this.state.cartProducts} />
                                                        this.state.cartProducts.map((product) => {
                                                                return(
                                                                    <div data-quanity='1' className='group  focus:bg-gray-600 group-focus:bg-gray-400  ' >
                                                                        <hr className='text-white'></hr>
                                                                        <div className='relative py-6'>
                                                                            <div onClick={this.handleRemoveItem} data-card={product.id}  className='toggle-cross group-focus:text-white cursor-pointer  absolute right-4 top-0'>
                                                                                <i data-card={product.id} class="fas text-white fa-times"></i>
                                                                            </div>
                                                                            <div className='flex  flex-row justify-around items-center'>
                                                                                <div className=''>
                                                                                    <img className='w-15 h-20 object-center' src={`/static/products/${product.sku}_2.jpg`} alt='cart-item'></img>
                                                                                </div>
                                                                                <div className=''>
                                                                                    <h2 className='text-white'>{product.title}</h2>
                                                                                    <h3 className='text-gray-400 '>{product.availableSizes[0]} |<span className='mx-1'>{product.style}</span></h3>
                                                                                    <h4 className='text-gray-400 '>Quantity:<span>{this.state[product.id]}</span></h4>
                                                                                </div>
                                                                                <div className='flex flex-col items-center'>
                                                                                    <div className='text-1xl text-yellow-500 '>
                                                                                        <h2>$ {this.state[product.id]  * product.price}</h2>
                                                                                    </div>
                                                                                    <div className='flex my-3 flex-row bg-gray-600 justify-around items-center text-white '>
                                                                                        <span data-card={product.id} onClick={this.handleDecrement}   className={this.state[product.id] ===1 ? 'cursor-pointer no-underline text-1xl cursor-not-allowed outline-none border-none mx-2':'cursor-pointer text-1xl mx-2'}>-</span>
                                                                                        <span data-card={product.id} onClick={this.handleQuanity}  className='cursor-pointer text-1xl outline-none no-underline border-none mx-2'>+</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )
                                                                
                                                            })
                                                    
                                                    )
                                                }
                                            </div>
                                            <div className='checkout bg-gray-900 p-5 z-100  shadow-inner shadow-lg flex-end '>
                                                <div className='flex flex-row text-white items-center  justify-between'>
                                                    <h2 className='text-gray-500'>SUBTOTAL</h2>
                                                    <div>
                                                        <h3 className='text-yellow-500 text-right'>$ {(cartPrice > 0 ? cartPrice : 0)}</h3>
                                                        <h4 className='text-gray-500 text-sm'>OR UP TO 9 <i class="fas  fa-times"></i><span className='mx-2'>${(Math.round((cartPrice / 9 ) * 100 ) / 100  ) }</span></h4>
                                                    </div>
                                                </div>
                                                <div className='  my-2 text-center bg-black  text-white shadow-lg  py-2'>
                                                    <button onClick={() => this.handleCheckout(cartPrice)} >CHECKOUT</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
            </div>
            </section>
        )
    }
}


function Card(props) {
        return(
            <div data-card = {props.product.id} onClick={props.handleQuanity}  className='cards my-4 cursor-pointer'>
                <div data-card = {props.product.id} className='card relative group   border-1 hover:border-2 hover:border-gray-200 hover:shadow-lg hover:border-transparent px-4 py-2 flex flex-col items-center relative'>
                      <span data-card = {props.product.id} className={props.product.isFreeShipping ? 'text-xs absolute right-0 bg-black text-white px-2 py-1' :'hidden'}>Free Shipping</span>
                      <img data-card = {props.product.id} className='w-60 h-50' src={`/static/products/${props.product.sku}_1.jpg`} alt='card-1'></img>
                      <div data-card = {props.product.id} className='text-center my-4'>
                          <h2 className='text-1xl  '>{props.product.title}</h2>
                          <h3 className='text-4xl font-bold text-yellow-400'>-</h3>
                          <h3>$<span className='text-2xl font-bold'>{props.product.price}</span></h3>
                          <h4 className={props.product.installments ? 'text-sm text-gray-400 font-bold' :'invisible'}>or {props.product.installments}<i class="fas text-1xl mx-1 mx-1 fa-times"><span className='text-2xl mx-1'>${(Math.round((props.product.price / props.product.installments) * 100 ) / 100  )  }</span></i></h4>
                      </div>
                      <div data-card = {props.product.id} id='addToCart' className=' group-hover:bg-yellow-400 cursor-pointer bg-black text-white w-full text-center py-3'>
                          <button>Add to Cart</button>
                      </div>
                </div>
            </div>

        )

}



// class Cart extends React.Component{
//     constructor(props){
//         super(props)
        
//        this.state = {

//           toggle:false,

//            cartProducts:[...props.cartProducts]
           
//         }
//     }


//     handleToggle = () => {
//         this.setState((state) => {
//             return{
//                 toggle:!state.toggle
//             }
//         })
//     }
   
//     handleCartProducts = () => {

//         return(
//             <>
//                 <div className='text-2xl text-white text-center'>
//                     <h2>Add some products to the cart</h2>
//                     <span>:)</span>
//                 </div>
//             </>
//         )
//     }

//     handleCheckout = () => {
//         alert(`Your total cart price is : ${this.props.totalPrice}`)
//     }

//     handleRemoveItem = (event) => {
//         console.log(event.target.dataset.card)
//         let productId = event.target.dataset.card;
//         let updatedProducts = this.state.cartProducts.filter((product) => product.id !== productId)

//         this.setState((state) => {
//             return{
//                 cartProducts:updatedProducts
//             }
//         })
//     }


//     render(){ 
//         return(
//             <section className='relative'>
//                 <div onClick={this.handleToggle} className={this.state.toggle ? 'hidden' : 'bg-black text-center  absolute right-0 z-10 py-7 cursor-pointer text-white p-4 relative inline'}>
//                     <i className="fas text-3xl fa-shopping-cart"></i>
//                     <span className='  absolute bottom-2 left-9 text-xs w-5 p-1 h-5 bg-yellow-500 rounded-full'>{this.props.cartProducts.length}</span>
//                 </div>
//                 <div className={this.state.toggle ? 'cart-page h-screen  fixed w-96 relative transform translate-x-5 duration-500 delay-100    bg-gray-800 my-2 absolute  right-5 -top-5':'hidden'}>
//                     <div onClick={this.handleToggle} className='cross-toggle cursor-pointer absolute -left-10 bg-black text-white p-5'>
//                          <i class="fas text-white fa-times"></i>
//                     </div>
//                     <div className='flex flex-col justify-between h-full  ' >
//                         <div className=' flex flex-row items-center w-full justify-center py-10  '>
//                             <div className='relative mx-4'>
//                                  <i className="fas text-white text-3xl fa-shopping-cart"></i>
//                                  <span className='  absolute bottom-0 left-5 text-xs w-5 p-1 h-5 bg-yellow-500 rounded-full'>{this.props.cartProducts.length}</span>
//                             </div>
//                             <h3 className='text-white text-2xl'>Cart</h3>
//                         </div>
//                          <div className={this.state.cartProducts.length > 0 ? 'products-adding mx-2 flex-1 overflow-y-scroll flex flex-col bg-local  ':'products-adding mx-2 flex-1  flex flex-col bg-local  '}>
//                             {
                                
//                                (this.props.length === 0 ? this.handleCartProducts() :
//                                     //   <Products cart={this.state.cartProducts} />
//                                     this.props.cartProducts.map((product) => {
//                                             return(
//                                                 <div className='group  focus:bg-gray-600 group-focus:line-through hover:line-through ' >
//                                                     <hr className='text-white'></hr>
//                                                     <div className='relative py-6'>
//                                                         <div onClick={this.handleRemoveItem} data-card={product.id}  className='toggle-cross group-focus:text-white cursor-pointer  absolute right-4 top-0'>
//                                                             <i data-card={product.id} class="fas text-white fa-times"></i>
//                                                         </div>
//                                                         <div className='flex  flex-row justify-around items-center'>
//                                                             <div className=''>
//                                                                 <img className='w-15 h-20 object-center' src={`/static/products/${product.sku}_2.jpg`} alt='cart-item'></img>
//                                                             </div>
//                                                             <div className=''>
//                                                                 <h2 className='text-white'>{product.title}</h2>
//                                                                 <h3 className='text-gray-400 '>{product.availableSizes[0]} |<span className='mx-1'>{product.style}</span></h3>
//                                                                 <h4 className='text-gray-400 '>Quantity:<span>18</span></h4>
//                                                             </div>
//                                                             <div className='flex flex-col items-center'>
//                                                                 <div className='text-1xl text-yellow-500 '>
//                                                                     <h2>$ {product.price}</h2>
//                                                                 </div>
//                                                                 <div className='flex my-3 flex-row bg-gray-600 justify-around items-center text-white '>
//                                                                     <button className='cursor-pointer text-1xl mx-2'>-</button>
//                                                                     <button className='cursor-pointer text-1xl mx-2'>+</button>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             )
                                            
//                                         })
                                
//                                 )
//                             }
    

//                          </div>
//                          <div className='checkout bg-gray-900 p-5 z-100  shadow-inner shadow-lg flex-end '>
//                             <div className='flex flex-row text-white items-center  justify-between'>
//                                  <h2 className='text-gray-500'>SUBTOTAL</h2>
//                                  <div>
//                                      <h3 className='text-yellow-500 text-right'>$ {(this.props.totalPrice > 0 ? this.props.totalPrice : 0)}</h3>
//                                     <h4 className='text-gray-500 text-sm'>OR UP TO 9 <i class="fas  fa-times"></i><span className='mx-2'>${(Math.round((this.props.totalPrice / 9 ) * 100 ) / 100  ) }</span></h4>
//                                  </div>
//                             </div>
//                             <div className='  my-2 text-center bg-black  text-white shadow-lg  py-2'>
//                                 <button onClick={this.handleCheckout} >CHECKOUT</button>
//                             </div>
//                          </div>
//                     </div>
//                 </div>
//             </section>
//         )
//     }
// }






export default Cards