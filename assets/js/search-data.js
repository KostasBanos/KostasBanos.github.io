// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "PUBLICATIONS",
          description: "Research articles, preprints, and manuscripts under construction in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "TEACHING",
          description: "Teaching and mentoring activities in AI, machine learning, and computational finance.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-hobbies",
          title: "HOBBIES",
          description: "Personal interests and passions that fuel creativity and balance.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/hobbies/";
          },
        },{id: "post-coming-soon",
        
          title: "Coming soon",
        
        description: "Placeholder post.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/empty-post/";
          
        },
      },{id: "news-excited-to-begin-my-master-s-in-statistics-at-mcmaster-university-with-full-scholarship",
          title: 'Excited to begin my Master’s in Statistics at McMaster University with full scholarship!...',
          description: "",
          section: "News",},{id: "news-i-will-join-ibm-research-for-an-invited-summer-project-on-principled-scientific-discovery-with-formal-methods",
          title: 'I will join IBM Research for an invited summer project on “Principled Scientific...',
          description: "",
          section: "News",},{id: "news-successfully-defended-my-master-s-thesis-power-law-non-parametric-temporal-models-for-continuous-time-document-streams-at-mcmaster-university",
          title: 'Successfully defended my Master’s thesis, “Power-Law Non-Parametric Temporal Models for Continuous-Time Document Streams,”...',
          description: "",
          section: "News",},{id: "news-thrilled-to-join-the-ph-d-program-in-statistics-at-mcmaster-university-under-the-supervision-of-prof-narayanaswamy-balakrishnan-my-research-will-focus-on-statistical-machine-learning-bayesian-nonparametrics-probabilistic-modeling-and-stochastic-processes-with-applications-in-language-modeling-and-quantitative-finance",
          title: 'Thrilled to join the Ph.D. program in Statistics at McMaster University under the...',
          description: "",
          section: "News",},{id: "projects-lora-fine-tuning-without-gpus",
          title: 'LoRA Fine-Tuning Without GPUs',
          description: "A CPU-Efficient Meta-Generation Framework for Large Language Models",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-volterra-processes-approximation",
          title: 'Volterra Processes Approximation',
          description: "Low-dimensional approximations using non-positive curvature approach for mathematical finance",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-statistical-arbitrage-trading-system",
          title: 'Statistical Arbitrage Trading System',
          description: "Quantitative trading strategies using genetic algorithms and fuzzy logic for FX and gold markets",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-geometric-deep-learning-for-time-series",
          title: 'Geometric Deep Learning for Time Series',
          description: "Hypernetworks and geometric neural architectures for financial time series modeling",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-option-pricing-with-machine-learning",
          title: 'Option Pricing with Machine Learning',
          description: "Classic machine learning approaches for financial derivatives pricing and risk management",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-grapevine-leaves-classification",
          title: 'Grapevine Leaves Classification',
          description: "Deep learning approach for grape variety identification using Convolutional Neural Networks and computer vision",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%62%61%6E%6F%73%6B@%6D%63%6D%61%73%74%65%72.%63%61", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/KostasBanos", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/konstantinos-banos-794b81267", "_blank");
        },
      },{
        id: 'social-cv_url',
        title: 'Cv_url',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
