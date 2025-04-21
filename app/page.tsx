import skills from "@/data/skills.json"
import projects from "@/data/projects.json"
import education from "@/data/education.json"

export default function Home() {
  return (
    <main className="px-24">

      <section id="hero" className="flex items-center justify-between">
        <div className="w-2/3 pr-20 py-10">
          <p className="text-4xl">
            Hola, mi nombre es
          </p>

          <h1 className="text-6xl text-[#865DFF] font-bold leading-relaxed">
            Liz Karol Vergara
          </h1>

          <p className="text-4xl font-bold">
            y desarrollo páginas web <span className="text-[#FFA3FD]">.</span>
          </p>

          <p >
            <br />            
            Actualmente estudiante de Desarrollo de Sistemas Front-end y Back-end en el instituto IDAT. Me interesa crear interfaces limpias, accesibles y funcionales, combinando diseño y tecnología para mejorar la experiencia del usuario. <br />
            <br />
            Con conocimientos en React, Next.js y Node.js, aplicando buenas prácticas de desarrollo y metodologías ágiles como Scrum. Siempre estoy explorando nuevas tecnologías y formas de optimizar el rendimiento y la usabilidad en mis proyectos. 
          </p>
          <div  className="flex py-8 items-center gap-3">
            <a href="https://www.linkedin.com/in/lizkarolvergara/" target="_blank">
              <img src="/linkedin.svg" alt="Linkedin" />
            </a>
            <a href="https://github.com/lizkarolvergara" target="_blank">
              <img src="/github.svg" alt="Github" />
            </a>
            <a href="/cv-lizkarolvergara.pdf" download className="underline font-medium">
              Descargar CV
            </a>
          </div>

        </div>

        <div className="w-1/3">
          <img src="/Image.png" alt="" />
        </div>
      </section>

      <section id="skills" className="py-5">

        <h2>Skills</h2>

        <div className="grid grid-cols-8 gap-8">
          
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={skill.src} alt={skill.alt} />
              <p>{skill.name}</p>
            </div>
          ))}
        
        </div>

      </section>

      <section id="education" className="py-5">
        <h2>Formación</h2>

        <div>
          {education.map((education, index) => (
            <div key={index} className="pl-6 pb-8 relative before:content-[''] before:absolute before:-left-[0.55rem] before:top-1 before:w-4 before:h-4 before:rounded-full before:border-4 before:border-[#FFA3FD] before:bg-[#1e1b2e]
              after:content-[''] after:absolute after:top-5 after:-left-[0.09rem] after:h-full after:w-[2px] after:bg-[#E384FF] after:opacity-50 last:after:hidden">
              <h3 className="pb-2">
                {education.name}
              </h3>
              <p className="pb-2">
                {education.date}
              </p>
              <div  className="flex gap-16">
             
                <p className="text-justify">
                  {education.description}
                </p>

                <img src={education.src} alt={education.alt} />
              </div>
              

  
            </div>
          ))}

        </div>



      </section>

      <section id="projects" className="py-5">
        <h2>
          Proyectos
        </h2>

        <div className="grid grid-cols-3 justify-items-center py-6">

          {projects.map((project, index) => (
            <div key={index} className="flex flex-col rounded-xl border-2 border-[#FFA3FD]">

              <div>
                <p className="text-center py-2">{project.name}</p>
              </div>
  
              <div>
                <img src={project.src} alt={project.alt} className="px-1 w-100"/>
              </div>
  
              <div className="flex py-2 justify-center gap-2">
                {project.skills.map((skill, i) => 
                  <img key={i} src={skill} className="w-8 h-8"/>
                )}              
              </div>
  
            </div>
          ))}

        </div>

      </section>

      <section id="contact" className="py-5">
        <h2>
          Hablemos
        </h2>
        <div className="flex justify-center gap-16 py-6">

          <div className="flex rounded-xl p-4 border-3 border-[#FFA3FD] shadow-[0_4px_6px_-1px_rgba(255,163,253,0.5)]">
            <div className="pr-5">
              <img src="/mail.svg" alt="email" />
            </div>
            <div>
              <p>lizvergarareategui@gmail.com</p>
              <a href="mailto:lizvergarareategui@gmailcom" className="underline">
                Enviar mensaje
              </a>
            </div>
          </div>
          <div className="flex rounded-xl p-4 border-3 border-[#FFA3FD] pr-20 shadow-[0_4px_6px_-1px_rgba(255,163,253,0.5)]">
            <div className="pr-5">
              <img src="/whatsapp.svg" alt="email" />
            </div>
            <div>
              <p>PER +51 975 203 430</p>
              <a href="https://wa.me/+51975203430" target="_blank" className="underline">
                Enviar mensaje
              </a>
            </div>
          </div>

        </div>
      </section>

    </main>



    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

    //   </main>

    //   <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">


    //   </footer>

  );
}
