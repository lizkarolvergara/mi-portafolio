export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 flex justify-end py-5 border-b border-[#865DFF]  shadow-sm px-24 text-xl bg-[#191825]/70 backdrop-blur-sm">
            <ul className="flex gap-5">
                <li>
                    <a href="#hero">
                        Sobre mí
                    </a>
                </li>
                <li>
                    <a href="#skills">
                        Skills
                    </a>
                </li>
                <li>
                    <a href="#education">
                        Formación
                    </a>
                </li>
                <li>
                    <a href="#projects">
                        Proyectos
                    </a>
                </li>
                <li>
                    <a href="#contact">
                        Contacto
                    </a>
                </li>
            </ul>
        </nav>
    )
}