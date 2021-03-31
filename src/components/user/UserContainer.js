import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

export default function UserContainer() {
  const [users, setUsers] = useState(false);
  const [searchedValue, setSearchedValue] = useState(false);
  const [tableKey, setTableKey] = useState(0);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = () => {
    axios.get("https://reqres.in/api/users").then((responseData) => {
      
      setUsers(responseData.data.data);
    });
  };
  const onChangeHandler = (e) => {
    setSearchedValue(e.target.value);
  };


  return (
    <div>
        <label>Search</label>
      <input defaultValue="" onChange={onChangeHandler} key={tableKey} className="input" />
      {users && (
        <table className="tableContainer">
          <tr>
            <td>S.No</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Avatar</td>
            <td>Email</td>
          </tr>
          {users.map((user, index) => {
            
        
            if(searchedValue && searchedValue !==''){
                if(searchedValue == user.last_name || searchedValue== user.first_name){
                    return  (
                        <tr>
                          <td>{user.id}</td>
                          <td>{user.first_name}</td>
                          <td>{user.last_name}</td>
                          <td>
                            <img src={user.avatar} className="img" />
                          </td>
                          <td>{user.email}</td>
                        </tr>
                      );
                }
            }
            else{
                return  (
                    <tr>
                      <td>{user.id}</td>
                      <td>{user.first_name}</td>
                      <td>{user.last_name}</td>
                      <td>
                        <img src={user.avatar} className="img" />
                      </td>
                      <td>{user.email}</td>
                    </tr>
                  );
                
            }

           
          })}
        </table>
      )}
    </div>
  );
}
