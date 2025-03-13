import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  Sidebar: [
    {
      type: 'doc',
      id: 'intro',  
    },
    {
      type: 'doc',
      id: 'faq',  
    },
    {
      type: 'category',
      label: 'Courses', 
      items: [
        {
          type: 'doc',
          id: 'courses/1st-year', 
          label: 'First Year', 
        },
        {
          type: 'doc',
          id: 'courses/2nd-year', 
          label: 'Second Year', 
        },
        {
          type: 'doc',
          id: 'courses/3rd-year', 
          label: 'Third Year', 
        }
      
      ],
    },
  ],
};

export default sidebars;