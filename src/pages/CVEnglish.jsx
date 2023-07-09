import React from "react";

const CVEnglish = () => {
  return (
    <main
      id="home"
      className="bg-black text-white min-h-screen px-4 pb-6 max-w-[1024px] flex flex-col flex-wrap mx-auto align-middle"
    >
      {/* Header */}
      <header className="pb-4 pt-4 flex flex-row flex-wrap justify-between	">
        <div className="text-3xl ">Andres Lara</div>

        <div className="flex justify-self-center text-[#8491a0]">
          <a className="pr-2" href="#destrezas">
            Abilities
          </a>
          <a className="pr-2" href="#proyectos">
            Projects
          </a>
          <a href="#contacto">Contact </a>
        </div>
      </header>

      {/* Description */}
      <article className="pb-8  flex flex-row flex-wrap items-center justify-around">
        <div className="pb-2 w-[320px] round-lg">
          <img src="/images/FotoAGLA1.jpg"></img>
        </div>
        <div className="text-4xl leading-8 w-[320px]">
          My name is Andrés Lara. Full Stack developer &nbsp;
          <span className="text-[#8491a0]">located in Colombia.</span>
          <br></br> <br></br>
          <div className="text-3xl w-[320px] ">
            I am an engineer committed to his work. If you have a web
            application development project, I am the person for you.
          </div>
        </div>
      </article>

      {/* Work experience */}
      <article className="pb-4">
        <div>WORK EXPERIENCE</div>
        <div className="text-4xl pb-4">Projects I have worked on</div>
        {/* Work items */}
        <div className="flex flex-row flex-wrap justify-around self-center">
          <section className="pb-4 w-[280px] pr-2">
            <div className="text-[#8491a0] text-8xl">01</div>

            <div className="text-2xl">
              <span className="text-[#3CC74E]">ICFES</span> Specialist Engineer.
            </div>
            <div className="text-lg pb-2">
            IT service desk software maintenance  and web platform management.
            </div>
          </section>

          <section className="pb-4 w-[280px] pr-2">
            <div className="text-[#8491a0] text-8xl">02</div>
            <div className="text-2xl">
              <span className="text-[#609bff]">
                Vision Logísitica Internacional
              </span>
            </div>
            <div className="text-lg  pb-2">
              Management of software projects for logistics applications.
              Vehicle tracking and delivery control. Management of the company's
              website.
            </div>
          </section>

          <section className="pb-4 w-[280px] pr-2">
            <div className="text-[#8491a0] text-8xl">03</div>
            <div className="text-2xl">
              <span className="text-[#e95d90]">Independent Professional</span>
            </div>
            <div className="text-lg  pb-2">
              I started my career as a developer of software applications
              applied to electronics.
            </div>
          </section>
        </div>
      </article>

      {/* Philosofia y valores */}
      <article className="pb-4 flex flex-row flex-wrap justify-center">
        <div className="bg-[#fff3E4] w-[320px] px-4 p-2 pb-4">
          <div className="text-4xl pb-4 text-black">Philosophy and values</div>
          <div className="text-lg text-[#8491A0] ">
            I believe that you must be committed to the projects entrusted.
            Continuously improving based on self-criticism and dialogue with
            stakeholders. I carry out my work with creativity, self-criticism
            and continuous improvement.
          </div>
          <div className="">
            <a
              className="underline underline-offset-8 text-black"
              href="https://www.linkedin.com/in/andreslaraamaya/"
              target="_blank"
            >
              Check my Linkedin page
            </a>
          </div>
        </div>
        {/*   <div className="w-[320px]">
        <img src="/images/test/FotoGroupOfPeople.png" alt="" />
      </div> */}
      </article>
      {/* Skillset */}
      <section className="">
        <article className="pb-4 flex flex-row flex-wrap gap-2">
          <div className="w-[320px] px-2">
            <div id="destrezas" className="text-4xl pb-4">
            Abilities
            </div>
            <div className="text-lg  ">
            With skills in different areas of design. I am the person to hire for a web design project. I am willing to undertake any challenge in this field.
            </div>
          </div>

          <div className="flex flex-row flex-wrap justify-center gap-2">
            {/* Skill #1 */}
            <div className="pt-4 pb-3 px-2">
              <div className="pb-1">
                <img src="/images/test/IconoSkillSet.png" alt="" />
              </div>
              <div className="text-xl font-semibold">Frameworks</div>
              <ul className="text-[#8491A0]">
                <li>React</li>
                <li>Redux</li>
                <li>Next.js</li>
              </ul>
            </div>
            {/* Skill #2 */}
            <div className="pt-4 pb-3 px-2">
              <div className="pb-1">
                <img src="/images/test/IconoSkillSet.png" alt="" />
              </div>
              <div className="text-xl font-semibold">Source Control</div>
              <ul className="text-[#8491A0]">
                <li>Git/Github</li>
                <li>SCRUM / Agil</li>
              </ul>
            </div>
            {/* Skill #3 */}
            <div className="pt-4 pb-3 px-2">
              <div className="pb-1">
                <img src="/images/test/IconoSkillSet.png" alt="" />
              </div>
              <div className="text-xl font-semibold">Lenguajes</div>
              <ul className="text-[#8491A0]">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Python</li>
              </ul>
            </div>
            {/* Skill #4 */}
            <div className="pt-4 pb-3 px-2">
              <div className="pb-1">
                <img src="/images/test/IconoSkillSet.png" alt="" />
              </div>
              <div className="text-xl font-semibold">UX/UI</div>
              <ul className="text-[#8491A0]">
                <li>Figma</li>
                <li>Tailwind</li>
              </ul>
            </div>
          </div>
        </article>
      </section>

      {/* Companies Logos*/}
      {/*   <article className="pb-6">
      <div className="flex flex-row flex-wrap justify-center">
        <div className="border-solid border-1 mt-2 ">
          <img src="/images/icfes.png" />
        </div>
        <div className="border-solid border-1">
          <img src="/images/VL.png" />
        </div>
        <div className="border-solid border-1">
          <img src="\images\test\LogoProject04.png" />
        </div>
        <div className="border-solid border-1">
          <img src="\images\test\LogoProject05.png" />
        </div>
        <div className="border-solid border-1">
          <img src="\images\test\LogoProject06.png" />
        </div> 
      </div>
    </article>*/}

      {/* MyProjects*/}

      <section
        id="proyectos"
        className="flex flex-row flex-wrap self-center mb-4"
      >
        <div className="w-[320px]">
          <div className="px-2">
            <div></div>
            <div className="text-3xl pb-4">
            Some projects I have done:
            </div>
          </div>
          {/* Proyecto 1*/}
          <article className="pb-5">
            <div>
              <div className="underline text-md text-[#a31a2e]">
                <a
                  href="https://ecommerceacademloandreslara.netlify.app/"
                  target="_blank"
                >
                  <img src="\images\TiemdaModulo1.png" alt="" />
                </a>
              </div>
            </div>
            <div className="text-xl font-semibold  px-2 pb-2">
            Store Frontend 
            </div>
            <div className="text-lg  text-[#8491A0] bg-[#0b0b0b]  px-2">
            Store Frontend . List of products obtained by web service. Shopping Cart Functionality.
              <div className="underline text-md text-[#a31a2e]">
                <a
                  href="https://ecommerceacademloandreslara.netlify.app/"
                  target="_blank"
                >
                  Link
                </a>
              </div>
            </div>
          </article>

          {/* Proyecto 2*/}
          <article className="pb-5 pr-2">
            <div>
              <div className="underline text-md text-[#a31a2e]">
                <a
                  href="https://academloreactentregable5.netlify.app/pokedex"
                  target="_blank"
                >
                  <img className="" src="\images\pokedex.png" alt="" />
                </a>
              </div>
            </div>
            <div className="text-xl font-semibold  px-2 pb-2">
            Pokedex display
            </div>
            <div className="text-lg  text-[#8491A0] bg-[#0b0b0b]  px-2">
            Pokemon television series characters information presentation. Data obtained by API. Login, layout of the set, pagination and presentation of an individual character's information page.
              <div className="underline text-md text-[#a31a2e]">
                <a
                  href="https://academloreactentregable5.netlify.app/pokedex"
                  target="_blank"
                >
                  Link
                </a>
              </div>
            </div>
          </article>
        </div>
        <div className="w-[320px]">
          {/* Proyecto 3*/}
          <article className="pb-5">
            <div>
              <div className="underline text-md text-[#a31a2e]">
                <a
                  href="https://academloreactentregable4.netlify.app/"
                  target="_blank"
                >
                  <img src="\images\FichasUsuario.png" alt="" />
                </a>
              </div>
            </div>
            <div className="text-xl font-semibold  px-2 pb-2">
            User information cards
            </div>
            <div className="text-lg  text-[#8491A0] bg-[#0b0b0b]  px-2">
           
            Application for managing cards with user information. It is possible to create, edit and delete cards with the information stored on a server. Web service access.
              <div className="underline text-md text-[#a31a2e]">
                <a
                  href="https://academloreactentregable4.netlify.app/"
                  target="_blank"
                >
                  Link
                </a>
              </div>
            </div>
          </article>
          {/* Proyecto 4*/}
          <article className="pb-5">
            <div>
              <div className="underline text-md text-[#a31a2e]">
                <a
                  href="https://academloreactentregable3.netlify.app/"
                  target="_blank"
                >
                  <img src="\images\RickAndMorty.png" alt="" />
                </a>
              </div>
            </div>
            <div className="text-xl font-semibold  px-2 pb-2">
              Rick and Morty
            </div>
            <div className="text-lg  text-[#8491A0] bg-[#0b0b0b]  px-2">
            Characters contained in the episodes of the television series Rick and Morty. Page with characters that appeared in a specific place. Data obtained by API.
              <div className="underline text-md text-[#a31a2e]">
                <a
                  href="https://academloreactentregable3.netlify.app/"
                  target="_blank"
                >
                  Link
                </a>
              </div>
            </div>
          </article>
          {/*    <button className="border-solid border-[1px] border-blue-700 px-3 py-2">
          VIEW ALL PROJECTS
        </button> */}
        </div>
      </section>

      {/* Behance*/}
      {/* 
    <section className="pb-4 flex flex-row flex-wrap mx-auto">
      <div className=" bg-[#FBE4FF] w-[320px]">
        <div className="text-3xl pb-4 text-black">Behance</div>
        <div className="text-lg text-[#5B6876] px-2 text-justify">
          If you area a person who enjoys photography, then I highly recommend
          that you check out my Instagram. I’m an avid traveller and I capture
          the best moments that I would love to cherish with the world
        </div>
        <div className="p-3 text-black">
          <a
            className="underline underline-offset-8"
            href="https://www.behance.net/galleries/Graphic-Design"
            target="_blank"
          >
            Follow me on Behance
          </a>
        </div>
      </div>
      <div className=" bg-black w-[320px]">
        <img src="\images\test\BehanceImage.png" alt="" />
      </div>
    </section>
    */}
      {/* Desing UX/UI */}

      {/*  <section>
      <div className="bg-black text-3xl  pb-2">Desing UX/UI </div>
      <div className="text-lg pb-4">
        Each dribbble shot is made with love and care. Do check out my work on
        Dribbble. Likes and comments are appreciated.
      </div>
      <div className="pb-4">
        <img src="\images\test\CheckMoreImage.png" alt="" />
      </div>
    </section> */}

      {/* Formulario de contacto*/}
      <div id="contacto" className="text-4xl pb-4">
        Contact
      </div>
      <article className="pb-4 flex flex-row flex-wrap justify-center ">
        <div className="w-[320px]">
          <div className="text-lg text-[#5B6876] pb-2 px-2 mt-3">
          Now that you know a lot about me, let me know if you are interested in working with me.
            <div className=" mt-2">
            Telephone:&nbsp;
              <a className=" text-[#5221EB]" href="tel:+573173167289">
                +57-3173167289
              </a>
            </div>
            <div className=" mt-2">
              Email:&nbsp;
              <a className=" text-[#5221EB]" href="mailto:angillama@gmail.com">
                angillama@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="pb-6 mx-auto">
          <form
            action="https://formsubmit.co/angillama@gmail.com"
            method="POST"
          >
            <div className="pb-2 ">
              <label className="block pb-1" htmlFor="name">
                Name
              </label>
              <input
                className="block bg-[#25292d] "
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="pb-2">
              <label className="block pb-1 " htmlFor="email">
                Email
              </label>
              <input
                className="block bg-[#25292d]"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="block pb-4">
              <label className="block pb-1" htmlFor="message">
                Message
              </label>
              <textarea
                className="block bg-[#25292d]"
                name="Message"
                id="message"
              ></textarea>
            </div>
            <div className="flex">
              <button className="px-3 py-2 bg-[#5221EB] mx-auto">Enviar</button>
            </div>
          </form>
        </div>
        <hr />
      </article>

      {/* footer */}
      <footer className="pb-5 flex flex-row flex-wrap items-center justify-center bg-[#25292d] pl-3 ">
        <section className="w-[320px] ">
          <div className="pb-4 pt-4">
            <div className="text-2xl">Andres Lara</div>
          </div>

          <div>
            <a
              className="pr-4 "
              href="https://twitter.com/andresLaraamaya"
              target="_blank"
            >
              <i className="bx bxl-twitter text-[#1DB9F0]"></i>
            </a>
            <a
              className="pr-4"
              href="https://www.linkedin.com/in/andreslaraamaya/"
              target="_blank"
            >
              <i className="bx bxl-linkedin-square text-[#0A66C2]"></i>
            </a>
            <a
              className="pr-4"
              href="https://www.facebook.com/profile.php?id=100088672094738"
              target="_blank"
            >
              <i className="bx bxl-facebook-circle text-[#1B74E4]"></i>
            </a>
            <a
              className="pr-4"
              
              href="https://github.com/aglagithub"
              target="_blank"
            >
              <i className="bx bxl-github "></i>
            </a>
          </div>
        </section>

        <section className="flex flex-row flex-wrap">
          <div>
            <div>
              <a href="#home">Home</a>
            </div>

            <div>
              <a href="#destrezas">Abilities</a>
            </div>
            <div>
              <a href="#proyectos">Projects</a>
            </div>
          </div>
          {/* <div>
          <div>
            <a href="">Store</a>
          </div>
          <div>
            <a href="">Blog</a>
          </div>
          <div>
            <a href=""></a>
          </div>
        </div> */}
        </section>
      </footer>
      <div className="mx-auto pt-3">&copy;2023 </div>
    </main>
  );
};

export default CVEnglish;
