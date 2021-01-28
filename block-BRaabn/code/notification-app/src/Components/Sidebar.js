
import React from 'react';

class Sidebar extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            toggle:true
        }
    }

    handleHamburger = () => {
          this.setState((previous) => {
              return {
                  toggle:!previous
              }
          })
    }
    handleCross = () => {
        this.setState((previous) => {
            return {
                toggle:true
            }
        })
    }

    render(){
        return(
            <aside className='mx-5 my-5 flex-initial  '>
                 <label onClick={this.handleHamburger} htmlFor='toggle' id='toggle' ><i class={this.state.toggle ? "fas animate-pulse text-red-700 z-0  fa-bars text-4xl cursor-pointer absolute " : 'hidden'}></i></label> 
                 <section id='toggle' className={ this.state.toggle  ?  ' z-10 transform -translate-x-60 w-full h-96 duration-500 relative bg-gray-200 shadow-2xl px-2 ' :' z-10 transform translate-x-0.5 w-96 h-96 duration-500 bg-gray-200 shadow-2xl px-10 py-10 relative left-0 top-0  '  }>
                     <div className='flex flex-row items-center justify-between '>
                         <h2 className='text-2xl text-blue-600'>Coding Addict</h2>
                         <i id='toggle' onClick={this.handleCross} class="fas text-3xl fa-times cursor-pointer p-2 hover:bg-red-500 hover:text-white"></i>
                     </div>
                     <nav>
                         <ul className='flex flex-col justify-between  transform -translate-20 translate-y-4'>
                            <i class="fas text-2xl  fa-home my-2"><a className='mx-2' href='/'>Home</a></i>
                            <i class="fas text-2xl fa-user-friends my-2"><a className='mx-2' href='/'>Team</a></i>
                            <i class="far text-2xl fa-folder-open my-2"><a className='mx-2' href='/'>Projects</a></i>
                            <i class="far text-2xl fa-folder-open my-2"><a className='mx-2' href='/'>Documents</a></i>
                         </ul>
                     </nav>
                 </section>
            </aside>
        )
    }
}
export default Sidebar;