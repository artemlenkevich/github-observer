import { useQuery } from "@apollo/client"
import { GET_REPOSITORY_ISSUES } from "../../query/users"
import styles from "./Issues.module.css"

interface IIssues {
    owner: string
    repositoryName: string
    setRepositoryId: React.Dispatch<React.SetStateAction<string>>
}

interface IIssue {
    author: {
        login: string
    }
    createdAt: string
    publishedAt: string
    title: string
    id: string
}

export const Issues: React.FC<IIssues> = ({ owner, repositoryName, setRepositoryId }) => {
    const { data, loading } = useQuery(GET_REPOSITORY_ISSUES, { variables: { name: repositoryName, owner } })

    if (loading) return (
        <div className={styles.issues}>
            <div>Loading...</div>
        </div>
    )

    let issueList = data.repository.issues.nodes.map((issue: IIssue) => {
        return (
            <div key={issue.id} className={styles.issue}>
                <div className={styles.issue__name}>{issue.title}</div>
                <div className={styles.issue__properties}>{`${issue.createdAt.slice(0, 10)} by ${issue.author.login}`}</div>
            </div>
        )
    })

    return (
        <div className={styles.issues}>
            <h2 className={styles.issues__title}>{repositoryName}</h2>
            <div className={styles.issues__container}>
                <div className={styles.issues__head}>
                    <div>Open Issues</div>
                    <button className={styles.issues__newIssueBtn} onClick={() => setRepositoryId(data.repository.id)}>New Issue</button>
                </div>
                {issueList}
            </div>
        </div>
    )
}