import { useQuery } from "@apollo/client"
import { GET_REPOSITORIES } from "../../query/users"
import styles from "./Repositories.module.css"

interface IRepositories {
    login: string
    setActiveRepository: React.Dispatch<React.SetStateAction<string>>
}

interface IRepository {
    name: string
    stargazerCount: number
    watchers: {
      totalCount: number
    }
    id: string

}

export const Repositories: React.FC<IRepositories> = ({ login, setActiveRepository }) => {
    const { data, loading } = useQuery(GET_REPOSITORIES, { variables: { login } })

    if (loading) return (
        <div className={styles.repositories}>
            <div>Loading...</div>
        </div>
    )

    let listOfRepositories = data.user.repositories.nodes.map((rep: IRepository) => {
        return (
            <div key={rep.id} className={styles.repository} onClick={() => setActiveRepository(rep.name)}>
                <div className={styles.repository__name}>{rep.name}</div>
                <div className={styles.repository__properties}>{`${rep.stargazerCount} stars / ${rep.watchers.totalCount} watching`}</div>
            </div>
        )
    })    

    return (
        <div className={styles.repositories}>
            <h2 className={styles.repositories__title}>Repositories</h2>
            <div className={styles.list}>
                {listOfRepositories}
            </div>
            
        </div>
    )
}