"use client"
import { motion } from "framer-motion"
import { Calendar, MapPin, Building2 } from 'lucide-react'

// Define types for timeline items
interface TimelineItem {
  id: number
  title: string
  institution: string
  period: string
  location: string
  type: string
  logo?: string
  skills?: string[]
  achievements?: string[]
}

// Define types for skills
interface Skill {
  name: string
  proficiency: number
}

interface SkillsData {
  [category: string]: Skill[]
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: "AI + Full-Stack Developer",
    institution: "Lakhi Information Technologies",
    period: "Aug 2025 - Present",
    location: "Hyderabad, India",
    type: "Work Experience",
    skills: ["Agentic AI", "Kafka", "OpenTelemetry", "REST APIs", "WebSockets", "Fastify", "React", "React Native"],
  },
  {
    id: 2,
    title: "AI / ML Intern",
    institution: "MHCognition",
    period: "Jan 2025 - May 2025",
    location: "Hyderabad, India",
    type: "Work Experience",
    logo: "/images/mh-cognition-logo.png",
    skills: ["AI Assistants", "Python", "TensorFlow", "NLP", "Applied ML"],
  },
  {
    id: 3,
    title: "B.Tech in Artificial Intelligence and Machine Learning",
    institution: "Malla Reddy University",
    period: "2021 - 2025",
    location: "Hyderabad, India",
    type: "Education",
    logo: "/images/malla-reddy-logo.svg",
    achievements: ["GPA: 8.13"],
  },
  {
    id: 4,
    title: "Intermediate (12th Board - MPC)",
    institution: "Narayana IIT Academy",
    period: "2019 - 2021",
    location: "Hyderabad, India",
    type: "Education",
    logo: "/images/narayana-logo.svg",
    achievements: ["Percentage: 92%"],
  },
  {
    id: 5,
    title: "High School (SSC)",
    institution: "Sri Chaitanya Techno Curriculum",
    period: "Until 2019",
    location: "Hyderabad, India",
    type: "Education",
    logo: "/images/sri-chaitanya-logo.svg",
    achievements: ["CGPA: 9.0"],
  },
]

const skillsData: SkillsData = {
  "Programming Languages": [
    { name: "Python", proficiency: 90 },
    { name: "Java", proficiency: 85 },
    { name: "JavaScript", proficiency: 75 },
  ],
  "Web Frameworks": [
    { name: "Django", proficiency: 90 },
    { name: "Fastify", proficiency: 85 },
    { name: "Express", proficiency: 80 },
    { name: "React-Vite", proficiency: 85 },
  ],
  "AI / ML": [
    { name: "Agentic AI", proficiency: 85 },
    { name: "A2A Communication", proficiency: 80 },
    { name: "RAG", proficiency: 80 },
    { name: "NLP", proficiency: 80 },
    { name: "Deep Learning", proficiency: 85 },
    { name: "Reinforcement Learning", proficiency: 85 },
  ],
  "Messaging & Real-time": [
    { name: "Kafka", proficiency: 85 },
    { name: "WebSockets", proficiency: 85 },
    { name: "REST APIs", proficiency: 85 },
    { name: "LiveKit", proficiency: 75 },
    { name: "Twilio", proficiency: 75 },
    { name: "Webhooks", proficiency: 80 },
  ],
  "Observability & Cloud": [
    { name: "OpenTelemetry", proficiency: 80 },
    { name: "Prometheus", proficiency: 75 },
    { name: "Grafana", proficiency: 75 },
    { name: "AWS", proficiency: 80 },
    { name: "Docker", proficiency: 75 },
    { name: "CI/CD (GitHub Actions)", proficiency: 75 },
  ],
  Databases: [
    { name: "PostgreSQL", proficiency: 85 },
    { name: "MySQL", proficiency: 90 },
    { name: "MongoDB", proficiency: 70 },
  ],
  "Frontend & Mobile": [
    { name: "React", proficiency: 85 },
    { name: "React Native", proficiency: 80 },
    { name: "TypeScript", proficiency: 80 },
  ],
}

export default function AboutMe() {
  return (
    <section id="about" className="py-12 bg-gradient-to-b from-black to-gray-900">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Code, Coffee & Me
            </span>
            <span className="ml-2">☕💻</span>
          </h2>
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="w-full">
              <div className="prose prose-invert max-w-none text-center md:text-left">
                <p className="text-lg leading-relaxed md:hidden">
                  AI Enthusiast 🤖 and Full Stack Developer 💻. Crafting intelligent solutions with code and creativity.
                  From ML models to web apps, I turn ideas into reality! ⚡
                </p>
                <div className="hidden md:block">
                  <p className="text-xl mb-4">
                    🚀 <strong>AI and full-stack developer</strong> building agentic AI products and scalable systems
                  </p>
                  <p className="mb-4">
                    I work across <strong>Python, Java, JavaScript, Django, MERN, and Fastify</strong> to deliver{" "}
                    <strong>AI-powered booking flows, omnichannel communication systems, and cross-platform applications</strong>.
                    Experienced in building systems spanning <strong>5 customer channels, 4 specialized A2A agents, 3 service domains, and 2 client applications</strong>.
                  </p>
                  <p className="mb-4">
                    My expertise includes <strong>Agentic AI, A2A Communication, RAG, NLP, Kafka, WebSockets, REST APIs, Fastify, and observability tools like OpenTelemetry, Prometheus, and Grafana</strong>.
                    I'm passionate about <strong>building distributed systems, real-time communication services, and AI-enabled workflows</strong>.
                  </p>
                  <p>
                    Let's <strong>collaborate and create intelligent solutions</strong> that drive real impact! ⚡🔥
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                My Journey So Far
              </span>
              <span className="ml-2 text-white">🛤️</span>
            </h3>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block"></div>
              <div className="space-y-8">
                {timelineData.map((item: TimelineItem, index: number) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 relative`}
                  >
                    <div className="md:w-1/2 p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800">
                      <div className="flex flex-col md:flex-row items-center gap-4">
                        <div className="text-center md:text-left">
                          <h3 className="text-xl font-bold text-white">{item.title}</h3>
                          <h4 className="text-lg text-purple-400">{item.institution}</h4>
                          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 mt-1">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{item.period}</span>
                          </div>
                          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{item.location}</span>
                          </div>
                          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
                            <Building2 className="w-4 h-4" />
                            <span className="text-sm">{item.type}</span>
                          </div>
                        </div>
                      </div>
                      {item.skills?.length || item.achievements?.length ? (
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
                          {(item.skills || item.achievements || []).map((skill: string, skillIndex: number) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-300 border border-purple-500/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hidden md:block"></div>
                    {index < timelineData.length - 1 && (
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                        className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block"
                        style={{ top: "100%", height: "100px" }}
                      ></motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications and Extra-curricular Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800">
              <h4 className="text-xl font-bold mb-4 text-purple-400 text-center md:text-left">Certifications</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-gray-300">AWS Academy Graduate - Cloud Foundations</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-gray-300">AWS Academy Graduate - Machine Learning Foundations</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-gray-300">DeepLearning.AI - AI for Everyone</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-gray-300">Python Programming</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800">
              <h4 className="text-xl font-bold mb-4 text-purple-400 text-center md:text-left">
                Extra-Curricular Activities
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-gray-300">AI Research & Papers</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-gray-300">Hackathons</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-gray-300">Webinars</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Languages Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800">
              <h4 className="text-xl font-bold mb-4 text-purple-400 text-center md:text-left">Languages</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-gray-300">Telugu</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-gray-300">Hindi</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-gray-300">English</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-gray-300">Marathi</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

interface SkillBarProps {
  name: string
  proficiency: number
}

function SkillBar({ name, proficiency }: SkillBarProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-300">{name}</span>
        <span className="text-gray-400">{proficiency}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
        />
      </div>
    </div>
  )
}
