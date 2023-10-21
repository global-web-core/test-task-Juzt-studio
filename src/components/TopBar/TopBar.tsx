import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import {userSelect} from '../../store/user/user-selectors';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { NAME_PAGES, TEXT } from '../../globals/constants/constants';
import {clearUser} from '../../store/user/user-actions';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './TopBar.module.css';
import {TopBarProps} from './TopBar.props';

export const TopBar = ({onBack}: TopBarProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(userSelect);
  const navigate = useNavigate();
  const location = useLocation();

  const goBackToHome = () => {
    navigate('/');
  };

  const goAddCar = () => {
    navigate(`${NAME_PAGES.addCar}`);
  };

  const isLoginPage = location.pathname === `/${NAME_PAGES.login}`;
  const isMainPage = location.pathname === `/`;
  
  return (
    <>
      <div>
        <AppBar position="sticky">
          <Toolbar className={styles.toolbar}>
            <Typography variant="h6" component="div">{TEXT.cars}</Typography>
            <div className={styles.rightPart}>
              {user.data && isMainPage && <Button color="inherit" onClick={goAddCar}>{TEXT.addCar}</Button>}
              {onBack && <Button color="inherit" onClick={goBackToHome}>{TEXT.back}</Button>}
              {user.data && <Button color="inherit" onClick={() => {dispatch(clearUser())}}>{TEXT.logout}</Button>}
              {!user.data && !isLoginPage && <Button color="inherit" onClick={() => navigate(`/${NAME_PAGES.login}`)}>{TEXT.login}</Button>}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
}