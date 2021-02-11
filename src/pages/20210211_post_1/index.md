---
path: "/post-one"
date: "2021-02-11"
title: "My first post"
author: "Karsten"
---

Dette er den *første* posten

Gatsby


Intro Traversy https://www.youtube.com/watch?v=6YhqQ2ZW1sc


npm i -g gatsby-cli
gatsby new gatsby_crash_course

cd new gatsby_crash_course
code .


filer

package.json		//dependencies
src/	
components/			header.js header component, har masse styling og site tittel.
layout/				layout.css, index.js Helmet - head, styling (kan bruke global styling), graphQL for å få site metadata
pages/				index.js. Functional React component, arrow function, div, link, export

gatsby develop


Lag nye sider
Lag fil med <sidenavn>.js i /pages/


<p>Lag nye sider ved å lage ny*.js fil i pages, trykk rfc+tab</p>


Naviger til localhost:8000/<sidenavn>

Meny
Lag ny componets/menu.js, importer denne i layout.js

Editer layout.css <a> tag for å endre link karakter 



Blog
Installer plugins gatsby-source-filesystem (lar oss jobbe med filsystemet), gatsby-transformer-remark (transformerer *.md filer til html), gatsby-plugin-catch-links (intercepter lokale linker fra markdown og andre ikke-react sider og lar klienten gjøre en push-greie så den ikke trenger å refreshes manuelt).

npm i gatsby-source-filesystem gatsby-transformer-remark gatsby-plugin-catch-links

Sjekk i package.json og sjekk at disse er kommet inn der. 

Deretter må de konfigureres i gatsby-config.js, legg til 

    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    'gatsby-transformer-remark'




Under Pages/ lag katalog med dato 
Under denne lag fil kalt index.md. index.md starter med --- som kalles frontmatter 


---
path: "/post-one"
date: "2021-02-11"
title: "My first post"
author: "Karsten"
---

Dette er den *første* posten





Vi bruker graphql, så gjør spørringer mot *.md filene
http://localhost:8000/___graphql

Kjør spørring

query MyQuery {
  sitePlugin {
    id
  }
  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          title
          path
          date
          author
        }
        excerpt
      }
    }
  }
}


Må lage en template for å vise hver blogpost. Lag katalog /src/templates/ og fil blog-posts.js


Må så legge til i gatsby-node.js for å legge til create page API. 




