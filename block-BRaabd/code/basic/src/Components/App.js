
import React from 'react';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            imageURL : ''
        }
    }

    changeImage = (str) => {
        this.setState({
            imageURL:str
        })
    }

    render(){
        return (
            <>
               <section className='flex flex-col items-center text-center h-screen my-10'>
                        <section className='buttons   flex flex-row'>
                            <button className='bg-green-500 text-white p-2 active:bg-gray-700 mx-2 cursor-pointer'  onClick={() => this.changeImage('/assets/basketball.jpg')} >Baseket Ball</button>
                            <button className='bg-green-500 text-white p-2 active:bg-green-700 mx-2 cursor-pointer' onClick={() => this.changeImage('/assets/pubg.jpeg')} >PubG</button>
                            <button className='bg-green-500 text-white p-2 active:bg-green-700 mx-2 cursor-pointer' onClick={() => this.changeImage('/assets/tiger.jpg')} >Tiger</button>
                            <button className='bg-green-500 text-white p-2 active:bg-green-700 mx-2 cursor-pointer' onClick={() => this.changeImage('/assets/phone.jpg')} >Phone</button>
                            <button className='bg-green-500 text-white p-2 active:bg-green-700 mx-2 cursor-pointer' onClick={() => this.changeImage('/assets/laptop.jpg')} >Laptop</button>
                            <button className='bg-green-500 text-white p-2 active:bg-green-700 mx-2 cursor-pointer' onClick={() => this.changeImage('/assets/cricket.jpeg')} >Cricket</button>
                        </section>
                        <section className='my-10 w-1/2  text-center'>
                            <img className='' src={this.state.imageURL} alt='button'></img>
                        </section>
               </section>

            </>
        )
    }
}



export default App;



