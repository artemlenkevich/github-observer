import { useQuery } from "@apollo/client"
import { GET_REPOSITORIES } from "../../query/users"
import styles from "./Repositories.module.css"

interface IRepositories {
    login: string
}

interface IRepository {
    name: string
    stargazerCount: number
    watchers: {
      totalCount: number
    }

}

export const Repositories: React.FC<IRepositories> = ({ login }) => {
    const { data, loading, error } = useQuery(GET_REPOSITORIES, { variables: { login } })
    console.log(login);
    console.log(data);

    // return <div></div>

    if (loading) return <div>Loading...</div>

    let listOfRepositories = data.user.repositories.nodes.map((rep: IRepository) => {
        return (
            <div className={styles.repository}>
                <div className={styles.repository__name}>{rep.name}</div>
                <div className={styles.repository__properies}>{`${rep.stargazerCount} stars / ${rep.watchers.totalCount} watching`}</div>
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