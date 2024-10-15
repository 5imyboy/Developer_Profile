import ProjectLayout from "./ProjectLayout"

const ProjectList = ({projects}) => {
  return (
    <div>
      {
        <div className='w-full m-w-fxl px-16 space-y-8 flex flex-col items-center'>
          {projects.map((project, index) => {
            return <ProjectLayout key={index} {...project} />
           })}
        </div>

      }
    </div>
  )
}

export default ProjectList