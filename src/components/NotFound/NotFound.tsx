import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { TEXT } from '../../globals/constants/constants';
import { TopBar } from '../TopBar/TopBar';
import styles from './NotFound.module.css';

export const NotFound = () => {
  return (
    <>
      <TopBar />
      <div>
        <Container className={styles.container} style={{ display: 'flex', margin: '0 auto', alignItems: 'center' }}>
          <Typography variant="h1">404</Typography>
          <Typography variant="h5">{TEXT.notFoundPage}</Typography>
          <Button variant="contained" color="primary" component={Link} to="/">{TEXT.goToHome}</Button>
        </Container>
      </div>
    </>
  );
};