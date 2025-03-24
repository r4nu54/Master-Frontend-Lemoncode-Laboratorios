import { useContext } from 'react';
import { PaginationContext, OrgContext } from '@/core/providers';
import { Pagination, Box, useTheme, useMediaQuery } from '@mui/material';

export const PaginationComponent = () => {
  const { isError } = useContext(OrgContext);
  const { setCurrentPage, currentPage, lastPage, perPage } = useContext(PaginationContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    // Hacer scroll al principio de la lista cuando se cambia de página
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isError || lastPage <= 1) return null;

  const startItem = (currentPage - 1) * perPage + 1;
  const endItem = Math.min(currentPage * perPage, lastPage * perPage);

  return (
    <Box
      component="nav"
      className="flex flex-col items-center gap-2 p-4"
      role="navigation"
      aria-label="Paginación de miembros"
    >
      <Pagination
        count={lastPage}
        page={currentPage}
        onChange={handleChange}
        color="primary"
        size={isMobile ? 'small' : 'medium'}
        showFirstButton
        showLastButton
        siblingCount={isMobile ? 0 : 1}
        boundaryCount={isMobile ? 1 : 2}
        variant="outlined"
        shape="rounded"
        aria-label="Navegación de páginas"
        className="bg-white shadow-sm rounded-lg p-2"
        getItemAriaLabel={(type, page) => {
          switch (type) {
            case 'page':
              return `Ir a la página ${page}`;
            case 'first':
              return 'Ir a la primera página';
            case 'last':
              return 'Ir a la última página';
            case 'next':
              return 'Ir a la página siguiente';
            case 'previous':
              return 'Ir a la página anterior';
            default:
              return 'Cambiar de página';
          }
        }}
      />
      <div
        className="text-sm text-gray-600"
        role="status"
        aria-live="polite"
      >
        Mostrando {startItem}-{endItem} de {lastPage * perPage} miembros
      </div>
    </Box>
  );
};
