import React from 'react';


class Match extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
    }
    
    render(){
       
        return(
            <section className='w-full'>
                  <div>
                       <span>'Please select the house & Person'</span>
                  </div>
            </section>
        )
    }
}



export default Match;