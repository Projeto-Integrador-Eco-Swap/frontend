
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'


function Sobre() {

    const people = [
            {
            name: "Carolina Carnevali ",
            role: "Software Engineer",
            href: "https://github.com/CaarCarnevalli",
            linkedin:"https://www.linkedin.com/in/carolinacarnevali/",
            imageSrc:
                "https://res.cloudinary.com/dqiae7b26/image/upload/t_Thumbnail/v1698094089/Imagem_do_WhatsApp_de_2023-10-23_%C3%A0_s_17.15.10_aad9ad5b_pebhrx.png",
            imageAlt: "Integrante do projeto",
            },
            {
            name: "Vinicius Andrade",
            role: "Software Engineer",
            href: "https://github.com/viniciusdsandrade",
            linkedin: "https://www.linkedin.com/in/viniciusdsandrade/",
            imageSrc:
                "https://res.cloudinary.com/dqiae7b26/image/upload/t_Thumbnail/v1698092755/Imagem_do_WhatsApp_de_2023-10-23_%C3%A0_s_15.48.52_d6a15c08_ly1fes.png",
            imageAlt: "Integrante do projeto",
            },
        
            {
            name: "Alessandro Soares",
            role: "Software Engineer",
            href: "https://github.com/alesoaresdecarvalho",
            linkedin:"https://www.linkedin.com/in/alessandrosoaress/",
            imageSrc:
                "https://res.cloudinary.com/dqiae7b26/image/upload/t_Thumbnail/v1698091726/C%C3%B3pia_de_httpsres.cloudinary.comsalvedojuliaoimageuploadv16916990077a9ba.png_dr6x1l.png",
            imageAlt: "Integrante do projeto",
            },
            {
            name: "Beatriz Campos",
            role: "Software Engineer",
            href: "https://github.com/trizdoravante",
            linkedin: "https://www.linkedin.com/in/beatrizcamposolisantos/  ",
            imageSrc:
                "https://res.cloudinary.com/dqiae7b26/image/upload/t_Thumbnail/v1698092755/Imagem_do_WhatsApp_de_2023-10-23_%C3%A0_s_15.50.02_7d397a3f_qt7iyb.png",
            imageAlt: "Integrante do projeto",
            },
            {
            name: "Matheus Calixto",
            role: "Software Engineer",
            href: "https://github.com/matheuscmuniz",
            linkedin: "https://www.linkedin.com/in/matheuscalixtomuniz",
            imageSrc:
                "https://res.cloudinary.com/dqiae7b26/image/upload/t_Thumbnail/v1698092756/Imagem_do_WhatsApp_de_2023-10-23_%C3%A0_s_15.56.41_e37b910f_gakulo.png", 
            imageAlt: "Integrante do projeto",
            },
            {
              name: "Guilherme Alves",
              role: "Software Engineer",
              href: "https://github.com/GuiAlvesss99",
              linkedin: "https://www.linkedin.com/in/guilhermealvessdossantos",
              imageSrc:
                  "https://res.cloudinary.com/dqiae7b26/image/upload/t_Thumbnail/v1698092757/Imagem_do_WhatsApp_de_2023-10-23_%C3%A0_s_16.33.12_48ea67de_fxcqft.png",
              imageAlt: "Integrante do projeto",
              },
              {
                name: "João Tertuliano",
                role: "Software Engineer",
                href: "https://github.com/jotertu",
                linkedin: "https://www.linkedin.com/in/joao-tertuliano/",
                imageSrc:
                    "https://res.cloudinary.com/dqiae7b26/image/upload/t_Thumbnail/v1698092758/Imagem_do_WhatsApp_de_2023-10-23_%C3%A0_s_17.00.34_70e42a27_fktj58.png",
                imageAlt: "Integrante do projeto",
                },
            
    ];

  return (
    <>
      <div className="bg-white dark:bg-black pt-[100px] pb-[200px]">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-90 text-center mb-4 dark:text-verde_claro2">
            Sobre a equipe
          </h2>
          <h2 className="text-center text-lg dark:text-white">
          Nós somos um grupo de desenvolvedores entusiasmados e dedicados, todos recém-formados pela Generation Brasil! Juntos, aplicamos nosso conhecimento para criar soluções incríveis a partir de linhas de código.
          </h2>
        </div>

        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-2 lg:max-w-full lg:px-20 flex justify-center">
          <div className="flex flex-col items-center md:flex-row md:flex-wrap justify-center sm:gap-x-12">
            {people.map((dev) => (
              <div>
                <div className="">
                  <a href={dev.href}>
                    <img
                      src={dev.imageSrc}
                      alt={dev.imageAlt}
                      className="cursor-pointer hover:scale-125 transition-all ease-out duration-300"
                    />
                  </a>
                </div>
                <div className="mt-10 flex justify-center mb-12">
                  <div className='flex-col justify-center items-center'>
                    <h3 className="text-xl text-center text-black font-bold dark:text-verde_claro2 mb-2 hover:text-verde_claro1 hover:dark:text-verde_claro2 transition-all duration-300 ease-in-out">
                    <a href={dev.href}>
                        <span aria-hidden="true" className="" />
                        {dev.name}
                    </a>
                    </h3>
                    <p className='text-center mt-[-10px] dark:text-white'> {dev.role} </p>
                 
                    <div className='mt-2 flex gap-x-2 justify-center'>
                      <a href={dev.href}><AiFillGithub className="dark:text-white w-8 h-8 cursor-pointer hover:text-verde_claro1 dark:hover:text-verde_claro2 transition-all duration-300 ease-in-out "/></a>
                      <a href={dev.linkedin}><AiFillLinkedin className="dark:text-white w-8 h-8 cursor-pointer hover:text-verde_claro1 dark:hover:text-verde_claro2 transition-all duration-300 ease-in-out"/></a>  
                    </div>      
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sobre;