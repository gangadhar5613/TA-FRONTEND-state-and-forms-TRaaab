import React from 'react';
import Boxes from './FontBoxes';

class Input extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            text:'',
            fontSize:'0'
        }
    }

   onTextChange = (event) => {
       this.setState({
           text:event.target.value
       })
   }

   onFontChange = (event) => {
       this.setState({
           fontSize:event.target.value
       })
   }

    render(){
        return(
            <>

            <section className='flex flex-row items-center h-10  my-10 justify-between border-2 border-gray-100 rounded-2xl px-2 mx-10'>
               <div className='flex flex-row items-center justify-between'>
                   <h3 className='font-bold mx-2'>Type something here</h3>
                   <div>
                    <input onChange={this.onTextChange} className='w-96  flex-1 outline-none h-8 py-2 px-2 text-black border-4 border-gray-300 rounded-2xl '  type='text' id='text' name='text' ></input>
                </div>
               </div>
               <div className='flex flex-row items-center justify-center'>
                   <h3 className='font-bold mx-4'>Select The Font Size :</h3>
                   <span className='font-bold mx-2'>{this.state.fontSize}xl</span>
                   <div>
                    <input value={this.state.fontSize} onChange={this.onFontChange} className='w-96 flex-1' type='range' id='font-size' name='font-size'min='2' max='9'   ></input>
                </div>
               </div>
            </section>
            <section>
                 <Boxes text={this.state.text} fontSize={this.state.fontSize} />
            </section>

            </>
        )
    }
}


export default Input;