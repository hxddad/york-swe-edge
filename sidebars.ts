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
      type: 'doc',
      id: 'advice_tips', 
    },
    {
      type: 'category',
      label: 'Courses', 
      items: [
        {
          type: 'doc',
          id: 'courses/1st-year', 
          label: '1st Year', 
        },
        {
          type: 'doc',
          id: 'courses/2nd-year', 
          label: '2nd Year', 
        },
        {
          type: 'doc',
          id: 'courses/3rd-year', 
          label: '3rd Year', 
        }
      
      ],
    },
  ],
};

export default sidebars;