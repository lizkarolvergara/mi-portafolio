export default function Footer() {
    return (
        <footer>
            <div>
                <ul className="flex justify-center gap-10 py-8 hidden md:flex">
                    <li>
                        <a href="#hero" className="hover-scale">
                            Sobre mí
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className="hover-scale">
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#education" className="hover-scale">
                            Formación
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="hover-scale">
                            Proyectos
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover-scale">
                            Contacto
                        </a>
                    </li>
                </ul>
            </div>

            <div className="flex justify-center gap-5 py-5">
                <a href="https://github.com/lizkarolvergara" target="_blank"><img src="/icon-github2.svg" alt="Github" className="icon-svg"/></a>
                <a href="https://www.linkedin.com/in/lizkarolvergara/" target="_blank"><img src="/icon-linkedin-2.svg" alt="Linkedin" className="icon-svg"/></a>
                <a href="https://www.tiktok.com/@hueleanaranjas" target="_blank"><img src="/icon-tiktok.svg" alt="Tiktok" className="icon-svg"/></a>
                <a href="https://www.instagram.com/hueleanaranjas/" target="_blank"><img src="/icon-instagram.svg" alt="Instagram" className="icon-svg"/></a>
                <a href="https://buymeacoffee.com/hueleanaranjas" target="_blank"><img src="/icon-coffee.svg" alt="Buy me a coffee" className="icon-svg"/></a>
            </div>

            <p className="flex justify-center py-2">© Liz Karol Vergara, Tarapoto, Perú</p>
       
        </footer>
    )
}