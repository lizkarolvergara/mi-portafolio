export default function Navbar() {
    return (
        <nav className="flex justify-end py-5 border-b border-[#865DFF]  shadow-sm px-24 text-xl">
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