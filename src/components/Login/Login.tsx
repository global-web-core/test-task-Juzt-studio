import React, { useState } from 'react';
import {Users} from '../../models';
import { Button, TextField, Grid, Paper, Typography } from '@mui/material';
import { useAppDispatch } from '../../store/hook';
import {addUser, clearUser} from '../../store/user/user-actions';
import { TEXT } from '../../globals/constants/constants';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

export const Login = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (!username || !password) {
      alert(TEXT.fillFields);
      return;
    }

    const userDb = await Users.getByUsernameAndPassword(username, password);
    if (userDb.data?.length === 1) {
      dispatch(addUser(userDb.data[0]));
      navigate('/');
      return;
    }

    dispatch(clearUser());
    alert(TEXT.authIsNotCorrect);
  };
  
  return (
    <>
      <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper style={{ padding: '20px' }}>
            <Typography variant="h5" component="h2">
              {TEXT.auth}
            </Typography>
            <form 
              noValidate 
              autoComplete="off" 
              onSubmit={handleSubmit}
              className={styles.form}
            >
              <div>
                <TextField
                  fullWidth
                  label={TEXT.nameUser}
                  variant="outlined"
                  value={username}
                  onChange={handleUsernameChange}
                  required
                />
              </div>
              <div>
                <TextField
                  fullWidth
                  label={TEXT.password}
                  variant="outlined"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <Button
                fullWidth
                variant="contained"
                type="submit"
              >
                {TEXT.login}
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}