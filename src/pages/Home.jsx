import React, { useState } from "react";

const home = () => {
  const [languaje, setLanguaje] = useState("Español");
  const [colorScheme, setcolorScheme] = useState("light");

  const languajeChange = () => {
    console.log("Languaje Change");
    if (languaje === "Español") {
      setLanguaje("English");
    } else {
      setLanguaje("Español");
    }
    console.log(languaje);
  };
  const visualModeChange = () => {
    console.log("Moon clicked");
    if (colorScheme === "dark") {
      setcolorScheme("light");
    } else {
      setcolorScheme("dark");
    }
    console.log(colorScheme);
  };

  return (
    <main
      id="home"
      className={`${
        colorScheme === "dark"
          ? "bg-[#dddddd] text-black"
          : "bg-black text-white"
      } min-h-screen px-4 pb-6 max-w-[1024px] flex flex-col flex-wrap mx-auto align-middle`}
    >
      {/* Header */}
      <header className="pb-4 pt-4 flex flex-row flex-wrap justify-between	">
        <div className="text-3xl self-center ">Andres Lara</div>

        {/* Menu */}
        <div>
          <div
            className={` flex flex-row justify-evenly items-stretch
          ${
            colorScheme === "dark"
              ? "bg-[#dddddd] text-black"
              : "bg-black text-white"
          }`}
          >
            <button>
              <i
                onClick={visualModeChange}
                className={` row-span-2 bx  ${
                  colorScheme === "dark" ? "bxs-moon" : "bxs-sun"
                }  justify-self-center pt-1 pr-1 `}
              ></i>
            </button>
            <div
              onClick={languajeChange}
              className="  hover:underline hover:underline-offset-4 rounded "
            >
              {languaje === "English" ? "A Español" : "To English"}
            </div>
            <a
              href="https://github.com/aglagithub/cv/blob/main/public/docs/CV%20Andres%20Gilberto%20Lara%20Amaya.%20SP.pdf"
              download="Andres%20Gilberto%20Lara%20Amaya.%20SP.pdf"
              target="_blank"
              rel="noreferrer"
              className={` pr-2  hover:underline hover:underline-offset-4 
            ${
              colorScheme === "dark" ? "hover:text-black" : "hover:text-white"
            }`}
            >
              CV pdf
            </a>
            <a
              href="https://github.com/aglagithub/cv/blob/main/public/docs/CV%20ATS%20Andres%20Gilberto%20Lara%20Amaya.%20SP.pdf"
              download="Andres%20Gilberto%20Lara%20Amaya.%20SP.pdf"
              target="_blank"
              rel="noreferrer"
              className={` pr-2  hover:underline hover:underline-offset-4
            ${
              colorScheme === "dark" ? "hover:text-black" : "hover:text-white"
            }`}
            >
              CV ATS
            </a>
          </div>
          <div className="flex justify-between flex-wrap items-stretch font-semibold">
            <a
              className={` pr-2 text-xl hover:underline hover:underline-offset-4 ${
                colorScheme === "dark" ? "hover:text-black" : "hover:text-white"
              }`}
              href="#destrezas"
            >
              {languaje === "English" ? "Abilities" : "Destrezas"}
            </a>
            <a
              className={` pr-2 text-xl hover:underline hover:underline-offset-4 ${
                colorScheme === "dark" ? "hover:text-black" : "hover:text-white"
              }`}
              href="#proyectos"
            >
              {languaje === "English" ? "Projects" : " Proyectos"}
            </a>
            <a
              className={` pr-2 text-xl hover:underline hover:underline-offset-4 ${
                colorScheme === "dark" ? "hover:text-black" : "hover:text-white"
              }`}
              href="#contacto"
            >
              {languaje === "English" ? "Contact" : "Contacto"}
            </a>
          </div>
        </div>
      </header>

      {/* Description */}
      <article className="pb-10  flex flex-row flex-wrap items-center justify-around">
        <div className="pb-2 w-[320px] round-lg">
          <img src="/images/FotoAGLA1.jpg"></img>
        </div>
        <div className="text-4xl leading-8 w-[320px]">
          {languaje === "English"
            ? "My name is Andrés Lara. Full Stack developer"
            : "Mi nombre es Andres Lara. desarrollador Full Stack"}
          &nbsp;
          <span className="text-[#4b3abc]">
            {languaje === "English"
              ? "located in Colombia."
              : "ubicado en Colombia."}
          </span>
          <br></br> <br></br>
          <div className="text-3xl w-[320px] ">
            {languaje === "English"
              ? "I am an engineer committed to his work. If you have a web application development project, I am the person for you."
              : "Soy ingeniero comprometido con su trabajo. Si tiene un proyecto de desarrollo de aplicaciones web, soy la persona que busca."}
          </div>
        </div>
      </article>

      {/* Skillset */}
      <section className="color-red">
        <article className="pb-6 flex flex-row flex-wrap gap-2">
          <div className="w-[320px] px-2">
            <div id="destrezas" className="text-4xl pb-4">
              {languaje === "English" ? "Abilities" : "Destrezas"}
            </div>
            <div className="text-lg text-left ">
              {languaje === "English"
                ? "With skills in different areas of design. I am the person to hire for a web design project. I am willing to undertake any challenge in this field."
                : "Con destrezas en diferentes areas del diseño. Soy la persona a              contratar para un proyecto de diseño web. Estoy dispuesto a emprender cualquier reto en este campo."}
            </div>
          </div>

          <div className="flex flex-row flex-wrap self-center gap-2">
            {/* Skill #1 */}
            <div className="pt-4 pb-3 px-2">
              <div className="pb-1 hover:animate-pulse">
                <img src="/images/test/IconoSkillSet.png" alt="" />
              </div>
              <div className="text-xl font-semibold">Frameworks</div>
              <ul className="text-[#4b3abc]">
                <li>React</li>
                <li>Redux</li>
                {/* <li>Next.js</li> */}
              </ul>
            </div>
            {/* Skill #2 */}
            <div className="pt-4 pb-3 px-2">
              <div className="pb-1 hover:animate-pulse">
                <img src="/images/test/IconoSkillSet.png" alt="" />
              </div>
              <div className="text-xl font-semibold">Source Control</div>
              <ul className="text-[#4b3abc]">
                <li>Git/Github</li>
                <li>SCRUM / Agil</li>
              </ul>
            </div>
            {/* Skill #3 */}
            <div className="pt-4 pb-3 px-2">
              <div className="pb-1 hover:animate-pulse">
                <img src="/images/test/IconoSkillSet.png" alt="" />
              </div>
              <div className="text-xl font-semibold">Lenguajes</div>
              <ul className="text-[#4b3abc]">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Typescript</li>
                {/* <li>Python</li>*/}
              </ul>
            </div>
            {/* Skill #4 */}
            <div className="pt-4 pb-3 px-2">
              <div className="pb-1 hover:animate-pulse">
                <img src="/images/test/IconoSkillSet.png" alt="" />
              </div>
              <div className="text-xl font-semibold">UX/UI</div>
              <ul className="text-[#4b3abc]">
                <li>Tailwind</li>
                <li>Figma</li>
              </ul>
            </div>
          </div>
        </article>
      </section>

      {/* Work experience */}
      <article className="pb-4">
        <div>
          {languaje === "English" ? "WORK EXPERIENCE" : "EXPERIENCIA LABORAL"}
        </div>
        <div className="text-4xl pb-4">
          {languaje === "English"
            ? "Projects I have worked on"
            : "Proyectos en los que he trabajado"}
        </div>
        {/* Work items */}
        <div className="flex flex-row flex-wrap justify-around self-center">
          <section className="pb-4 w-[280px] pr-2">
            <div className="text-[#4b3abc] text-8xl">01</div>

            <div className="text-2xl">
              <span className="text-[#3CC74E]">ICFES</span>.
              {languaje === "English"
                ? "Specialist Engineer."
                : "Ingeniero Especialista"}
            </div>
            <div className="text-lg pb-2">
              {languaje === "English"
                ? "IT service desk software maintenance and web platform management."
                : "Mantenimiento del software de la mesa de servicios de TI y gestión de la plataforma web de la entidad."}
            </div>
          </section>

          <section className="pb-4 w-[280px] pr-2">
            <div className="text-[#4b3abc] text-8xl">02</div>
            <div className="text-2xl">
              <span className="text-[#609bff]">
                Vision Logísitica Internacional
              </span>
            </div>
            <div className="text-lg  pb-2">
              {languaje === "English"
                ? "Management of software projects for logistics applications. Vehicle tracking and delivery control. Management of the company's website."
                : "Gestión de proyectos de software para aplicaciones de lógistica.              Seguimiento de vehiculos y control de entregas. Gestión del sitio web de la compañia."}
            </div>
          </section>

          <section className="pb-4 w-[280px] pr-2">
            <div className="text-[#4b3abc] text-8xl">03</div>
            <div className="text-2xl">
              <span className="text-[#e95d90]">
                {languaje === "English"
                  ? "Independent Professional"
                  : "Profesional Independiente"}
              </span>
              ,
            </div>
            <div className="text-lg  pb-2">
              {languaje === "English"
                ? "I started my career as a developer of software applications applied to electronics."
                : "Empecé mi carrera como desarrollador de aplicaciones de softaware              aplicadas a electrónica."}
            </div>
          </section>
        </div>
      </article>

      {/* Philosofia y valores */}
      <article className="pb-8 flex flex-row flex-wrap justify-center ">
        <div className="bg-[#fff3E4] w-[320px] px-4 p-2 pb-4 rounded">
          <div className="text-4xl pb-4 text-black">
            {languaje === "English"
              ? "Philosophy and values"
              : "Filosofía y valores"}
          </div>
          <div className="text-lg text-[#3f3f36] ">
            {languaje === "English"
              ? "I believe that you must be committed to the projects entrusted. Continuously improving based on self-criticism and dialogue with stakeholders. I carry out my work with creativity, self-criticism and continuous improvement."
              : " Creo que se debe estar comprometido con los proyectos encomendados,            mejorando continuamente basandose en la autocrítica y el dialogo los interesados. Realizo mi trabajo con creatividad, autocrítica y mejora continua."}
          </div>
          <div className="py-4">
            <a
              className="underline underline-offset-8 text-black"
              href="https://www.linkedin.com/in/andreslaraamaya/"
              target="_blank"
            >
              {languaje === "English"
                ? "Check my Linkedin page"
                : "Observe mi Linkedin"}
            </a>
          </div>
        </div>
        {/*   <div className="w-[320px]">
          <img src="/images/test/FotoGroupOfPeople.png" alt="" />
        </div> */}
      </article>

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
        className={`flex flex-row flex-wrap self-center mb-4 ${
          colorScheme === "dark"
            ? "bg-[#dddddd] text-black"
            : "bg-black text-white"
        }`}
      >
        <div
          className={` w-[320px] ${
            colorScheme === "dark"
              ? "bg-[#dddddd] text-black"
              : "bg-black text-white"
          }`}
        >
          <div className="px-2">
            <div className="text-3xl pb-4">
              {languaje === "English"
                ? "Some projects I have done:"
                : "Algunos proyectos que he realizado:"}
            </div>
          </div>
          {/* Proyecto 1*/}
          <article>
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
              {languaje === "English" ? "Store Frontend" : "Frontend Tienda"}
            </div>
            <div
              className={`text-lg  ${
                colorScheme === "dark"
                  ? "bg-[#dddddd] text-black"
                  : "bg-black text-white"
              }  px-2 `}
            >
              {languaje === "English"
                ? "Store Frontend. List of products obtained by web service. Shopping Cart Functionality."
                : " FrontEnd Tienda. Listado de productos obtenido  por servicio web. Funcionalidad para Carrito de compras."}

              <div className="underline text-md text-[#a31a2e] pb-3">
                <a
                  href="https://ecommerceacademloandreslara.netlify.app/"
                  target="_blank"
                >
                  {languaje === "English" ? "Link" : "Enlace"}
                </a>
              </div>
            </div>
          </article>

          {/* Proyecto 2*/}
          <article className="pb-5 pr-2 ">
            <div className="">
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
              {languaje === "English"
                ? "Pokedex display"
                : "Visualización de Pokedex"}
            </div>
            <div
              className={`text-lg  ${
                colorScheme === "dark"
                  ? "bg-[#dddddd] text-black"
                  : "bg-black text-white"
              }  px-2 `}
            >
              {languaje === "English"
                ? "Pokemon television series characters information presentation. Data obtained by API. Login, layout of the set, pagination and presentation of an individual character's information page."
                : "Presentación de los contenidos de las figuras de la serie de televisión Pokemon. Datos obtenidos por API. Login, maquetación del conjunto, paginación y presentación de la página con información de un personaje."}

              <div className="underline text-md text-[#a31a2e]">
                <a
                  href="https://academloreactentregable5.netlify.app/pokedex"
                  target="_blank"
                >
                  {languaje === "English" ? "Link" : "Enlace"}
                </a>
              </div>
            </div>
          </article>
        </div>
        <div
          className={` w-[320px] ${
            colorScheme === "dark"
              ? "bg-[#dddddd] text-black"
              : "bg-black text-white"
          }`}
        >
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
            <div
              className={` text-xl font-semibold  px-2 pb-2 ${
                colorScheme === "dark"
                  ? "bg-[#dddddd] text-black"
                  : "bg-black text-white"
              }`}
            >
              {languaje === "English"
                ? "User information cards"
                : "Tarjetas información de usuarios"}
            </div>
            <div
              className={`text-lg  ${
                colorScheme === "dark"
                  ? "bg-[#dddddd] text-black"
                  : "bg-black text-white"
              }  px-2 `}
            >
              {languaje === "English"
                ? "Application for managing cards with user information. It is possible to create, edit and delete cards with the information stored on a server. Web service access."
                : "Aplicación para manejo de tarjetas con información de usuarios. Es posible crear, editar y borrar tarjetas con los datos almacenados en un servidor remoto. Acceso por servicio web."}
              <div className="underline text-md text-[#a31a2e] pb-3">
                <a
                  href="https://academloreactentregable4.netlify.app/"
                  target="_blank"
                >
                  {languaje === "English" ? "Link" : "Enlace"}
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
            <div
              className={` text-xl font-semibold  px-2 pb-2 ${
                colorScheme === "dark"
                  ? "bg-[#dddddd] text-black"
                  : "bg-black text-white"
              }`}
            >
              Rick and Morty
            </div>
            <div
              className={`text-lg  ${
                colorScheme === "dark"
                  ? "bg-[#dddddd] text-black"
                  : "bg-black text-white"
              }  px-2 `}
            >
              {languaje === "English"
                ? "Characters contained in the episodes of the television series Rick and Morty. Page with characters that appeared in a specific place. Data obtained by API."
                : " Personajes contenidos en los episodios de la serie de televisión Rick and Morty. Página con individuos que parecieron en un lugar      específico. Datos obtenidos por API."}

              <div className="underline text-md text-[#a31a2e]">
                <a
                  href="https://academloreactentregable3.netlify.app/"
                  target="_blank"
                >
                  {languaje === "English" ? "Link" : "Enlace"}
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
        {languaje === "English" ? "Contact" : "Contacto"}
      </div>
      <article className="pb-4 flex flex-row flex-wrap justify-center ">
        <div className="w-[320px]">
          <div className="text-lg text-[#5B6876] pb-2 px-2 mt-3">
            {languaje === "English"
              ? "Now that you know a lot about me, let me know if you are interested in working with me."
              : "Ahora que ya conoce bastante acerca de mi, digame si tiene interés en trabajar conmigo."}

            <div className=" mt-2">
              {languaje === "English" ? "Telephone" : "Teléfono:"}
              &nbsp;
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
            action="https://script.google.com/macros/s/AKfycbzVi2WA0gsCYD8xzfkX0KWvsnDVzB_mAs6jQko_Rn_KzAmRucHTo1KZLqyiYF4iuhdr9g/exec"
            //id google: AKfycbzVi2WA0gsCYD8xzfkX0KWvsnDVzB_mAs6jQko_Rn_KzAmRucHTo1KZLqyiYF4iuhdr9g
            //Web app:https://script.google.com/macros/s/AKfycbzVi2WA0gsCYD8xzfkX0KWvsnDVzB_mAs6jQko_Rn_KzAmRucHTo1KZLqyiYF4iuhdr9g/exec

            //action="https://formsubmit.co/angillama@gmail.com"
            //action="mailto:angillama@gmail.com"
            method="POST"
          >
            <div className="pb-2 ">
              <label className="block pb-1" htmlFor="name">
                {languaje === "English" ? "Name" : "Nombre"}
              </label>
              <input
                className="block bg-[#eeeeee] text-black "
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
                className="block bg-[#eeeeee] text-black"
                type="email"
                pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                size="30"
                name="email"
                id="email"
                required
              />
            </div>
            <div className="block pb-4">
              <label className="block pb-1" htmlFor="message">
                {languaje === "English" ? "Message" : "Mensaje"}
              </label>
              <textarea
                className="block bg-[#eeeeee] text-black"
                name="Message"
                id="message"
                required
                minlength="8"
              ></textarea>
            </div>
            <div className="flex">
              <button className="px-3 py-2 bg-[#5221EB] mx-auto text-[#eeeeee]">
                {languaje === "English" ? "send" : "Enviar"}
              </button>
            </div>
          </form>
        </div>
        <hr />
      </article>

      {/* footer */}
      <footer
        className={` pb-5 flex flex-row flex-wrap items-center justify-center bg-[#eeeeee] pl-3 `}
      >
        <section className="w-[320px] ">
          <div className="pb-4 pt-4">
            <div className="text-2xl text-black">Andres Lara</div>
          </div>

          <div className="flex flex-row space-x-5">
            <a
              className="hover:animate-bounce"
              href="https://www.linkedin.com/in/andreslaraamaya/"
              target="_blank"
            >
              <i className="bx bxl-linkedin-square text-[#0A66C2]"></i>
            </a>
            <a
              className="hover:animate-bounce "
              href="https://github.com/aglagithub"
              target="_blank"
            >
              <i className="bx bxl-github text-black "></i>
            </a>
            <a
              className="hover:animate-bounce"
              href="https://twitter.com/andresLaraamaya"
              target="_blank"
            >
              <i className="bx bxl-twitter text-[#1DB9F0]"></i>
            </a>

            <a
              className="hover:animate-bounce"
              href="https://www.facebook.com/profile.php?id=100088672094738"
              target="_blank"
            >
              <i className="bx bxl-facebook-circle text-[#1B74E4]"></i>
            </a>
          </div>
        </section>

        <section className="flex flex-col flex-wrap text-black ">
          <div>
            <a
              className="hover:underline hover:underline-offset-4 hover:text-[#222222] hover:animate-pulse"
              href="#home"
            >
              {languaje === "English" ? "Home" : "Inicio"}
            </a>
          </div>

          <div>
            <a
              className="hover:underline hover:underline-offset-4 hover:text-[#222222] hover:animate-pulse"
              href="#destrezas"
            >
              {languaje === "English" ? "Abilities" : "Destrezas"}
            </a>
          </div>
          <div>
            <a
              className="hover:underline hover:underline-offset-4 hover:[#222222] hover:animate-pulse"
              href="#proyectos"
            >
              {languaje === "English" ? "Projects" : "Proyectos"}
            </a>
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
      <div className="mx-auto pt-3">&copy;2024</div>
    </main>
  );
};

export default home;
