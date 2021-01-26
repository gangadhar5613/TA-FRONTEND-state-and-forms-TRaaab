import React from 'react'


class App extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            counter:0,
            selection:1

        }
        
    }

    

     increment = () => {
         this.setState({
             counter: this.state.counter + this.state.selection
         })
     }
    decrement = () => {
        this.setState({
            counter:this.state.counter - this.state.selection
        })
    }
    reset = () => {
        this.setState({
            counter:0
        })
    }
    selectStep = (num) => {
        this.setState({
            selection:num
        })
       
       
   }

    render(){
        return(
            <section className='counter-application flex flex-col items-center'>
                <h2 className='result'>{this.state.counter}</h2>
                <h3>Steps</h3>
                <div id='select' className='steps my-5' >
                     <span onClick={() => this.selectStep(5)}  className='text-2xl text-center bg-purple-400 p-2 mx-5 cursor-pointer'>5</span>
                     <span onClick={() => this.selectStep(10)}  className='text-2xl text-center bg-purple-400 p-2 mx-5 cursor-pointer '>10</span>
                     <span onClick={() => this.selectStep(15)}  className='text-2xl text-center bg-purple-400 p-2 mx-5 cursor-pointer'>15</span>
                </div>
                <div className='buttons'>
                     <button onClick={this.increment} className='text-2xl bg-green-500 text-white mx-2'>Increment</button>
                     <button onClick={this.decrement} className='text-2xl bg-green-500 text-white mx-2'>Decrement</button>
                     <button onClick={this.reset} className='text-2xl bg-green-500 text-white mx-2'>Reset</button>
                </div>
            </section>
        )
    }
}



export class AppNew extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            counter:0,
            selection:1,
            maxValue:Infinity

        }
        
    }

    
    selectStep = (num) => {
        this.setState({
            selection:num
        })
       
       
   }

   selectMax = (num) => {
        this.setState({
            maxValue:num
        })

   }


    increment = () => {
         this.setState({
             counter: this.state.counter < this.state.maxValue ? this.state.counter + this.state.selection : this.state.maxValue
         })
     }
    decrement = () => {
        this.setState({
            counter:this.state.counter - this.state.selection
        })
    }
    reset = () => {
        this.setState({
            counter:0
        })
    }
   

    render(){
        return(
            <section className='counter-application flex flex-col items-center my-10'>
                <h2 className='result text-3xl font-bold'>{this.state.counter}</h2>
                <h3 className=''>Steps</h3>
                <div id='select' className='steps my-2' >
                    <div className='my-5'>
                        <span onClick={() => this.selectStep(5)}  className='text-2xl text-center active:bg-purple-700 bg-purple-400 p-2 mx-5 cursor-pointer'>5</span>
                        <span onClick={() => this.selectStep(10)}  className='text-2xl text-center active:bg-purple-700 bg-purple-400 p-2 mx-5 cursor-pointer '>10</span>
                        <span onClick={() => this.selectStep(15)}  className='text-2xl text-center active:bg-purple-700 bg-purple-400 p-2 mx-5 cursor-pointer'>15</span>
                    </div>
                    <h3 className='text-center'>Max Value</h3>
                    <div className='my-5'>
                        <span onClick={() => this.selectMax(15)}  className='text-2xl text-center bg-purple-400 p-2 mx-5 cursor-pointer'>15</span>
                        <span onClick={() => this.selectMax(100)}  className='text-2xl text-center bg-purple-400 p-2 mx-5 cursor-pointer '>100</span>
                        <span onClick={() => this.selectMax(200)}  className='text-2xl text-center bg-purple-400 p-2 mx-5 cursor-pointer'>200</span>
                    </div>
                </div>
                <div className='buttons'>
                     <button onClick={this.increment} className='text-2xl bg-green-500 text-white mx-2 p-2'>Increment</button>
                     <button onClick={this.decrement} className='text-2xl bg-green-500 text-white mx-2 p-2'>Decrement</button>
                     <button onClick={this.reset} className='text-2xl bg-green-500 text-white mx-2 p-2'>Reset</button>
                </div>
            </section>
        )
    }
}



export default App;
