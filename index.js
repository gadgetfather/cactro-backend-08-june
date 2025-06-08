#!/usr/bin/env node

const chalk = require('chalk');
const boxen = require('boxen');

// Helper functions for styling
const heading = chalk.bold.green;
const subheading = chalk.bold.cyan;
const link = chalk.cyan.underline;
const text = chalk.white;
const listItem = chalk.yellowBright;

const resume = [
  chalk.bold.yellowBright('                          Akshay Kamble'),
  '',
  text('           Pune, India  | kamblea635@gmail.com'),
  text(`           LinkedIn: ${link('https://linkedin.com/in/gadgetfather')} | GitHub: ${link('https://github.com/gadgetfather')}`),
  '',
  heading('-----------------------------------------------------------------------'),
  heading('                           WORK EXPERIENCE'),
  heading('-----------------------------------------------------------------------'),
  '',
  subheading('Software Developer | Copods'),
  text('Pune, India | November 2022 – Present'),
  '',
  listItem('* Automated Onboarding with Userflow.js:  Integrated userflow.js to enable non-technical updates to onboarding flows, reducing developer dependency.'),
  listItem('* Enhanced Customer Communication:  Integrated Customer.io for messaging automation, resulting in improved engagement and streamlined communication.'),
  listItem('* Optimized AI Performance with RAG:  Implemented RAG using Vertex AI, Firestore, and LangChain for enhanced safety and prompt engineering; minimized cold-start latency with cloud function optimizations.'),
  listItem('* Boosted App Performance:  Achieved a 10x reduction in load times (30 sec to 3 sec) by image optimization, lazy loading, and state management improvements with zustand.'),
  listItem('* Improved Stripe Integration and Pricing:  Updated pricing plans, secured API access with CORS and middleware, and cleaned up the database for better efficiency.'),
  listItem('* Redesigned UI for Usability:  Enhanced user experience and streamlined navigation with a UI overhaul.'),
  listItem('* Refined Database Structure:  Established a new team model and database schema, improving data integrity and access.'),
  listItem('* Developed a Docx Parser:  Utilized python-docx, pytesseract, and easyOCR for parsing documents and extracting text from images; integrated pypandoc and libreoffice to support diverse file formats.'),
  listItem('* Engineered a Web Crawler:  Leveraged BeautifulSoup4, pytesseract, and selenium to dynamically scrape and parse content; added custom logic for extracting links with configurable depth.'),
  listItem('* Built an Excel Parser:  Used openpyxl for flexible and accurate data extraction from varied table structures within Excel files.'),
  listItem('* Designed a Python Client SDK:  Architected and implemented an SDK from scratch using the Facade Pattern to streamline development for other engineers.'),
  listItem('* Implemented Observability Infrastructure:  Integrated Prometheus Metrics for tracking file upload/extraction events with quota management, and set up OpenTelemetry with Jaeger for end-to-end tracing and improved debugging capabilities.'),
  listItem('* Enhanced API Reliability:  Established error logging, global exception handling, and a rate limiter to ensure stable and secure API performance.'),
  listItem('* Implemented Micro Frontend Architecture & Component Library:  Set up a scalable micro-frontend architecture with Apollo GraphQL, React Router, and Webpack Module Federation, deploying to AWS S3/CloudFront; built a reusable StencilJS component library and developed a JSON-driven headless UI for dynamic content generation and onboarding.'),
  listItem('* Enhanced Team Efficiency and Code Quality:  Led a team in creating type-safe, generic components and enabled dynamic micro-frontend loading on custom domains for improved maintainability and flexibility.'),
  '',
  subheading('Software Developer | Steinn Labs'),
  text('Pune, India (Remote) | August 2022 – November 2022'),
  '',
  listItem('* Developed Interactive UI for Real Estate Platform:  Converted Figma designs into React components and built mobile screens in React Native, enhancing web and mobile user experiences.'),
  '',
  heading('-----------------------------------------------------------------------'),
  heading('                              EDUCATION'),
  heading('-----------------------------------------------------------------------'),
  '',
  subheading('Vishwakarma Institute of Technology'),
  text('Pune, India | 2018 – 2022'),
  text('B.Tech. in Instrumentation and Control Engineering'),
  '',
  heading('-----------------------------------------------------------------------'),
  heading('                     TECHNOLOGIES AND LANGUAGES'),
  heading('-----------------------------------------------------------------------'),
  '',
  subheading('Languages:'),
  text('Javascript, Typescript, Python'),
  '',
  subheading('Technologies:'),
  text('React, React Native, Node.js, FastAPI, AWS (S3/CloudFront), GCP, Firebase, Apollo GraphQL, Webpack, Stencil.JS, Postgres'),
].join('\n');

const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
  borderColor: 'green',
};

console.log(boxen(resume, boxenOptions));