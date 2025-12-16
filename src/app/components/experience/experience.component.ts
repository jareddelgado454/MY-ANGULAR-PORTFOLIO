import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  workExperience = [
    new WorkExperience(
      "Juztina",
      "Full Stack Developer",
      "May 2025 - Nov 2025",
      `As a Full Stack Developer, I optimized search functions, improving user retention and subscription continuation through more accurate and faster searches.`,
      'experience/juztina_logo.jpeg',
      [
        "Reduced platform load time by 30% using Next.js and AWS.",
        "Improved search function, increasing user retention by 25%.",
        "Collaborated with teams to reduce integration errors by 40%.",
        "Improved accessibility, reducing complaints by 20%."
      ],
      ["Next.js", "React.js", "Tailwind CSS", "AWS", "GraphQL", "Node.js", "Supabase", "Git", "Notion", "Figma", "Stripe"],
      'experience/juztinaImage.PNG',
      "Juztina.ai",
      "Legal assistance powered by AI, specializing in laws, regulations, and jurisprudence.",
      "https://www.juztina.ai/",
    ),
    new WorkExperience(
      'Panda Mars',
      'Mobile Developer',
      'Feb 2024 - Feb 2025',
      `As a Mobile Developer, I integrated and optimized the mobile app, reducing response time by 30% and increasing user engagement by 20%.`,
      'experience/pandaMarsLogo.png',
      [
        "Integrated real-time geolocation services, reducing response time by 30%.",
        "Optimized app performance using AWS, increasing stability and retention by 20%.",
        "Improved user interface, increasing app store ratings by 15%.",
        "Implemented push notifications, increasing user engagement by 25%."
      ],
      ["React Native", "AWS AppSync", "GraphQL", "AWS Cognito", "Expo", "Push Notifications", "Python", "Java", "DynamoDB", "GraphQL"],
    ),
    new WorkExperience(
      "Panda Mars",
      "Full Stack Developer",
      "Feb 2024 - Feb 2025",
      `As Full Stack Team Lead, I developed the core web platform and backend systems, reducing downtime by 40% and improving user experience by 25%.`,
      'experience/pandaMarsLogo.png',
      [
        "Developed key features, reducing system downtime by 40% and improving API response times by 35%.",
        "Optimized cloud infrastructure with AWS and GraphQL, reducing server costs by 30%.",
        "Enhanced platform scalability, supporting a 50% increase in active users.",
        "Implemented agile practices, increasing team productivity by 20%."
      ],
      ["Next.js", "React.js", "Tailwind CSS", "AWS", "GraphQL", "Node.js", "Node.js", "Git", "Notion", "Figma", "Stripe", "Java"],
      'experience/pandaWeb.png',
      "The Panda Web Page",
      "Developed a web platform connecting technicians with customers needing roadside assistance.",
      "https://www.app.panda-mars.com/",
    ),
    new WorkExperience(
      "Henry",
      "FullStack Teaching Assistant",
      "Oct 2023 - Dec 2023",
      "",
      "experience/henryIcon.png",
      [
        "Coordinated a student group for integration into study teams.",
        "Assisted with exercises and promoted collaboration (Pair Programming).",
        "Proposed process improvements for the Bootcamp."
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
        "Developed landing pages and dashboards optimized for conversion.",
        "Improved site navigation, increasing user interaction by 15%.",
        "Built web apps using React.js (frontend) and PHP/Python (backend).",
        "Implemented databases with MySQL and MongoDB, improving response times by 30%.",
        "Worked in teams applying Agile methodologies (Scrum), using Jira and Trello."
      ],
      ["Next.js", "React.js", "Tailwind CSS", "AWS", "GraphQL", "Node.js", "Supabase", "Git", "Notion", "Figma", "Stripe", "PHP", "Java", "Python"],
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
