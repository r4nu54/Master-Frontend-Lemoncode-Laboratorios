import { Button, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useSetOrg } from '@/pods/github-list/';

export const GithubListFormComponent = () => {
  const { orgName, handleInputChange, handleSubmit } = useSetOrg();

  return (
    <>
      <form onSubmit={handleSubmit} className="flex gap-2 p-2 my-2 place-content-center">
        <TextField
          type="text"
          color="success"
          label="Enter organization"
          variant="outlined"
          defaultValue={orgName}
          size="small"
          onChange={handleInputChange}
        />
        <Button type="submit" variant="contained" color="success" startIcon={<SearchIcon />}>
          Buscar
        </Button>
      </form>
    </>
  );
};
