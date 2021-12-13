import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { GET_USERS } from '../../query/users'

interface IUsers {
    name: String
}

interface INode {
    node: {
        login: String
        name: String
    }
}

export const Users: React.FC<IUsers> = ({ name }) => {
    const {data, loading, error} = useQuery(GET_USERS, { variables: { name } })

    console.log(data);

    if (loading) return <div>Loading...</div>

    

    return <div>
        {data.search.edges.map(({node}: INode) => console.log(node.login))}
    </div>
}