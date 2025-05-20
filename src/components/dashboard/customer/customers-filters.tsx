import * as React from 'react';
import Card from '@mui/material/Card';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { MagnifyingGlass as MagnifyingGlassIcon } from '@phosphor-icons/react/dist/ssr/MagnifyingGlass';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export interface CustomersFiltersProps {
  projectCount: number;
  disponiblesCount: number;
  asignadosCount: number;
}

export function CustomersFilters({
  projectCount,
  disponiblesCount,
  asignadosCount,
}: CustomersFiltersProps): React.JSX.Element {
  // Animaciones para cada contador
  const [displayCount, setDisplayCount] = React.useState(0);
  const [displayDisponibles, setDisplayDisponibles] = React.useState(0);
  const [displayAsignados, setDisplayAsignados] = React.useState(0);

  // Animación total
  React.useEffect(() => {
    let start = 0;
    let rafId: number;
    const animate = () => {
      const increment = Math.ceil((projectCount - start) / 20);
      start += increment;
      if (start >= projectCount) {
        setDisplayCount(projectCount);
      } else {
        setDisplayCount(start);
        rafId = requestAnimationFrame(animate);
      }
    };
    if (projectCount > 0) {
      setDisplayCount(0);
      rafId = requestAnimationFrame(animate);
    } else {
      setDisplayCount(0);
    }
    return () => cancelAnimationFrame(rafId);
  }, [projectCount]);

  // Animación disponibles
  React.useEffect(() => {
    let start = 0;
    let rafId: number;
    const animate = () => {
      const increment = Math.ceil((disponiblesCount - start) / 20);
      start += increment;
      if (start >= disponiblesCount) {
        setDisplayDisponibles(disponiblesCount);
      } else {
        setDisplayDisponibles(start);
        rafId = requestAnimationFrame(animate);
      }
    };
    if (disponiblesCount > 0) {
      setDisplayDisponibles(0);
      rafId = requestAnimationFrame(animate);
    } else {
      setDisplayDisponibles(0);
    }
    return () => cancelAnimationFrame(rafId);
  }, [disponiblesCount]);

  // Animación asignados
  React.useEffect(() => {
    let start = 0;
    let rafId: number;
    const animate = () => {
      const increment = Math.ceil((asignadosCount - start) / 20);
      start += increment;
      if (start >= asignadosCount) {
        setDisplayAsignados(asignadosCount);
      } else {
        setDisplayAsignados(start);
        rafId = requestAnimationFrame(animate);
      }
    };
    if (asignadosCount > 0) {
      setDisplayAsignados(0);
      rafId = requestAnimationFrame(animate);
    } else {
      setDisplayAsignados(0);
    }
    return () => cancelAnimationFrame(rafId);
  }, [asignadosCount]);

  return (
    <Card sx={{ p: 2 }}>
      <Stack direction="row" spacing={2} alignItems="center">
        <Stack direction="column" alignItems="center" spacing={1}>
          <Box
            sx={{
              width: 150,
              height: 80,
              bgcolor: '#e3f2fd',
              borderRadius: '17px',
              border: '5px solid #90caf9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 32,
              fontWeight: 'bold',
              color: '#333',
            }}
          >
            {displayCount}
          </Box>
          <Typography variant="body2" color="text.secondary">
            Total neumáticos
          </Typography>
        </Stack>
        <Stack direction="column" alignItems="center" spacing={1}>
          <Box
            sx={{
              width: 150,
              height: 80,
              bgcolor: '#e8f5e9',
              borderRadius: '17px',
              border: '5px solid #81c784',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 32,
              fontWeight: 'bold',
              color: '#333',
            }}
          >
            {displayDisponibles}
          </Box>
          <Typography variant="body2" color="text.secondary">
            Disponibles
          </Typography>
        </Stack>
        <Stack direction="column" alignItems="center" spacing={1}>
          <Box
            sx={{
              width: 150,
              height: 80,
              bgcolor: '#fff3e0',
              borderRadius: '17px',
              border: '5px solid #ffb74d',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 32,
              fontWeight: 'bold',
              color: '#333',
            }}
          >
            {displayAsignados}
          </Box>
          <Typography variant="body2" color="text.secondary">
            Asignados
          </Typography>
        </Stack>
        {/* ...otros rectángulos si los necesitas... */}
      </Stack>
    </Card>
  );
}
