import React from 'react'

type Props = { }

const Projects = (props: Props) => {
const projects = [
  {
    id: 1,
    name: "CRM System with Real-time Chat",
    description:
      "A full-stack CRM application with real-time chat, notifications, and role-based access control. Implemented Socket.IO for live messaging and Redux for state management.",
    image: "https://placehold.co/300x200",
    link: "https://your-crm-demo.com",
    github: "https://github.com/yourusername/crm-app",
  },
  {
    id: 2,
    name: "Leave & Attendance Management System",
    description:
      "Enterprise-grade leave and attendance system with admin approval workflows, employee confirmation, and automated attendance tracking using Node.js and MongoDB.",
    image: "https://placehold.co/300x200",
    link: "https://your-leave-system.com",
    github: "https://github.com/yourusername/leave-management",
  },
  {
    id: 3,
    name: "Real-time Chat Application",
    description:
      "Scalable real-time chat app with typing indicators, read receipts, and chat archiving using Socket.IO, React, and Node.js backend.",
    image: "https://placehold.co/300x200",
    link: "https://your-chat-app.com",
    github: "https://github.com/yourusername/chat-app",
  },
  {
    id: 4,
    name: "E-commerce Order Management System",
    description:
      "Backend system for managing carts, orders, and payments with dynamic pricing, GST calculation, and order summaries similar to food delivery platforms.",
    image: "https://placehold.co/300x200",
    link: "https://your-ecommerce.com",
    github: "https://github.com/yourusername/ecommerce-backend",
  },
  {
    id: 5,
    name: "Authentication System (Multi-Provider)",
    description:
      "Secure authentication system supporting Google, OTP, Email/Password, and JWT-based sessions with scalable backend architecture.",
    image: "https://placehold.co/300x200",
    link: "https://your-auth-demo.com",
    github: "https://github.com/yourusername/auth-system",
  },
  {
    id: 6,
    name: "Video Calling App (Group Calls)",
    description:
      "A video calling platform with group calling, real-time signaling, and WebSocket communication using Node.js and Flutter frontend.",
    image: "https://placehold.co/300x200",
    link: "https://your-video-app.com",
    github: "https://github.com/yourusername/video-call-app",
  },
];

  return (
    <div className="flex flex-col justify-center px-4 gap-5">
        <h2 className='font-poppins text-2xl font-bold text-center'>
Projects
        </h2>
        <p className='font-poppins text-xl text-center'>Things I've built so far</p>

        <div className='grid grid-cols-1  md:grid-cols-3 gap-10 auto-rows-fr'>
            {projects.map((project) => (
                <div key={project.id} className="bg-white p-4 rounded-lg gap-1 flex flex-col h-full  shadow-sm">
                    <h3 className='font-bold text-xl text-center'>{project.name}</h3>
                    <img src={project.image} alt={project.name} className='w-full h-auto rounded-md' />
                    <p className='hidden md:block text-center flex-1'>{project.description}</p>
                    <div className='flex justify-between gap-4 mt-4'>
                    <a href={project.link} className="text-blue-500 hover:underline">View Project</a>
                    <a href={project.github} className="text-blue-500 hover:underline">View Code</a>
                        </div>
                </div>
            ))}
        </div>
        </div>

  )
}

export default Projects