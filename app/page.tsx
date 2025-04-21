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
        <div className="flex justify-between py-5">
          <div className="flex flex-col items-center">
            <img src="/1-react.svg" alt="React" />
            <p>React.js</p>
          </div>

          <div className="flex flex-col items-center">
            <img src="/2-angular.svg" alt="Angular" />
            <p>Angular</p>
          </div>

          <div className="flex flex-col items-center">
            <img src="/3-nest.svg" alt="Nest.js" />
            <p>Nest.js</p>
          </div>

          <div className="flex flex-col items-center">
            <img src="/4-next.svg" alt="Next.js" />
            <p>Next.js</p>
          </div>

          <div className="flex flex-col items-center">
            <img src="/5-node.svg" alt="Node.js" />
            <p>Node.js</p>
          </div>

          <div className="flex flex-col items-center">
            <img src="/6-javascript.svg" alt="JavaScript" />
            <p>JavaScript</p>
          </div>

          <div className="flex flex-col items-center">
            <img src="/7-css.svg" alt="CSS3" />
            <p>CSS3</p>
          </div>

          <div className="flex flex-col items-center">
            <img src="/8-html.svg" alt="HTML5" />
            <p>HTML5</p>
          </div>
        </div>
          
        <div className="flex justify-between py-5">
          <div className="flex flex-col items-center">
            <img src="/9-git.svg" alt="Git" />
            <p>Git</p>
          </div>

          <div className="flex flex-col items-center">
            <img src="/10-github.svg" alt="GitHub" />
            <p>GitHub</p>
          </div>

          <div className="flex flex-col items-center">
            <img src="/11-sql.svg" alt="SQL" />
            <p>SQL</p>
          </div>

          <div className="flex flex-col items-center">
            <img src="/12-docker.svg" alt="Docker" />
            <p>Docker</p>
          </div>

          <div className="flex flex-col items-center">
            <img src="/13-postman.svg" alt="Postman" />
            <p>Postman</p>
          </div>

          <div className="flex flex-col items-center">
            <img src="/14-bootstrap.svg" alt="Bootstrap" />
            <p>Bootstrap</p>
          </div>

          <div className="flex flex-col items-center">
            <img src="/15-tailwind.svg" alt="Tailwind CSS" />
            <p>Tailwind</p>
          </div>

          <div className="flex flex-col items-center">
            <img src="/16-figma.svg" alt="Figma" />
            <p>Figma</p>
          </div>

        </div>

      </section>

      <section id="education">
        <h2>Formación</h2>

        <div>
          
          <div className="pl-6 pb-8 relative before:content-[''] before:absolute before:-left-[0.55rem] before:top-1 before:w-4 before:h-4 before:rounded-full before:border-4 before:border-[#FFA3FD] before:bg-[#1e1b2e]
            after:content-[''] after:absolute after:top-5 after:-left-[0.09rem] after:h-full after:w-[2px] after:bg-[#E384FF] after:opacity-50 last:after:hidden">
            <h3 className="pb-2">
              Programa Oracle Next Education Front-end
            </h3>
            <p className="pb-2">
              Abril 2024 - Enero 2025
            </p>

            <div className="flex gap-16">
              <p className="text-justify">
                Desarrollo Front-End con React y JavaScript: creación de componentes, navegación, estilos con Styled Components, Hooks y consumo de APIs. Capacitación en HTML, CSS responsivo, Typescript, manipulación del DOM e integración de IA con ChatGPT y GitHub Copilot. <br />
                Complementado con formación en Desarrollo Personal y Protagonismo Profesional, enfocada en productividad, gestión de hábitos, optimización del perfil en LinkedIn, fundamentos ágiles y emprendimiento.
              </p>
              <img src="/alura-latam.svg" alt="ALURA LATAM" />
            </div>

          </div>

          <div className="pl-6 pb-8 relative before:content-[''] before:absolute before:-left-[0.55rem] before:top-1 before:w-4 before:h-4 before:rounded-full before:border-4 before:border-[#FFA3FD] before:bg-[#1e1b2e]
            after:content-[''] after:absolute after:top-5 after:-left-[0.09rem] after:h-full after:w-[2px] after:bg-[#E384FF] after:opacity-50 last:after:hidden">
            <h3 className="pb-2">
              Escuela de Educación Superior Tecnológica IDAT
            </h3>
            <p className="pb-2">
              Enero 2024 - Actualmente
            </p>

            <div className="flex gap-16">
              <p className="text-justify">
                Formación en programación estructurada y orientada a objetos, desarrollo web, diseño de interfaces y bases de datos relacionales y no relacionales. Capacitación en patrones de diseño, calidad de software, ciberseguridad, DevOps y auditoría de TI. Enfoque en metodologías ágiles, computación en la nube, transformación digital e inteligencia artificial. Desarrollo de proyectos aplicados en software empresarial, integración de capas de datos, negocio y vista, y creación de aplicaciones móviles y en la nube.
              </p>
              <img src="/idat.svg" alt="IDAT" />
            </div>

          </div>

          <div className="pl-6 pb-8 relative before:content-[''] before:absolute before:-left-[0.55rem] before:top-1 before:w-4 before:h-4 before:rounded-full before:border-4 before:border-[#FFA3FD] before:bg-[#1e1b2e]
            after:content-[''] after:absolute after:top-5 after:-left-[0.09rem] after:h-full after:w-[2px] after:bg-[#E384FF] after:opacity-50 last:after:hidden">
            <h3 className="pb-2">
              Ingeniería Civil - Universidad Nacional de San Martín
            </h3>
            <p className="pb-2">
              Marzo 2012 - Diciembre 2016
            </p>
          </div>

        </div>



      </section>

      <section id="projects">
        <h2>
          Proyectos
        </h2>
      </section>

      <section id="contact">
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
