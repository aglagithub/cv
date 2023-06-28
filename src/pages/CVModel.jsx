import React from "react";

const CVModel = () => {
  return (
    <main className="bg-black text-white min-h-screen px-4 pb-6 max-w-[1024px] flex flex-col flex-wrap mx-auto align-middle">
      {/* Header */}
      <header className="pb-4 pt-4">
        <div className="mx-auto ">
          <img src="/images/test/ImageNombre.png" alt="" />
        </div>
        <div>Menu</div>
      </header>

      {/* Description */}
      <article className="pb-8  flex flex-row flex-wrap">
        <div className="pb-2 w-[350px]">
          <img src="/images/test/FotoPersona.png"></img>
        </div>
        <div className="text-4xl leading-8 w-[350px]">
          I'm Robin Williams. A front end developer{" "}
          <span className="text-[#8491a0]">based in Mexico.</span>
          <div className="text-xl">
            I'm probably the most passionate designer you will ever get to work
            with. If you have a great project that needs some amazing skills,
            I'm your guy.
          </div>
        </div>
      </article>

      {/* Work experience */}
      <article className="pb-4">
        <div>WORK EXPERIENCE</div>
        <div className="text-4xl pb-4">
          Companies I have worked for in the past
        </div>

        <div className="flex flex-row flex-wrap">
          <section className="pb-4 w-[280px]">
            <div className="text-[#8491a0] text-8xl">01</div>

            <div className="text-2xl">
              <span className="text-[#3CC74E]">Google</span>, Interaction
              Designer
            </div>
            <div className="text-lg pb-2">
              I currently am the lead designar on the interaction design team
              for Google Play,
            </div>
          </section>

          <section className="pb-4 w-[280px] ">
            <div className="text-[#8491a0] text-8xl">02</div>
            <div className="text-2xl">
              <span className="text-[#609bff]">Facebook</span>, Product Designer
            </div>
            <div className="text-lg  pb-2">
              I've worked on a wide variety of internal tools for facebook over
              the past 6 years.
            </div>
          </section>

          <section className="pb-4 w-[280px]">
            <div className="text-[#8491a0] text-8xl">03</div>
            <div className="text-2xl">
              <span className="text-[#e95d90]">Dribble</span>, Graphic Designer
            </div>
            <div className="text-lg  pb-2">
              I started my design career with Dribbble. I was incharge of
              creating illustrations for the platform.
            </div>
          </section>
        </div>
      </article>

      {/* Philosofia y valores */}
      <article className="pb-4 flex flex-row flex-wrap">
        <div className="bg-[#fff3E4] w-[350px] px-4 p-2 pb-4">
          <div className="text-4xl pb-4 text-black">Philosophy & values</div>
          <div className="text-lg text-[#8491A0] ">
            I think everyone wants the same thing - relationship with humanity,
            peace with the metaphysical, and experience with the universe. I try
            to grasp these things with my values: authenticity, creativity, &
            hospitality.
          </div>
          <div className="">
            <a
              className="underline underline-offset-8 text-black"
              href="https://www.linkedin.com/in/andreslaraamaya/"
              target="_blank"
            >
              Check my Linkedin
            </a>
          </div>
        </div>
        <div className="w-[350px]">
          <img src="/images/test/FotoGroupOfPeople.png" alt="" />
        </div>
      </article>
      {/* Skillset */}
      <section className="">
        <article className="pb-4 flex flex-row flex-wrap gap-2">
          <div className="w-[350px]">
            <div className="text-4xl pb-4">Skillset</div>
            <div className="text-lg  ">
              With skills in over 4 different fields of design, I am the perfect
              person to hire when it comes to a full fledged project. Whatever
              your needs are, I can pretty much take on any challenge.
            </div>
          </div>

          <div className="flex flex-row flex-wrap">
            {/* Skill #1 */}
            <div className="pt-4 pb-3 px-2">
              <div className="pb-1">
                <img src="/images/test/IconoSkillSet.png" alt="" />
              </div>
              <div className="text-xl font-semibold">Frameworks</div>
              <ul className="text-[#8491A0]">
                <li>React</li>
                <li>Wordpress</li>
                <li>Boostrap</li>
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
                <li>Bitbucket</li>
                <li>SCRUM / Agil</li>
              </ul>
            </div>
            {/* Skill #3 */}
            <div className="pt-4 pb-3 px-2">
              <div className="pb-1">
                <img src="/images/test/IconoSkillSet.png" alt="" />
              </div>
              <div className="text-xl font-semibold">Languajes</div>
              <ul className="text-[#8491A0]">
                <li>HTML</li>
                <li>CSS/SASS</li>
                <li>Javascript</li>
              </ul>
            </div>
            {/* Skill #4 */}
            <div className="pt-4 pb-3 px-2">
              <div className="pb-1">
                <img src="/images/test/IconoSkillSet.png" alt="" />
              </div>
              <div className="text-xl font-semibold">UX/UI</div>
              <ul className="text-[#8491A0]">
                <li>Wireframing / UML</li>
                <li>Adobe Suite</li>
                <li>Elementor Expert</li>
              </ul>
            </div>
          </div>
        </article>
      </section>

      {/* Companies Logos*/}
      <article className="pb-4">
        <div className="flex flex-row flex-wrap">
          <div className="border-solid border-1">
            <img src="\images\test\LogoProject02.png" />
          </div>
          <div className="border-solid border-1">
            <img src="\images\test\LogoProject03.png" />
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
      </article>

      {/* MyProjects*/}

      <section className="flex flex-row flex-wrap">
        <div className="w-[350px]">
          <div className="px-2">
            <div>MY PROJECTS</div>
            <div className="text-3xl pb-4">
              Work that I’ve done for the past 8 years
            </div>
          </div>
          {/* Proyecto 1*/}
          <article className="pb-4">
            <div>
              <img src="\images\test\FotoProject1.png" alt="" />
            </div>
            <div className="text-xl font-semibold  px-2 pb-2">
              Restaurant Website Design
            </div>
            <div className="text-lg  text-[#8491A0] bg-[#0b0b0b]  px-2">
              I worked with the guys at CBRE to redesign their entire website
              and mobile app fro both Android and iOS. This project lasted for 4
              months and was a very challenging one.
            </div>
          </article>

          {/* Proyecto 2*/}
          <article className="pb-4">
            <div>
              <img src="\images\test\FotoProject2.png" alt="" />
            </div>
            <div className="text-xl font-semibold px-2 pb-2">Mobile Dashboard</div>
            <div className="text-lg  text-[#8491A0] bg-[#0b0b0b]  px-2" >
              I worked with the guys at CBRE to redesign their entire website
              and mobile app fro both Android and iOS. This project lasted for 4
              months and was a very challenging one.
            </div>
          </article>
        </div>
        <div className="w-[350px]">
          {/* Proyecto 3*/}
          <article className="pb-4">
            <div>
              <img src="\images\test\FotoProject3.png" alt="" />
            </div>
            <div className="text-xl font-semibold px-2 pb-2">
              CoinView Mobile App Design
            </div>
            <div className="text-lg  text-[#8491A0] bg-[#0b0b0b]  px-2">
              I worked with the guys at CBRE to redesign their entire website
              and mobile app fro both Android and iOS. This project lasted for 4
              months and was a very challenging one.
            </div>
          </article>
          {/* Proyecto 4*/}
          <article className="pb-4">
            <div>
              <img src="\images\test\FotoProject4.png" alt="" />
            </div>
            <div className="text-xl font-semibold px-2 pb-2">T-Box Mobile Design</div>
            <div className="text-lg  text-[#8491A0] bg-[#0b0b0b]  px-2">
              I worked with the guys at CBRE to redesign their entire website
              and mobile app fro both Android and iOS. This project lasted for 4
              months and was a very challenging one.
            </div>
          </article>
          <button className="border-solid border-[1px] border-blue-700 px-3 py-2">VIEW ALL PROJECTS</button>
        </div>
      </section>

      {/* Behance*/}
      <section className="pb-4 flex flex-row flex-wrap mx-auto">
        <div className=" bg-[#FBE4FF] w-[350px]">
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
        <div className=" bg-black w-[350px]">
          <img src="\images\test\BehanceImage.png" alt="" />
        </div>
      </section>
      {/* Desing UX/UI */}
      <section>
        <div className="bg-black text-3xl  pb-2">Desing UX/UI </div>
        <div className="text-lg pb-4">
          Each dribbble shot is made with love and care. Do check out my work on
          Dribbble. Likes and comments are appreciated.
        </div>
        <div className="pb-4">
          <img src="\images\test\CheckMoreImage.png" alt="" />
        </div>
      </section>

      {/* Formulario de contacto*/}
      <article className="pb-4 flex flex-row flex-wrap">
        <div className="w-[350px]">
          <div className="text-4xl pb-4">Let's talk business</div>
          <div className="text-lg text-[#5B6876] pb-2">
            Now that you know a lot about me, let me know if you are interested
            to work with me.
          </div>
        </div>
        <div className="pb-6">
          <form
            action="https://formsubmit.co/angillama@gmail.com"
            method="POST"
          >
            <div className="pb-2">
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
              <button className="px-3 py-2 bg-[#5221EB] mx-auto">
                LET´S GET STARTED
              </button>
            </div>
          </form>
        </div>
        <hr />
      </article>
       {/* footer */}
      <footer className="pb-9 flex flex-row flex-wrap">
        <section className="w-[350px]">
          <div className="pb-4 pt-4">
            <img src="/images/test/ImageNombre.png" alt="" />
          </div>

          <div>
            <a href="https://twitter.com/andresLaraamaya" target="_blank">
              <i className="bx bxl-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/andreslaraamaya/"
              target="_blank"
            >
              <i class="bx bxl-linkedin-square"></i>
            </a>
            <a href="" target="_blank">
              <i class="bx bxl-facebook-circle"></i>
            </a>
          </div>
        </section>
       
        <section className="flex flex-row flex-wrap">
          <div>
            <div>
              <a href="">Home</a>
            </div>
            <div>
              <a href="">About</a>
            </div>
            <div>
              <a href="">Work</a>
            </div>
            <div>
              <a href="">Process</a>
            </div>
          </div>
          <div>
            <div>
              <a href="">Store</a>
            </div>
            <div>
              <a href="">Blog</a>
            </div>
            <div>
              <a href=""></a>
            </div>
          </div>
        </section>
      </footer>
      <div className="mx-auto">&copy;2023</div>
    </main>
  );
};

export default CVModel;
