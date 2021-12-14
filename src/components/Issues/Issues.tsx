import { useQuery } from "@apollo/client"
import { GET_REPOSITORY_ISSUES } from "../../query/users"
import styles from "./Issues.module.css"

interface IIssues {
    owner: string
    repositoryName: string
}

interface IIssue {
    author: {
        login: string
    }
    createdAt: string
    publishedAt: string
    title: string
}

export const Issues: React.FC<IIssues> = ({ owner, repositoryName }) => {
    const { data, loading, error } = useQuery(GET_REPOSITORY_ISSUES, { variables: { name: repositoryName, owner } })

    if (loading) return <div>Loading...</div>


    let issueList = data.repository.issues.nodes.map((issue: IIssue) => {
        return (
            <div className={styles.issue}>
                <div className={styles.issue__name}>{issue.title}</div>
                <div className={styles.issue__properties}>{`${issue.createdAt} by ${issue.author}`}</div>
            </div>
        )
    })

    return (
        <div className={styles.issues}>
            {issueList}
        </div>
    )
}