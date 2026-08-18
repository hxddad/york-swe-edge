import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  Sidebar: [
    {
      type: 'doc',
      id: 'home',  
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
    {
      type: 'doc',
      id: 'advice_tips_faqs', 
    },
  ],
};

export default sidebars;