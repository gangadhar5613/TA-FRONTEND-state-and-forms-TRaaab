import React from 'react';



class Validation extends React.Component{
   constructor(props){
       super()
       this.state ={
           email:'',
           password:'',
           username:'',
           verifyPassword:'',
           errors:{
               email:'',
               password:'',
               username:'',
               verifyPassword:''
           }
       }
   }

    validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
  }

   handleChange = ({target}) => {
      
    const {name,value} = target;
    const errors = this.state.errors

    switch (name) {
        case 'email':
            errors.email =  this.validateEmail(value) ? "" : 'Email is not valid'
            break;
        case 'username':
                errors.username =  value.length >= 3 ? "" : 'Username must be atleast 3 characters'
                break;
        case 'password':
                errors.password =  value.length >= 6 ? "" : 'Password must be atleast 6 characters'
                break;
        case 'verify-password':
                errors.password =  value.length >= 6 ? "" : 'Password must be atleast 6 characters'
                break;
        default:
            break;
    }

    this.setState({errors,[name] : value})

   }


    render(){
        return(
            <section className='flex-1 my-5  '>
               <div className='flex flex-col items-center shadow-2xl mx-10 py-2'>
                   <div>
                       <h2 className='text-3xl font-bold my-2'>Register With Us</h2>
                   </div>
                   <div className='flex flex-col my-2'>
                       <label className='text-2xl' htmlFor='username' id='username' >Username</label>
                       <input onChange={this.handleChange} value={this.state.username} className='text-2xl outline-none border-2 border-gray-300' id='username' type='text' name='username' placeholder='Enter Username'></input>
                       <span className='text-red-300'>{this.state.errors.username ? this.state.errors.username : ''}</span>
                   </div>
                   <div className='flex flex-col my-2'>
                       <label className='text-2xl' htmlFor='email' id='email' >Email</label>
                       <input onChange={this.handleChange} className='text-2xl outline-none border-2 border-gray-300' value={this.state.email} id='email' type='email' name='email' placeholder='Enter Username'></input>
                       <span className='text-red-300'>{this.state.errors.email ? this.state.errors.email : ''}</span>
                   </div>
                   <div className='flex flex-col my-2'>
                       <label className='text-2xl' htmlFor='password' id='password' >Password</label>
                       <input onChange={this.handleChange} className='text-2xl outline-none border-2 border-gray-300' value={this.state.password} id='password' type='password' name='password' placeholder='Enter Username'></input>
                       <span className='text-red-300'>{this.state.errors.password ? this.state.errors.password : ''}</span>
                   </div>
                   <div className='flex flex-col my-2'>
                       <label className='text-2xl' htmlFor='verify-password' id='verify-password' >VerifyPassword</label>
                       <input onChange={this.handleChange} className='text-2xl outline-none border-2 border-gray-300' value={this.state.verifyPassword} id='verify-password' type='text' name='verify-password' placeholder='Enter Username'></input>
                       <span className='text-red-300'>{this.state.verifyPassword === this.state.password ?   '' : this.state.errors.verifyPassword}</span>
                   </div>
                   <div className='my-2'>
                       <button className='text-2xl bg-blue-500 px-10 py-2' type='submit' value='Submit'>Submit</button>
                   </div>
               </div>
            </section>
        )
    }
   
}


export default Validation;