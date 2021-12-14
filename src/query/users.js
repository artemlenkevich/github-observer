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

