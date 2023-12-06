import Image from 'next/image'
import { Arrow } from "../src/components/Arrow";
import { Label } from "../src/components/Label";

export default function Home() {
  return (
    <div className="flex flex-col items-start relative bg-cover bg-fixed bg-sprise-gradient">
      <div className="border-b border-lavender flex items-center justify-between px-[104px] py-[24px] relative self-stretch w-full flex-[0_0_auto]">
        <img
          className="relative w-[60px] h-[60px] object-cover"
          alt="Sprise cube lg"
          src="../static/img/sprise-cube-lg@2x.png"
        />
        <button className="inline-flex items-center justify-center gap-[10px] px-[12px] py-[8px] relative flex-[0_0_auto] border border-solid border-lavender [background:none] mt-[-1.00px] [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-[18px] tracking-[0] leading-[normal]">
          sup@sprise.co
        </button>
      </div>
      <div className="flex flex-col items-start gap-[64px] pt-[48px] pb-[32px] px-[104px] relative self-stretch w-full flex-[0_0_auto]">
        <p className="relative self-stretch mt-[-1.00px] [font-family:'Fraunces',Helvetica] font-normal text-midnight text-[96px] tracking-[0] leading-[112px]">
          <span className="font-bold italic">Sprise </span>
          <span className="font-light italic">is a software development agency and product studio.</span>
        </p>
        <div className="w-[704px] flex flex-col items-start gap-[24px]">
          <p className="relative self-stretch [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-[24px] tracking-[0] leading-[normal]">
            <span className="[font-family:'Space_Grotesk',Helvetica] font-normal text-[#302556] text-[24px] tracking-[0]">
              We’re like a laboratory for software.
              <br />
            </span>
          </p>
          <p className="relative self-stretch [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-[24px] tracking-[0] leading-[normal]">
            <span className="[font-family:'Space_Grotesk',Helvetica] font-normal text-[#302556] text-[24px] tracking-[0]">
              We launch products with a repeatable, systematic process, and partner with entrepreneurs to bring their
              own product ideas to life.
              <br />
            </span>
          </p>
          <p className="relative self-stretch [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-[24px] tracking-[0] leading-[normal]">
            <span className="[font-family:'Space_Grotesk',Helvetica] font-normal text-[#302556] text-[24px] tracking-[0]">
              We double down on winners, and turn successful product launches into sustainable businesses.
            </span>
          </p>
        </div>
      </div>

      <div className="flex items-center gap-[24px] pt-[32px] pb-[96px] px-[104px] relative w-full overflow-auto"> 
        
        <div className="flex-none flex-col xl:max-w-[336px] lg:max-w-[288px] max-w-[224px] items-start p-[16px] relative border border-solid border-lavender">
          <div className="relative self-stretch mb-2 [font-family:'Space_Grotesk',Helvetica] font-bold text-midnight text-[24px] tracking-[0] leading-[normal]">
            Hypothesize
          </div>
          <p className="relative self-stretch [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-[18px] tracking-[0] leading-[normal]">
            <span className="[font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-[18px] tracking-[0]">
              It starts with an idea. What does the{" "}
            </span>
            <span className="font-bold">future</span>
            <span className="[font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-[18px] tracking-[0]">
              {" "}
              look like?
            </span>
          </p>
        </div>

        <svg className="flex-none self-center w-[64px] h-[64px]" xmlns="http://www.w3.org/2000/svg">
          <path d="M62.3333 32.6667L62.2929 32.7071L35 60L34.2929 59.2929L60.9191 32.6667H-1V31.6667H61.2524L34.2929 4.70711L35 4L62.2929 31.2929L63 32L62.3333 32.6667Z" fill="#C799F5"/>
        </svg>

        <div className="flex-none flex-col xl:max-w-[336px] lg:max-w-[288px] max-w-[224px] items-start gap-[8px] p-[16px] relative border border-solid border-lavender">
          <div className="relative self-stretch mb-2 [font-family:'Space_Grotesk',Helvetica] font-bold text-midnight text-[24px] tracking-[0] leading-[normal]">
            Discover
          </div>
          <p className="relative self-stretch [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-[18px] tracking-[0] leading-[normal]">
            <span className="[font-family:'Space_Grotesk',Helvetica] font-normal text-[#302556] text-[18px] tracking-[0]">
              We validate the idea by{" "}
            </span>
            <span className="font-bold">talking to customers.</span>
          </p>
        </div>
        
        <svg className="flex-none self-center w-[64px] h-[64px]" xmlns="http://www.w3.org/2000/svg">
          <path d="M62.3333 32.6667L62.2929 32.7071L35 60L34.2929 59.2929L60.9191 32.6667H-1V31.6667H61.2524L34.2929 4.70711L35 4L62.2929 31.2929L63 32L62.3333 32.6667Z" fill="#C799F5"/>
        </svg>

        <div className="flex-none flex-col xl:max-w-[336px] lg:max-w-[288px] max-w-[224px] items-start gap-[8px] p-[16px] relative border border-solid border-lavender">
          <div className="relative self-stretch mb-2 [font-family:'Space_Grotesk',Helvetica] font-bold text-midnight text-[24px] tracking-[0] leading-[normal]">
            Build
          </div>
          <p className="relative self-stretch [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-[18px] tracking-[0] leading-[normal]">
            <span className="[font-family:'Space_Grotesk',Helvetica] font-normal text-[#302556] text-[18px] tracking-[0]">
              Heads down with a focus on{" "}
            </span>
            <span className="font-bold">time-to-value.</span>
          </p>
        </div>
        
        <svg className="flex-none self-center w-[64px] h-[64px]" xmlns="http://www.w3.org/2000/svg">
          <path d="M62.3333 32.6667L62.2929 32.7071L35 60L34.2929 59.2929L60.9191 32.6667H-1V31.6667H61.2524L34.2929 4.70711L35 4L62.2929 31.2929L63 32L62.3333 32.6667Z" fill="#C799F5"/>
        </svg>
        
        <div className="flex-none flex-col xl:max-w-[336px] lg:max-w-[288px] max-w-[224px] items-start gap-[8px] p-[16px] relative border border-solid border-lavender">
          <div className="relative self-stretch mb-2 [font-family:'Space_Grotesk',Helvetica] font-bold text-midnight text-[24px] tracking-[0] leading-[normal]">
            Launch
          </div>
          <p className="relative self-stretch [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-[18px] tracking-[0] leading-[normal]">
            <span className="[font-family:'Space_Grotesk',Helvetica] font-normal text-[#302556] text-[18px] tracking-[0]">
              Final preparations to take the{" "}
            </span>
            <span className="font-bold">product to market.</span>
          </p>
        </div>

        <svg className="flex-none self-center w-[64px] h-[64px]" xmlns="http://www.w3.org/2000/svg">
          <path d="M62.3333 32.6667L62.2929 32.7071L35 60L34.2929 59.2929L60.9191 32.6667H-1V31.6667H61.2524L34.2929 4.70711L35 4L62.2929 31.2929L63 32L62.3333 32.6667Z" fill="#C799F5"/>
        </svg>

        <div className="flex-none flex-col xl:max-w-[336px] lg:max-w-[288px] max-w-[224px] items-start gap-[8px] p-[16px] relative border border-solid border-lavender">
          <div className="relative self-stretch mb-2 [font-family:'Space_Grotesk',Helvetica] font-bold text-midnight text-[24px] tracking-[0] leading-[normal]">
            Test
          </div>
          <p className="relative self-stretch [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-[18px] tracking-[0] leading-[normal]">
            <span className="[font-family:'Space_Grotesk',Helvetica] font-normal text-[#302556] text-[18px] tracking-[0]">
              Did it work? How did this{" "}
            </span>
            <span className="font-bold">impact the business?</span>
          </p>
        </div>
        
        <svg className="flex-none self-center w-[64px] h-[64px]" xmlns="http://www.w3.org/2000/svg">
          <path d="M62.3333 32.6667L62.2929 32.7071L35 60L34.2929 59.2929L60.9191 32.6667H-1V31.6667H61.2524L34.2929 4.70711L35 4L62.2929 31.2929L63 32L62.3333 32.6667Z" fill="#C799F5"/>
        </svg>

        <div className="flex-none flex-col xl:max-w-[336px] lg:max-w-[288px] max-w-[224px] items-start gap-[8px] p-[16px] relative border border-solid border-lavender">
          <div className="relative self-stretch mb-2 [font-family:'Space_Grotesk',Helvetica] font-bold text-midnight text-[24px] tracking-[0] leading-[normal]">
            Repeat
          </div>
          <p className="relative self-stretch [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-[18px] tracking-[0] leading-[normal]">
            <span className="[font-family:'Space_Grotesk',Helvetica] font-normal text-[#302556] text-[18px] tracking-[0]">
              The cycle starts over and we{" "}
            </span>
            <span className="font-bold">iterate.</span>
          </p>
        </div>
        
        <svg className="flex-none self-center w-[64px] h-[64px]" xmlns="http://www.w3.org/2000/svg">
          <path d="M62.3333 32.6667L62.2929 32.7071L35 60L34.2929 59.2929L60.9191 32.6667H-1V31.6667H61.2524L34.2929 4.70711L35 4L62.2929 31.2929L63 32L62.3333 32.6667Z" fill="#C799F5"/>
        </svg>

      </div>
      <div className="relative self-stretch w-full h-px bg-lavender" />
      <div className="flex flex-col items-start gap-[48px] px-[104px] py-[96px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Fraunces',Helvetica] font-light italic text-midnight text-[64px] tracking-[0] leading-[normal]">
          We’ve built…
        </div>
        <div className="flex flex-col w-[1072px] items-start gap-[32px] relative flex-[0_0_auto]">
          <div className="flex items-start gap-[32px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-[12px] p-[24px] relative flex-1 self-stretch grow border border-solid border-lavender">
              <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk',Helvetica] font-bold text-midnight text-[32px] tracking-[0] leading-[normal]">
                  <a href="https://pally.gg?ref=sprise" rel="noopener noreferrer" target="_blank">
                    <span className="[font-family:'Space_Grotesk',Helvetica] font-bold text-[#302556] text-[32px] tracking-[0]">
                      Pally.gg
                    </span>
                  </a>
                  <span className="[font-family:'Space_Grotesk',Helvetica] font-bold text-[#302556] text-[32px] tracking-[0]">
                    &nbsp;
                  </span>
                </p>
                <Label className="!flex-[0_0_auto]" />
              </div>
              <div className="inline-flex items-start pt-0 pb-[8px] px-0 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk',Helvetica] font-normal text-purple text-[18px] tracking-[0] leading-[normal]">
                  In-house product
                </div>
              </div>
              <p className="relative self-stretch [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-[24px] tracking-[0] leading-[normal]">
                A payments platform for streamers and moderators on Twitch to make money together by automatically
                splitting audience tips.
              </p>
            </div>
            <div className="flex flex-col items-start gap-[12px] p-[24px] relative flex-1 self-stretch grow border border-solid border-lavender">
              <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
                <a
                  className="relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk',Helvetica] font-bold text-midnight text-[32px] tracking-[0] leading-[normal]"
                  href="https://www.clubcpg.com/w?ref=sprise"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  W by Club CPG
                </a>
                <Label className="!flex-[0_0_auto]" />
              </div>
              <div className="inline-flex items-start pt-0 pb-[8px] px-0 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk',Helvetica] font-normal text-purple text-[18px] tracking-[0] leading-[normal]">
                  Web3 community product
                </div>
              </div>
              <p className="relative self-stretch [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-[24px] tracking-[0] leading-[normal]">
                A loyalty rewards platform for a community of builders, operators, and creatives in web3.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-[32px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-[12px] p-[24px] relative flex-1 self-stretch grow border border-solid border-lavender">
              <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
                <a
                  className="relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk',Helvetica] font-bold text-midnight text-[32px] tracking-[0] leading-[normal]"
                  href="https://mybff.com?ref=sprise"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  BFF
                </a>
                <Label className="!flex-[0_0_auto]" />
              </div>
              <div className="inline-flex items-start pt-0 pb-[8px] px-0 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk',Helvetica] font-normal text-purple text-[18px] tracking-[0] leading-[normal]">
                  Website and NFT launch
                </div>
              </div>
              <p className="relative self-stretch [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-[24px] tracking-[0] leading-[normal]">
                An open-access community for women and non-binary people to get educated, connected, and empowered in
                web3.
              </p>
            </div>
            <div className="flex flex-col items-start gap-[12px] p-[24px] relative flex-1 self-stretch grow border border-solid border-lavender">
              <div className="flex items-start gap-[12px] relative self-stretch w-full flex-[0_0_auto]">
                <a
                  className="relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk',Helvetica] font-bold text-midnight text-[32px] tracking-[0] leading-[normal]"
                  href="https://afropolitan.io?ref=sprise"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Afropolitan
                </a>
              </div>
              <div className="inline-flex items-start pt-0 pb-[8px] px-0 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk',Helvetica] font-normal text-purple text-[18px] tracking-[0] leading-[normal]">
                  Website and NFT launch
                </div>
              </div>
              <p className="relative self-stretch [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-[24px] tracking-[0] leading-[normal]">
                A digital network state bringing together talent, culture, and capital for the African diaspora.
              </p>
            </div>
          </div>
        </div>
        <p className="relative self-stretch [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-[24px] tracking-[0] leading-[normal]">
          <span className="[font-family:'Space_Grotesk',Helvetica] font-normal text-[#302556] text-[24px] tracking-[0]">
            Other clients we’ve worked with include{" "}
          </span>
          <a href="https://yestheory.com/?ref=sprise" rel="noopener noreferrer" target="_blank">
            <span className="underline">Yes Theory</span>
          </a>
          <span className="[font-family:'Space_Grotesk',Helvetica] font-normal text-[#302556] text-[24px] tracking-[0]">
            {" "}
            and{" "}
          </span>
          <a href="https://www.offbeat.xyz/?ref=sprise" rel="noopener noreferrer" target="_blank">
            <span className="underline">Offbeat</span>
          </a>
          <span className="[font-family:'Space_Grotesk',Helvetica] font-normal text-[#302556] text-[24px] tracking-[0]">
            .
          </span>
        </p>
      </div>
      <div className="relative self-stretch w-full h-px bg-lavender" />
      <div className="flex flex-col items-start gap-[48px] px-[104px] py-[96px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Fraunces',Helvetica] font-light italic text-midnight text-[64px] tracking-[0] leading-[normal]">
          Build with us
        </div>
        <div className="flex flex-col w-[704px] items-start gap-[24px] relative flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-[24px]">
            <p className="relative self-stretch [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-[24px] tracking-[0] leading-[normal]">
              <span className="[font-family:'Space_Grotesk',Helvetica] font-normal text-[#302556] text-[24px] tracking-[0]">
                The future of work is changing. It&#39;s a departure from institutions.
                <br />
              </span>
            </p>
            <p className="relative self-stretch [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-[24px] tracking-[0] leading-[normal]">
              <span className="[font-family:'Space_Grotesk',Helvetica] font-normal text-[#302556] text-[24px] tracking-[0]">
                Empowered individuals doing creative things can make a living on their own terms.
                <br />
              </span>
            </p>
            <p className="relative self-stretch [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-[24px] tracking-[0] leading-[normal]">
              <span className="[font-family:'Space_Grotesk',Helvetica] font-normal text-[#302556] text-[24px] tracking-[0]">
                Working on an idea but don&#39;t know how to build it? Let’s create something together. We&#39;ll make
                your ideas a reality.
                <br />
              </span>
            </p>
            <p className="relative self-stretch [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-[24px] tracking-[0] leading-[normal]">
              <span className="[font-family:'Space_Grotesk',Helvetica] font-normal text-[#302556] text-[24px] tracking-[0]">
                Shoot us an email:
              </span>
            </p>
          </div>
          <div className="inline-flex items-center justify-center gap-[10px] px-[16px] py-[12px] border border-solid border-lavender relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-[24px] tracking-[0] leading-[normal]">
              sup@sprise.co
            </div>
          </div>
        </div>
      </div>
      <div className="relative self-stretch w-full h-px bg-lavender" />
      <div className="flex flex-col items-start gap-[48px] px-[104px] py-[96px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Fraunces',Helvetica] font-light italic text-midnight text-[64px] tracking-[0] leading-[normal]">
          Who are we?
        </div>
        <div className="flex w-[704px] items-start gap-[32px] relative flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-[12px] p-[24px] relative flex-1 grow border border-solid border-lavender">
            <img className="relative w-[96px] h-[96px] object-cover" alt="Montana" src="../static/img/montana.png" />
            <div className="flex flex-col items-start gap-[4px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Space_Grotesk',Helvetica] font-bold text-midnight text-[24px] tracking-[0] leading-[normal]">
                Montana Wong
              </div>
              <div className="relative self-stretch [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-[18px] tracking-[0] leading-[normal]">
                Cofounder, Engineering
              </div>
            </div>
            <a
              className="relative self-stretch [font-family:'Space_Grotesk',Helvetica] font-normal text-purple text-[18px] tracking-[0] leading-[normal] underline"
              href="https://twitter.com/montana_wong"
              rel="noopener noreferrer"
              target="_blank"
            >
              @Montana_Wong
            </a>
          </div>
          <div className="flex flex-col items-start gap-[12px] p-[24px] relative flex-1 grow border border-solid border-lavender">
            <img className="relative w-[96px] h-[96px] object-cover" alt="Kevin" src="../static/img/kevin.png" />
            <div className="flex flex-col items-start gap-[4px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Space_Grotesk',Helvetica] font-bold text-midnight text-[24px] tracking-[0] leading-[normal]">
                Kevin Boodtama
              </div>
              <div className="relative self-stretch [font-family:'Space_Grotesk',Helvetica] font-normal text-midnight text-[18px] tracking-[0] leading-[normal]">
                Cofounder, Design
              </div>
            </div>
            <a
              className="relative self-stretch [font-family:'Space_Grotesk',Helvetica] font-normal text-purple text-[18px] tracking-[0] leading-[normal] underline"
              href="https://twitter.com/boodtama"
              rel="noopener noreferrer"
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
