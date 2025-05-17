"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, Linkedin, Mail, ExternalLink, Code, Briefcase, User, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function DeveloperProfile() {
  const [activeTab, setActiveTab] = useState("about")

  const projects = [
    {
      id: 1,
      title: "AudioBlocks",
      description: "A blockchain music sharing and streaming platform that enables upload their music and listeners stream high quality audio.",
      tags: ["Nextjs", "Node.js", "MongoDB", "IPFS"],
      link: "https://www.audioblocks.org",
      image: "/adb.jpg?height=200&width=400",
    },
    {
      id: 2,
      title: "GuardZero",
      description: "An identity management platform that helps businesses secure their user data and prevent unauthorized access.",
      tags: ["Next.js", "Solidity", "Tailwind CSS", "TypeScript"],
      link: "https://www.guardzero.xyz",
      image: "/grd.jpg?height=400&width=400",
    },
    {
      id: 3,
      title: "Green Recycle Plus",
      description: "A waste management platform that connects waste collectors with households and businesses for recycling.",
      tags: ["EthersJS", "React", "Solidity"],
      link: "https://greencycleplus.vercel.app",
      image: "/gcp.jpg?height=300&width=400",
    },
     {
      id: 4,
      title: "RichBoss Realty",
      description: "To Solve Global Housing Problems By Harnessing The Power of Technology, Innovation and Other Sustainable Solutions.",
      tags: ["React", "Nodejs"],
      link: "https://richbossrealty.com/",
      image: "/gcp.jpg?height=300&width=400",
    },
     {
      id: 5,
      title: "Chris Feddek Paints",
      description: "Welcome to Chris Feddek Paints, your premier destination for high-quality paints and coatings.",
      tags: ["React", "Nodejs"],
      link: "https://chrisfeddek.com.ng/",
      image: "/gcp.jpg?height=300&width=400",
    },
    
    
  ]

  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Cairo", level: 80 },
    { name: "TypeScript", level: 75 },
    { name: "Rust", level: 70 },
    { name: "Next.js", level: 85 },
    { name: "Tailwind CSS", level: 90 },
    { name: "MongoDB", level: 75 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <header className="container mx-auto pt-20 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center gap-8"
        >
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
            <Avatar className="h-32 w-32 border-4 border-primary/20">
              <AvatarImage src="/me.svg" alt="Developer" />
              <AvatarFallback className="text-4xl">WA</AvatarFallback>
            </Avatar>
          </motion.div>
          <div className="text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl font-bold tracking-tight"
            >
              Wilfred Adzer
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xl text-muted-foreground mt-2"
            >
              Software Developer
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex gap-3 mt-4 justify-center md:justify-start"
            >
              <Button size="icon" variant="outline" >
                <Link href="https://github.com/Wilfred007">
                <Github className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="icon" variant="outline">
                <Link href="https://www.linkedin.com/in/wilfred-adzer-89261923a/">
                <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="icon" variant="outline">
                <Link href="wilfredadzer@gmail.com">
                <Mail className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </header>

      <main className="container mx-auto pb-20">
        <Tabs defaultValue="about" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="about" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">About</span>
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              <span className="hidden sm:inline">Projects</span>
            </TabsTrigger>
            <TabsTrigger value="skills" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              <span className="hidden sm:inline">Skills</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Card>
                <CardHeader>
                  <CardTitle>About Me</CardTitle>
                  <CardDescription>Get to know me and my background</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    I'm a passionate software engineer with over 5 years of experience building web applications and
                    services. I specialize in JavaScript ecosystems, particularly React and Node.js, and have a strong
                    foundation in modern web technologies. I also possess blockchain development skills and have built amazing products on the blockchain
                  </p>
                  <p>
                    My journey in software development began during my Computer Science studies, where I discovered my
                    passion for creating intuitive and efficient digital experiences. Since then, I've worked with
                    startups and established companies to deliver high-quality software solutions.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="space-y-2">
                      <h3 className="font-medium">Education</h3>
                      <p className="text-sm">BSc in Industrial Physics, University of Agriculture, Makurdi</p>
                      <p className="text-sm text-muted-foreground">2015 - 2019</p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium">Experience</h3>
                      <p className="text-sm">Frontend Developer at AudioBlocks Tech.</p>
                      <p className="text-sm text-muted-foreground">2020 - 2023</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="projects" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="h-full"
                >
                  <Card className="h-full flex flex-col">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="animate-in fade-in-50">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full group" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          View Project
                          <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="skills" className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Card>
                <CardHeader>
                  <CardTitle>Technical Skills</CardTitle>
                  <CardDescription>Technologies I work with</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {skills.map((skill, index) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                            className="h-full bg-primary rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                {/* <CardFooter>
                  <Button className="w-full group">
                    <Link href="/https://docs.google.com/document/d/1jTQjzEtd977Ct1V9Xsp_shuatY5dtsMP/edit">
                    View Resume
                    </Link>
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter> */}
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

