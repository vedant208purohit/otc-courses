export type Course = {
  id: number;
  title: string;
  description: string;
  descriptionLong: string;
  price: string;
  originalPrice: string;
  rating: number;
  students: number;
  duration: string;
  level: string;
  category: "programming" | "web-dev" | "data-science" | "mobile" | "design" | "marketing" | "cloud" | "devops";
  instructor: {
    name: string;
    bio: string;
    avatar?: string;
  };
  image: string;
  topics: string[];
  outcomes: string[];
  requirements: string[];
  syllabus: Array<{
    module: string;
    topics: string[];
  }>;
  reviews: Array<{
    name: string;
    rating: number;
    comment: string;
  }>;
};

export const courses: Course[] = [
  {
    id: 1,
    title: "Complete React Development Bootcamp",
    description: "Master React with hooks, context, routing and testing",
    descriptionLong:
      "A comprehensive React course that takes you from zero to production. Build multiple real-world projects, learn component patterns, state management, performance optimization, testing, and deployment.",
    price: "₹2,999",
    originalPrice: "₹4,999",
    rating: 4.8,
    students: 12500,
    duration: "40 hours",
    level: "Beginner to Advanced",
    category: "web-dev",
    instructor: { name: "Rajesh Kumar", bio: "Senior Frontend Engineer and instructor with 10+ years experience." },
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1000&h=500&fit=crop",
    topics: ["React Hooks", "Routing", "State Management", "Testing"],
    outcomes: [
      "Build production-grade React apps",
      "Use hooks and context effectively",
      "Write unit and component tests",
      "Optimize performance and bundle size",
    ],
    requirements: ["Basic JavaScript", "Node.js installed"],
    syllabus: [
      { module: "React Basics", topics: ["JSX", "Components", "Props", "State"] },
      { module: "Hooks", topics: ["useState", "useEffect", "useMemo", "useReducer"] },
      { module: "Routing & Data", topics: ["react-router", "Data fetching", "Caching with React Query"] },
      { module: "Testing", topics: ["Jest", "React Testing Library"] },
    ],
    reviews: [
      { name: "Anita", rating: 5, comment: "Best React course, concise and practical." },
      { name: "Vivek", rating: 5, comment: "Projects helped me crack interviews." },
    ],
  },
  {
    id: 2,
    title: "Python for Data Science & ML",
    description: "Pandas, NumPy, visualization and scikit-learn",
    descriptionLong:
      "Learn Python for data analysis and machine learning. Clean, analyze and visualize data and build ML models with scikit-learn.",
    price: "₹3,499",
    originalPrice: "₹5,999",
    rating: 4.9,
    students: 8750,
    duration: "35 hours",
    level: "Beginner",
    category: "data-science",
    instructor: { name: "Priya Sharma", bio: "Data Scientist, ex-FAANG, 8+ years in analytics." },
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=1000&h=500&fit=crop",
    topics: ["Pandas", "NumPy", "Matplotlib", "scikit-learn"],
    outcomes: ["Analyze datasets", "Build ML models", "Visualize insights"],
    requirements: ["Basic Python"],
    syllabus: [
      { module: "Python Refresher", topics: ["Syntax", "Functions", "Files"] },
      { module: "Data Analysis", topics: ["Pandas", "Cleaning", "Merging"] },
      { module: "ML Basics", topics: ["Regression", "Classification", "Metrics"] },
    ],
    reviews: [{ name: "Rahul", rating: 5, comment: "Got promoted after this course!" }],
  },
  {
    id: 3,
    title: "Digital Marketing Mastery",
    description: "SEO, social media, PPC and content strategy",
    descriptionLong: "Master modern digital marketing tactics and build a growth strategy across channels.",
    price: "₹2,499",
    originalPrice: "₹3,999",
    rating: 4.7,
    students: 15200,
    duration: "30 hours",
    level: "All Levels",
    category: "marketing",
    instructor: { name: "Amit Patel", bio: "Growth marketer for startups and enterprises." },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&h=500&fit=crop",
    topics: ["SEO", "Paid Ads", "Social Media", "Content"],
    outcomes: ["Design campaigns", "Measure ROI", "Grow audiences"],
    requirements: ["No prior experience"],
    syllabus: [
      { module: "SEO", topics: ["Keywords", "On-page", "Backlinks"] },
      { module: "Paid", topics: ["Google Ads", "Facebook Ads"] },
    ],
    reviews: [{ name: "Sneha", rating: 5, comment: "Practical and to the point." }],
  },
  {
    id: 4,
    title: "Full Stack JavaScript (MERN)",
    description: "MongoDB, Express, React, Node.js end-to-end",
    descriptionLong: "Build full-stack applications with authentication, APIs, and deployment.",
    price: "₹4,999",
    originalPrice: "₹7,999",
    rating: 4.8,
    students: 6800,
    duration: "60 hours",
    level: "Intermediate",
    category: "web-dev",
    instructor: { name: "Vikram Singh", bio: "Full stack engineer and mentor." },
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=1000&h=500&fit=crop",
    topics: ["MongoDB", "Express", "React", "Node"],
    outcomes: ["Design REST APIs", "Build React frontends", "Deploy apps"],
    requirements: ["JS basics", "CLI familiarity"],
    syllabus: [
      { module: "Backend", topics: ["Express", "Mongo", "JWT Auth"] },
      { module: "Frontend", topics: ["React", "Routing", "Forms"] },
    ],
    reviews: [{ name: "Farhan", rating: 5, comment: "Helped me land my first job." }],
  },
  {
    id: 5,
    title: "UI/UX Design Fundamentals",
    description: "Design principles, Figma and prototyping",
    descriptionLong: "Learn fundamentals of design and build professional prototypes in Figma.",
    price: "₹1,999",
    originalPrice: "₹3,499",
    rating: 4.6,
    students: 9200,
    duration: "25 hours",
    level: "Beginner",
    category: "design",
    instructor: { name: "Sneha Reddy", bio: "Product designer crafting delightful experiences." },
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1000&h=500&fit=crop",
    topics: ["Typography", "Color", "Layouts", "Figma"],
    outcomes: ["Design UI", "Create prototypes", "Understand UX"],
    requirements: ["Laptop"],
    syllabus: [
      { module: "Design Basics", topics: ["Color", "Type", "Spacing"] },
      { module: "Figma", topics: ["Components", "Auto-layout"] },
    ],
    reviews: [{ name: "Ritika", rating: 5, comment: "Great intro to UX." }],
  },
  {
    id: 6,
    title: "Android App Development with Kotlin",
    description: "Modern Android apps using Kotlin",
    descriptionLong: "Build Android applications using Kotlin, MVVM architecture, and Jetpack.",
    price: "₹3,999",
    originalPrice: "₹6,499",
    rating: 4.7,
    students: 5400,
    duration: "45 hours",
    level: "Intermediate",
    category: "mobile",
    instructor: { name: "Arjun Mehta", bio: "Android developer and Google Developer Expert." },
    image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=1000&h=500&fit=crop",
    topics: ["Kotlin", "Jetpack", "MVVM", "Firebase"],
    outcomes: ["Build Android apps", "Use Jetpack", "Publish to Play Store"],
    requirements: ["Basic Java/Kotlin"],
    syllabus: [
      { module: "Kotlin", topics: ["Syntax", "Collections"] },
      { module: "Architecture", topics: ["MVVM", "ViewModel", "LiveData"] },
    ],
    reviews: [{ name: "Karan", rating: 5, comment: "Very thorough content." }],
  },
  {
    id: 7,
    title: "AWS Cloud Practitioner Essentials",
    description: "Core AWS services and cloud concepts",
    descriptionLong: "Kickstart your cloud journey and prepare for AWS Cloud Practitioner certification.",
    price: "₹2,799",
    originalPrice: "₹3,999",
    rating: 4.6,
    students: 4300,
    duration: "20 hours",
    level: "Beginner",
    category: "cloud",
    instructor: { name: "Meera Nair", bio: "Cloud architect specialized in AWS and security." },
    image: "https://images.unsplash.com/photo-1516245834210-c4c142787335?w=1000&h=500&fit=crop",
    topics: ["EC2", "S3", "IAM", "VPC"],
    outcomes: ["Understand AWS core services", "Design basic architectures"],
    requirements: ["Basic IT knowledge"],
    syllabus: [
      { module: "Compute & Storage", topics: ["EC2", "S3", "EBS"] },
      { module: "Networking", topics: ["VPC", "Subnets", "Security Groups"] },
    ],
    reviews: [{ name: "Divya", rating: 4, comment: "Good certification prep." }],
  },
  {
    id: 8,
    title: "DevOps with Docker & Kubernetes",
    description: "Containers, orchestration and CI/CD",
    descriptionLong: "Learn containerization with Docker, orchestration with Kubernetes, and build CI/CD pipelines.",
    price: "₹4,299",
    originalPrice: "₹6,999",
    rating: 4.8,
    students: 5100,
    duration: "38 hours",
    level: "Intermediate",
    category: "devops",
    instructor: { name: "Nikhil Verma", bio: "DevOps engineer automating deployments at scale." },
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=1000&h=500&fit=crop",
    topics: ["Docker", "Kubernetes", "Helm", "GitHub Actions"],
    outcomes: ["Containerize apps", "Deploy on K8s", "Automate with CI/CD"],
    requirements: ["Linux basics", "Git"],
    syllabus: [
      { module: "Docker", topics: ["Images", "Compose", "Best practices"] },
      { module: "Kubernetes", topics: ["Pods", "Deployments", "Services"] },
    ],
    reviews: [{ name: "Sourav", rating: 5, comment: "Hands-on and practical." }],
  },
];

// Generate additional placeholder courses to reach 50 total
const baseCount = courses.length;
const needed = 50 - baseCount;
if (needed > 0) {
  const categories: Course["category"][] = [
    "programming",
    "web-dev",
    "data-science",
    "mobile",
    "design",
    "marketing",
    "cloud",
    "devops",
  ];
  for (let i = 0; i < needed; i++) {
    const id = baseCount + i + 1;
    const category = categories[i % categories.length];
    courses.push({
      id,
      title: `Course ${id} — ${category.toUpperCase()}`,
      description: `Learn ${category.replace("-", " ")} with hands-on projects and best practices`,
      descriptionLong:
        "A practical, project-based course covering essential concepts with real-world examples and exercises.",
      price: "₹1,499",
      originalPrice: "₹2,999",
      rating: 4.5,
      students: 1000 + i * 37,
      duration: `${10 + (i % 6) * 5} hours`,
      level: ["Beginner", "Intermediate", "All Levels"][i % 3],
      category,
      instructor: { name: `Instructor ${id}`, bio: "Experienced educator with industry background." },
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1000&h=500&fit=crop",
      topics: ["Basics", "Projects", "Best Practices"],
      outcomes: ["Understand key concepts", "Apply skills in projects", "Build portfolio items"],
      requirements: ["Computer", "Internet"],
      syllabus: [
        { module: "Module 1", topics: ["Overview", "Setup"] },
        { module: "Module 2", topics: ["Core Concepts", "Project"] },
      ],
      reviews: [{ name: "Student", rating: 5, comment: "Great starter course!" }],
    });
  }
}

export const getCourseById = (id: string | number) => courses.find((c) => String(c.id) === String(id));

