import React, { useEffect, useState } from 'react';
import { ListCars, TopBar } from '../../components';
import { Cars } from '../../models';
import {ICars} from '../../typesAndInterfaces/interfaces';

export const ListCarsPage = (): JSX.Element => {
  const [cars, setCars] = useState<ICars.Db[]>([]);

  const getAllCars = async () => {
    const listCars = await Cars.getAll();
    if (listCars.data) setCars(listCars.data);
  }

  useEffect(() => {
    getAllCars();
  }, [])
  
  return (
    <>
      <TopBar/>
      <ListCars cars={cars} />
    </>
  );
}