import { useState } from "react";
import { Repositories } from "./components/Repositories/Repositories";
import { Search } from "./components/Search/Search";
import { Users } from "./components/Users/Users";


function App() {
  let [searchName, setSearchName] = useState('')
  let [activeUserLogin, setActiveUserLogin] = useState('')

  console.log(activeUserLogin);
  


  return (
    <div>
      <Search setSearchName={setSearchName}/>
      {searchName && <Users searchName={searchName} setActiveUserLogin={setActiveUserLogin}/>}
      {activeUserLogin && <Repositories login={activeUserLogin}/>}
    </div>
  )
}

export default App;
