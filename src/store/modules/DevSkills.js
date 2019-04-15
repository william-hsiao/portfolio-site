export default {
  state: {
    summary: [
      {
        name: 'Languages',
        items: [ 'JavaScript', 'Java', 'C/C++' ],
      },
      {
        name: 'Front-End',
        items: [ 'Vue.js', 'Sass', 'Angular' ],
      },
      {
        name: 'Back-End',
        items: [ 'Node.js', 'MySQL', 'MongoDB' ],
      },
      {
        name: 'Services',
        items: [ 'Wercker', 'AWS', 'TestCafe' ],
      },
    ],
    detailed: [
      {
        name: 'Languages',
        subcategories: [
          {
            name: '',
            items: [
              { name: 'JavaScript', rating: 5 },
              { name: 'TypeScript', rating: 4 },
              { name: 'Java', rating: 4 },
              { name: 'C/C++', rating: 4 },
              { name: 'C#', rating: 4 },
              { name: 'Python', rating: 3 },
              { name: 'Ruby', rating: 3 },
              { name: 'Go', rating: 2 },
              { name: 'Fortran', rating: 1 },
            ]
          }
        ],
      },
      {
        name: 'Front-End',
        subcategories: [
          {
            name: '',
            items: [ 
              { name: 'Vue.js', rating: 5 },
              { name: 'Sass', rating: 5 },
              { name: 'Angular', rating: 2 }
            ],
          }
        ],
      },
      {
        name: 'Back-End',
        subcategories: [
          {
            name: '',
            items: [
              { name: 'Node.js', rating: 5 },
              { name: 'Rails', rating: 3 },
            ]
          },
          {
            name: 'Databases',
            items: [
              { name: 'MySQL', rating: 4 },
              { name: 'MongoDB', rating: 4 },
            ],
          }
        ],
      },
      {
        name: 'Services & Others',
        subcategories: [
          {
            name: '',
            items: [
              { name: 'npm', rating: 5 },
              { name: 'Git', rating: 4 },
              { name: 'Unity', rating: 3 },
              { name: 'nginx', rating: 2 },
            ],
          },
          {
            name: 'Tests & CI',
            items: [
              { name: 'Wercker', rating: 4 },
              { name: 'TestCafe', rating: 4 },
              { name: 'Mocha', rating: 3 },
              { name: 'Jasmine', rating: 3 },
            ],
          },
          {
            name: 'AWS',
            items: [
              { name: 'S3', rating: 4 },
              { name: 'CloudFront', rating: 4 },
              { name: 'IAM', rating: 4 },
              { name: 'EC2', rating: 2 },
            ],
          },
          {
            name: 'OS Familiarity',
            items: [
              { name: 'Windows', rating: 5 },
              { name: 'Mac OS X', rating: 4 },
              { name: 'Linux', rating: 3 },
            ],
          },
          {
            name: 'Graphic Design',
            items: [
              { name: 'Adobe Photoshop', rating: 4 },
              { name: 'GIMP', rating: 4 },
            ],
          },
        ],
      }
    ]
  }
}
