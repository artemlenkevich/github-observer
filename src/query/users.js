import {gql} from '@apollo/client'

export const GET_USERS = gql`
    query { 
        search(query: "artem", type: USER, first: 10) {
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

