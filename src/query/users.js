import {gql} from '@apollo/client'

export const GET_USERS = gql`
    query GetUsers($name: String!) { 
        search(query: $name, type: USER, first: 5) {
            userCount
            edges {
                node {
                    ... on User {
                        name
                        login
                    }
                }
            }
        }
    }
`

