
import React from 'react'

class SideBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            sideBarHide :true
        }
    }

    handleDisplay = () => {
           this.setState((previousState) => {
               return {
                   sideBarHide: !previousState
               }
           })
    }
    diplaySideBar = () => {
        this.setState({
            sideBarHide:true
        })
 }


    render(){
        return (
            <>
              <section className='flex flex-col h-screen text-center'>
                      <aside className={this.state.sideBarHide ? 'bg-gray-400 shadow-2xl flex flex-col h-screen justify-between w-96' : 'hidden'}>
                          <div>
                              <ul>
                                  <li className='text-3xl my-2'>Home</li>
                                  <li className='text-2xl my-2'>Contact</li>
                                  <li className='text-2xl my-2'>About</li>
                              </ul>
                          </div>
                          <div>
                              <button onClick={this.handleDisplay} className={this.state.sideBarHide ? 'text-2xl bg-black text-white my-2 p-2' : 'text-2xl bg-black text-white my-2 p-2 hidden'}>Hide</button>
                          </div>
                      </aside>
                      <footer className='bg-black text-white'>
                          <button onClick={this.diplaySideBar} className={this.state.sideBarHide ? 'text-2xl hidden' : 'text-2xl'}>Show</button>
                      </footer>
              </section>
            </>
      )
    }
    
}

export default SideBar;