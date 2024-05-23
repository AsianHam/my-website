export const Tag = ({ textContent }: { textContent: string }) => (
  <div className='flex relative py-2 pl-3 pr-4 mt-0.5 text-lg bg-black h-fit leading-none text-alabaster after:content-[""] after:absolute after:top-0 after:right-0 after:border-t-[17px] after:border-t-shark after:border-b-[17px] after:border-b-shark after:border-l-[10px] after:border-l-black before:w-0'>
    {textContent}
  </div>
);
