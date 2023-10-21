import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AddCar, TopBar } from '../../components';
import { useAppSelector } from '../../store/hook';
import {userSelect} from '../../store/user/user-selectors';


export const AddCarPage = (): JSX.Element => {
  const user = useAppSelector(userSelect);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.data) navigate('/');
  }, [user])
  
  return (
    <>
      <TopBar onBack/>
      <AddCar />
    </>
  );
}