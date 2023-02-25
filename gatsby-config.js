/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `www.ichi-t.me`,
        siteUrl: `https://www.ichi-t.me`,
        siteTitle: `www.ichi-t.me`,
        siteTitleAlt: `www.ichi-t.me`,
        siteHeadline: `www.ichi-t.me`,
    },
    plugins: [
        {
            resolve: `@lekoarts/gatsby-theme-minimal-blog`,
            options: {
                showLineNumbers: true,
                navigation: [
                    {
                        title: `Blog`,
                        slug: `/blog`,
                    },
                    {
                        title: `About`,
                        slug: `/about`,
                    },
                ],
                externalLinks: [
                    {
                        name: `Twitter`,
                        url: `https://twitter.com/sanex_now`,
                    },
                    {
                        name: `Homepage`,
                        url: `https://www.ichi-t.me`,
                    },
                ],
            },
        },
    ],
}
