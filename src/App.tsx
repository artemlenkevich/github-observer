import { useState } from "react";
import { Issues } from "./components/Issues/Issues";
import { Repositories } from "./components/Repositories/Repositories";
import { Search } from "./components/Search/Search";
import { Users } from "./components/Users/Users";


function App() {
  let [searchName, setSearchName] = useState('')
  let [activeUserLogin, setActiveUserLogin] = useState('')
  let [activeRepository, setActiveRepository] = useState('')

  return (
    <div>
      <Search setSearchName={setSearchName}/>
      {searchName && <Users searchName={searchName} setActiveUserLogin={setActiveUserLogin} setActiveRepository={setActiveRepository}/>}
      {activeUserLogin && <Repositories login={activeUserLogin} setActiveRepository={setActiveRepository}/>}
      {activeRepository && activeUserLogin && <Issues repositoryName={activeRepository} owner={activeUserLogin}/>}
    </div>
  )
}

export default App;
