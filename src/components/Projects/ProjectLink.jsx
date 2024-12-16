import classnames from 'classnames'

export default function ProjectNumber({ className, ...rest }) {


const allClasses = classnames(className)
    return (
        <>
            <img className={allClasses} {...rest}/>
        </>
      
    )
}