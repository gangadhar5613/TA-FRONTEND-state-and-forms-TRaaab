import React from 'react';

const data =['SHOW DEFAULT','SHOW SUCCESS','SHOW ERROR','SHOW WARNING','SHOW INFO'];
const clickData = ['HIDE DEFAULT','HIDE SUCCESS','SHOW ERROR','HIDE WARNING','HIDE INFO']

class Buttons extends React.Component{
    constructor(props){
        super()
        this.state = {
            btn1:'SHOW DEFAULT',
            btn2:'SHOW SUCCESS',
            btn3:'SHOW ERROR',
            btn4:'SHOW WARNING',
            btn5:'SHOW INFO',
            notification:'hidden'
        }
    }

    handleBtn = (event,btn,altText,defaultTxt) => {
        const clicked = +event.target.dataset.clicked;
        if(clicked % 2 == 0){
            this.setState({
                 [btn]:altText
            })
        }else{
            this.setState({
                [btn]:defaultTxt
            })
        }
       
        event.target.setAttribute("data-clicked", clicked+1)
         this.setState({
             notification:'hidden'
         })
    }


    handleNotification = (btn,txt,defaultTxt) => {
        console.log(btn,defaultTxt)
              this.setState({
                  [btn]:defaultTxt
              })
    }

    render(){
        return(
        <>
           <section>
               <h1 className='text-3xl text-center font-bold my-5 text-purple-700'>Notification App Using ReactJS</h1>
           </section>
            <section className=' flex flex-row items-center justify-center my-20'> 
                    <button onClick={(event) =>  this.handleBtn(event,'btn1','HIDE DEFAULT','SHOW DEFAULT')} className='text-2xl hover:bg-pink-500 hover:text-white outline-none focus:bg-pink-500 focus:ring-2 focus:ring-black focus:shadow-outline active:bg-pink-700 bg-black text-white px-4 py-2 mx-2' data-clicked="0">{this.state.btn1}</button>
                    <button onClick={(event) =>  this.handleBtn(event,'btn2','HIDE SUCCESS','SHOW SUCCESS')} className='text-2xl hover:bg-pink-500 hover:text-white outline-none focus:bg-pink-500 focus:ring-2 focus:ring-black focus:shadow-outline active:bg-pink-700 bg-black text-white px-4 py-2 mx-2' data-clicked="0">{this.state.btn2}</button>
                    <button onClick={(event) =>  this.handleBtn(event,'btn3','HIDE ERROR','SHOW ERROR')} className='text-2xl hover:bg-pink-500 hover:text-white outline-none focus:bg-pink-500 focus:ring-2 focus:ring-black focus:shadow-outline active:bg-pink-700 bg-black text-white px-4 py-2 mx-2' data-clicked="0">{this.state.btn3}</button>
                    <button onClick={(event) =>  this.handleBtn(event,'btn4','HIDE WARNING','SHOW WARNING')} className='text-2xl hover:bg-pink-500 hover:text-white outline-none focus:bg-pink-500 focus:ring-2 focus:ring-black focus:shadow-outline active:bg-pink-700 bg-black text-white px-4 py-2 mx-2' data-clicked="0">{this.state.btn4}</button>
                    <button onClick={(event) =>  this.handleBtn(event,'btn5','HIDE INFO','SHOW INFO')} className='text-2xl hover:bg-pink-500 hover:text-white outline-none focus:bg-pink-500 focus:ring-2 focus:ring-black focus:shadow-outline active:bg-pink-700 bg-black text-white px-4 py-2 mx-2' data-clicked="0">{this.state.btn5}</button>
            </section>
            <section >
                <div  className={this.state.btn2 === 'SHOW SUCCESS' ? this.state.notification : 'flex flex-row items-center justify-between absolute right-10 shadow-xl my-10 bg-green-400 p-1 text-white bottom-20' }>
                    <i class="fas fa-check-circle mx-1"></i>
                    <h3 className='mx-1'>Success Notification</h3>
                    <i onClick={() => this.handleNotification('btn2','HIDE SUCCESS','SHOW SUCCESS')} class="fas cursor-pointer fa-times mx-1"></i>
                </div>
                <div  className={this.state.btn1 === 'SHOW DEFAULT' ? this.state.notification : 'flex flex-row items-center justify-between absolute right-10 shadow-xl  my-10  p-1  bottom-5' }>
                    <h3 className='mx-1'>Default Notification</h3>
                    <i onClick={() => this.handleNotification('btn1','HIDE DEFAULT','SHOW DEFAULT')} class="fas fa-times cursor-pointer mx-1"></i>
                </div>
                <div  className={this.state.btn3 === 'SHOW ERROR' ? this.state.notification : 'flex flex-row items-center justify-between absolute shadow-xl right-10 my-10 bg-red-400 p-1 text-white bottom-40' }>
                    <i class="fas fa-exclamation"></i>
                    <h3 className='mx-1'>Error Notification</h3>
                    <i onClick={() => this.handleNotification('btn3','HIDE ERROR','SHOW ERROR')} class="fas fa-times  cursor-pointer mx-1"></i>
                </div>
                <div  className={this.state.btn4 === 'SHOW WARNING' ? this.state.notification : 'flex flex-row items-center justify-between absolute shadow-xl right-10 my-10 bg-yellow-500 p-1 text-white bottom-60' }>
                   <i class="fas fa-exclamation"></i>
                    <h3 className='mx-1'>Warning Notification</h3>
                    <i onClick={() => this.handleNotification('btn4','HIDE WARNING','SHOW WARNING')} class="fas fa-times  cursor-pointer mx-1"></i>
                </div>
                <div  className={this.state.btn5 === 'SHOW INFO' ? this.state.notification : 'flex flex-row items-center justify-between absolute right-10 shadow-xl my-10 bg-blue-500 p-1 text-white bottom-80' }>
                  <i class="fas fa-info-circle"></i>
                    <h3 className='mx-1'>Info Notification</h3>
                    <i onClick={() => this.handleNotification('btn5','HIDE INFO','SHOW INFO')} class="fas fa-times  cursor-pointer mx-1"></i>
                </div>
            </section>
        </>  
        )
    }
}




export default Buttons