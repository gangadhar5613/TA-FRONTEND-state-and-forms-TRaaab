
import React from 'react';



class Modal extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            toggle:false
        }
    }

    handleButton = () => {
        this.setState((previous) => {
            return {
                toggle:true
            }
        })
    }
   
    handleCross = () => {
           this.setState((previous) => {
               return {
                   toggle:false
               }
           })
    }

    render(){
        return(
           <section className='flex-1 flex flex-col items-center justify-center   h-screen'>
               <button onClick ={this.handleButton} className={this.state.toggle ? 'hidden' : 'text-2xl bg-black text-white px-4 sticky py-2 hover:bg-red-400 hover:text-white'}>Modal</button>
               <section>
                   <div className={this.state.toggle ? 'h-screen width-screen flex   items-center  z-30 ' : 'hidden'}>
                       <div className='bg-white w-96 text-center flex flex-row  justify-between  bg-gray-500'>
                        <h2 className='text-5xl'>Modal</h2>
                        <i id='toggle' onClick={this.handleCross} class="fas text-3xl fa-times cursor-pointer p-2 hover:bg-red-500 hover:text-white"></i>
                       </div>
                   </div>
               </section>
           </section>
        )
    }
}

export default Modal;