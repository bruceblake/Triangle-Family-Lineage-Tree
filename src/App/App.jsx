import { useEffect, useState} from "react"
import BrothersDataList from "../BrothersDataList/BrothersDataList.jsx"
import SearchBar from "../SearchBar/SearchBar.jsx"
import "./App.css"
function App() {
  
 

  return (
    <>
      <div className="background">
        <div className="top">
          <h1>Triangle Family Tree</h1>
          <SearchBar props={"cock"}/>
        </div>
        <BrothersDataList />
      </div>
    </>
  )
}

export default App
