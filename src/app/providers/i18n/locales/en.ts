export default {
    translation: {
        header: {
            title: 'Profile',
            home: 'home',
            works: 'works',
            skills: 'skills',
            about: 'about-me',
            contacts: 'contacts',
        },
        hero: {
            title: 'Bargest is a <1>web designer</1> and <1>front-end developer</1>',
            description: 'Turning complex ideas into elegant, high-performance web solutions.',
            button: 'Contact Me !',
            status: 'Currently working on <1>Portfolio</1>',
            quote: "I'm not crazy, I'm just really, really good at what I do!",
            author: 'Homelander',
        },
        projects: {
            title: '#<1>projects</1>',
            viewAll: 'View all',
            labels: {
                checkCode: 'Check code',
                live: 'Live',
            },
            items: {
                infostorm: {
                    description:
                        'Automated news aggregator with XML parsing and background updates for a focused, ad-free reading experience.',
                },
                weather: {
                    description:
                        'High-precision weather tracking system delivering real-time atmospheric metrics and environmental data.',
                },
                necoChat: {
                    description:
                        'Advanced communication platform featuring secure JWT-auth and complex state management for real-time messaging.',
                },
            },
        },
        skills: {
            title: '#<1>skills</1>',
            warning: 'Coffee level is low (15%).',
            critical: 'Energy levels below threshold. \n' + 'System performance throttled.',
            status: 'online and motivated',
        },
        about: {
            title: '#<1>about-me</1>',
            greeting: "Hello, I'm Bargest!",
            paragraphs: {
                first: `
                  I’m a Moscow-based front-end developer with a focus on building scalable
                  and architecturally sound web applications. For over a year, I’ve been
                  transforming complex ideas into clean, high-performance code, ensuring
                  that every project is as robust under the hood as it is beautiful on the surface.
                `,
                second: `
                  My approach is rooted in precision: I don't just build interfaces;
                  I design sustainable systems. I am deeply passionate about mastering the
                  latest frameworks and modernizing the developer experience to deliver
                  seamless, user-centric products.
                `,
            },
            button: 'Read More',
        },
        contacts: {
            title: '#<1>contacts</1>',
            text:
                'Let’s work together! I’m always open to new opportunities, custom projects, and creative collaborations. \n' +
                'Let’s make something great together!',
            messages: 'Message me here',
        },
        notFound: {
            title: '404: Site Under Construction',
            description: "This page hasn't been abandoned!\nIt's just in a state of ",
            highlight: '"eternal refactoring"',
            subtext:
                'The work is in full swing and the page is very much alive\nI just need a few more shots of espresso.',
            backButton: 'Back to stability',
            retryButton: "Check again (maybe I'm done?)",
        },
    } as const,
}
