import classnames from 'classnames'

export default function ProjectLink({ children, className, ...rest }) {


const allClasses = classnames(className)
    return (
        
            <div className={allClasses} {...rest}>
                {children}
            </div>    
        
      
    )
}