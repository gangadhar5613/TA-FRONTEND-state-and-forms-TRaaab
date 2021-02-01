import Main from './Main';

function App(){
    return(
        <Main />
    )
}


export default App;












<div >
        <hr className='text-white'></hr>
        <div className='relative py-6'>
            <div className='toggle-cross absolute right-4 top-0'>
                <i class="fas text-white fa-times"></i>
            </div>
            <div className='flex  flex-row justify-around items-center'>
                <div className=''>
                    <img className='w-15 h-20 object-center' src='/static/products/12064273040195392_2.jpg' alt='cart-item'></img>
                </div>
                <div className=''>
                    <h2 className='text-white'>Sphynx Tie Dye Wine T-Shirt</h2>
                    <h3 className='text-gray-400'>X|<span>Front tie dye print</span></h3>
                    <h4 className='text-gray-400'>Quantity:<span>18</span></h4>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='text-1xl text-yellow-500 '>
                        <h2>$ 90</h2>
                    </div>
                    <div className='flex my-3 flex-row bg-gray-600 justify-around items-center text-white '>
                        <button className='cursor-pointer text-1xl mx-2'>-</button>
                        <button className='cursor-pointer text-1xl mx-2'>+</button>
                    </div>
                </div>
            </div>
        </div>
</div> 