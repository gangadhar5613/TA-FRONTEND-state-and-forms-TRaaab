import React from 'react';




class Person extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            personName : ''
        }
        
    }

    handleMatch = (name) => {
            this.setState({
                personName:name
            })
    }
    render(){
        return(
            <section className='my-15 grid grid-cols-10 justify-items-center'>
                {
                    this.props.persons.map((name) => {
                        return <span onClick={() => this.handleMatch(name)}  className='bg-red-500 text-white cursor-pointer hover:bg-green-600 text-1xl p-2 mx-2 my-10'>{name}</span>
                    })
                }
            </section>
        )
    }
}



export default Person;