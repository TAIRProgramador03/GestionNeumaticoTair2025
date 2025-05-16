import * as React from 'react';
import Card from '@mui/material/Card';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { MagnifyingGlass as MagnifyingGlassIcon } from '@phosphor-icons/react/dist/ssr/MagnifyingGlass';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export interface CustomersFiltersProps {
  //onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  projectCount: number;
}

export function CustomersFilters({
 // onSearchChange,
  projectCount,
}: CustomersFiltersProps): React.JSX.Element {
  return (
    <Card sx={{ p: 2 }}>
      <Stack direction="row" spacing={2} alignItems="center">
        {/* 1️⃣ El input de búsqueda */}
        {/* <OutlinedInput
          defaultValue=""
          onChange={onSearchChange}
          placeholder="Buscar neumáticos"
          startAdornment={
            <InputAdornment position="start">
              <MagnifyingGlassIcon fontSize="var(--icon-fontSize-md)" />
            </InputAdornment>
          }
          sx={{ maxWidth: '300px' }}
        /> */}

        {/* 2️⃣ El icono de proyecto */}
        {/* <Box
          component="img"
          src="/assets/proyecto.png"
          alt="Proyectos"
          sx={{ width: 70, height: 70 }}
        /> */}

        {/* 3️⃣ El número de proyectos */}
        {/* <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
          {projectCount}
        </Typography> */}
      </Stack>
    </Card>
  );
}
