"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, FileText, Blocks, Cpu, Braces, Smartphone, PenTool } from "lucide-react"
import { Link as ScrollLink } from "react-scroll"
import CustomCursor from "@/components/custom-cursor"
import Navbar from "@/components/navbar"
import SocialIcon from "@/components/social-icon"
import { Button } from "@/components/ui/button"
import AboutMe from "@/components/about-me"
import Loading from "@/components/loading"
import InteractiveShapes from "@/components/InteractiveShapes"
import AnimatedBoxes from "@/components/AnimatedBoxes"

// Define types for skills
interface Skill {
  name: string
  proficiency: number
}

interface SkillsData {
  [category: string]: Skill[]
}

const skillsData: SkillsData = {
  "Programming Languages": [
    { name: "Java", proficiency: 75 },
    { name: "Python", proficiency: 90 },
    { name: "JavaScript", proficiency: 70 },
  ],
  "Frameworks/Libraries": [
    { name: "Django", proficiency: 90 },
    { name: "React-Vite", proficiency: 85 },
    { name: "React-Native", proficiency: 80 },
    { name: "Flutter", proficiency: 80 },
  ],
  "AI & Machine Learning": [
    { name: "Deep Learning", proficiency: 85 },
    { name: "CNNs", proficiency: 80 },
    { name: "Reinforcement Learning", proficiency: 85 },
    { name: "Computer Vision", proficiency: 80 },
    { name: "NLP", proficiency: 80 },
  ],
  Databases: [
    { name: "MySQL", proficiency: 90 },
    { name: "PostgreSQL", proficiency: 75 },
    { name: "MongoDB", proficiency: 70 },
  ],
}

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null
  if (loading) return <Loading />

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submission prevented")
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <CustomCursor />
      <Navbar />
      <InteractiveShapes />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <AnimatedBoxes />
        <div className="container relative z-10 px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Hey! I'm Mukkawar Abhiram
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 text-gray-300">
              🚀 AI/ML Engineer | Full-Stack Developer | Tech Enthusiast
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <ScrollLink to="work" smooth={true} duration={500}>
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                  View Projects
                </Button>
              </ScrollLink>
              <ScrollLink to="skills" smooth={true} duration={500}>
                <Button
                  variant="outline"
                  className="bg-transparent border-2 border-purple-500 text-white hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  View Skills
                </Button>
              </ScrollLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container px-4 mx-auto">
          <AboutMe />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Tech Toolbox
              </span>
              <span className="ml-2 text-white">⚔️</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(skillsData).map(([category, skills]: [string, Skill[]]) => (
                <div key={category} className="p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800">
                  <h4 className="text-xl font-bold mb-4 text-purple-400 text-center md:text-left">{category}</h4>
                  {skills.map((skill: Skill) => (
                    <SkillBar key={skill.name} name={skill.name} proficiency={skill.proficiency} />
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                My Expertise
              </span>
              <span className="ml-2 text-white">🛠️</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                icon={<Cpu className="w-10 h-10 text-purple-500" />}
                title="AI & Machine Learning"
                description="Development of AI systems and machine learning models with a focus on practical applications and problem-solving."
              />
              <ServiceCard
                icon={<Braces className="w-10 h-10 text-pink-500" />}
                title="Full Stack Development"
                description="End-to-end web application development with Django, React, and other modern frameworks."
              />
              <ServiceCard
                icon={<Smartphone className="w-10 h-10 text-purple-500" />}
                title="Mobile App Development"
                description="Cross-platform mobile applications using React Native and Flutter for seamless user experiences."
              />
              <ServiceCard
                icon={<FileText className="w-10 h-10 text-pink-500" />}
                title="Database Management"
                description="Design and implementation of database systems using MySQL and PostgreSQL for efficient data storage and retrieval."
              />
              <ServiceCard
                icon={<Blocks className="w-10 h-10 text-purple-500" />}
                title="Reinforcement Learning"
                description="Development of RL models for optimization problems and intelligent decision-making systems."
              />
              <ServiceCard
                icon={<PenTool className="w-10 h-10 text-pink-500" />}
                title="UI/UX Design"
                description="Creating intuitive and responsive user interfaces for web and mobile applications."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                What I've Built
              </span>
              <span className="ml-2 text-white">🏗️</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="Login System using Django"
                description="Implemented a secure authentication system with Django, including user roles and session management."
                tags={["Django", "Python", "Authentication", "Web Development"]}
              />
              <ProjectCard
                title="Pneumonia Detection"
                description="Developed an AI system using CNNs to classify pneumonia from X-ray images."
                tags={["AI", "Python", "CNN", "Medical Imaging"]}
              />
              <ProjectCard
                title="Lung Disease Detection"
                description="Built a deep learning model to detect lung diseases from medical images."
                tags={["Deep Learning", "Medical AI", "Python"]}
              />
              <ProjectCard
                title="Garbage Collection using RL"
                description="Designed an RL-based model to optimize garbage collection routes for smart cities."
                tags={["Reinforcement Learning", "Optimization", "Smart Cities"]}
              />
              <ProjectCard
                title="Pollster App"
                description="Created a polling application using Django and React-Vite that allows users to create polls and vote on them."
                tags={["Django", "React-Vite", "JavaScript", "Web Development"]}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Get In Touch
              </span>
              <span className="ml-2 text-white">🚀</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 w-8 h-8 flex items-center justify-center rounded-full bg-purple-500/20">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-purple-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Phone</p>
                          <a href="tel:+917337371830" className="text-white hover:text-purple-400 transition-colors">
                            +91-7337371830
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="mt-1 w-8 h-8 flex items-center justify-center rounded-full bg-purple-500/20">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-purple-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Email</p>
                          <a
                            href="mailto:mukkawarabhiram0@gmail.com"
                            className="text-white hover:text-purple-400 transition-colors"
                          >
                            mukkawarabhiram0@gmail.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="mt-1 w-8 h-8 flex items-center justify-center rounded-full bg-purple-500/20">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-purple-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Location</p>
                          <p className="text-white">Hyderabad, India</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white">Connect With Me</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 w-8 h-8 flex items-center justify-center rounded-full bg-purple-500/20">
                          <Github className="h-4 w-4 text-purple-400" />
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">GitHub</p>
                          <a
                            href="https://github.com/abhiram3107"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-purple-400 transition-colors"
                          >
                            github.com/abhiram3107
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="mt-1 w-8 h-8 flex items-center justify-center rounded-full bg-purple-500/20">
                          <Linkedin className="h-4 w-4 text-purple-400" />
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">LinkedIn</p>
                          <a
                            href="https://www.linkedin.com/in/abhiram-mukkawar-557426177"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-purple-400 transition-colors"
                          >
                            linkedin.com/in/abhiram-mukkawar-557426177
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="mt-1 w-8 h-8 flex items-center justify-center rounded-full bg-purple-500/20">
                          <FileText className="h-4 w-4 text-purple-400" />
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Resume</p>
                          <a
                            href="https://docs.google.com/document/d/1d1jMseRaoWFnxS0bZAKgfl4-Ah0JqoUaDHNyuMh7NhE/edit?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-purple-400 transition-colors"
                          >
                            View Resume
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gradient-to-t from-gray-900 to-black">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <SocialIcon icon={<Github />} href="https://github.com/mukkawarabhiram" label="GitHub" />
            <SocialIcon icon={<Linkedin />} href="https://linkedin.com/in/mukkawar-abhiram" label="LinkedIn" />
          </div>
          <div className="text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Mukkawar Abhiram. All rights reserved.</p>
            <div className="mt-2">
              <a href="mailto:mukkawarabhiram0@gmail.com" className="text-purple-400 hover:text-purple-300">
                mukkawarabhiram0@gmail.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// SkillBar Component
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

function ServiceCard({ icon, title, description }) {
  return (
    <div className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-purple-500 transition-all duration-300 text-center md:text-left">
      <div className="mb-4 flex justify-center md:justify-start">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

function ProjectCard({ title, description, tags, image }) {
  return (
    <div className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-purple-500 transition-all duration-300">
      <h3 className="text-xl font-bold mb-3 text-white text-center md:text-left">{title}</h3>
      <p className="text-gray-400 mb-4 text-center md:text-left">{description}</p>
      <div className="flex flex-wrap justify-center md:justify-start gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
