import React from 'react';

const data = ['Roboto','Poppins','Potta','Yusei','Open','Nota','Hachi','Lato','Noto','Montserrat']

class Boxes extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
           <section className='grid grid-cols-3 gap-2 justify-items-center  items-center'>
               {
                   data.map((font) => {
                       
                      return <Box key={font} font= {font} size={this.props.fontSize} text={this.props.text} />
                   })
               }
           </section>
        )
    }
}



class Box extends React.Component{
    constructor (props){
        super()
    }

    render(){
        
        return(
            <section>
                <div className={`flex flex-col items-center ${'font-'+this.props.font}   w-96 h-96 shadow-xl`}>
                    <div className='my-10'>
                        <h2>{this.props.font}</h2>
                    </div>
                    <div className=' h-full text-center flex items-center'>
                          <p className={`mx-5 text-3xl text-${this.props.size}xl font-${this.props.font}` }>{this.props.text}</p>
                    </div>
                </div>
            </section>
        )
    }
}







export default Boxes