import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { GET_USERS } from '../../query/users'

export const Users = () => {
    const {data, loading, error} = useQuery(GET_USERS)
    const [users, setUsers] = useState([])

    console.log(data);
    

    useEffect(() => {
        
    }, [data])

    return (
        <div></div>
    )
}