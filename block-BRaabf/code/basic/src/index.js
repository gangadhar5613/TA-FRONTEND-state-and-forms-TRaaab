import React from 'react';
import ReactDOM from 'react-dom';

import App, {AppNew} from './Components/App';

function UI(){
    return(
        <>
         <App />
        <AppNew />
        </>
    )
}

ReactDOM.render(<UI/>,document.getElementById('root'));