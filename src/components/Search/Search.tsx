import { useState } from 'react'
import styles from './Search.module.css'

interface ISearch {
    setSearchName: React.Dispatch<React.SetStateAction<string>>
    clearPreviousState: () => void
}

export const Search: React.FC<ISearch> = ({ setSearchName, clearPreviousState }) => {
    let [inputValue, setInputValue] = useState('')

    const onSearchBtnClick = () => {
        clearPreviousState()
        setSearchName(inputValue)
    }
    
    return (
        <div className={styles.search}>
            <input className={styles.search__input} value={inputValue} onChange={e => setInputValue(e.target.value)} type="text" />
            <button className={styles.search__btn} onClick={onSearchBtnClick}>Search</button>
        </div>
    )
}