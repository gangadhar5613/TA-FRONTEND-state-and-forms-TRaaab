import React from 'react'


class Form extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            step:1,
            firstName:'',
            lastName:'',
            dateofbirth:'',
            email:'',
            address:'',
            message:''
        }
    }

    handleInput = (event) => {
         const {name,value} = event.target

         switch (name) {
             case name:
                    this.setState({
                        [name] : value
                    })
                 break;
         
             default:
                 break;
         }
    }

    handleNextSteps = (event) => {
          event.preventDefault()    
            this.setState((previousVal) => {
              
                     return{
                        step:previousVal.step+1
                     } 
            })
        
    }

    handlePreviousStep = (event) => {
               event.preventDefault()
               this.setState((previousVal) => {
                   return{
                       step:previousVal.step -1
                   }
               })
    }


    handleSubmit = (event) => {
        event.preventDefault();
        alert(`You are registeration details are:
              firstName: ${this.state.firstName},
              secondName:${this.state.lastName},
              dateofbirth:${this.state.dateofbirth},
              email:${this.state.email},
              address:${this.state.address},
              message:${this.state.message}
        `)
        this.setState({
            step:1,
            firstName:'',
            lastName:'',
            dateofbirth:'',
            email:'',
            address:'',
            message:''
        })
    }


    render(){
        return(
           <>
              <section className='h-screen'>
                    <section className={this.state.step === 1 ? 'step-1 my-10 mx-20   flex flex-row w-2/3  justify-items-center  shadow-2xl rounded-lg overflow-hidden  ':'hidden'} id='step-1'>
                       <div className='w-1/3'>
                           <img className='h-full w-96 object-cover' src='https://images.unsplash.com/photo-1529651121800-01d45d421ec9?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfGJvOGpRS1RhRTBZfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt='step-1' ></img>
                       </div>
                       <div className='w-2/3 mx-5 h-full my-5 items-center justify-center'>
                           <div className='flex flex-row my-3 justify-start initial'>
                               <div className='flex flex-row items-center mx-4'>
                                   <span className='text-1xl  text-white bg-blue-500 px-4 rounded-md py-1'>1</span>
                                   <h2 className='text-1xl font-bold text-gray-600 mx-1'>SignUp</h2>
                               </div>
                               <div className='flex flex-row items-center mx-4'>
                                   <span className='text-1xl  bg-gray-200 px-3 rounded-md py-1'>2</span>
                                   <h2 className='text-1xl text-gray-600 mx-1'>Message</h2>
                               </div>
                               <div className='flex flex-row items-center mx-4'>
                                   <span className='text-1xl  bg-gray-200 px-3 rounded-md py-1'>3</span>
                                   <h2 className='text-1xl text-gray-600 mx-1'>Checkbox</h2>
                               </div>
                           </div>
                           <hr className='mx-5'></hr>
                           <div className='mx-5 my-5'>
                               <h3 className='text-gray-500 my-2'>Step:1/3</h3>
                               <h2 className='text-3xl font-bold'>Sign Up</h2>
                               <div className='my-7'>
                                   <form>
                                        <div className='flex flex-row  my-3 '>
                                            <div className='flex flex-col '>
                                                <label htmlFor='firstName' id='firstName' >First Name</label>
                                                <input onChange = {this.handleInput} className='border-2 px-1 border-gray-200 py-1 outline-none  focus:outline-none focus:ring focus:border-blue-300 rounded-md w-64' type='text' id='firstName' name='firstName' value={this.state.firstName} placeholder='Enter your first Name' ></input>
                                            </div>
                                            <div className='flex flex-col mx-10'>
                                                <label htmlFor='firstName' id='firstName' >First Second Name</label>
                                                <input onChange = {this.handleInput} className='border-2 px-1 border-gray-200 focus:outline-none focus:ring focus:border-blue-300 py-1 rounded-md w-64' type='text' id='lastName' name='lastName' value={this.state.lastName} placeholder='Enter your first Name' ></input>
                                            </div>
                                        </div>
                                        <div className='flex flex-row my-3 '>
                                            <div className='flex flex-col'>
                                                <label htmlFor='firstName' id='firstName' >Date Of Birth</label>
                                                <input onChange = {this.handleInput} className='border-2 px-1 focus:outline-none focus:ring focus:border-blue-300 border-gray-200 py-1 rounded-md w-64' type='date' id='dateofbirth' name='dateofbirth' value={this.state.dateofbirth} placeholder='Enter your date of birth' ></input>
                                            </div>
                                            <div className='flex flex-col mx-10'>
                                                <label htmlFor='firstName' id='firstName' >Email</label>
                                                <input onChange = {this.handleInput} className='border-2 px-1 focus:outline-none focus:ring focus:border-blue-300 border-gray-200 py-1 rounded-md w-64' type='email' id='email' name='email' value={this.state.email} placeholder='Enter email' ></input>
                                            </div>
                                        </div>
                                        <div className='flex flex-col '>
                                            <label className='font-medium' htmlFor='firstName' id='firstName' >Address</label>
                                            <input onChange = {this.handleInput} className=' px-1 border-2 focus:outline-none focus:ring focus:border-blue-300 w-11/12 border-gray-200 py-1 rounded-md' type='text' id='address' name='address' value={this.state.address} placeholder='Enter address' ></input>
                                        </div>
                                        <hr className='my-10'></hr>
                                        <div className='text-1xl my-5 text-right'>
                                            <button data-step='1' onClick={this.handleNextSteps} className='bg-blue-500  px-7 py-2 rounded-lg text-white' type='submit'>Next Step</button>
                                        </div>
                                   </form>
                               </div>
                           </div>
                       </div>
                    </section>


                    <section className={this.state.step === 2 ? 'step-1 my-10 mx-20   flex flex-row w-2/3  justify-items-center  shadow-2xl rounded-lg overflow-hidden  ':'hidden'} id='step-1'>
                       <div className='w-1/3'>
                           <img className='h-full w-96 object-cover' src='https://images.unsplash.com/photo-1543946207-39bd91e70ca7?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfGJvOGpRS1RhRTBZfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt='step-2' ></img>
                       </div>
                       <div className='w-2/3 mx-5 h-full my-5 items-center justify-center'>
                           <div className='flex flex-row my-3 justify-start initial'>
                               <div className='flex flex-row items-center mx-4'>
                                   <span className='text-1xl   bg-gray-200 px-4 rounded-md py-1'>1</span>
                                   <h2 className='text-1xl  text-gray-600 mx-1'>SignUp</h2>
                               </div>
                               <div className='flex flex-row items-center mx-4'>
                                   <span className='text-1xl text-white bg-blue-500 px-3 rounded-md py-1'>2</span>
                                   <h2 className='text-1xl font-bold text-gray-600 mx-1'>Message</h2>
                               </div>
                               <div className='flex flex-row items-center mx-4'>
                                   <span className='text-1xl  bg-gray-200 px-3 rounded-md py-1'>3</span>
                                   <h2 className='text-1xl text-gray-600 mx-1'>Checkbox</h2>
                               </div>
                           </div>
                           <hr className='mx-5'></hr>
                           <div className='mx-5 my-5'>
                               <h3 className='text-gray-500 my-2'>Step:2/3</h3>
                               <h2 className='text-3xl font-bold'>Message</h2>
                               <div className='my-7'>
                                   <form>
                                        <div className='flex flex-row  my-3 '>
                                            <div className='flex flex-col '>
                                                <label htmlFor='message' id='message' >Message</label>
                                                <textarea onChange = {this.handleInput} className='border-2 px-1 border-gray-200 py-1 outline-none w-96 h-36  focus:outline-none focus:ring focus:border-blue-300 rounded-md w-64' type='text' id='message' name='message' cols='20' rows='5' value={this.state.message} placeholder='Enter message' ></textarea>
                                            </div>
                                        </div>
                                        <hr className='my-10'></hr>
                                        <div className='flex flex-row justify-between'>
                                                <div className='text-1xl my-5 text-right'>
                                                    <button data-step={this.state.step} onClick={this.handlePreviousStep} className='bg-blue-500  px-7 py-2 rounded-lg text-white' type='submit'>Previous Step</button>
                                                </div>
                                                <div className='text-1xl my-5 text-right'>
                                                    <button data-step='1' onClick={this.handleNextSteps} className='bg-blue-500  px-7 py-2 rounded-lg text-white' type='submit'>Next Step</button>
                                                </div>
                                        </div>
                                   </form>
                               </div>
                           </div>
                       </div>
                    </section>


                    <section className={this.state.step === 3 ? 'step-1 my-10 mx-20   flex flex-row w-2/3  justify-items-center  shadow-2xl rounded-lg overflow-hidden  ':'hidden'} id='step-1'>
                       <div className='w-1/3'>
                           <img className='h-full w-96 object-cover' src='https://images.unsplash.com/photo-1578671815317-029d7b69b669?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fGJvOGpRS1RhRTBZfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt='step-3' ></img>
                       </div>
                       <div className='w-2/3 mx-5 h-full my-5 items-center justify-center'>
                           <div className='flex flex-row my-3 justify-start initial'>
                               <div className='flex flex-row items-center mx-4'>
                                   <span className='text-1xl  text-white bg-gray-200 px-4 rounded-md py-1'>1</span>
                                   <h2 className='text-1xl  text-gray-600 mx-1'>SignUp</h2>
                               </div>
                               <div className='flex flex-row items-center mx-4'>
                                   <span className='text-1xl  bg-gray-200 px-3 rounded-md py-1'>2</span>
                                   <h2 className='text-1xl text-gray-600 mx-1'>Message</h2>
                               </div>
                               <div className='flex flex-row items-center mx-4'>
                                   <span className='text-1xl text-white  bg-blue-500 px-3 rounded-md py-1'>3</span>
                                   <h2 className='text-1xl font-bold text-gray-600 mx-1'>Checkbox</h2>
                               </div>
                           </div>
                           <hr className='mx-5'></hr>
                           <div className='mx-5 my-5'>
                               <h3 className='text-gray-500 my-2'>Step:3/3</h3>
                               <h2 className='text-3xl font-bold'>Checkbox</h2>
                               <div className='my-7'>
                                   <form>
                                        <div className='flex flex-row  my-3 '>
                                            <div className='flex flex-row '>
                                                  <div className='hover:bg-pink-500 hover:text-white outline-none focus:bg-pink-500 focus:ring-2 focus:ring-black focus:shadow-outline active:bg-pink-700 bg-gray-300 text-white cursor-pointer  w-40 h-32 text-center justify-center flex items-center'>
                                                       <i class="fas text-4xl text-white group-hover:text-white   fa-hat-cowboy-side"></i>
                                                  </div>
                                                  <div className='bg-gray-300 hover:bg-pink-500 hover:text-white outline-none focus:bg-pink-500 focus:ring-2 focus:ring-gray-500 focus:shadow-outline active:bg-pink-700  text-white  cursor-pointer mx-10 w-40 h-32 text-center justify-center flex items-center'>
                                                  <i class="fas text-4xl text-white fa-hat-cowboy"></i>
                                                  </div>
                                            </div>
                                        </div>
                                        <hr className='my-10'></hr>
                                        <div className='flex flex-row justify-between'>
                                                <div className='text-1xl my-5 text-right'>
                                                    <button data-step={this.state.step} onClick={this.handlePreviousStep} className='bg-blue-500  px-7 py-2 rounded-lg text-white' type='submit'>Previous Step</button>
                                                </div>
                                                <div className='text-1xl my-5 text-right'>
                                                    <button onClick={this.handleSubmit} className='bg-blue-500  px-7 py-2 rounded-lg text-white' type='submit'>Submit</button>

                                                </div>
                                        </div>
                                   </form>
                               </div>
                           </div>
                       </div>
                    </section>
              </section>
           </>
        )
    }
}




export default Form;