import { Button, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useSetOrg } from '@/pods/github-list/';

export const GithubListFormComponent = () => {
  const { orgName, loading, handleInputChange, handleSubmit } = useSetOrg();

  return (
    <div
      role="search"
      aria-label="Búsqueda de organizaciones de GitHub"
      className="w-full max-w-2xl mx-auto"
    >
      <form
        onSubmit={handleSubmit}
        className="flex gap-2 p-2 my-2 place-content-center"
        aria-label="Formulario de búsqueda"
        noValidate
      >
        <TextField
          type="text"
          color="success"
          label="Nombre de la organización"
          variant="outlined"
          defaultValue={orgName}
          size="small"
          onChange={handleInputChange}
          required
          inputProps={{
            'aria-label': 'Ingrese el nombre de la organización',
            'aria-required': 'true',
            'aria-describedby': 'org-search-help',
            'autoComplete': 'off',
            'minLength': 1,
            'maxLength': 100
          }}
          helperText="Ingrese el nombre de una organización de GitHub"
          id="org-search-input"
          name="organization"
          disabled={loading}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon aria-hidden="true" fontSize="small" />
              </InputAdornment>
            ),
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="success"
          startIcon={<SearchIcon aria-hidden="true" />}
          disabled={loading}
          aria-label="Buscar organización"
          className="min-w-[120px]"
        >
          <span aria-hidden="true">
            {loading ? 'Buscando...' : 'Buscar'}
          </span>
          <span className="sr-only">
            {loading ? 'Buscando organización' : 'Buscar organización en GitHub'}
          </span>
        </Button>
      </form>
      <div
        id="org-search-help"
        className="text-center text-sm text-gray-600 mt-1"
        aria-live="polite"
      >
        {loading ? 'Buscando resultados...' : 'Ejemplo: Lemoncode, Microsoft, Google'}
      </div>
    </div>
  );
};
