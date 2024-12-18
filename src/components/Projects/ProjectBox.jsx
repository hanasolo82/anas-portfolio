

export default function ProjectBox({children , href, target}) {

    return (
        <a className="project-box" href={href} target={target}>
            {children}
        </a>
    )
}