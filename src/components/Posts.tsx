import React from 'react'
import { useDispatch } from 'react-redux'
import { useTypesSelector } from '../hooks/useTypedSelector'
import type{} from 'redux-thunk/extend-redux'
import { fetchUsers } from '../asyncActions/users'
import {Link, useParams} from 'react-router-dom'
import {useEffect} from 'react'
export const Posts:React.FC=()=>{
       let dispatch = useDispatch()
       let {_id} = useParams()
       let users = useTypesSelector(state=>state.users)
    

       console.log(users)
       useEffect(()=>{
              dispatch(fetchUsers())

       },[])
       
       return(
           <>
              {users.map(item=>
              <Link to={'users/'+item._id} className='post'>
              <div  key={item._id}>
                <p>{item.name}</p>
                </div>
                </Link>
               )}
           </>
       )
}