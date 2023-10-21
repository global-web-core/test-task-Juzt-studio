import React, { ChangeEvent, useRef, useState } from 'react';
import styles from "./AddCar.module.css";
import { Button, TextField } from '@mui/material';
import { CARS_KEYS_OBJECT, COLUMNS_CARS, TEXT } from '../../globals/constants/constants';
import { Cars } from '../../models';

const initialStateCar = {
  image: '',
  brand: '',
  model: '',
  color: '',
  price: '',
  year: '',
}

export const AddCar = (): JSX.Element => {
  const [car, setCar] = useState(initialStateCar);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCar({
      ...car,
      [name]: value,
    });
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    const reader = new FileReader();

    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        setImageSrc(reader.result);
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (imageSrc) {
      const dataCarToSend = {
        ...car,
        price: +car.price,
        year: +car.year,
        image: imageSrc
      };
  
      if (car) {
        const addedCar = await Cars.add(dataCarToSend);
        if (addedCar.data) {
          alert(TEXT.addCarSuccessfully);
          setCar(initialStateCar);
          setImageSrc(null);
          clearFileInput();
          return;
        }
      }
    }
    alert(TEXT.addCarError);
  };

  const clearFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <>
      <div className={styles.addCar}>
        <div className={styles.form}>
          {imageSrc && <img src={imageSrc} alt="Uploaded preview" className={styles.imageLoaded} />}
          <form className={styles.form} onSubmit={handleSubmit}>
            <input ref={fileInputRef} type="file" onChange={handleImageUpload} required />
            <TextField label={COLUMNS_CARS.brand} name={CARS_KEYS_OBJECT.brand} value={car[CARS_KEYS_OBJECT.brand]} onChange={handleChange} fullWidth required />
            <TextField label={COLUMNS_CARS.model} name={CARS_KEYS_OBJECT.model} value={car[CARS_KEYS_OBJECT.model]} onChange={handleChange} fullWidth required />
            <TextField label={COLUMNS_CARS.color} name={CARS_KEYS_OBJECT.color} value={car[CARS_KEYS_OBJECT.color]} onChange={handleChange} fullWidth required />
            <TextField label={COLUMNS_CARS.price} name={CARS_KEYS_OBJECT.price} type="number" value={car[CARS_KEYS_OBJECT.price]} onChange={handleChange} fullWidth required />
            <TextField label={COLUMNS_CARS.year} name={CARS_KEYS_OBJECT.year} type="number" value={car[CARS_KEYS_OBJECT.year]} onChange={handleChange} fullWidth required />
            <Button variant="contained" color="primary" type="submit">{TEXT.addCar}</Button>
          </form>
        </div>
      </div>
    </>
  );
}