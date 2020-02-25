module.exports = {
    locales: {
      '/': {
        lang: 'hu-HU', // this will be set as the lang attribute on <html>
        title: 'VuePress',
        description: 'tomuwhu oldal'
      }
    },
    title: "Dr. Németh Tamás",
    description: "Dr. Németh Tamás oktatási weboldal - közoktatás",
    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
      logo: '/profile.png',
      displayAllHeaders: true,
      nav: [
        { text: "Osztályok", 
          items: [
            { text: '9.C', link:'/9c.html' },
            { text: '9.D', link:'/9d.html' },
            { text: 'Fakultáció', link:'/fak.html' },
          ]
        },
        { text: "Példaprogramok",
          link: "/pp/" 
        },
        { text: "CV",
          link: "/cv/" 
        }
      ],
      lastUpdated: 'Utoljára frissítve',
      serviceWorker: {
        updatePopup: { 
          message: "Új tartalom elérhető!",
          buttonText: "Frissítés" 
        }
      }
    },
    plugins: [ 
      'latex',
      ['minimal-analytics', {ga: 'UA-159037546-1'}]
    ],
    markdown: {
      toc: { includeLevel: [2, 3] },
      lineNumbers: true,
      anchor: { permalink: false }
    }
  };
  
  