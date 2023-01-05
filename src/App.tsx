import React from 'react';
import BasicTable from './Table';
import './App.css';
import Container from '@mui/material/Container';
import ConfigurableWrapper from './configurableWrapper'

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const columns = [
  {
    label: 'Dessert',
  },{
    label: 'Calories',
  },{
    label: 'Fat (g)',
  },{
    label: 'Carbs (g)',
  },{
    label: 'Protein (g)',
  },
];

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <ConfigurableWrapper
          propsList={
            [
              {
                propName: 'columns',
                data: columns,
              },{
                propName: 'rows',
                data: rows,
              },
              {
                propName: 'stickyHeader',
                data: true,
              }
            ]
          }
          Component={BasicTable}
        />
      </Container>
    </div>
  );
}

export default App;
