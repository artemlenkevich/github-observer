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
                }
                pageInfo {
                    hasNextPage
                    endCursor
                }
            }
        }
    }
`

