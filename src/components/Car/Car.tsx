import React from 'react';
import { DIRECTORY_IMAGES, TEXT, COLUMNS_CARS } from '../../globals/constants/constants';
import styles from "./Car.module.css";
import { CarProps } from './Car.props';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

export const Car = ({car}: CarProps): JSX.Element => {
  const getPathToImage = (dataImage: string) => {
    if (dataImage.startsWith('data:image/')) {
      return dataImage;
    } else {
      return `${DIRECTORY_IMAGES}/${dataImage}`;
    }
  }
  
  return (
    <>
    <div className={styles.carInfo}>
      {car ? (
        <Card className={styles.card} style={{ borderRadius: '20px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
          <CardMedia
            component="img"
            alt={car.model}
            height="200"
            image={getPathToImage(car.image)}
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {car.brand} {car.model}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {COLUMNS_CARS.color}: {car.color}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {COLUMNS_CARS.price}: {car.price}$
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {COLUMNS_CARS.year}: {car.year}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {COLUMNS_CARS.engine_type}: {car.engine_type}
            </Typography>
            {car.transmission &&
              <Typography variant="body2" color="text.secondary">
                {COLUMNS_CARS.transmission}: {car.transmission}
              </Typography>
            }
            {car.range && 
              <Typography variant="body2" color="text.secondary">
                {COLUMNS_CARS.range}: {car.range} {TEXT.km}
              </Typography>
            }
          </CardContent>
        </Card>
      ) : (
        TEXT.loading
      )}
    </div>
    </>
  );
}