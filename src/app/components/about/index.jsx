import React from 'react'
import ItemLayout from './ItemLayout';

const AboutDetails = () => {
  return (
    <section className='py-1 w-full'>
        <div className='grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full'>
            <ItemLayout className='col-span-full lg:col-span-8 row-span-2 flex-col items-start'>
                <h2 className='text-xl md:text-2xl text-left w-full capitalize'>
                    Architect of Enchantment
                </h2>
                <p className='font-light text-xs sm:text-sm md:text-base'>
                    INSERT CONTENT HERE...
                </p>
            </ItemLayout>
            <ItemLayout className='col-span-full xs:col-span-6 lg:col-span-4 text-accent'>
                <p className='font-semibold w-full text-left text-2xl sm:text-5xl'>
                    ???+ <sub className='font-semibold text-base'>INSERT CONTENT HERE...</sub>
                </p>
            </ItemLayout>
            <ItemLayout className='col-span-full xs:col-span-6 lg:col-span-4 text-accent'>
                <p className='font-semibold w-full text-left text-2xl sm:text-5xl'>
                    2+ <sub className='font-semibold text-base'>years of experience</sub>
                </p>
            </ItemLayout>
            <ItemLayout className='col-span-full md:col-span-4 !p-0'>
                <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/top-langs?username=5imyboy&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="5imyboy" loading="lazy" />
            </ItemLayout>
            <ItemLayout className='col-span-full md:col-span-8 !p-0'>
                <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api?username=5imyboy&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="5imyboy" loading="lazy" />
            </ItemLayout>
            <ItemLayout className='col-span-full'>
                <img className="w-full h-auto" src="https://skillicons.dev/icons?i=js,react,html,css,tailwind,py,cs,cpp,mysql,vscode,github" alt="5imyboy" loading="lazy" />
            </ItemLayout>
            <ItemLayout className='col-span-full md:col-span-6'>
                <img className="w-full h-auto" src="https://github-readme-streak-stats.herokuapp.com?user=5imyboy&theme=dark&hide_border=true&type=png&ring=FEFE5B&currStreakLabel=FEFE5B&background=00000000" alt="5imyboy" loading="lazy" />
            </ItemLayout>
            <ItemLayout className='col-span-full md:col-span-6 !p-0'>
                <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/pin/?username=5imyboy&repo=Developer_Profile&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2" alt="5imyboy" loading="lazy" />
            </ItemLayout>            

        </div>
    </section>
  )
}

export default AboutDetails