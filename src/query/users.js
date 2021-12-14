import {gql} from '@apollo/client'

export const GET_USERS = gql`
    query GetUsers($name: String!) { 
        search(query: $name, type: USER, first: 5) {
            edges {
                node {
                    ... on User {
                        name
                        login
                        avatarUrl
                    }
                }
            }
        }
    }
`
export const GET_REPOSITORIES = gql`
    query GetRepositories($login: String!, $after: String) {
        user(login: $login) {
            repositories(first: 6, after: $after) {
                nodes {
                    name
                    stargazerCount
                    watchers {
                        totalCount
                    }
                    id
                }
                pageInfo {
                    hasNextPage
                    endCursor
                }
            }
        }
    }
`

export const GET_REPOSITORY_ISSUES = gql`
    query GetRepositoryIssues($name: String!, $owner: String!, $after: String) {
        repository(name: $name, owner: $owner) {
            issues(first: 6, after: $after) {
                nodes {
                    author {
                      login
                    }
                    createdAt
                    title
                    id
                }
            }
            id
        }
    }
`

export const ADD_NEW_ISSUE = gql`
    mutation AddNewIssue($id: String!, $title: String!, $body: String) {
        createIssue(input: {repositoryId: $id, title: $title, body: $body}) {
            issue {
                number
                body
              }
        }
    }
`

