import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { GetAllUsers } from './redux/UserAction'
export default function Account() {
    const { users, admin, register } = useSelector(state => state.allusers)
    const dispatch = useDispatch()
    return <>

        <button className='btn btn-warning' onClick={() => dispatch(GetAllUsers())}>Fetch Users</button>
        {
            register ? users.map((item) => (
                <div class="card w-25 mt-2">

                    <div class="card-body">
                        <div>
                            {item.name}
                        </div>
                        <div>
                            {item.email}
                        </div>
                        <div>
                            {item.mobile}
                        </div>
                    </div>

                </div>
            )) : <div class="alert alert-primary">
                Please Register
            </div>
        }
    </>
}
