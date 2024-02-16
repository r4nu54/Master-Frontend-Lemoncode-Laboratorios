import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useSetOrg } from '@/pods/github-list/';

export const GithubListFormComponent = () => {
  const { orgName, handleInputChange, handleSubmit } = useSetOrg();

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-2 my-2 place-content-center">
      <input
        defaultValue={orgName}
        type="text"
        className="p-2 border-2 focus:border-[#1b5e20] rounded-md"
        onChange={handleInputChange}
      />
      <Button type="submit" variant="contained" color="success" startIcon={<SearchIcon />}>
        Buscar
      </Button>
    </form>
  );
};
