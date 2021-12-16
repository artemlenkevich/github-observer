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

interface RepositoryData {
    user: {
        repositories: {
            nodes: Array<IRepository>
        }
    }
}

interface RepositoryVars {
    login: string
}

export const Repositories: React.FC<IRepositories> = ({ login, setActiveRepository }) => {
    const { data, loading } = useQuery<RepositoryData, RepositoryVars>(GET_REPOSITORIES, { variables: { login } })

    if (loading || !data) return (
        <div className={styles.repositories}>
            <div>Loading...</div>
        </div>
    )

    let listOfRepositories = data.user.repositories.nodes.map(rep => {
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