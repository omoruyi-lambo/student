const students = [
  {
    id: "isaiah",
    name: "Isaiah Adeyemi",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    track: "Frontend Engineering",
    cohort: "Cohort 2024",
    role: "Frontend Developer",
    bio: "Passionate frontend developer specializing in crafting responsive, user-centric web applications with modern JavaScript frameworks.",
    about: "Isaiah is a dedicated Frontend Engineering student at Deskon Academy with a strong foundation in HTML, CSS, and JavaScript. He is passionate about creating intuitive user interfaces and has hands-on experience with React and modern frontend tooling. His projects demonstrate a keen attention to detail and a commitment to delivering exceptional user experiences.",
    goals: "To become a world-class frontend engineer who builds accessible, performant web applications that make a difference. Isaiah aims to contribute to open-source projects and eventually mentor aspiring developers.",
    available: true,
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "React", level: 82 },
      { name: "TypeScript", level: 75 },
      { name: "UI/UX", level: 70 }
    ],
    projects: [
      {
        title: "E-Commerce Dashboard",
        description: "A full-featured admin dashboard for managing products, orders, and analytics with real-time data visualization.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        tech: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
        videoId: "dQw4w9WgXcQ",
        liveLink: "https://example.com/demo/e-commerce-dashboard",
        githubLink: "https://github.com/example/e-commerce-dashboard"
      },
      {
        title: "Task Management App",
        description: "A Kanban-style task management application with drag-and-drop functionality and team collaboration features.",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
        tech: ["React", "Redux", "Node.js", "MongoDB"],
        videoId: "jNQXAC9IVRw",
        liveLink: "https://example.com/demo/e-commerce-dashboard",
        githubLink: "https://github.com/example/e-commerce-dashboard"
      }
    ],
    certificates: [
      { title: "Frontend Development Fundamentals", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop", date: "March 2024" },
      { title: "JavaScript Advanced Concepts", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop", date: "June 2024" },
      { title: "React & Modern Frontend", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop", date: "September 2024" }
    ],
    social: {
      email: "isaiah.adeyemi@deskon.edu",
      linkedin: "https://linkedin.com/in/isaiah-adeyemi",
      github: "https://github.com/isaiahadeyemi",
      twitter: "https://twitter.com/isaiahadeyemi"
    },
    timeline: [
      { year: "Jan 2024", title: "Enrolled at Deskon Academy", description: "Began the Frontend Engineering track with a focus on modern web technologies." },
      { year: "Mar 2024", title: "Completed HTML & CSS Mastery", description: "Earned certificate in frontend fundamentals with distinction." },
      { year: "Jun 2024", title: "JavaScript Advanced Certification", description: "Completed advanced JavaScript concepts including ES6+ and asynchronous programming." },
      { year: "Aug 2024", title: "Built E-Commerce Dashboard", description: "Major project milestone achieved - a full-featured admin dashboard." },
      { year: "Oct 2024", title: "React Developer Certification", description: "Completed comprehensive React training with real-world projects." }
    ],
    contact: {
      email: "isaiah.adeyemi@deskon.edu",
      linkedin: "linkedin.com/in/isaiah-adeyemi",
      github: "github.com/isaiahadeyemi",
      portfolio: "isaiahadeyemi.dev"
    }
  },
  {
    id: "sarah",
    name: "Sarah Okafor",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face",
    track: "Backend Engineering",
    cohort: "Cohort 2024",
    role: "Backend Developer",
    bio: "Detail-oriented backend engineer with expertise in building scalable server-side applications and RESTful APIs.",
    about: "Sarah is a passionate Backend Engineering student at Deskon Academy who thrives on building robust server-side solutions. With a strong grasp of Node.js, Python, and database management, she excels at creating efficient and scalable backend architectures. Her problem-solving skills and analytical mindset make her a valuable asset to any development team.",
    goals: "To master backend architecture and cloud infrastructure, building systems that handle millions of requests while maintaining security and performance standards.",
    available: true,
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "Express", level: 88 },
      { name: "PostgreSQL", level: 82 },
      { name: "MongoDB", level: 78 },
      { name: "Docker", level: 72 }
    ],
    projects: [
      {
        title: "Payment Gateway API",
        description: "A secure payment processing API with support for multiple payment providers, webhooks, and transaction monitoring.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
        tech: ["Node.js", "Express", "PostgreSQL", "Redis", "Stripe"],
        videoId: "9bZkp7q19f0",
        liveLink: "https://example.com/demo/e-commerce-dashboard",
        githubLink: "https://github.com/example/e-commerce-dashboard"
      },
      {
        title: "Real-Time Chat Service",
        description: "A scalable real-time messaging service with WebSocket support, message queuing, and end-to-end encryption.",
        image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=600&h=400&fit=crop",
        tech: ["Python", "FastAPI", "WebSocket", "Redis", "RabbitMQ"],
        videoId: "dQw4w9WgXcQ",
        liveLink: "https://example.com/demo/e-commerce-dashboard",
        githubLink: "https://github.com/example/e-commerce-dashboard"
      }
    ],
    certificates: [
      { title: "Backend Development Fundamentals", image: "https://images.unsplash.com/photo-1515879218367-8466d910ad0e?w=300&h=200&fit=crop", date: "April 2024" },
      { title: "Database Design & Management", image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=300&h=200&fit=crop", date: "July 2024" }
    ],
    social: {
      email: "sarah.okafor@deskon.edu",
      linkedin: "https://linkedin.com/in/sarah-okafor",
      github: "https://github.com/sarahokafor",
      twitter: "https://twitter.com/sarahokafor"
    },
    timeline: [
      { year: "Jan 2024", title: "Enrolled at Deskon Academy", description: "Started the Backend Engineering track." },
      { year: "Apr 2024", title: "Backend Development Certification", description: "Completed backend fundamentals with hands-on API projects." },
      { year: "Jul 2024", title: "Database Design Certification", description: "Mastered SQL, NoSQL, and database optimization techniques." },
      { year: "Sep 2024", title: "Built Payment Gateway API", description: "Major project milestone - secure payment processing system." }
    ],
    contact: {
      email: "sarah.okafor@deskon.edu",
      linkedin: "linkedin.com/in/sarah-okafor",
      github: "github.com/sarahokafor",
      portfolio: "sarahokafor.dev"
    }
  },
  {
    id: "michael",
    name: "Michael Ogunlade",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    track: "Full Stack Engineering",
    cohort: "Cohort 2023",
    role: "Full Stack Developer",
    bio: "Versatile full stack developer with expertise in building end-to-end web applications using modern technologies.",
    about: "Michael is a Full Stack Engineering student at Deskon Academy who brings ideas to life from concept to deployment. He combines frontend aesthetics with backend robustness, creating seamless digital experiences. His comprehensive understanding of the entire development stack allows him to build cohesive, well-architected applications.",
    goals: "To become a distinguished full stack architect capable of designing and implementing complex distributed systems that serve millions of users.",
    available: true,
    skills: [
      { name: "React", level: 92 },
      { name: "Node.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "PostgreSQL", level: 85 },
      { name: "GraphQL", level: 78 },
      { name: "AWS", level: 75 },
      { name: "Docker", level: 72 },
      { name: "Next.js", level: 80 }
    ],
    projects: [
      {
        title: "Learning Management System",
        description: "A comprehensive LMS platform with course creation, student management, assessments, and progress tracking.",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
        tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "AWS"],
        videoId: "jNQXAC9IVRw",
        liveLink: "https://example.com/demo/e-commerce-dashboard",
        githubLink: "https://github.com/example/e-commerce-dashboard"
      },
      {
        title: "Food Delivery Platform",
        description: "A full-stack food delivery application with real-time order tracking, payment integration, and vendor management.",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",
        tech: ["React", "Node.js", "MongoDB", "Socket.io", "Stripe"],
        videoId: "9bZkp7q19f0",
        liveLink: "https://example.com/demo/e-commerce-dashboard",
        githubLink: "https://github.com/example/e-commerce-dashboard"
      },
      {
        title: "Analytics Dashboard",
        description: "A real-time analytics dashboard with interactive charts, data filtering, and export capabilities.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
        tech: ["React", "D3.js", "Python", "FastAPI", "Redis"],
        videoId: "dQw4w9WgXcQ",
        liveLink: "https://example.com/demo/e-commerce-dashboard",
        githubLink: "https://github.com/example/e-commerce-dashboard"
      }
    ],
    certificates: [
      { title: "Full Stack Development Mastery", image: "https://images.unsplash.com/photo-1531482615718-f3cc5f2c87e7?w=300&h=200&fit=crop", date: "December 2023" },
      { title: "Cloud Architecture & AWS", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=200&fit=crop", date: "March 2024" },
      { title: "Advanced Database Systems", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop", date: "June 2024" }
    ],
    social: {
      email: "michael.ogunlade@deskon.edu",
      linkedin: "https://linkedin.com/in/michael-ogunlade",
      github: "https://github.com/michaelogunlade",
      twitter: "https://twitter.com/michaelogunlade"
    },
    timeline: [
      { year: "Sep 2023", title: "Enrolled at Deskon Academy", description: "Began the Full Stack Engineering track." },
      { year: "Dec 2023", title: "Full Stack Certification", description: "Completed full stack development mastery program." },
      { year: "Mar 2024", title: "AWS Cloud Certification", description: "Earned certification in cloud architecture and AWS services." },
      { year: "Jun 2024", title: "Built LMS Platform", description: "Major project milestone - comprehensive learning management system." },
      { year: "Sep 2024", title: "Built Food Delivery Platform", description: "Completed end-to-end food delivery application." }
    ],
    contact: {
      email: "michael.ogunlade@deskon.edu",
      linkedin: "linkedin.com/in/michael-ogunlade",
      github: "github.com/michaelogunlade",
      portfolio: "michaelogunlade.dev"
    }
  },
  {
    id: "david",
    name: "David Uzochukwu",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    track: "UI/UX Design",
    cohort: "Cohort 2024",
    role: "UI/UX Designer",
    bio: "Creative UI/UX designer focused on crafting intuitive, accessible, and visually stunning digital experiences.",
    about: "David is a talented UI/UX Design student at Deskon Academy with a passion for human-centered design. He combines aesthetic sensibility with user research to create interfaces that are both beautiful and functional. His design process emphasizes empathy, iteration, and attention to every pixel.",
    goals: "To create design systems that empower products and delight users, bridging the gap between visual design and technical implementation.",
    available: true,
    skills: [
      { name: "Figma", level: 95 },
      { name: "Adobe XD", level: 88 },
      { name: "UI Design", level: 92 },
      { name: "UX Research", level: 85 },
      { name: "Prototyping", level: 90 },
      { name: "Design Systems", level: 82 }
    ],
    projects: [
      {
        title: "Fintech Mobile App Design",
        description: "A complete mobile banking app design including onboarding, transactions, budgeting, and analytics screens.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=600&h=400&fit=crop",
        tech: ["Figma", "Principle", "Illustrator"],
        videoId: "jNQXAC9IVRw",
        liveLink: "https://example.com/demo/e-commerce-dashboard",
        githubLink: "https://github.com/example/e-commerce-dashboard"
      },
      {
        title: "E-Commerce Redesign",
        description: "A comprehensive redesign of an e-commerce platform focusing on conversion optimization and user experience.",
        image: "https://images.unsplash.com/photo-1556742111-a301076daf9f?w=600&h=400&fit=crop",
        tech: ["Figma", "Maze", "After Effects"],
        videoId: "9bZkp7q19f0",
        liveLink: "https://example.com/demo/e-commerce-dashboard",
        githubLink: "https://github.com/example/e-commerce-dashboard"
      }
    ],
    certificates: [
      { title: "UI/UX Design Professional", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=200&fit=crop", date: "February 2024" },
      { title: "Design Systems Masterclass", image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=300&h=200&fit=crop", date: "May 2024" }
    ],
    social: {
      email: "david.uzochukwu@deskon.edu",
      linkedin: "https://linkedin.com/in/david-uzochukwu",
      github: "https://github.com/daviduzo",
      twitter: "https://twitter.com/daviduzo"
    },
    timeline: [
      { year: "Jan 2024", title: "Enrolled at Deskon Academy", description: "Began the UI/UX Design track." },
      { year: "Feb 2024", title: "UI/UX Design Certification", description: "Completed professional UI/UX design program." },
      { year: "May 2024", title: "Design Systems Certification", description: "Mastered design systems and component libraries." },
      { year: "Jul 2024", title: "Fintech App Design", description: "Major project - complete fintech mobile app design." }
    ],
    contact: {
      email: "david.uzochukwu@deskon.edu",
      linkedin: "linkedin.com/in/david-uzochukwu",
      github: "github.com/daviduzo",
      portfolio: "daviduzo.design"
    }
  },
  {
    id: "emmanuel",
    name: "Emmanuel Nwachukwu",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face",
    track: "Mobile Development",
    cohort: "Cohort 2024",
    role: "Mobile Developer",
    bio: "Innovative mobile developer building cross-platform applications with Flutter and React Native.",
    about: "Emmanuel is a Mobile Development student at Deskon Academy who is passionate about creating exceptional mobile experiences. He specializes in cross-platform development using Flutter and React Native, delivering apps that feel native on both iOS and Android. His portfolio includes several production-ready applications.",
    goals: "To build mobile applications that solve real-world problems and reach millions of users across app stores globally.",
    available: false,
    skills: [
      { name: "Flutter", level: 92 },
      { name: "React Native", level: 88 },
      { name: "Dart", level: 90 },
      { name: "Firebase", level: 85 },
      { name: "Kotlin", level: 72 },
      { name: "Swift", level: 68 }
    ],
    projects: [
      {
        title: "Health Tracker App",
        description: "A comprehensive health and fitness tracking app with workout plans, nutrition logging, and progress analytics.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
        tech: ["Flutter", "Dart", "Firebase", "Health API"],
        videoId: "dQw4w9WgXcQ",
        liveLink: "https://example.com/demo/e-commerce-dashboard",
        githubLink: "https://github.com/example/e-commerce-dashboard"
      },
      {
        title: "Social Commerce App",
        description: "A social shopping app where users can discover products, follow brands, and shop directly from their feeds.",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop",
        tech: ["React Native", "Node.js", "MongoDB", "Firebase"],
        videoId: "jNQXAC9IVRw",
        liveLink: "https://example.com/demo/e-commerce-dashboard",
        githubLink: "https://github.com/example/e-commerce-dashboard"
      }
    ],
    certificates: [
      { title: "Mobile Development with Flutter", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=200&fit=crop", date: "March 2024" },
      { title: "React Native Advanced", image: "https://images.unsplash.com/photo-1526498467120-99b1a51c01b8?w=300&h=200&fit=crop", date: "June 2024" }
    ],
    social: {
      email: "emmanuel.nwachukwu@deskon.edu",
      linkedin: "https://linkedin.com/in/emmanuel-nwachukwu",
      github: "https://github.com/emmanuelnwachukwu",
      twitter: "https://twitter.com/emmanuel_n"
    },
    timeline: [
      { year: "Jan 2024", title: "Enrolled at Deskon Academy", description: "Began the Mobile Development track." },
      { year: "Mar 2024", title: "Flutter Certification", description: "Completed mobile development with Flutter program." },
      { year: "Jun 2024", title: "React Native Certification", description: "Advanced React Native development completed." },
      { year: "Aug 2024", title: "Built Health Tracker App", description: "Major project - comprehensive health tracking application." }
    ],
    contact: {
      email: "emmanuel.nwachukwu@deskon.edu",
      linkedin: "linkedin.com/in/emmanuel-nwachukwu",
      github: "github.com/emmanuelnwachukwu",
      portfolio: "emmanuelnwachukwu.dev"
    }
  },
  {
    id: "grace",
    name: "Grace Obi",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    track: "Data Science",
    cohort: "Cohort 2024",
    role: "Data Scientist",
    bio: "Analytical data scientist skilled in machine learning, statistical analysis, and data visualization.",
    about: "Grace is a Data Science student at Deskon Academy with a strong foundation in mathematics and statistics. She excels at extracting insights from complex datasets and building predictive models. Her work combines technical rigor with business acumen, making her findings actionable and impactful.",
    goals: "To leverage data science and machine learning to solve challenging problems in healthcare, finance, and social impact sectors.",
    available: true,
    skills: [
      { name: "Python", level: 95 },
      { name: "Machine Learning", level: 90 },
      { name: "SQL", level: 88 },
      { name: "TensorFlow", level: 82 },
      { name: "Data Visualization", level: 85 },
      { name: "R", level: 72 }
    ],
    projects: [
      {
        title: "Predictive Analytics Platform",
        description: "A machine learning platform that predicts customer churn with 94% accuracy using ensemble methods.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        tech: ["Python", "scikit-learn", "Pandas", "Flask", "Docker"],
        videoId: "9bZkp7q19f0",
        liveLink: "https://example.com/demo/e-commerce-dashboard",
        githubLink: "https://github.com/example/e-commerce-dashboard"
      },
      {
        title: "NLP Sentiment Analysis Tool",
        description: "A natural language processing tool that analyzes social media sentiment for brand monitoring and market research.",
        image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop",
        tech: ["Python", "BERT", "Transformers", "FastAPI", "MongoDB"],
        videoId: "dQw4w9WgXcQ",
        liveLink: "https://example.com/demo/e-commerce-dashboard",
        githubLink: "https://github.com/example/e-commerce-dashboard"
      }
    ],
    certificates: [
      { title: "Data Science Fundamentals", image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=300&h=200&fit=crop", date: "February 2024" },
      { title: "Machine Learning Specialization", image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=300&h=200&fit=crop", date: "May 2024" },
      { title: "Deep Learning with TensorFlow", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=200&fit=crop", date: "August 2024" }
    ],
    social: {
      email: "grace.obi@deskon.edu",
      linkedin: "https://linkedin.com/in/grace-obi",
      github: "https://github.com/graceobi",
      twitter: "https://twitter.com/graceobi"
    },
    timeline: [
      { year: "Jan 2024", title: "Enrolled at Deskon Academy", description: "Began the Data Science track." },
      { year: "Feb 2024", title: "Data Science Certification", description: "Completed data science fundamentals program." },
      { year: "May 2024", title: "Machine Learning Specialization", description: "Completed comprehensive ML training." },
      { year: "Aug 2024", title: "Deep Learning Certification", description: "Mastered TensorFlow and neural networks." },
      { year: "Oct 2024", title: "Built NLP Sentiment Tool", description: "Major project - sentiment analysis platform." }
    ],
    contact: {
      email: "grace.obi@deskon.edu",
      linkedin: "linkedin.com/in/grace-obi",
      github: "github.com/graceobi",
      portfolio: "graceobi.dev"
    }
  },
  {
    id: "daniel",
    name: "Daniel Adewale",
    image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=300&fit=crop&crop=face",
    track: "DevOps Engineering",
    cohort: "Cohort 2023",
    role: "DevOps Engineer",
    bio: "Infrastructure-focused engineer automating deployments, managing cloud infrastructure, and optimizing CI/CD pipelines.",
    about: "Daniel is a DevOps Engineering student at Deskon Academy who is passionate about infrastructure automation and cloud-native technologies. He specializes in building robust CI/CD pipelines, containerization, and cloud infrastructure management. His methodology emphasizes reliability, scalability, and security in every deployment.",
    goals: "To become a cloud infrastructure architect designing resilient, automated systems that enable teams to deploy with confidence and speed.",
    available: true,
    skills: [
      { name: "Docker", level: 95 },
      { name: "Kubernetes", level: 88 },
      { name: "AWS", level: 92 },
      { name: "Terraform", level: 85 },
      { name: "Jenkins", level: 82 },
      { name: "Linux", level: 90 },
      { name: "Ansible", level: 78 },
      { name: "GitHub Actions", level: 86 }
    ],
    projects: [
      {
        title: "Cloud Infrastructure Automation",
        description: "A comprehensive infrastructure-as-code project automating AWS resource provisioning with Terraform and Ansible.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
        tech: ["AWS", "Terraform", "Ansible", "Docker", "GitHub Actions"],
        videoId: "jNQXAC9IVRw",
        liveLink: "https://example.com/demo/e-commerce-dashboard",
        githubLink: "https://github.com/example/e-commerce-dashboard"
      },
      {
        title: "Microservices Deployment Pipeline",
        description: "A complete CI/CD pipeline for microservices architecture with automated testing, building, and deployment to Kubernetes.",
        image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&h=400&fit=crop",
        tech: ["Kubernetes", "Docker", "Jenkins", "Helm", "Prometheus"],
        videoId: "9bZkp7q19f0",
        liveLink: "https://example.com/demo/e-commerce-dashboard",
        githubLink: "https://github.com/example/e-commerce-dashboard"
      }
    ],
    certificates: [
      { title: "DevOps Engineering Mastery", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop", date: "December 2023" },
      { title: "AWS Solutions Architect", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=200&fit=crop", date: "March 2024" },
      { title: "Kubernetes Administration", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&h=200&fit=crop", date: "July 2024" }
    ],
    social: {
      email: "daniel.adewale@deskon.edu",
      linkedin: "https://linkedin.com/in/daniel-adewale",
      github: "https://github.com/danieladewale",
      twitter: "https://twitter.com/danieladewale"
    },
    timeline: [
      { year: "Sep 2023", title: "Enrolled at Deskon Academy", description: "Began the DevOps Engineering track." },
      { year: "Dec 2023", title: "DevOps Mastery Certification", description: "Completed comprehensive DevOps program." },
      { year: "Mar 2024", title: "AWS Solutions Architect", description: "Earned AWS Solutions Architect certification." },
      { year: "Jul 2024", title: "Kubernetes Certification", description: "Completed Kubernetes administration certification." },
      { year: "Sep 2024", title: "Cloud Infrastructure Project", description: "Major project - full infrastructure automation suite." }
    ],
    contact: {
      email: "daniel.adewale@deskon.edu",
      linkedin: "linkedin.com/in/daniel-adewale",
      github: "github.com/danieladewale",
      portfolio: "danieladewale.dev"
    }
  },
  {
    id: "esther",
    name: "Esther Ogunlade",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
    track: "Frontend Engineering",
    cohort: "Cohort 2024",
    role: "Frontend Developer",
    bio: "Creative frontend developer with a passion for accessible design and building delightful user interfaces.",
    about: "Esther is a talented Frontend Engineering student at Deskon Academy who combines creativity with technical precision. She has a keen eye for design and is dedicated to building web applications that are both beautiful and accessible. Her projects demonstrate mastery of modern frontend technologies and a deep commitment to user experience.",
    goals: "To become a leading frontend engineer specializing in accessibility and inclusive design, making the web better for everyone.",
    available: true,
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 92 },
      { name: "JavaScript", level: 90 },
      { name: "Vue.js", level: 85 },
      { name: "Sass", level: 88 },
      { name: "Accessibility", level: 82 }
    ],
    projects: [
      {
        title: "Accessible E-Commerce Store",
        description: "A fully accessible e-commerce platform with WCAG 2.1 compliance, screen reader support, and keyboard navigation.",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=400&fit=crop",
        tech: ["Vue.js", "Sass", "JavaScript", "ARIA"],
        videoId: "dQw4w9WgXcQ",
        liveLink: "https://example.com/demo/e-commerce-dashboard",
        githubLink: "https://github.com/example/e-commerce-dashboard"
      },
      {
        title: "Portfolio Builder Platform",
        description: "A drag-and-drop portfolio builder that helps creatives showcase their work with customizable templates.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
        tech: ["Vue.js", "SCSS", "Node.js", "MongoDB"],
        videoId: "jNQXAC9IVRw",
        liveLink: "https://example.com/demo/e-commerce-dashboard",
        githubLink: "https://github.com/example/e-commerce-dashboard"
      }
    ],
    certificates: [
      { title: "Frontend Engineering Excellence", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop", date: "March 2024" },
      { title: "Web Accessibility Specialist", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=300&h=200&fit=crop", date: "June 2024" },
      { title: "Vue.js Advanced Development", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop", date: "September 2024" }
    ],
    social: {
      email: "esther.ogunlade@deskon.edu",
      linkedin: "https://linkedin.com/in/esther-ogunlade",
      github: "https://github.com/estherogunlade",
      twitter: "https://twitter.com/esther_o"
    },
    timeline: [
      { year: "Jan 2024", title: "Enrolled at Deskon Academy", description: "Began the Frontend Engineering track." },
      { year: "Mar 2024", title: "Frontend Excellence Certification", description: "Completed frontend engineering program." },
      { year: "Jun 2024", title: "Web Accessibility Certification", description: "Specialized in accessibility and inclusive design." },
      { year: "Sep 2024", title: "Vue.js Advanced Certification", description: "Mastered Vue.js and modern frontend patterns." },
      { year: "Oct 2024", title: "Built Accessible E-Commerce Store", description: "Major project - fully WCAG-compliant store." }
    ],
    contact: {
      email: "esther.ogunlade@deskon.edu",
      linkedin: "linkedin.com/in/esther-ogunlade",
      github: "github.com/estherogunlade",
      portfolio: "estherogunlade.dev"
    }
  }
];
