'use client'
import skills from "@/data/skills.json"
import projects from "@/data/projects.json"
import AnimatedAvatar from "../../components/AnimatedAvatar";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/src/i18n/navigation";


export default function Home() {

  // scroll
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth <768;

  // traducciones
  const tHero = useTranslations('hero');
  const tSkills = useTranslations('skills');
  const tProjects = useTranslations('projects');
  const tEducation = useTranslations('education');
  const tContact = useTranslations('contact');


  return (
    <main className="px-6 md:px-12 lg:px-24">

      <section id="hero" className="flex flex-col lg:flex-row items-center justify-between">
        <div className="mt-10 focus-in-4 lg:order-2 ">
          <AnimatedAvatar />
        </div>
        <div className="py-10 lg:pr-20">
            <p className="text-3xl tracking-in-contract">
              {tHero('greeting')} <span className="text-[#865DFF] font-bold lg:hidden"> <br />Liz Karol Vergara</span> 
            </p>

            <h1 className="text-6xl text-[#865DFF] font-bold leading-relaxed tracking-in-contract hidden lg:block">
              Liz Karol Vergara
            </h1>

          <p className="text-2xl lg:font-bold tracking-in-contract md:text-3xl lg:text-4xl">
          {tHero('subtitle')} <span className="text-[#FFA3FD]">.</span>
          </p>

          <p className="text-flicker-in-glow text-justify lg:text-left">
            <br />            
            {tHero('description-1')}<br />
            <br />
            {tHero('description-2')} 
          </p>
          <div  className="flex py-8 items-center gap-3">
            <a href="https://www.linkedin.com/in/lizkarolvergara/" target="_blank" className="hover-scale focus-in-1">
              <img src="/icon-linkedin.svg" alt="Linkedin" className="icon-svg"/>
            </a>
            <a href="https://github.com/lizkarolvergara" target="_blank" className="hover-scale focus-in-2">
              <img src="/icon-github.svg" alt="Github" className="icon-svg"/>
            </a>
            <a href="/cv-lizkarolvergara.pdf" download className="underline font-medium focus-in-3">
            {tHero('download')}
            </a>
          </div>

        </div>


      </section>


      <section id="skills" className="py-5">

        <h2>{tSkills('title')}</h2>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-8">
          
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col  hover-scale">
              <img src={skill.src} alt={skill.alt} className="mx-auto icon-svg"/>
              <p className="text-center mt-auto">{skill.name}</p>
            </div>
          ))}
        
        </div>

      </section>

      <section id="education" className="py-5">
        <h2>{tEducation('title')}</h2>

        <div>
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="pl-6 pb-8 relative before:content-[''] before:absolute before:-left-[0.55rem] before:top-1 before:w-4 before:h-4 before:rounded-full before:border-4 before:border-[#FFA3FD] item

              after:content-[''] after:absolute after:top-5 after:-left-[0.09rem] after:h-full after:w-[2px] after:bg-[#E384FF] after:opacity-50 last:after:hidden"
            >
              <h3 className="pb-2">
                {tEducation(`items.${index}.name`)}
              </h3>

              <p className="pb-2">
                {tEducation(`items.${index}.date`)}
              </p>

              <div className="flex gap-16">
                <p className="text-justify">
                  {tEducation(`items.${index}.description`)}
                </p>


                  <img
                    src={tEducation(`items.${index}.src`)}
                    alt={tEducation(`items.${index}.alt`)}
                    className="hidden lg:block"
                  />

              </div>
            </div>
          ))}
        </div>
      </section>


      <section id="projects" className="py-5">
        <h2>
          {tProjects('title')}
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 justify-items-center py-6">

          {projects.map((project, index) => (
            <div key={index} className="project-card flex flex-col rounded-xl border-2 border-[#FFA3FD]" onClick={() => {
              if (isMobile) {
                if (activeCard === index) {
                  setActiveCard(null)
                } else {
                  setActiveCard(index);
                }
              }
            }}>
              
              <div>
                <p className="text-center py-2">{project.name}</p>
              </div>
  
              <div className="relative">
                <img src={project.src} alt={project.alt} className="project-img p-1"/>

                <div className="project-links absolute inset-0 flex items-center justify-center gap-2  opacity-0 transition-opacity duration-300 ${activeCard === index || !isMobile ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'">

                  <a href={project.demo} target="_blank" 
                    onClick={(e) => {
                      if (isMobile && activeCard !== index) {
                        e.preventDefault();
                        setActiveCard(index);
                      }
                    }} 
                    className="flex justify-center items-center py-2 px-4 transition-all duration-300 hover:font-bold ">
                    <img src="/icon-demo.svg" className=" w-[20px] h-[20px] icon-svg" />
                    Demo
                  </a>

                  <a href={project.repository} target="_blank" 
                    onClick={(e) => {
                      if (isMobile && activeCard !== index) {
                        e.preventDefault();
                        setActiveCard(index);
                      }
                    }} 
                    className="flex justify-center items-center py-2 px-4 transition-all duration-300 hover:font-bold ">
                    <img src="/icon-github.svg" className="px-1 w-[25px] h-[25px] icon-svg" />
                    Repo
                  </a>

                </div>
              </div>
  
              <div className="flex py-2 justify-center gap-2">
                {project.skills.map((skill, i) => 
                  <img key={i} src={skill} className="w-8 h-8 icon-svg"/>
                )}              
              </div>
  
            </div>
          ))}

        </div>

      </section>

      <section id="contact" className="py-5">
        <h2>
          {tContact('title')} 
        </h2>

        <div className="flex flex-col gap-5 items-center lg:flex-row lg:justify-center lg:gap-16 py-6">

          <div className="contact-pill group">
            <div className="icon-container">
              <img src="/icon-mail.svg" alt="email" className="icon-svg"/>
            </div>

            <div className="contact-info">
              <p>lizvergarareategui@gmail.com</p>
              <a href="mailto:lizvergarareategui@gmail.com" className="underline">{tContact('message')}</a>
            </div>
          </div>

          <div className="contact-pill group">
            <div className="icon-container">
              <img src="/icon-whatsapp.svg" alt="whatsapp" className="icon-svg"/>
            </div>

            <div className="contact-info">
              <p>PER +51 975 203 430</p>
              <a href="https://wa.me/+51975203430" target="_blank" className="underline">{tContact('message')}</a>
            </div>
          </div>

        </div>
      </section>

    </main>

  );
}
