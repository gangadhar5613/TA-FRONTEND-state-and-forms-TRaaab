import React from 'react';

import MultieInputForm from './MultiInputForms';
import Validation from './Validation';

function App(){
    return(
        <>
          <section className='flex flex-row'>
              <MultieInputForm />
              <Validation />
          </section>
        </>
    )
}

export default App;