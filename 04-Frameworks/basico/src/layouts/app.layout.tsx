export const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className='grid grid-cols-1 grid-rows-1'>
      <div className='flex h-10 px-3 bg-green-900 text-white justify-end items-center'>Logged:</div>
      {children}
    </div>
  );
};
