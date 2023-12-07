import Image from 'next/image'

export default function Home() {
  return (
    /* Wrapper */
    <div className="flex flex-col justify-center">
      
      {/* Nav */}
      <div className="flex items-center justify-between xl:px-[6.5rem] lg:px-16 md:px-8 px-4 lg:py-6 md:py-4 py-3 max-w-screen-2xl w-full">
        <img
          className="lg:w-[3.75em] lg:h-[3.75em] md:w-12 md:h-12 w-10 h-10 object-cover"
          alt="Sprise cube lg"
          src="../static/img/sprise-cube-lg@2x.png"
        />
        <a
          className=" px-3 py-2 border border-solid border-lavender [background:none] [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight hover:border-volt hover:text-volt text-[18px]"
          href="mailto:&#x73;&#x75;&#x70;&#x40;&#x73;&#x70;&#x72;&#x69;&#x73;&#x65;&#x2e;&#x63;&#x6f;"
        >
          &#x73;&#x75;&#x70;&#x40;&#x73;&#x70;&#x72;&#x69;&#x73;&#x65;&#x2e;&#x63;&#x6f;
        </a>
      </div>
      <hr className="h-px bg-lavender border-0" />

      {/* Hero */}
      <div className="flex flex-col gap-8 md:gap-12 lg:gap-16 pt-8 lg:pt-12 pb-12 lg:pb-24 px-4 md:px-8 lg:px-16 xl:px-[6.5rem] relative max-w-screen-2xl w-full">
        <h1 className="xl:max-w-[55.5rem] lg:max-w-[51.25rem] md:max-w-[44rem] w-full [font-family:'Fraunces',Helvetica] font-normal text-midnight xl:text-[8xl] xl:leading-[7rem] lg:text-[5.75rem] lg:leading-[6.75rem] md:text-[5rem] md:leading-[5.875rem] text-4xl leading-[3rem]">
          <span className="font-bold italic">Sprise </span>
          <span className="font-light italic">is a software development agency and product studio.</span>
        </h1>
        <div className="xl:max-w-[44rem] lg:max-w-[41.75rem] md:max-w-[36.5rem] w-full flex flex-col gap-6 [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-lg sm:text-2xl">
          <p> We&#39;re like a laboratory for software.</p>
          <p>We launch products with a repeatable, systematic process, and partner with entrepreneurs to bring their own product ideas to life.</p>
          <p>We double down on winners, and turn successful product launches into sustainable businesses.</p>
        </div>
      </div>

      {/* Process */}
      {/*
      <div className="flex items-center gap-6 pt-[32px] pb-[96px] px-[6.5rem] relative max-w-screen-2xl w-full overflow-auto">
        
        <div className="flex-none flex-col xl:max-w-[336px] lg:max-w-[288px] max-w-[224px] p-[16px] relative border border-solid border-lavender">
          <div className="relative mb-2 [font-family:'Space_Grotesk',Helvetica] font-bold text-midnight text-[24px]">
            Hypothesize
          </div>
          <p className="relative [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-[18px]">
            <span className="[font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-[18px]">
              It starts with an idea. What does the{" "}
            </span>
            <span className="font-bold">future</span>
            <span className="[font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-[18px]">
              {" "}
              look like?
            </span>
          </p>
        </div>

        <svg className="flex-none self-center w-[64px] h-[64px]" xmlns="http://www.w3.org/2000/svg">
          <path d="M62.3333 32.6667L62.2929 32.7071L35 60L34.2929 59.2929L60.9191 32.6667H-1V31.6667H61.2524L34.2929 4.70711L35 4L62.2929 31.2929L63 32L62.3333 32.6667Z" fill="#C799F5"/>
        </svg>

        <div className="flex-none flex-col xl:max-w-[336px] lg:max-w-[288px] max-w-[224px] gap-[8px] p-[16px] relative border border-solid border-lavender">
          <div className="relative mb-2 [font-family:'Space_Grotesk',Helvetica] font-bold text-midnight text-[24px]">
            Discover
          </div>
          <p className="relative [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-[18px]">
            <span className="[font-family:'Space_Grotesk',Helvetica] font-normal text-[#302556] text-[18px]">
              We validate the idea by{" "}
            </span>
            <span className="font-bold">talking to customers.</span>
          </p>
        </div>
        
        <svg className="flex-none self-center w-[64px] h-[64px]" xmlns="http://www.w3.org/2000/svg">
          <path d="M62.3333 32.6667L62.2929 32.7071L35 60L34.2929 59.2929L60.9191 32.6667H-1V31.6667H61.2524L34.2929 4.70711L35 4L62.2929 31.2929L63 32L62.3333 32.6667Z" fill="#C799F5"/>
        </svg>

        <div className="flex-none flex-col xl:max-w-[336px] lg:max-w-[288px] max-w-[224px] gap-[8px] p-[16px] relative border border-solid border-lavender">
          <div className="relative mb-2 [font-family:'Space_Grotesk',Helvetica] font-bold text-midnight text-[24px]">
            Build
          </div>
          <p className="relative [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-[18px]">
            <span className="[font-family:'Space_Grotesk',Helvetica] font-normal text-[#302556] text-[18px]">
              Heads down with a focus on{" "}
            </span>
            <span className="font-bold">time-to-value.</span>
          </p>
        </div>
        
        <svg className="flex-none self-center w-[64px] h-[64px]" xmlns="http://www.w3.org/2000/svg">
          <path d="M62.3333 32.6667L62.2929 32.7071L35 60L34.2929 59.2929L60.9191 32.6667H-1V31.6667H61.2524L34.2929 4.70711L35 4L62.2929 31.2929L63 32L62.3333 32.6667Z" fill="#C799F5"/>
        </svg>
        
        <div className="flex-none flex-col xl:max-w-[336px] lg:max-w-[288px] max-w-[224px] gap-[8px] p-[16px] relative border border-solid border-lavender">
          <div className="relative mb-2 [font-family:'Space_Grotesk',Helvetica] font-bold text-midnight text-[24px]">
            Launch
          </div>
          <p className="relative [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-[18px]">
            <span className="[font-family:'Space_Grotesk',Helvetica] font-normal text-[#302556] text-[18px]">
              Final preparations to take the{" "}
            </span>
            <span className="font-bold">product to market.</span>
          </p>
        </div>

        <svg className="flex-none self-center w-[64px] h-[64px]" xmlns="http://www.w3.org/2000/svg">
          <path d="M62.3333 32.6667L62.2929 32.7071L35 60L34.2929 59.2929L60.9191 32.6667H-1V31.6667H61.2524L34.2929 4.70711L35 4L62.2929 31.2929L63 32L62.3333 32.6667Z" fill="#C799F5"/>
        </svg>

        <div className="flex-none flex-col xl:max-w-[336px] lg:max-w-[288px] max-w-[224px] gap-[8px] p-[16px] relative border border-solid border-lavender">
          <div className="relative mb-2 [font-family:'Space_Grotesk',Helvetica] font-bold text-midnight text-[24px]">
            Test
          </div>
          <p className="relative [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-[18px]">
            <span className="[font-family:'Space_Grotesk',Helvetica] font-normal text-[#302556] text-[18px]">
              Did it work? How did this{" "}
            </span>
            <span className="font-bold">impact the business?</span>
          </p>
        </div>
        
        <svg className="flex-none self-center w-[64px] h-[64px]" xmlns="http://www.w3.org/2000/svg">
          <path d="M62.3333 32.6667L62.2929 32.7071L35 60L34.2929 59.2929L60.9191 32.6667H-1V31.6667H61.2524L34.2929 4.70711L35 4L62.2929 31.2929L63 32L62.3333 32.6667Z" fill="#C799F5"/>
        </svg>

        <div className="flex-none flex-col xl:max-w-[336px] lg:max-w-[288px] max-w-[224px] gap-[8px] p-[16px] relative border border-solid border-lavender">
          <div className="relative mb-2 [font-family:'Space_Grotesk',Helvetica] font-bold text-midnight text-[24px]">
            Repeat
          </div>
          <p className="relative [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-[18px]">
            <span className="[font-family:'Space_Grotesk',Helvetica] font-normal text-[#302556] text-[18px]">
              The cycle starts over and we{" "}
            </span>
            <span className="font-bold">iterate.</span>
          </p>
        </div>
        
        <svg className="flex-none self-center w-[64px] h-[64px]" xmlns="http://www.w3.org/2000/svg">
          <path d="M62.3333 32.6667L62.2929 32.7071L35 60L34.2929 59.2929L60.9191 32.6667H-1V31.6667H61.2524L34.2929 4.70711L35 4L62.2929 31.2929L63 32L62.3333 32.6667Z" fill="#C799F5"/>
        </svg>
      </div>
      */}

      <hr className="h-px bg-lavender border-0" />

      {/* Work */}
      <div className="flex flex-col gap-6 md:gap-8 lg:gap-12 px-4 md:px-8 lg:px-16 xl:px-[6.5rem] py-12 lg:py-24 max-w-screen-2xl w-full">
        <h2 className="w-fit [font-family:'Fraunces',Helvetica] font-light italic text-midnight text-[2.25rem] md:text-[4rem]">
          We&#39;ve built…
        </h2>

        {/* Cards container */}
        <div className="sm:grid sm:grid-cols-2 flex flex-col max-w-[67rem] sm:gap-8 gap-6">
          
          {/* Pally */}
          <div className="flex flex-col lg:gap-3 gap-2 p-6 border border-solid border-lavender">
            <div className="flex justify-between lg:content-start content-center w-full">
              <a href="https://pally.gg?ref=sprise" target="_blank">
                <h3 className="hover:after:content-['↗︎'] hover:after:ml-2 hover:text-dark-lavender [font-family:'Space_Grotesk',Helvetica] font-bold text-midnight lg:text-[32px] text-2xl">
                  Pally.gg
                </h3>
              </a>
              {/* Label */}
              <div className="relative h-min px-2 pt-0 pb-0.5 border border-solid border-lavender">
                <img
                className="absolute w-3 h-3 -left-0.5 -top-0.5"
                  alt="Sprise spark"
                  src="../static/img/sprise-spark-shear12.svg"
                />
                <span className="[font-family:'Space_Grotesk',Helvetica] font-medium text-purple text-xs">
                  ACQUIRED
                </span>
              </div>
            </div>
            <p className="w-fit pb-2 [font-family:'Space_Grotesk',Helvetica] font-normal text-purple md:text-lg text-base">
              In-house product
            </p>
            <p className="[font-family:'Space_Grotesk',Helvetica] font-normal text-midnight lg:text-2xl md:text-xl text-lg">
              A payments platform for streamers and moderators on Twitch to make money together by automatically splitting audience tips.
            </p>
          </div>
          
          {/* CPG */}
          <div className="flex flex-col lg:gap-3 gap-2 p-6 border border-solid border-lavender">
            <div className="relative flex justify-between gap-2 w-full">
              <a href="https://www.clubcpg.com/w?ref=sprise" target="_blank">
                <h3 className="hover:after:content-['↗︎'] hover:after:ml-2 hover:text-dark-lavender [font-family:'Space_Grotesk',Helvetica] font-bold text-midnight lg:text-[32px] text-2xl">
                  W by Club CPG
                </h3>
              </a>
              {/* Label */}
              <div className="relative h-min px-2 pt-0 pb-0.5 border border-solid border-lavender">
                <img
                className="absolute w-3 h-3 -left-0.5 -top-0.5"
                  alt="Sprise spark"
                  src="../static/img/sprise-spark-shear12.svg"
                />
                <span className="[font-family:'Space_Grotesk',Helvetica] font-medium text-purple text-xs">
                  ACQUIRED
                </span>
              </div>
            </div>
            <p className="w-fit pb-2 [font-family:'Space_Grotesk',Helvetica] font-normal text-purple md:text-lg text-base">
              Web3 community product
            </p>
            <p className="[font-family:'Space_Grotesk',Helvetica] font-normal text-midnight lg:text-2xl md:text-xl text-lg">
              A loyalty rewards platform for a community of builders, operators, and creatives in web3.
            </p>
          </div>

          {/* BFF */}
          <div className="flex flex-col basis-6/12 grow lg:gap-3 gap-2 p-6 border border-solid border-lavender">
            <div className="flex justify-between w-full">
              <a href="https://mybff.com?ref=sprise" target="_blank">
                <h3 className="hover:after:content-['↗︎'] hover:after:ml-2 hover:text-dark-lavender [font-family:'Space_Grotesk',Helvetica] font-bold text-midnight lg:text-[32px] text-2xl">
                  BFF
                </h3>
              </a>
              {/* Label */}
              <div className="relative h-min px-2 pt-0 pb-0.5 border border-solid border-lavender">
                <img
                className="absolute w-3 h-3 -left-0.5 -top-0.5"
                  alt="Sprise spark"
                  src="../static/img/sprise-spark-shear12.svg"
                />
                <span className="[font-family:'Space_Grotesk',Helvetica] font-medium text-purple text-xs">
                  ACQUIRED
                </span>
              </div>
            </div>
            <p className="w-fit pb-2 [font-family:'Space_Grotesk',Helvetica] font-normal text-purple md:text-lg text-base">
              Website and NFT launch
            </p>
            <p className="[font-family:'Space_Grotesk',Helvetica] font-normal text-midnight lg:text-2xl md:text-xl text-lg">
              An open-access community for women and non-binary people to get educated, connected, and empowered in web3.
            </p>
          </div>
          
          {/* Afropolitan */}
          <div className="flex flex-col basis-6/12 grow lg:gap-3 gap-2 p-6 border border-solid border-lavender">
            <div className="w-full">
              <a href="https://afropolitan.io?ref=sprise" target="_blank">
                <h3 className="hover:after:content-['↗︎'] hover:after:ml-2 hover:text-dark-lavender [font-family:'Space_Grotesk',Helvetica] font-bold text-midnight lg:text-[32px] text-2xl">
                  Afropolitan
                </h3>
              </a>
            </div>
            <p className="w-fit pb-2 [font-family:'Space_Grotesk',Helvetica] font-normal text-purple md:text-lg text-base">
              Website and NFT launch
            </p>
            <p className="[font-family:'Space_Grotesk',Helvetica] font-normal text-midnight lg:text-2xl md:text-xl text-lg">
              A digital network state bringing together talent, culture, and capital for the African diaspora.
            </p>
          </div>

        </div>

        <p className="[font-family:'Space_Grotesk',Helvetica] font-normal text-midnight lg:text-2xl md:text-xl text-lg">
          Other clients we&#39;ve worked with include{" "}
          <a className="underline hover:text-dark-lavender" href="https://yestheory.com/?ref=sprise" target="_blank">
            Yes Theory
          </a>
          {" "}and{" "}
          <a className="underline hover:text-dark-lavender" href="https://www.offbeat.xyz/?ref=sprise" target="_blank">
            Offbeat
          </a>
          .
        </p>
      </div>

      <hr className="h-px bg-lavender border-0" />

      {/* Contact */}
      <div className="flex flex-col gap-6 md:gap-8 lg:gap-12 px-4 md:px-8 lg:px-16 xl:px-[6.5rem] py-12 lg:py-24 max-w-screen-2xl w-full">
        <h2 className="w-fit [font-family:'Fraunces',Helvetica] font-light italic text-midnight text-[2.25rem] md:text-[4rem]">
          Build with us
        </h2>
        <div className="flex flex-col xl:max-w-[44rem] lg:max-w-[41.75rem] md:max-w-[36.5rem] w-full sm:gap-6 gap-[1.125rem] [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-lg sm:text-2xl">
          <p>The future of work is changing. It&#39;s a departure from institutions.</p>
          <p>Empowered individuals doing creative things can make a living on their own terms.</p>
          <p>Working on an idea but don&#39;t know how to build it? Let&#39;s create something together. We&#39;ll make your ideas a reality.</p>
          <p>Shoot us an email:</p>
          <a
            className="sm:px-4 sm:py-3 px-3 py-2 border border-solid border-lavender w-fit [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight hover:text-dark-lavender sm:text-2xl text-lg"
            href="mailto:&#x73;&#x75;&#x70;&#x40;&#x73;&#x70;&#x72;&#x69;&#x73;&#x65;&#x2e;&#x63;&#x6f;"
          >
            &#x73;&#x75;&#x70;&#x40;&#x73;&#x70;&#x72;&#x69;&#x73;&#x65;&#x2e;&#x63;&#x6f;
          </a>
        </div>
      </div>

      <hr className="h-px bg-lavender border-0" />

      {/* Team */}
      <div className="flex flex-col gap-6 md:gap-8 lg:gap-12 px-4 md:px-8 lg:px-16 xl:px-[6.5rem] py-12 lg:py-24 max-w-screen-2xl w-full">
        <h2 className="w-fit [font-family:'Fraunces',Helvetica] font-light italic text-midnight text-[2.25rem] md:text-[4rem]">
          Who are we?
        </h2>

        {/* Container for team member cards */}
        <div className="flex flex-wrap max-w-[44rem] gap-6 md:gap-8">
          
          <div className="flex flex-col min-w-[11rem] gap-3 p-4 md:p-6 flex-1 grow border border-solid border-lavender">
            <img className="w-[4rem] md:w-[6rem] h-[4rem] md:h-[6rem] object-cover" alt="Montana" src="../static/img/montana.png" />
            <div className="flex flex-col gap-[4px] w-full">
              <h3 className="[font-family:'Space_Grotesk',Helvetica] font-bold text-midnight text-xl sm:text-2xl">
                Montana Wong
              </h3>
              <p className="[font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-base md:text-lg">
                Co-founder, Engineering
              </p>
            </div>
            <a
              className="[font-family:'Space_Grotesk',Helvetica] font-normal text-purple hover:text-dark-lavender text-base md:text-lg underline"
              href="https://twitter.com/montana_wong"
              target="_blank"
            >
              @Montana_Wong
            </a>
          </div>
          
          <div className="flex flex-col min-w-[11rem] gap-3 p-4 md:p-6 flex-1 grow border border-solid border-lavender">
            <img className="w-[4rem] md:w-[6rem] h-[4rem] md:h-[6rem] object-cover" alt="Kevin" src="../static/img/kevin.png" />
            <div className="flex flex-col gap-[4px] w-full">
              <h3 className="[font-family:'Space_Grotesk',Helvetica] font-bold text-midnight text-xl sm:text-2xl">
                Kevin Boodtama
              </h3>
              <p className="[font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-base md:text-lg">
                Co-founder, Design
              </p>
            </div>
            <a
              className="[font-family:'Space_Grotesk',Helvetica] font-normal text-purple hover:text-dark-lavender text-base md:text-lg underline"
              href="https://twitter.com/boodtama"
              target="_blank"
            >
              @boodtama
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
