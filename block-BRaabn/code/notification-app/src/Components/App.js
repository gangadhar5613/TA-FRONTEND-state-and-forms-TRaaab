import Sidebar from './Sidebar'
import Modal from './Modal';


function App (){
    return (
       <>
          <section className='flex flex-row justify-between'>
             <Sidebar />
             <Modal />
          </section>
       </>
    )
}
export default App;