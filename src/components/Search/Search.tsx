import { useState } from 'react'
import styles from './Search.module.css'

interface ISearch {
    setName: React.Dispatch<React.SetStateAction<string>>
}

export const Search: React.FC<ISearch> = ({ setName }) => {
    let [inputValue, setInputValue] = useState('')

    const onSearchBtnClick = () => {
        setName(inputValue)
    }
    
    return (
        <div className={styles.search}>
            <input value={inputValue} onChange={e => setInputValue(e.target.value)} type="text" />
            <button onClick={onSearchBtnClick}>Search</button>
        </div>
    )
}