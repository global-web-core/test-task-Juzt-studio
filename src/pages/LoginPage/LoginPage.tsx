import React from 'react';
import { Login, TopBar } from '../../components';
import styles from "./LoginPage.module.css";

export const LoginPage = (): JSX.Element => {

  return (
    <>
      <TopBar onBack/>
      <div className={styles.login}>
        <Login/>
      </div>
    </>
  );
}