import { useState } from "react";
import { Search } from "./components/Search/Search";
import { Users } from "./components/Users/Users";


function App() {
  let [name, setName] = useState('')

  return (
    <div>
      <Search setName={setName}/>
      {name && <Users name={name}/>}
    </div>
  )
}

export default App;
