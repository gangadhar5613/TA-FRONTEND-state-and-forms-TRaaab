 import House from './House';
//  import Person from './Person'
 import Match from './Match'

import data from '../data.json';



function App(){
    const AllHouseName = data.map((user) => user.name);
    const allPeople = data.reduce((acc, house) => {
        house.people.forEach((obj) => {
            acc.push(obj.name)
        })
        return acc
    }, [])

    console.log(allPeople)

    return(
        <section className='flex flex-row '>
            <div className='flex flex-row justify-items-center items-center'>
                <House people ={AllHouseName} persons={allPeople} />     
            </div>
        </section>       
    )
}


export default App;