import { useState } from "react";
import { Issues } from "./components/Issues/Issues";
import { Repositories } from "./components/Repositories/Repositories";
import { Search } from "./components/Search/Search";
import { Users } from "./components/Users/Users";
import styles from "./App.module.css"
import { NewIssueForm } from "./components/NewIssueForm/NewIssueForm";

function App() {
  let [searchName, setSearchName] = useState('')
  let [activeUserLogin, setActiveUserLogin] = useState('')
  let [activeRepository, setActiveRepository] = useState('')
  let [repositoryId, setRepositoryId] = useState('')

  const clearPreviousState = () => {
    setActiveUserLogin('')
    setActiveRepository('')
    setRepositoryId('')
  }

  return (
    <div className={styles.container}>
      <Search setSearchName={setSearchName} clearPreviousState={clearPreviousState}/>
      {searchName && <Users searchName={searchName} setActiveUserLogin={setActiveUserLogin} setActiveRepository={setActiveRepository}/>}
      {activeUserLogin && <Repositories login={activeUserLogin} setActiveRepository={setActiveRepository}/>}
      {activeRepository && activeUserLogin && <Issues repositoryName={activeRepository} owner={activeUserLogin} setRepositoryId={setRepositoryId}/>}
      {repositoryId && <NewIssueForm repositoryId={repositoryId} setRepositoryId={setRepositoryId}/>}
    </div>
  )
}

export default App;
