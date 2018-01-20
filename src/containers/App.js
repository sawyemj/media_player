import React from 'react';
import Header from  '../common/Header'
import Main from  '../routes'

// The parent component renders the Header component and component(s) in the
// route the user navigates to.
const App = () => (
    <div>
        <Header />
        <Main />
    </div>
)

export default App;