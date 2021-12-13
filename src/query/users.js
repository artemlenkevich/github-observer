import {gql} from '@apollo/client'

export const GET_USERS = gql`
    query { 
        search(query: "artem", type: USER, first: 5) {
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

