import { useContext, useState } from 'react';
import { OrgContext } from '@/core/providers/org.context';
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const FormComponent = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const { orgName, setOrgName } = useContext(OrgContext);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue === '') return;
    setOrgName(inputValue);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-2 my-5 place-content-center">
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
