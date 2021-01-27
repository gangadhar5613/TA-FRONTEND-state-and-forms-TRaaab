import SideBar from './Sidebar'
import Main from './Main'

function App() {
    return (
        <>
           <section className='flex flex-row justify-between items-center bg-red-200'>
                <SideBar />
                <Main />
           </section>
        </>
    )
}


export default App;
