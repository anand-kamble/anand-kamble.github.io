// Used to store all the configuration variables
// All the variable names start with __ to avoid conflicts with other variables
const __TITLE = "ANAND KAMBLE";
const __SUBTITLE = `Welcome to my ${new Date().getFullYear()} Portfolio`;
const __EMAIL = "anandmk837@gmail.com";
const __PHONE = "+1 (448) 200-9180";
const __LOCATION = "Tallahassee, FL";
const __GITHUB = "https://github.com/anand-kamble/";
const __LINKEDIN = "https://www.linkedin.com/in/anandmkamble/";

const __EXPERIENCE = [
    {
        title: 'Graduate Research Assistant',
        company: 'Florida State University',
        date: 'Mar 2024 - Present',
        skills: ["LLM", "RAG", "Llama-Index" ,"Langchain", "Docker", "Python" ]
    },
    {
        title: 'Frontend Engineer',
        company: 'CodeBin (IncerroAI)',
        date: 'Apr 2022 - Nov 2022',
        skills: ["React", "Redux", "NodeJS", "Jenkins", "AWS", "TypeScript" ]
    },

];

const __EDUCATION = [
    {
        title: 'Masters in Computational Science',
        school: 'Florida State University',
        date: 'Aug 2023 - Dec 2024',
        skills: ["Scientific Programming", "High-Performance Computing", "Scientific Visualization" ,"Monte Carlo Methods" ]
    },
    {
        title: 'Bachelors in Mechanical Engineering',
        school: 'University of Pune',
        date: 'Aug 2018 - Aug 2022',
        skills: ["Linear Algebra", "Calculus", "Engineering Graphics", "CAD/CAM", "Robotics", "Fundamentals of Programming" ]
    },
];

const __PROJECTS = [
    {
        title: 'Automatic Grading System using LLM',
        company: 'Department of Scientific Computing, Florida State University',
        date: 'Mar 2024 - Present',
        // skills: ["LLM", "RAG", "Llama-Index" ,"Langchain", "Docker", "Python" ],
        url: 'https://github.com/anand-kamble/automatic-grading-using-llm',
    },
    {
        title: 'Object Following Robot Based on AI/ML',
        company: 'Department of Mechanical Engineering, Wadia College of Engineering',
        date: 'Aug 2021 - Aug 2022',
        // skills: ["React", "Redux", "NodeJS", "Jenkins", "AWS", "TypeScript" ]
        url:"https://doi.org/10.1016/j.matpr.2022.09.577"
    },
    {
        title: 'Fortnide: A competitive game on web',
        company: 'Independent Project',
        date: 'Aug 2023 - Present',
        // skills: ["React", "Redux", "NodeJS", "Jenkins", "AWS", "TypeScript" ]
        url:"https://github.com/anand-kamble/fortnide/"
    },
    {
        title: 'Lorenz Attractor',
        company: 'Independent Project',
        date: 'Simulation of the Lorenz Attractor. Made in JavaScript and rendered with ThreeJS.',
        // skills: ["React", "Redux", "NodeJS", "Jenkins", "AWS", "TypeScript" ]
        url:"https://github.com/anand-kamble/Lorenz-Attractor"
    },
    {
        title: 'Reddit Media Scraper',
        company: 'Independent Project',
        date: 'Desktop application for scraping media from the popular social network Reddit.',
        // skills: ["React", "Redux", "NodeJS", "Jenkins", "AWS", "TypeScript" ]
        url:"https://github.com/anand-kamble/Reddit-Media-Scraper"
    }
];

const __PUBLICATIONS = [

    {
        title: 'Object following robot based on AI/ML',
        company: 'Department of Mechanical Engineering, Wadia College of Engineering',
        date: '11th October 2022',
        url: 'https://www.sciencedirect.com/science/article/abs/pii/S2214785322064185',
        cites: 2,
        images: ['./assets/icame (1).jpg','./assets/icame (2).jpg']
    },
    {
        title: 'Transcription and translation of videos using fine-tuned XLSR Wav2Vec2 on custom dataset and mBART',
        company: '',
        date: '1st March 2024',
        url: 'https://arxiv.org/abs/2403.00212',
        cites: 1
    }
]

const __SCROLL_SPEED = 10;