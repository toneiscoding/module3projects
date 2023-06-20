const express = require("express");
const app = express();
const port = 3000

let jobRoles = [
    {
      jobRole: "Junior Web Developer",
      company: "Tech Startup",
      salary: "$50,000 - $70,000",
      responsibilities: [
        "Assisting in building and maintaining web applications using the MERN stack",
        "Collaborating with the development team to implement new features",
        "Writing clean and efficient code",
        "Participating in code reviews and debugging"
      ],
      requiredSkills: [
        "Basic knowledge of MongoDB, Express.js, React.js, and Node.js",
        "Understanding of HTML, CSS, and JavaScript",
        "Ability to work in a team environment",
        "Strong problem-solving skills"
      ]
    },
    {
      jobRole: "Frontend Developer",
      company: "Digital Agency",
      salary: "$60,000 - $80,000",
      responsibilities: [
        "Developing user-friendly interfaces using React.js",
        "Collaborating with designers to implement UI/UX designs",
        "Optimizing web applications for maximum speed and scalability",
        "Ensuring cross-browser and cross-device compatibility"
      ],
      requiredSkills: [
        "Proficiency in React.js and frontend technologies (HTML, CSS, JavaScript)",
        "Knowledge of responsive design principles",
        "Understanding of RESTful APIs and integration with backend services"
      ]
    },
    {
      jobRole: "Node.js Developer",
      company: "Software Company",
      salary: "$70,000 - $90,000",
      responsibilities: [
        "Building scalable and secure server-side applications using Node.js",
        "Developing RESTful APIs and integrating them with frontend applications",
        "Writing reusable and efficient code",
        "Working closely with cross-functional teams to deliver high-quality software"
      ],
      requiredSkills: [
        "Solid understanding of Node.js and Express.js",
        "Knowledge of backend development principles and best practices",
        "Experience with database systems like MongoDB",
        "Familiarity with version control systems (e.g., Git)"
      ]
    },
    {
      jobRole: "Full Stack Developer",
      company: "Technology Consultancy",
      salary: "$80,000 - $100,000",
      responsibilities: [
        "Designing and implementing end-to-end web applications using the MERN stack",
        "Developing and integrating APIs for seamless data flow",
        "Collaborating with cross-functional teams to ensure smooth project delivery",
        "Optimizing applications for performance and scalability"
      ],
      requiredSkills: [
        "Proficiency in MongoDB, Express.js, React.js, and Node.js",
        "Experience with frontend and backend development",
        "Knowledge of database management systems and query optimization",
        "Strong problem-solving and debugging skills"
      ]
    },
    {
      jobRole: "Junior React Developer",
      company: "E-commerce Startup",
      salary: "$50,000 - $70,000",
      responsibilities: [
        "Building user interfaces using React.js and related libraries",
        "Assisting in the development and maintenance of frontend components",
        "Collaborating with the design team to create visually appealing and responsive web interfaces",
        "Implementing new features and functionality based on business requirements"
      ],
      requiredSkills: [
        "Basic understanding of React.js and its ecosystem",
        "Familiarity with HTML, CSS, and JavaScript",
        "Ability to work in an Agile development environment",
        "Good communication and collaboration skills"
      ]
    },
    {
      jobRole: "MERN Stack Intern",
      company: "Software Development Firm",
      salary: "Paid internship",
      responsibilities: [
        "Assisting in the development and testing of web applications using the MERN stack",
        "Learning and implementing best coding practices and development methodologies",
        "Collaborating with senior developers to solve technical challenges",
        "Participating in code reviews and contributing to team discussions"
      ],
      requiredSkills: [
        "Basic knowledge of MongoDB, Express.js, React.js, and Node.js",
        "Passion for web development and eagerness to learn",
        "Strong problem-solving and analytical skills",
        "Ability to work effectively in a team"
      ]
    }
  ];
  
  

app.get("/", (req, res) => {
  res.send("Hello! Here are some different job roles! Try typing '/random' or '/search/developer after the url to get some data.");
});

app.get("/random", (req, res) => {
    const randomIndex = Math.floor(Math.random() * jobRoles.length);
    const randomJob = jobRoles[randomIndex];
    res.json(randomJob);
  });

  app.get('/search/:string', (req, res) => {
    const searchString = req.params.string.toLowerCase();
    const matchingJobs = jobRoles.filter(job => job.jobRole.toLowerCase().includes(searchString));
  
    if (matchingJobs.length > 0) {
      res.json(matchingJobs);
    } else {
      res.status(404).json({ error: 'No matching jobs found' });
    }
  });
  

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });





console.log(jobRoles);
