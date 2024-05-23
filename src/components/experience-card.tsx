import { ReactElement } from 'react';
import { Tag } from './tag';

interface ExperienceCardProps {
  title: string;
  subtitle: string;
  textContent: ReactElement[];
  tagText: string;
}

export const ExperienceCard = ({
  title,
  subtitle,
  textContent,
  tagText,
}: ExperienceCardProps) => (
  <div className='flex'>
    <Tag textContent={tagText} />
    <div className='flex flex-col w-4 mx-4 items-center shrink-0'>
      <span className='w-full h-4 shrink-0 mt-3 bg-torch-red rounded-full' />
      <span className='w-0.5 h-full bg-alabaster mt-4' />
    </div>
    <div className='flex flex-col place-self-start'>
      <h3 className='text-3xl text-alabaster font-bold'>{title}</h3>
      <h4 className='text-xl text-alabaster'>{subtitle}</h4>
      <span className='text-iron mt-6'>{textContent}</span>
    </div>
  </div>
);
