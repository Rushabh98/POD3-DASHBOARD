import React from 'react';
import Header from './Header';
import FormUser from './signin';




class App extends React.Component{
render()
{
  return(
      
    <div className="App">
    <Header />
    {/* <SignIn /> */}
    <FormUser/>
   
    </div>
    );
  }
}
export default App;