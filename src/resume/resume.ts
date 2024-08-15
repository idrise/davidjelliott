import type { Resume } from "./resume-types"; // Assuming the previous structure is in this file

export const resume: Resume = {
  personalInfo: {
    fullName: "Jane Doe",
    professionalTitle: "Senior Software Engineer",
    profileImageUrl: "https://loremflickr.com/512/512",
    emailAddress: "jane.doe@email.com",
    phoneNumber: "+1 (555) 123-4567",
    websiteUrl: "https://janedoe.dev",
    professionalSummary:
      "Experienced software engineer with a passion for creating efficient, scalable applications. Specialized in full-stack development with a focus on React and Node.js.",
    location: {
      streetAddress: "123 Tech Street",
      postalCode: "94043",
      city: "Mountain View",
      countryCode: "US",
      region: "California",
    },
    socialProfiles: [
      {
        platform: "LinkedIn",
        username: "janedoe",
        url: "https://www.linkedin.com/in/janedoe",
      },
      {
        platform: "GitHub",
        username: "janedoe",
        url: "https://github.com/janedoe",
      },
    ],
  },
  workExperience: [
    {
      companyName: "Tech Innovators Inc.",
      companyLogoUrl: "https://loremflickr.com/1024/512",
      jobTitle: "Senior Software Engineer",
      companyUrl: "https://techinnovators.com",
      startDate: "2019-03-01",
      endDate: "Present",
      jobLocation: {
        streetAddress: "456 Innovation Avenue",
        postalCode: "94107",
        city: "San Francisco",
        countryCode: "US",
        region: "California",
      },
      companyDescription:
        "Leading tech company specializing in AI-driven solutions",
      jobSummary:
        "Lead developer for the company's flagship product, responsible for architecture decisions and team management.",
      achievements: [
        ["Increased application performance by 40%", [
          "Implemented efficient caching strategies",
          "Optimized database queries",
        ]],
        ["Led a team of 5 developers", [
          "Introduced agile methodologies",
          "Improved code review process",
        ]],
      ],
      relevantSkills: ["React", "Node.js", "TypeScript", "AWS", "Docker"],
    },
    {
      companyName: "StartUp Rocket",
      jobTitle: "Full Stack Developer",
      startDate: "2016-07-01",
      endDate: "2019-02-28",
      jobSummary:
        "Developed and maintained multiple web applications for various clients.",
      achievements: [
        "Implemented responsive design, ensuring mobile compatibility",
        "Integrated third-party APIs to enhance application functionality",
      ],
      relevantSkills: ["JavaScript", "React", "Express.js", "MongoDB"],
    },
  ],
  skills: [
    {
      skillName: "JavaScript",
      proficiencyLevel: "Expert",
      relatedKeywords: ["ES6+", "TypeScript", "Node.js"],
    },
    {
      skillName: "React",
      proficiencyLevel: "Expert",
      relatedKeywords: ["Redux", "React Hooks", "Next.js"],
    },
    {
      skillName: "Node.js",
      proficiencyLevel: "Advanced",
      relatedKeywords: ["Express.js", "Koa", "REST APIs"],
    },
    {
      skillName: "Database Design",
      proficiencyLevel: "Intermediate",
      relatedKeywords: ["SQL", "MongoDB", "Database Optimization"],
    },
  ],
  education: [
    {
      institutionName: "University of Technology",
      qualificationTitle: "Bachelor of Science",
      fieldOfStudy: "Computer Science",
      startDate: "2012-09-01",
      endDate: "2016-05-30",
      programOverview:
        "Comprehensive study of computer science fundamentals, software engineering, and web technologies.",
      achievements: [
        "Graduated with Honors",
        "Capstone Project: Developed a real-time collaboration tool",
      ],
    },
  ],
  awards: [
    {
      awardTitle: "Employee of the Year",
      dateReceived: "2021-12-15",
      awardingOrganization: "Tech Innovators Inc.",
      awardDescription:
        "Recognized for outstanding contributions to product development and team leadership.",
    },
  ],
  languages: [
    {
      languageName: "English",
      fluencyLevel: "Native",
    },
    {
      languageName: "Spanish",
      fluencyLevel: "Intermediate",
    },
  ],
  interests: [
    "Open source contribution",
    "Machine learning",
    "Hiking",
    "Photography",
  ],
  references: [
    {
      referenceName: "John Smith",
      referenceTitle: "CTO at Tech Innovators Inc.",
      referenceStatement:
        "Jane is an exceptional engineer and leader. Her technical skills and ability to mentor others have been invaluable to our team.",
      referenceContact: "Available upon request",
    },
  ],
};
