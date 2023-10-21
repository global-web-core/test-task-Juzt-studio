import React, { useEffect, useState } from 'react';
import { ICars } from '../../typesAndInterfaces/interfaces';
import { Cars } from '../../models';
import { useParams } from 'react-router-dom';
import { Car, NotFound, TopBar } from '../../components';
import { NAME_ID_FOR_PAGES } from '../../globals/constants/constants';

export const CarPage = (): JSX.Element => {
  const params = useParams();
  const idCar = params[NAME_ID_FOR_PAGES.listCars];
  const [notFound, setNotFound] = useState(false);

  const [car, setCar] = useState<ICars.Db | null>(null);

  const getCar = async () => {
    if (idCar) {
      const dataCar = await Cars.getByIdCar(Number(idCar));
      if (dataCar.data && dataCar.data.length) {
        setCar(dataCar.data[0]);
      } else {
        setNotFound(true);
      }
    }
  }

  useEffect(() => {
    getCar();
  }, [])
  
  return (
    <>
      {notFound ?
        <NotFound />
      :
        <>
          <TopBar onBack/>
          <Car car={car} />
        </>
      }
    </>
  );
}