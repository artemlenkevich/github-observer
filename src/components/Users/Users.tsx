import { useQuery } from '@apollo/client'
import { GET_USERS } from '../../query/users'
import styles from './Users.module.css'

interface IUsers {
    searchName: String
    setActiveUserLogin: React.Dispatch<React.SetStateAction<string>>
    setActiveRepository: React.Dispatch<React.SetStateAction<string>>
}

interface INode {
    node: {
        login: string
        name: string
        avatarUrl: string
    }
}

export const Users: React.FC<IUsers> = ({ searchName, setActiveUserLogin, setActiveRepository}) => {
    const { data, loading, error } = useQuery(GET_USERS, { variables: { name: searchName } })
    
    if (loading) return <div>Loading...</div>

    let cards = data.search.edges.map(({ node }: INode) => {
        const onUserClick = () => {
            setActiveRepository('')
            setActiveUserLogin(node.login)
        }

        return (
            <div key={node.login} className={styles.card} onClick={onUserClick}>
                <img className={styles.card__img} src={node.avatarUrl} alt="" />
                <div className={styles.card__name}>{node.name || node.login}</div>
            </div>
        )
    })

    return (
        <div className={styles.users}>
            <h2 className={styles.users__title}>Users</h2>
            <div className={styles.users__cards}>
                {cards}
            </div>
        </div>
    )
}