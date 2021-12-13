import styles from './Search.module.css'

export const Search: React.FC<{}> = () => {
    return (
        <div className={styles.search}>
            <input type="text" />
            <button>Search</button>
        </div>
    )
}