import {useState} from 'react';
import {Button, TextField} from '@mui/material';

export default function Login(props) {
    const {setLoggedIn} = props;

    const [user, setUser] = useState({
        username: '',
        password: '',
    });

    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        if (user.username === "user" && user.password === "pass") {
            setLoggedIn(true);
        } else {
            alert("username is user, password is pass");
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <TextField
                fullWidth
                required
                size="large"
                label="Username"
                name="username"
                placeholder="user"
                variant="standard"
                onChange={handleChange}
            />
            <TextField
                fullWidth
                required
                size="large"
                label="Password"
                name="password"
                placeholder="pass"
                variant="standard"
                type='password'
                onChange={handleChange}
            />
            <Button
                fullWidth
                size='large'
                variant='contained'
                type='submit'
            >
                Login
            </Button>
        </form>
    )
}  
