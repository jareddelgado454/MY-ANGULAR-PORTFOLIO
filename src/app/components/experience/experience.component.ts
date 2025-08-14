import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  workExperience = [
    new WorkExperience(
      "Juztina",
      "Full Stack Developer",
      "May 2025 - Jul 2025",
      `As a Senior Full Stack Developer, I led the development of an AI-powered legal assistance platform. My contributions included optimizing search features, which improved user retention and subscription continuation by enhancing search accuracy and reducing latency.`,
      'experience/juztina_logo.jpeg',
      [
        "Optimized platform performance, reducing load times by 30% using Next.js and AWS.",
        "Developed a document search feature that increased user retention and improved search efficiency by 25%.",
        "Collaborated with cross-functional teams, reducing integration errors by 40%.",
        "Enhanced accessibility features, reducing user complaints by 20%."
      ],
      ["Next.js", "React.js", "Tailwind CSS", "AWS", "GraphQL", "Node.js", "Supabase", "Git", "Notion", "Figma", "Stripe"],
      'experience/juztinaImage.PNG',
      "Juztina.ai",
      "Legal assistance powered by artificial intelligence, specializing in laws, regulations, and jurisprudence.",
      "https://www.juztina.ai/",
    ),
    new WorkExperience(
      'Panda Mars',
      'Mobile Developer',
      'Feb 2024 - Feb 2025',
      `As a Senior Mobile Developer, I spearheaded the integration and optimization of the mobile application. By utilizing React Native and AWS, I successfully enhanced the real-time coordination between customers and technicians, contributing to a 30% faster service response time and improving user engagement by 20%.`,
      'experience/pandaMarsLogo.png',
      [
        "Led the integration of real-time geolocation services, reducing response time by 30% and improving service efficiency.",
        "Optimized the mobile app performance using AWS, increasing app stability and user retention by 20%.",
        "Collaborated with cross-functional teams to improve the app's user interface, increasing app store ratings by 15%.",
        "Implemented push notifications and lifecycle management, resulting in a 25% increase in user engagement."
      ],
      ["React Native", "AWS AppSync", "GraphQL", "AWS Cognito", "Expo", "Push Notifications", "Python", "Java", "DynamoDB", "Grapgql"],
    ),
    new WorkExperience(
      "Panda Mars",
      "Full Stack Developer",
      "May 2025 - Jul 2025",
      `As Full Stack Team Lead, I was responsible for developing the company's core web platform and backend systems. By implementing scalable cloud infrastructure and streamlining API integrations, I reduced system downtime by 40% and improved the overall user experience by 25%.`,
      'experience/pandaMarsLogo.png',
      [
        "Designed and developed key features, reducing system downtime by 40% and improving API response times by 35%.",
        "Optimized cloud infrastructure using AWS and GraphQL, leading to a 30% reduction in server costs.",
        "Improved the platform’s scalability, supporting a 50% increase in active users within 6 months.",
        "Implemented agile practices, leading to a 20% increase in team productivity and feature delivery speed."
      ],
      ["Next.js", "React.js", "Tailwind CSS", "AWS", "GraphQL", "Node.js", "Node.js", "Git", "Notion", "Figma", "Stripe", "Java"],
      'experience/pandaWeb.png',
      "The Panda Web Page",
      "Developed a web platform that connects technicians with customers requiring roadside vehicle assis...",
      "https://www.juztina.ai/",
    ),
    new WorkExperience(
      "Henry",
      "FullStack Teaching Assistant",
      "Oct 2023 - Dec 2023",
      "",
      "experience/henryIcon.png",
      [
        "Coordinate a group of students to ensure their integration into the study team.",
        "Assist in solving exercises and promote group collaboration (Pair Programming).",
        "Propose ideas for improving the Bootcamp processes.",
      ],
      ["Angular", "Next.js", "React.js", "Tailwind CSS", "AWS", "GraphQL", "Node.js", "Python"],
    ),
    new WorkExperience(
      "CDX-Innova",
      "Full Stack Developer",
      "Dec 2022 - Aug 2023",
      "",
      "experience/cdxLogo.png",
      [
        "Designed and developed landing pages and dashboards optimized for conversion.",
        "Improved website navigation, achieving a 15% increase in user interaction.",
        "Developed multiple web applications using React.js for the frontend and PHP/Python for the backend.",
        "Implemented databases using MySQL and MongoDB, optimizing response times by 30%.",
        "Worked in a team on various projects, applying Agile methodologies such as Scrum and using management tools like Jira and Trello.",
      ],
      ["Next.js", "React.js", "Tailwind CSS", "AWS", "GraphQL", "Node.js", "Supabase", "Git", "Notion", "Figma", "Stripe", "Php", "Java", "Python"],
    ),
  ]
}

export class WorkExperience {
  constructor(
    public company: string,
    public title: string,
    public date: string,
    public description: string,
    public image: string,
    public achievements: string[],
    public skills: string[],
    public banner?: string,
    public bannerTitle?: string,
    public bannerContent?: string,
    public website?: string
  ) {}
}
