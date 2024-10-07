import UserForm from "./UserForm";
import UsersTable from "./UsersTable";
import { Box } from '@mui/material';
import Axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {

    const [users, setUsers] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [selectedUser, setSelectedUser] = useState({});
    const [isEdit, setIsEdit] = useState(false);


    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        Axios.get('http://localhost:8080/api/v1/admin/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error("Axios Error: ", error);
            });

    }

    const addUser = (data) => {
        setSubmitted(true);

        const payload = {
            id: data.id,
            name: data.name,
        }
        Axios.post('http://localhost:8080/api/v1/admin/user', payload)
            .then(() => {

                getUsers();
                setSubmitted(false);
                isEdit(false);
            })
            .catch(error => {
                console.error("Axios Error: ", error);
            });
    }

    const updateUser = (data) => {
        setSubmitted(true);

        const payload = {
            id: data.id,
            name: data.name,
        }
        Axios.put('http://localhost:8080/api/v1/admin/user', payload)
            .then(() => {

                getUsers();
                setSubmitted(false);
                isEdit(false);
            })
            .catch(error => {
                console.error("Axios Error: ", error);
            });

    }

    const deleteUser = (data) => {
        setSubmitted(true);
        /*const payload ={
            id: data.id,
            name: data.name,
        }*/

        Axios.delete(`http://localhost:8080/api/v1/admin/user/${data.id}`)
            .then(() => {
                console.log("success");
                getUsers();
                setSubmitted(false);
                isEdit(false);

            })
            .catch(error => {
                console.error("Axios Error: ", error);
            });
    }



    return (
        <Box
            sx={{
                width: '80%',
                maxWidth: '600px',
                margin: '0 auto',
                marginTop: '100px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <UserForm
                addUser={addUser}
                updateUser={updateUser}
                submitted={submitted}
                data={selectedUser}
                isEdit={isEdit}
            />
            <UsersTable
                rows={users}
                selectedUser={data => {
                    setSelectedUser(data);
                    setIsEdit(true);
                }}

                deleteUser={data => window.confirm('Are you sure you want to delete?') && deleteUser(data)}
            />

        </Box>

    );

}

export default Users;
