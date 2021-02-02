import React from 'react';
import data from '../data.json'
import Cards from './Cards';
// import Cart from './Cart';
const products = data.products


class Main extends React.Component{
    constructor(props){
        super()
        this.state = {
            allProducts:products,
            filtereProducts:[],
            XS:false,
            S:false,
            M:false,
            ML:false,
            L:false,
            XL:false,
            XXL:false,

        }
    }

    handleDataFilter = (size) => {
    
        if(!this.state[size]){
            let filtered = products.filter((product) => product.availableSizes.includes(size))
            this.setState((state) => {
                let multipleFilters = state.filtereProducts.concat([...filtered])
                            const finalMultipleFilteredArray = multipleFilters.reduce((acc, current) => {
                                const product = acc.find(item => item.id === current.id);
                                if (!product) {
                                return acc.concat([current]);
                                } else {
                                return acc;
                                }
                            }, []);
                 return{
                     filtereProducts:finalMultipleFilteredArray,
                     [size]:!this.state[size]
                   }
            })
        }else{
            console.log(this.state.filtereProducts)
            let filtered = products.filter((product) => ! (product.availableSizes.includes(size)))
            this.setState((state) => {
                let multipleFilters = state.filtereProducts.concat([...filtered])
                            const finalMultipleFilteredArray = multipleFilters.reduce((acc, current) => {
                                const product = acc.find(item => item.id === current.id);
                                if (!product) {
                                return acc.concat([current]);
                                } else {
                                return acc;
                                }
                            }, []);
                 return{
                     filtereProducts:finalMultipleFilteredArray,
                     [size]:!this.state[size]
                   }
            })
            console.log(filtered)
        }



           
    }

    render(){
        function dataToPass(state){
            // let displayProduct=[]
                    if((state.filtereProducts.length === 0) && (  ! state['XS'] && ! state['S']) && ! state['M'] && ! state['ML'] && ! state['L'] && ! state['XL'] && ! state['XXL'] ){
                        // displayProduct = this.state.allProducts
                        return console.log(true)
                    }else{
                        // displayProduct = this.state.filtereProducts
                        return console.log(false)
                    }
       
        }
    dataToPass(this.state);

        let displayProducts=[]
        if((this.state.filtereProducts.length === 0) && (  ! this.state['XS'] && ! this.state['S']) && ! this.state['M'] && ! this.state['ML'] && ! this.state['L'] && ! this.state['XL'] && ! this.state['XXL'] ){
            displayProducts = this.state.allProducts
        }else{
            displayProducts = this.state.filtereProducts
        }
       
        return(
            <>
                <main className='h-screen container mx-auto '>
                    <h2 className='text-3xl text-center font-bold py-4 '>Shopping Cart Using ReactJS</h2>
                    <article className='flex flex-row items-start my-4 '>
                        <section  className='filter-btns mx-10 my-2 '>
                                <div className='  py-10 px-4'>
                                    <h3 className='text-2xl text-gray-700 font-bold my-4'>Sizes:</h3>
                                    <div className='grid grid-cols-4 gap-4 items-center justify-center ' >
                                          <span onClick={() => this.handleDataFilter('XS')} className={!this.state['XS'] ?'w-8 h-8 text-center hover:bg-black active:bg-black   hover:text-white focus:ring-2 focus:ring-black  cursor-pointer text-xs items-center flex justify-center rounded-full p-4 bg-gray-200':'w-8 h-8 text-center text-white hover:bg-black active:bg-black   hover:text-white focus:ring-2 focus:ring-black  cursor-pointer text-xs items-center flex justify-center rounded-full p-4 bg-black' }>XS</span>
                                          <span onClick={() => this.handleDataFilter('S')} className={!this.state['S'] ?'w-8 h-8 text-center border-1 hover:border-black active:bg-black   hover:text-white focus:ring-2 focus:ring-black  cursor-pointer text-xs items-center flex justify-center rounded-full p-4 bg-gray-200':'w-8 h-8 text-center text-white hover:bg-black active:bg-black   hover:text-white focus:ring-2 focus:ring-black  cursor-pointer text-xs items-center flex justify-center rounded-full p-4 bg-black' }>S</span>
                                         
                                          <span onClick={() => this.handleDataFilter('M')} className={!this.state['M'] ?'w-8 h-8 text-center hover:bg-black active:bg-black   hover:text-white focus:ring-2 focus:ring-black  cursor-pointer text-xs items-center flex justify-center rounded-full p-4 bg-gray-200':'w-8 h-8 text-center text-white hover:bg-black active:bg-black   hover:text-white focus:ring-2 focus:ring-black  cursor-pointer text-xs items-center flex justify-center rounded-full p-4 bg-black' }>M</span>
                                         
                                          <span onClick={() => this.handleDataFilter('ML')} className={!this.state['ML'] ?'w-8 h-8 text-center hover:bg-black active:bg-black   hover:text-white focus:ring-2 focus:ring-black  cursor-pointer text-xs items-center flex justify-center rounded-full p-4 bg-gray-200':'w-8 h-8 text-center text-white hover:bg-black active:bg-black   hover:text-white focus:ring-2 focus:ring-black  cursor-pointer text-xs items-center flex justify-center rounded-full p-4 bg-black' }>ML</span>
                                         
                                          <span onClick={() => this.handleDataFilter('L')} className={!this.state['L'] ?'w-8 h-8 text-center hover:bg-black active:bg-black   hover:text-white focus:ring-2 focus:ring-black  cursor-pointer text-xs items-center flex justify-center rounded-full p-4 bg-gray-200':'w-8 h-8 text-center text-white hover:bg-black active:bg-black   hover:text-white focus:ring-2 focus:ring-black  cursor-pointer text-xs items-center flex justify-center rounded-full p-4 bg-black' }>L</span>
                                          
                                          <span onClick={() => this.handleDataFilter('XL')} className={!this.state['XL'] ?'w-8 h-8 text-center hover:bg-black active:bg-black   hover:text-white focus:ring-2 focus:ring-black  cursor-pointer text-xs items-center flex justify-center rounded-full p-4 bg-gray-200':'w-8 h-8 text-center text-white hover:bg-black active:bg-black   hover:text-white focus:ring-2 focus:ring-black  cursor-pointer text-xs items-center flex justify-center rounded-full p-4 bg-black' }>XL</span>
                                         
                                          <span onClick={() => this.handleDataFilter('XXL')} className={!this.state['XXL'] ?'w-8 h-8 text-center hover:bg-black active:bg-black   hover:text-white focus:ring-2 focus:ring-black  cursor-pointer text-xs items-center flex justify-center rounded-full p-4 bg-gray-200':'w-8 h-8 text-center text-white hover:bg-black active:bg-black   hover:text-white focus:ring-2 focus:ring-black  cursor-pointer text-xs items-center flex justify-center rounded-full p-4 bg-black' }>XXL</span>
                                    </div>
                                </div>
                        </section>
                        <Cards products={displayProducts} />
                    </article>
                </main>
            </>
        )
    }
}


export default Main;