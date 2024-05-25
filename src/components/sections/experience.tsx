import { forwardRef } from 'react';
import { ExperienceCard } from '../experience-card';

export const ExperienceSection = forwardRef<HTMLElement>((_props, ref) => (
  <section
    id='experience'
    className='flex flex-col justify-center w-full h-full pt-30'
    ref={ref}
  >
    <h2 className='768:pl-16 flex text-torch-red text-4xl'>Experience</h2>
    <div className='pt-10 768:px-20 768:pt-20 768:pb-20 flex flex-col gap-8'>
      <ExperienceCard
        tagText='2022'
        title='Full-Stack Software Developer'
        subtitle='The Bank of London, Charlotte, NC'
        textContent={[
          <p key='exp 3 sentence 1'>
            Built an enterprise-wide component library using Typescript,
            Tailwind, Storybook, RadixUI, Rive, and Framer Motion that over 40
            developers used to build complex banking applications. Examples
            include a navigation bar, inputs, and modals.
          </p>,
          <br key='exp 3 break 1' />,
          <p key='exp 3 sentence 2'>
            Built an automated end-to-end Playwright testing framework to
            standardize automated testing across 12 UI projects used by 5 teams.
            This enabled same-day deployments for several apps.
          </p>,
          <br key='exp 3 break 2' />,
          <p key='exp 3 sentence 3'>
            Implemented CI/CD pipelines with GH actions and Argo Workflows to
            better deploy and test all 12 UI projects.
          </p>,
          <br key='exp 3 break-3' />,
          <p key='exp 3 sentence 4'>
            Developed an internal UI tool with our APIs for the business team to
            approve and manage customer accounts. This allowed the bank to move
            forward with accepting and onboarding new customers.
          </p>,
          <br key='exp 3 break-4' />,
          <p key='exp 3 sentence 5'>
            Maintained and extended the Corporate Website.
          </p>,
        ]}
      />
      <ExperienceCard
        tagText='2019'
        title='Service Specialist'
        subtitle='Columbia University, New York, NY'
        textContent={[
          <p key='exp 2 sentence 1'>
            Designed and implemented software for better engagement with faculty
            and staff from the public and students.
          </p>,
          <br key='exp 2 break 1' />,
          <p key='exp 2 sentence 2'>
            Improved and maintained hardware used by the school.
          </p>,
          <br key='exp 2 break 2' />,
          <p key='exp 2 sentence 3'>
            Created multiple API integrated tools to assist in systems level
            tasks using Python, including Google Calendar, Google Sheets,
            Zendesk, and Zoom.
          </p>,
          <br key='exp 2 break 3' />,
          <p key='exp 2 sentence 4'>
            Designed and implemented an interactive display that connects a
            seating database with a touch interface for the public to find where
            staff and faculty are sitting in a building.
          </p>,
          <br key='exp 2 break 4' />,
          <p key='exp 2 sentence 5'>
            Configured and maintained a website and adjoining database to
            organize and implement summer courses for the school.
          </p>,
          <br key='exp 2 break 5' />,
          <p key='exp 2 sentence 6'>
            Created a stateless Flask and React server to handle API calls
            between the various systems and tools that are used by the school.
          </p>,
        ]}
      />
      <ExperienceCard
        tagText='2018'
        title='Research Student'
        subtitle='Columbia University, New York, NY'
        textContent={[
          <p key='exp 1 sentence 1'>
            Developed and implemented a tool that uses GDAL libraries and
            methods to create a rasterized image using output from the Solutions
            object in GeoClaw using python.
          </p>,
          <br key='exp 1 break 1' />,
          <p key='exp 1 sentence 2'>
            Integrated new rasterizing method into ClawPack while maintaining
            original plotting settings and methods.
          </p>,
          <br key='exp 1 break 2' />,
          <p key='exp 1 sentence 3'>
            Optimized method for use by a supercomputer to handle large
            datasets.
          </p>,
        ]}
      />
    </div>
  </section>
));

ExperienceSection.displayName = 'ExperienceSection';
