const { getPath } = require('./utils')

module.exports = {
  [getPath('/curriculum/')]: getCurriculumSidebar(),
  [getPath('/projects/')]: getProjectsSidebar(),
}

function getCurriculumSidebar() {
  return [
    {
      text: 'Curriculum',
      children: [
        {
          text: 'What is a Battery?',
          link: '/curriculum/battery'
        },
        {
          text: 'What is a Circuit?',
          link: '/curriculum/circuits'
        },
        {
          text: 'What is Electricity?',
          link: '/curriculum/electricity'
        },
        {
          text: 'What is an LED?',
          link: '/curriculum/led'
        },
        {
          text: 'What is Programming?',
          link: '/curriculum/programming-101'
        },
        {
          text: 'What is Soldering?',
          link: '/curriculum/soldering'
        },
      ]
    },
    
  ]
}

function getProjectsSidebar() {
  return [
    {
      text: 'Projects',
      children: [
        {
          text: 'Beginner Projects',
          link: '/projects/beginner',
          children: [
            {
              text: 'Squishy Circuits', 
              link: '/projects/squishy-circuits'
            },
            {
              text: 'Paper Circuits', 
              link: '/projects/paper-circuits'
            },
          ]
        },
        {
          text: 'Intermediate Projects',
          link: '/projects/intermediate'
        },
        {
          text: 'Advanced Projeccts',
          link: '/projects/advanced'
        },
        
        
      ]
    }
    
  ]
}

