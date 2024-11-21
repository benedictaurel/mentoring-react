'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Component() {
  // JAVASCRIPT
  const [activeSection, setActiveSection] = useState('home')

  const projects = [
    { id: 1, title: 'Exercise', description: 'A brief description of Project 1' },
    { id: 2, title: 'Project 2', description: 'A brief description of Project 2' },
    { id: 3, title: 'Project 3', description: 'A brief description of Project 3' },
  ]

  return (
    // HTML
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="sticky top-0 z-10 bg-white dark:bg-gray-800 shadow-md">
        <nav className="container mx-auto px-6 py-3">
          <ul className="flex justify-center space-x-4">
            {['home', 'projects', 'contact'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => setActiveSection(section)}
                  className={`text-lg font-medium ${
                    activeSection === section
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="py-20">
          <div className="container mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-4 text-gray-800 dark:text-white"
            >
              Welcome to My Portfolio
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-white"
            >
              Halo nama saya Benedict
            </motion.p>
          </div>
        </section>

        <section id="projects" className="py-20 bg-gray-200 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Contact Me</h2>
            <div className="max-w-md mx-auto">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:text-blue-400">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-blue-400">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-blue-400">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p>&copy; 2024 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}