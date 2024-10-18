import ProjectLayout from "./ProjectLayout"

const ProjectList = ({projects}) => {
  return (
    <div>
      {
        <div className='w-full max-w-auto xl:max-w-4xl px-4 lg:px-16 mx-auto space-y-6 md:space-y-8 flex flex-col items-center'>
          {projects.map((project, index) => {
            return <ProjectLayout key={index} {...project} />
           })}
        </div>

      }
    </div>
  )
}

export default ProjectList