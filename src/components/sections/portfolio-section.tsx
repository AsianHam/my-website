import { forwardRef } from 'react';
import { Project } from '../project';

export const PortfolioSection = forwardRef<HTMLElement>((_props, ref) => (
  <section
    id='portfolio'
    className='flex flex-col justify-center w-full h-full px-40 py-40'
    ref={ref}
  >
    <h2 className='text-4xl text-torch-red'>My Portfolio</h2>
    <div className='grid grid-cols-3 w-full h-fit place-content-evenly gap-8 pt-16'>
      <Project
        href='https://github.com/AsianHam/calendarAdd'
        title='Managing Google Calendar Permissions at Scale'
        description='A tool for organizations to handle Google Calendar permissions for multiple calendars and users at once'
      />
      <Project
        href='https://github.com/Jacksondr5/recipe-ui'
        title='A Customizable Cookbook/Recipe App'
        description='A recipe webpage that allows you to add and customize any recipes you have, with an added "cooking mode" for a better view of each step while cooking'
      />
      <Project
        href='https://github.com/duckroller/nearb.io'
        title='Nearby POI Experience App'
        description='An android app for students at Earlham College to show campus buildings as well as relevant POIs in the town and surrounding area'
      />
    </div>
  </section>
));

PortfolioSection.displayName = 'PortfolioSection';
