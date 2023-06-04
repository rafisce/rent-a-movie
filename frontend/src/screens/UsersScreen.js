import React, { useEffect } from "react";
import { listUsers } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import { Link } from "react-router-dom";

const UsersScreen = () => {
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const userList = useSelector((state) => state.userList);
  const { users, loading, error } = userList;

  useEffect(() => {

   
    
      dispatch(listUsers({}));
    
  }, [dispatch, userInfo]);
  return (
    <div className="container table_">

      {
        loading ?
          <LoadingBox /> : error ?
            <MessageBox variant='danger'>{error}</MessageBox>
            :
            
      < table className="table table-striped table-dark" dir="rtl">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">שם משתמש</th>
          <th scope="col">אימייל </th>
          <th scope="col">תאריך הצטרפות</th>
          <th scope="col">הזמנות</th>
        </tr>
      </thead>
      <tbody>
        {users
          ? users.map((user, index) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.date_joined}</td>
              <td>
                <Link to={`/user-rentals/${user.id}`}>הזמנות</Link>
              </td>
            </tr>
          ))
          : null}
      </tbody>
    </table>
            }
    </div >
      
  );
};

export default UsersScreen;
