import React from 'react';
import { DataGrid, GridCellParams, GridColDef, ruRU } from '@mui/x-data-grid';
import { CARS_KEYS_OBJECT, DIRECTORY_IMAGES, NAME_PAGES, COLUMNS_CARS } from '../../globals/constants/constants';
import styles from "./ListCars.module.css";
import { useNavigate } from 'react-router-dom';
import { ListCarsProps } from './ListCars.props';

export const ListCars = ({cars}: ListCarsProps): JSX.Element => {
  const navigate = useNavigate();

  const selectedFields = [CARS_KEYS_OBJECT.image, CARS_KEYS_OBJECT.brand, CARS_KEYS_OBJECT.model, CARS_KEYS_OBJECT.year, CARS_KEYS_OBJECT.price];

  const columns: GridColDef[] = selectedFields.map((key) => {
    const columnDefinition: GridColDef = {
      field: key,
      headerName: COLUMNS_CARS[key as keyof typeof COLUMNS_CARS],
      width: 150
    };
  
    if (key === CARS_KEYS_OBJECT.image) {
      columnDefinition.renderCell = (params: GridCellParams) => {
        if (typeof params.value === 'string' && params.value.startsWith('data:image/')) {
          return (<img src={params.value} alt={params.value ? String(params.value) : ''} />)
        }
        return (<img src={DIRECTORY_IMAGES + params.value} alt={params.value ? String(params.value) : ''} />)
      };
    }
  
    return columnDefinition;
  });

  return (
    <>
      <div className={styles.table}>
        <DataGrid
          className={styles.dataGrid}
          rows={cars}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10, 25, 50, 100]}
          localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
          onRowClick={(param) => {
            navigate(`/${NAME_PAGES.listCars}/${param.id}`);
          }}
        />
      </div>
    </>
  );
}