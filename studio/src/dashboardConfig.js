export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5fa162a6076754c7f25b2d6d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-zz79wvj3',
                  apiId: 'd04467e6-d23f-4951-a764-45ce1b5433cd'
                },
                {
                  buildHookId: '5fa162a6723f6dd1dfb7518a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ndce3qop',
                  apiId: '7a1807f7-2e49-4fd5-ac58-b24265eb3954'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gladiussdv/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ndce3qop.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
