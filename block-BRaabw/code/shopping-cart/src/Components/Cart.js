import React from 'react';

class Cart extends React.Component{
    constructor(props){
        super(props)
        
       this.state = {

          toggle:false,

           cartProducts:[...props.cartProducts]
           
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

    handleCheckout = () => {
        alert(`Your total cart price is : ${this.props.totalPrice}`)
    }

    handleRemoveItem = (event) => {
        console.log(event.target.dataset.card)
        let productId = event.target.dataset.card;
        let updatedProducts = this.state.cartProducts.filter((product) => product.id !== productId)

        this.setState((state) => {
            return{
                cartProducts:updatedProducts
            }
        })
    }


    render(){ 
        return(
            <section className='relative'>
                <div onClick={this.handleToggle} className={this.state.toggle ? 'hidden' : 'bg-black text-center  absolute right-0 z-10 py-7 cursor-pointer text-white p-4 relative inline'}>
                    <i className="fas text-3xl fa-shopping-cart"></i>
                    <span className='  absolute bottom-2 left-9 text-xs w-5 p-1 h-5 bg-yellow-500 rounded-full'>{this.props.cartProducts.length}</span>
                </div>
                <div className={this.state.toggle ? 'cart-page h-screen  fixed w-96 relative transform translate-x-5 duration-500 delay-100    bg-gray-800 my-2 absolute  right-5 -top-5':'hidden'}>
                    <div onClick={this.handleToggle} className='cross-toggle cursor-pointer absolute -left-10 bg-black text-white p-5'>
                         <i class="fas text-white fa-times"></i>
                    </div>
                    <div className='flex flex-col justify-between h-full  ' >
                        <div className=' flex flex-row items-center w-full justify-center py-10  '>
                            <div className='relative mx-4'>
                                 <i className="fas text-white text-3xl fa-shopping-cart"></i>
                                 <span className='  absolute bottom-0 left-5 text-xs w-5 p-1 h-5 bg-yellow-500 rounded-full'>{this.props.cartProducts.length}</span>
                            </div>
                            <h3 className='text-white text-2xl'>Cart</h3>
                        </div>
                         <div className={this.state.cartProducts.length > 0 ? 'products-adding mx-2 flex-1 overflow-y-scroll flex flex-col bg-local  ':'products-adding mx-2 flex-1  flex flex-col bg-local  '}>
                            {
                                
                               (this.props.length === 0 ? this.handleCartProducts() :
                                    //   <Products cart={this.state.cartProducts} />
                                    this.props.cartProducts.map((product) => {
                                            return(
                                                <div className='group  focus:bg-gray-600 group-focus:line-through hover:line-through ' >
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
                                                                <h4 className='text-gray-400 '>Quantity:<span>18</span></h4>
                                                            </div>
                                                            <div className='flex flex-col items-center'>
                                                                <div className='text-1xl text-yellow-500 '>
                                                                    <h2>$ {product.price}</h2>
                                                                </div>
                                                                <div className='flex my-3 flex-row bg-gray-600 justify-around items-center text-white '>
                                                                    <button className='cursor-pointer text-1xl mx-2'>-</button>
                                                                    <button className='cursor-pointer text-1xl mx-2'>+</button>
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
                                     <h3 className='text-yellow-500 text-right'>$ {(this.props.totalPrice > 0 ? this.props.totalPrice : 0)}</h3>
                                    <h4 className='text-gray-500 text-sm'>OR UP TO 9 <i class="fas  fa-times"></i><span className='mx-2'>${(Math.round((this.props.totalPrice / 9 ) * 100 ) / 100  ) }</span></h4>
                                 </div>
                            </div>
                            <div className='  my-2 text-center bg-black  text-white shadow-lg  py-2'>
                                <button onClick={this.handleCheckout} >CHECKOUT</button>
                            </div>
                         </div>
                    </div>
                </div>
            </section>
        )
    }
}




// class Products extends React.Component{
//     constructor(props){
//         super(props)
//         this.state ={
//             cartPrices :[]
//         }
//     }

    

//    render(){
//     return(
//         this.props.cart.map((product) => {
//             return(
//                   <div className='group  focus:bg-gray-600 group-focus:line-through hover:line-through ' >
//                       <hr className='text-white'></hr>
//                       <div className='relative py-6'>
//                           <div className='toggle-cross group-focus:text-white cursor-pointer  absolute right-4 top-0'>
//                               <i class="fas text-white fa-times"></i>
//                           </div>
//                           <div className='flex  flex-row justify-around items-center'>
//                               <div className=''>
//                                   <img className='w-15 h-20 object-center' src={`/static/products/${product.sku}_2.jpg`} alt='cart-item'></img>
//                               </div>
//                               <div className=''>
//                                   <h2 className='text-white'>{product.title}</h2>
//                                   <h3 className='text-gray-400 '>{product.availableSizes[0]} |<span className='mx-1'>{product.style}</span></h3>
//                                   <h4 className='text-gray-400 '>Quantity:<span>18</span></h4>
//                               </div>
//                               <div className='flex flex-col items-center'>
//                                   <div className='text-1xl text-yellow-500 '>
//                                       <h2>$ {product.price}</h2>
//                                   </div>
//                                   <div className='flex my-3 flex-row bg-gray-600 justify-around items-center text-white '>
//                                       <button className='cursor-pointer text-1xl mx-2'>-</button>
//                                       <button className='cursor-pointer text-1xl mx-2'>+</button>
//                                   </div>
//                               </div>
//                           </div>
//                       </div>
//                   </div>
//             )
               
//         })
//       )
//    }
// }




export default Cart