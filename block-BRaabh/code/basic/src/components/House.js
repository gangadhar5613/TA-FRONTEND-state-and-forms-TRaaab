import React from 'react';
import Match from './Match';
import data from '../data.json';

class House extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            houseName : '',
            personName:'',
            matchResult:'Please select Person & House'
        }
    }

   handleHouse = (name) => {
       this.setState({
           houseName:name
       })
   }
   handlePerson = (name) => {
        this.setState({
            personName:name
        })
    }

   handleMatch = (val1,val2) => {
     let value =  data.filter((house) => {
       return house.people.find((obj) => obj.name === val2)
     },'')
     const match = {...value[0]}
    if(val1 === match){
        this.setState({
            matchResult:"Its a match 😎"
        })
        return "Its a match 😎"
    }
     
     
     
   }

    render(){
        return(
             <>
              <div className='w-1/2'>
                    <section className='my-5 '>
                        {
                        this.props.people.map((name) => {
                            return  <span key={name} onClick={() => this.handleHouse(name)} className='bg-black text-white text-2xl p-2 mx-2 hover:bg-green-600 cursor-pointer'>{name}</span>
                        })
                        }
                    </section>
                        <section className='my-15 grid grid-cols-6 justify-items-center'>
                        {
                            this.props.persons.map((name) => {
                                return <span key={name} onClick={() => this.handlePerson (name)}  className='bg-red-500 text-white cursor-pointer hover:bg-green-600 text-1xl p-2 mx-2 my-10'>{name}</span>
                            })
                        }
                    </section>
                </div>
                    <section className='mx-20 bg-red-200 w-full'>
                        <Match match={this.handleMatch(this.state.houseName,this.state.personName)}  />
                    </section>


             </>
        )
    }
}


//  export class Person extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             personName : ''
//         }
        
//     }

//     handleMatch = (name) => {
//             this.setState({
//                 personName:name
//             })
//     }
//     render(){
//         return(
//             <section className='my-15 grid grid-cols-10 justify-items-center'>
//                 {
//                     this.props.persons.map((name) => {
//                         return <span key={name} onClick={() => this.handleMatch(name)}  className='bg-red-500 text-white cursor-pointer hover:bg-green-600 text-1xl p-2 mx-2 my-10'>{name}</span>
//                     })
//                 }
//             </section>
//         )
//     }
// }


export default House;