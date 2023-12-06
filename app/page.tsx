import Image from 'next/image'
import { Label } from "../src/components/Label";

export default function Home() {
  return (
    /* Wrapper */
    <div className="flex flex-col relative bg-cover bg-fixed bg-sprise-gradient">
      
      {/* Nav */}
      <div className="border-b border-lavender flex items-center justify-between px-4 md:px-8 lg:px-16 xl:px-[104px] py-6 relative self-stretch w-full">
        <img
          className="relative w-[3.75em] h-[3.75em] object-cover"
          alt="Sprise cube lg"
          src="../static/img/sprise-cube-lg@2x.png"
        />
        <a
          className="=relative px-3 py-2 border border-solid border-lavender [background:none] [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight hover:border-volt hover:text-volt text-[18px]"
          href="mailto:&#x73;&#x75;&#x70;&#x40;&#x73;&#x70;&#x72;&#x69;&#x73;&#x65;&#x2e;&#x63;&#x6f;"
        >
          &#x73;&#x75;&#x70;&#x40;&#x73;&#x70;&#x72;&#x69;&#x73;&#x65;&#x2e;&#x63;&#x6f;
        </a>
      </div>

      {/* Hero */}
      <div className="flex flex-col gap-8 md:gap-12 lg:gap-16 pt-8 lg:pt-12 pb-12 lg:pb-24 px-4 md:px-8 lg:px-16 xl:px-[104px] relative self-stretch w-full">
        <h1 className="relative self-stretch [font-family:'Fraunces',Helvetica] font-normal text-midnight text-[2.5rem] leading-[3rem] md:text-[5rem] md:leading-[5.875rem] lg:text-8xl lg:leading-[7rem]">
          <span className="font-bold italic">Sprise </span>
          <span className="font-light italic">is a software development agency and product studio.</span>
        </h1>
        <div className="w-[704px] flex flex-col gap-6">
          <p className="relative self-stretch [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-[24px]">
            <span className="[font-family:'Space_Grotesk',Helvetica] font-normal text-[#302556] text-[24px]">
              We’re like a laboratory for software.
              <br />
            </span>
          </p>
          <p className="relative self-stretch [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-[24px]">
            <span className="[font-family:'Space_Grotesk',Helvetica] font-normal text-[#302556] text-[24px]">
              We launch products with a repeatable, systematic process, and partner with entrepreneurs to bring their
              own product ideas to life.
              <br />
            </span>
          </p>
          <p className="relative self-stretch [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-[24px]">
            <span className="[font-family:'Space_Grotesk',Helvetica] font-normal text-[#302556] text-[24px]">
              We double down on winners, and turn successful product launches into sustainable businesses.
            </span>
          </p>
        </div>
      </div>

      {/* Process */}
      {/*
      <div className="flex items-center gap-6 pt-[32px] pb-[96px] px-[104px] relative w-full overflow-auto">
        
        <div className="flex-none flex-col xl:max-w-[336px] lg:max-w-[288px] max-w-[224px] p-[16px] relative border border-solid border-lavender">
          <div className="relative self-stretch mb-2 [font-family:'Space_Grotesk',Helvetica] font-bold text-midnight text-[24px]">
            Hypothesize
          </div>
          <p className="relative self-stretch [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-[18px]">
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
          <div className="relative self-stretch mb-2 [font-family:'Space_Grotesk',Helvetica] font-bold text-midnight text-[24px]">
            Discover
          </div>
          <p className="relative self-stretch [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-[18px]">
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
          <div className="relative self-stretch mb-2 [font-family:'Space_Grotesk',Helvetica] font-bold text-midnight text-[24px]">
            Build
          </div>
          <p className="relative self-stretch [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-[18px]">
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
          <div className="relative self-stretch mb-2 [font-family:'Space_Grotesk',Helvetica] font-bold text-midnight text-[24px]">
            Launch
          </div>
          <p className="relative self-stretch [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-[18px]">
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
          <div className="relative self-stretch mb-2 [font-family:'Space_Grotesk',Helvetica] font-bold text-midnight text-[24px]">
            Test
          </div>
          <p className="relative self-stretch [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-[18px]">
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
          <div className="relative self-stretch mb-2 [font-family:'Space_Grotesk',Helvetica] font-bold text-midnight text-[24px]">
            Repeat
          </div>
          <p className="relative self-stretch [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-[18px]">
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

      <div className="relative self-stretch w-full h-px bg-lavender" />

      {/* Work */}
      <div className="flex flex-col gap-6 md:gap-8 lg:gap-12 px-4 md:px-8 lg:px-16 xl:px-[104px] py-12 lg:py-24 relative self-stretch w-full">
        <h2 className="relative w-fit [font-family:'Fraunces',Helvetica] font-light italic text-midnight text-[2.25rem] md:text-[4rem]">
          We’ve built…
        </h2>

        {/* Cards container */}
        <div className="flex flex-col w-[1072px] gap-8 relative">
          
          {/* Cards row 1 */}
          <div className="flex gap-8 relative self-stretch w-full">
            
            <div className="flex flex-col gap-[12px] p-6 relative flex-1 self-stretch grow border border-solid border-lavender">
              <div className="flex justify-between relative self-stretch w-full">
                  <a href="https://pally.gg?ref=sprise" target="_blank">
                    <h3 className="hover:after:content-['↗︎'] hover:after:ml-2 hover:text-dark-lavender [font-family:'Space_Grotesk',Helvetica] font-bold text-[#302556] text-[32px]">
                      Pally.gg
                    </h3>
                  </a>
                  
                  <Label className="!flex-[0_0_auto]" />
              </div>
              <div className="inline-flex pt-0 pb-[8px] px-0 relative">
                <div className="relative w-fit [font-family:'Space_Grotesk',Helvetica] font-normal text-purple text-[18px]">
                  In-house product
                </div>
              </div>
              <p className="relative self-stretch [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-[24px]">
                A payments platform for streamers and moderators on Twitch to make money together by automatically
                splitting audience tips.
              </p>
            </div>
            <div className="flex flex-col gap-[12px] p-6 relative flex-1 self-stretch grow border border-solid border-lavender">
              <div className="flex justify-between relative self-stretch w-full">
                <a href="https://www.clubcpg.com/w?ref=sprise" target="_blank">
                  <h3 className="hover:after:content-['↗︎'] hover:after:ml-2 hover:text-dark-lavender [font-family:'Space_Grotesk',Helvetica] font-bold text-[#302556] text-[32px]">
                    W by Club CPG
                  </h3>
                </a>
                <Label className="!flex-[0_0_auto]" />
              </div>
              <div className="inline-flex pt-0 pb-[8px] px-0 relative">
                <div className="relative w-fit [font-family:'Space_Grotesk',Helvetica] font-normal text-purple text-[18px]">
                  Web3 community product
                </div>
              </div>
              <p className="relative self-stretch [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-[24px]">
                A loyalty rewards platform for a community of builders, operators, and creatives in web3.
              </p>
            </div>
          </div>

          {/* Cards row 2 */}
          <div className="flex gap-8 relative self-stretch w-full">
            <div className="flex flex-col gap-[12px] p-6 relative flex-1 self-stretch grow border border-solid border-lavender">
              <div className="flex justify-between relative self-stretch w-full">
                <a href="https://mybff.com?ref=sprise" target="_blank">
                  <h3 className="hover:after:content-['↗︎'] hover:after:ml-2 hover:text-dark-lavender [font-family:'Space_Grotesk',Helvetica] font-bold text-[#302556] text-[32px]">
                    BFF
                  </h3>
                </a>
                <Label className="!flex-[0_0_auto]" />
              </div>
              <div className="inline-flex pt-0 pb-[8px] px-0 relative">
                <div className="relative w-fit [font-family:'Space_Grotesk',Helvetica] font-normal text-purple text-[18px]">
                  Website and NFT launch
                </div>
              </div>
              <p className="relative self-stretch [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-[24px]">
                An open-access community for women and non-binary people to get educated, connected, and empowered in
                web3.
              </p>
            </div>
            <div className="flex flex-col gap-[12px] p-6 relative flex-1 self-stretch grow border border-solid border-lavender">
              <div className="flex gap-[12px] relative self-stretch w-full">
                <a href="https://afropolitan.io?ref=sprise" target="_blank">
                  <h3 className="hover:after:content-['↗︎'] hover:after:ml-2 hover:text-dark-lavender [font-family:'Space_Grotesk',Helvetica] font-bold text-[#302556] text-[32px]">
                    Afropolitan
                  </h3>
                </a>
              </div>
              <div className="inline-flex pt-0 pb-[8px] px-0 relative">
                <div className="relative w-fit [font-family:'Space_Grotesk',Helvetica] font-normal text-purple text-[18px]">
                  Website and NFT launch
                </div>
              </div>
              <p className="relative self-stretch [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-[24px]">
                A digital network state bringing together talent, culture, and capital for the African diaspora.
              </p>
            </div>
          </div>
        </div>

        <p className="relative self-stretch [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-[24px]">
          <span className="[font-family:'Space_Grotesk',Helvetica] font-normal text-[#302556] text-[24px]">
            Other clients we’ve worked with include{" "}
          </span>
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

      <div className="relative self-stretch w-full h-px bg-lavender" />

      {/* Contact */}
      <div className="flex flex-col gap-6 md:gap-8 lg:gap-12 px-4 md:px-8 lg:px-16 xl:px-[104px] py-12 lg:py-24 relative self-stretch w-full">
        <h2 className="relative w-fit [font-family:'Fraunces',Helvetica] font-light italic text-midnight text-[2.25rem] md:text-[4rem]">
          Build with us
        </h2>
        <div className="flex flex-col w-[704px] gap-6 relative">
          <div className="flex flex-col gap-6">
            <p className="relative self-stretch [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-[24px]">
              <span className="[font-family:'Space_Grotesk',Helvetica] font-normal text-[#302556] text-[24px]">
                The future of work is changing. It&#39;s a departure from institutions.
                <br />
              </span>
            </p>
            <p className="relative self-stretch [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-[24px]">
              <span className="[font-family:'Space_Grotesk',Helvetica] font-normal text-[#302556] text-[24px]">
                Empowered individuals doing creative things can make a living on their own terms.
                <br />
              </span>
            </p>
            <p className="relative self-stretch [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-[24px]">
              <span className="[font-family:'Space_Grotesk',Helvetica] font-normal text-[#302556] text-[24px]">
                Working on an idea but don&#39;t know how to build it? Let’s create something together. We&#39;ll make
                your ideas a reality.
                <br />
              </span>
            </p>
            <p className="relative self-stretch [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-[24px]">
              <span className="[font-family:'Space_Grotesk',Helvetica] font-normal text-[#302556] text-[24px]">
                Shoot us an email:
              </span>
            </p>
          </div>
            <a
              className="px-4 py-3 border border-solid border-lavender w-fit [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight hover:text-dark-lavender text-[24px]"
              href="mailto:&#x73;&#x75;&#x70;&#x40;&#x73;&#x70;&#x72;&#x69;&#x73;&#x65;&#x2e;&#x63;&#x6f;"
            >
              &#x73;&#x75;&#x70;&#x40;&#x73;&#x70;&#x72;&#x69;&#x73;&#x65;&#x2e;&#x63;&#x6f;
            </a>
        </div>
      </div>

      <div className="relative self-stretch w-full h-px bg-lavender" />

      {/* Team */}
      <div className="flex flex-col gap-6 md:gap-8 lg:gap-12 px-4 md:px-8 lg:px-16 xl:px-[104px] py-12 lg:py-24 relative self-stretch w-full">
        <h2 className="relative w-fit [font-family:'Fraunces',Helvetica] font-light italic text-midnight text-[2.25rem] md:text-[4rem]">
          Who are we?
        </h2>

        {/* Container for team member cards */}
        <div className="flex max-w-[44rem] gap-6 md:gap-8 relative">
          
          <div className="flex flex-col gap-3 p-4 md:p-6 relative flex-1 grow border border-solid border-lavender">
            <img className="relative w-[4rem] md:w-[6rem] h-[4rem] md:h-[6rem] object-cover" alt="Montana" src="../static/img/montana.png" />
            <div className="flex flex-col gap-[4px] relative self-stretch w-full">
              <h3 className="relative self-stretch [font-family:'Space_Grotesk',Helvetica] font-bold text-midnight text-xl md:text-2xl">
                Montana Wong
              </h3>
              <p className="relative self-stretch [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-base md:text-lg">
                Cofounder, Engineering
              </p>
            </div>
            <a
              className="relative [font-family:'Space_Grotesk',Helvetica] font-normal text-purple hover:text-dark-lavender text-base md:text-lg underline"
              href="https://twitter.com/montana_wong"
              target="_blank"
            >
              @Montana_Wong
            </a>
          </div>
          
          <div className="flex flex-col gap-3 p-4 md:p-6 relative flex-1 grow border border-solid border-lavender">
            <img className="relative w-[4rem] md:w-[6rem] h-[4rem] md:h-[6rem] object-cover" alt="Kevin" src="../static/img/kevin.png" />
            <div className="flex flex-col gap-[4px] relative self-stretch w-full">
              <h3 className="relative self-stretch [font-family:'Space_Grotesk',Helvetica] font-bold text-midnight text-xl md:text-2xl">
                Kevin Boodtama
              </h3>
              <p className="relative self-stretch [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-base md:text-lg">
                Cofounder, Design
              </p>
            </div>
            <a
              className="relative [font-family:'Space_Grotesk',Helvetica] font-normal text-purple hover:text-dark-lavender text-base md:text-lg underline"
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
