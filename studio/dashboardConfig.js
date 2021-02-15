export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '602ae53c8f30cba7fbecac3e',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ikqaj4ak',
                  apiId: '15c786d9-4c3d-448d-b907-1a08b2dae2bd'
                },
                {
                  buildHookId: '602ae53ca855fb9534e2e006',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-bsw3v3rj',
                  apiId: 'd38eb17b-2e98-497a-9854-1b142dad0adf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/azeemhassni/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-bsw3v3rj.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
