import React from "react";
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import routes from './config/router'

function App() {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <main>
        {routes}
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
    
  );
}

export default App;