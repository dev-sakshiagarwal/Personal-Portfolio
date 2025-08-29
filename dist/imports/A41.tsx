import svgPaths from "./svg-s41soacgrx";
import imgImage1 from "figma:asset/e8a5933363c71ff873b81184f3ba0257e20656df.png";
import imgImage2 from "figma:asset/1d12ce3e43bd6138ccc8363cc3356a7232b8c106.png";
import imgImage3 from "figma:asset/51c0066a104bfc8fa8a14275ff86b1dda53f23c6.png";
import imgImage4 from "figma:asset/cdb0b494a731fee342d59e3c047649ffe52affe2.png";
import imgImg from "figma:asset/c16837a798024d9f3745eaf30b0699ebf89ce750.png";
import imgScreenshot20250704At110305Pm1 from "figma:asset/8898452d534719abe94b443919f3c98cd38749a5.png";
import img1ResponsiveDeviceMockup4 from "figma:asset/b0ee33f9b873e8dc28872b1f4d8703fbe6446af4.png";
import imgJobsnew1 from "figma:asset/bbda5f59a1d4179f58d5d1a9d0d151434e30fff0.png";
import imgScreenshot20250704At110900Pm1 from "figma:asset/4df9be7ff505a2883a76d5579d088f63d5b01af8.png";
import imgImg1 from "figma:asset/2e956d737e5c41c7e71782b65a2263b6c43a5e8a.png";
import imgImg2 from "figma:asset/6edca4676d5118253a3d1f8abd6a841803a84dba.png";
import imgImg3 from "figma:asset/4804dd4fced22b8d1ceca8c3d3a46961405e2f97.png";
import imgImg4 from "figma:asset/ee9c68bb00125367839241d04bcb316c37a7aaae.png";

function Content() {
  return (
    <div
      className="box-border content-stretch flex flex-row font-['Rethink_Sans:Medium',_sans-serif] font-medium gap-8 items-start justify-start leading-[0] p-0 relative shrink-0 text-left w-full"
      data-name="Content"
    >
      <div className="flex flex-col justify-center relative shrink-0 text-[#000000] text-[60px] tracking-[-0.6px] w-[419px]">
        <p className="adjustLetterSpacing block leading-[1.1]">
          Creative Marketplace Platform
        </p>
      </div>
      <div className="basis-0 flex flex-col grow justify-center min-h-px min-w-px relative shrink-0 text-[#8a8a8a] text-[0px] tracking-[-0.18px]">
        <p className="block leading-[1.2] mb-0 text-[18px]">
          Gaawk is a multi-purpose creative marketplace empowering freelancers,
          agencies, brands, and artists to showcase, sell, and collaborate
          seamlessly.
        </p>
        <p className="block leading-[1.2] mb-0 text-[18px]">&nbsp;</p>
        <p className="font-['Rethink_Sans:Medium',_sans-serif] font-medium leading-[1.2] text-[#000000] text-[15px] tracking-[-0.15px] whitespace-pre-wrap">
          <span>
            {`Role:  UX/UI Lead, Brand Strategist, Art Director`}
            <br />
            <br />
          </span>
          <a
            className="[text-decoration-line:underline] [text-decoration-style:solid] [text-underline-position:from-font] cursor-pointer"
            href="https://www.gaawk.com/"
          >
            <span
              className="[text-decoration-line:underline] [text-decoration-style:solid] [text-underline-position:from-font] font-['Rethink_Sans:Medium',_sans-serif] font-medium leading-[1.2] text-[#000000] text-[15px] tracking-[-0.15px]"
              href="https://www.gaawk.com/"
            >
              www.gaawk.com
            </span>
          </a>
        </p>
      </div>
    </div>
  );
}

function IntroSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Intro section">
      <div className="absolute border-[0px_0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] items-start justify-start pb-[120px] pt-8 px-8 relative w-full">
          <Content />
        </div>
      </div>
    </div>
  );
}

function Number() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px shrink-0"
      data-name="Number"
    />
  );
}

function Title() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-1 grow items-end justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Title"
    >
      <div className="flex flex-col font-['Rethink_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#000000] text-[60px] text-left text-nowrap tracking-[-0.6px]">
        <p className="adjustLetterSpacing block leading-[1.1] whitespace-pre">
          The Challenge
        </p>
      </div>
      <div className="basis-0 flex flex-row grow items-end self-stretch shrink-0">
        <Number />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-8 items-start justify-start pb-0 pt-5 px-8 relative w-full">
          <div className="flex flex-col font-['Rethink_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#f45f00] text-[60px] text-left text-nowrap tracking-[-0.6px]">
            <p className="adjustLetterSpacing block leading-[1.1] whitespace-pre">
              01
            </p>
          </div>
          <Title />
          <div className="basis-0 flex flex-col font-['Rethink_Sans:Medium',_sans-serif] font-medium grow justify-center leading-[1.2] min-h-px min-w-px relative shrink-0 text-[#8a8a8a] text-[15px] text-left tracking-[-0.15px]">
            <p className="block mb-0">
              When I joined Gaawk, the team had been working on this ambitious
              creative marketplace for over a year. The product was overloaded
              with features and stuck.
            </p>
            <p className="block mb-0">&nbsp;</p>
            <p className="block mb-0">
              Design felt outdated, user journeys were fragmented, and it simply
              wasn’t ready to launch.
            </p>
            <p className="block mb-0">
              We needed to untangle the complexity and bring Gaawk to life —
              fast.
            </p>
            <p className="block mb-0">&nbsp;</p>
            <p className="block">&nbsp;</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArtDirectionSection() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[65px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Art Direction Section"
    >
      <div className="absolute border-[1px_0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Header />
    </div>
  );
}

function Number1() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px shrink-0"
      data-name="Number"
    />
  );
}

function Title1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-1 grow items-end justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Title"
    >
      <div className="flex flex-col font-['Rethink_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#000000] text-[60px] text-left text-nowrap tracking-[-0.6px]">
        <p className="adjustLetterSpacing block leading-[1.1] whitespace-pre">
          What we built
        </p>
      </div>
      <div className="basis-0 flex flex-row grow items-end self-stretch shrink-0">
        <Number1 />
      </div>
    </div>
  );
}

function Header1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-8 items-start justify-start pb-0 pt-5 px-8 relative w-full">
          <div className="flex flex-col font-['Rethink_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#f45f00] text-[60px] text-left text-nowrap tracking-[-0.6px]">
            <p className="adjustLetterSpacing block leading-[1.1] whitespace-pre">
              02
            </p>
          </div>
          <Title1 />
          <div className="basis-0 flex flex-col font-['Rethink_Sans:Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#8a8a8a] text-[15px] text-left tracking-[-0.15px]">
            <p className="block leading-[1.2]">
              This is the collection of four core products I delivered for
              Gaawk. I’m proud to see how these came together as a cohesive
              system, and in this case study, I share how we shaped the strategy
              and built it as a team:
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div
      aria-label="Person working on laptop"
      className="[background-size:auto,_contain] aspect-[467/295.363] bg-[position:0%_0%,_50%_50%] shrink-0 w-full"
      data-name="Image 1"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(198, 198, 198, 0.2) 0%, rgba(198, 198, 198, 0.2) 100%), url('${imgImage1}')`,
      }}
    />
  );
}

function Description() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['Rethink_Sans:Medium',_sans-serif] font-medium gap-2 items-start justify-start leading-[0] p-0 relative shrink-0 text-[13px] text-left tracking-[-0.13px] w-full"
      data-name="Description"
    >
      <div className="flex flex-col justify-center relative shrink-0 text-[#000000] w-full">
        <p className="block leading-[1.2]">The main app experience</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#8a8a8a] w-full">
        <p className="block leading-[1.2]">
          Simplified an overloaded app into an intuitive, focused experience,
          clear, fast, and empowering for creators.
        </p>
      </div>
    </div>
  );
}

function Image3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-2.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Image 1"
    >
      <Image1 />
      <Description />
    </div>
  );
}

function Image2() {
  return (
    <div
      aria-label="Person working on tablet"
      className="[background-size:auto,_99.9%_114.96%] aspect-[467/295.363] bg-[position:0%_0%,_49.9%_53.53%] shrink-0 w-full"
      data-name="Image 2"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(214, 214, 214, 0.2) 0%, rgba(214, 214, 214, 0.2) 100%), url('${imgImage2}')`,
      }}
    />
  );
}

function Description1() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['Rethink_Sans:Medium',_sans-serif] font-medium gap-2 items-start justify-start leading-[0] p-0 relative shrink-0 text-[13px] text-left tracking-[-0.13px] w-full"
      data-name="Description"
    >
      <div className="flex flex-col justify-center relative shrink-0 text-[#000000] w-full">
        <p className="block leading-[1.2]">{`A modern, focused website & web app`}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#8a8a8a] w-full">
        <p className="block leading-[1.2]">
          Transformed the online presence into a minimal, premium website,
          building trust and guiding users seamlessly to the app.
        </p>
      </div>
    </div>
  );
}

function Image4() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-2.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Image 2"
    >
      <Image2 />
      <Description1 />
    </div>
  );
}

function Row1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-8 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Row 1"
    >
      <Image3 />
      <Image4 />
    </div>
  );
}

function Image5() {
  return (
    <div
      aria-label="Person working on laptop"
      className="aspect-[467/295.363] bg-center bg-cover bg-no-repeat shrink-0 w-full"
      data-name="Image 1"
      style={{ backgroundImage: `url('${imgImage3}')` }}
    />
  );
}

function Description2() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['Rethink_Sans:Medium',_sans-serif] font-medium gap-2 items-start justify-start leading-[0] p-0 relative shrink-0 text-[13px] text-left tracking-[-0.13px] w-full"
      data-name="Description"
    >
      <div className="flex flex-col justify-center relative shrink-0 text-[#000000] w-full">
        <p className="block leading-[1.2]">A flexible, minimal design system</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#8a8a8a] w-full">
        <p className="block leading-[1.2]">
          Created a clean, unified design system from scratch, enabling fast
          development and consistent visual language.
        </p>
      </div>
    </div>
  );
}

function Image6() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-2.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Image 1"
    >
      <Image5 />
      <Description2 />
    </div>
  );
}

function Image7() {
  return (
    <div
      aria-label="Person working on laptop"
      className="aspect-[467/295.363] bg-center bg-cover bg-no-repeat shrink-0 w-full"
      data-name="Image 1"
      style={{ backgroundImage: `url('${imgImage4}')` }}
    />
  );
}

function Description3() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['Rethink_Sans:Medium',_sans-serif] font-medium gap-2 items-start justify-start leading-[0] p-0 relative shrink-0 text-[13px] text-left tracking-[-0.13px] w-full"
      data-name="Description"
    >
      <div className="flex flex-col justify-center relative shrink-0 text-[#000000] w-full">
        <p className="block leading-[1.2]">
          A powerful admin and back-office dashboard
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#8a8a8a] w-full">
        <p className="block leading-[1.2]">
          Designed an easy-to-use, data-driven control panel, empowering the
          team to monitor, manage, and scale operations confidently.
        </p>
      </div>
    </div>
  );
}

function Image8() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-2.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Image 2"
    >
      <Image7 />
      <Description3 />
    </div>
  );
}

function Row2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-8 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Row 2"
    >
      <Image6 />
      <Image8 />
    </div>
  );
}

function PhotoGrid() {
  return (
    <div className="relative shrink-0 w-full" data-name="Photo grid">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-10 items-start justify-start px-8 py-10 relative w-full">
          <Row1 />
          <Row2 />
        </div>
      </div>
    </div>
  );
}

function ArtDirectionSection1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[5px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Art Direction Section"
    >
      <div className="absolute border-[1px_0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Header1 />
      <PhotoGrid />
    </div>
  );
}

function Title2() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-1 grow items-end justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Title"
    >
      <div className="flex flex-col font-['Rethink_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#000000] text-[60px] text-left tracking-[-0.6px] w-[416px]">
        <p className="adjustLetterSpacing block leading-[1.1]">
          Understanding the landscape
        </p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-8 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Content"
    >
      <div className="flex flex-col font-['Rethink_Sans:Medium',_sans-serif] font-medium justify-center leading-[1.2] relative shrink-0 text-[#8a8a8a] text-[0px] text-left tracking-[-0.18px] w-full">
        <p className="block mb-0 text-[#000000] text-[15px] tracking-[-0.15px]">{`Research & Benchmarking: `}</p>
        <p className="block mb-0 text-[18px]">&nbsp;</p>
        <p className="block mb-0 text-[18px]">
          We started by looking outwards. I analyzed top apps in social media,
          messaging, recruiting, forums, and content creation.
        </p>
        <p className="block mb-0 text-[18px]">&nbsp;</p>
        <p className="block font-['Rethink_Sans:Bold',_sans-serif] font-bold text-[18px]">
          This helped us see what worked, what didn’t, and where Gaawk could
          stand out.
        </p>
      </div>
    </div>
  );
}

function Header2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-8 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Header"
    >
      <div className="flex flex-col font-['Rethink_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#f45f00] text-[60px] text-left text-nowrap tracking-[-0.6px]">
        <p className="adjustLetterSpacing block leading-[1.1] whitespace-pre">
          03
        </p>
      </div>
      <Title2 />
      <Content1 />
    </div>
  );
}

function Img() {
  return (
    <div
      aria-label="'precise, trustworthy, approachable, reliable'"
      className="aspect-[966/500] bg-center bg-cover bg-no-repeat shrink-0 w-full"
      data-name="IMG"
      style={{ backgroundImage: `url('${imgImg}')` }}
    />
  );
}

function StrategySection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Strategy section">
      <div className="absolute border-[1px_0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] items-start justify-start pb-[120px] pt-8 px-8 relative w-full">
          <Header2 />
          <Img />
        </div>
      </div>
    </div>
  );
}

function Number2() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px shrink-0"
      data-name="Number"
    />
  );
}

function Title3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-1 grow items-end justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Title"
    >
      <div className="flex flex-col font-['Rethink_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#000000] text-[60px] text-left tracking-[-0.6px] w-[416px]">
        <p className="adjustLetterSpacing block leading-[1.1]">
          Focus over everything
        </p>
      </div>
      <div className="basis-0 flex flex-row grow items-end self-stretch shrink-0">
        <Number2 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-8 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="flex flex-col font-['Rethink_Sans:Medium',_sans-serif] font-medium justify-center leading-[1.2] relative shrink-0 text-[#8a8a8a] text-[0px] text-left tracking-[-0.18px] w-full">
        <p className="block mb-0 text-[#000000] text-[15px] tracking-[-0.15px]">
          Defining the Vision:
        </p>
        <p className="block mb-0 text-[18px]">&nbsp;</p>
        <p className="block mb-0 text-[18px]">
          Gaawk tried to do it all: services, products, jobs,
          collaborations,storage,gallery, portfolio, etc. This ambition blurred
          the core value and confused users.
        </p>
        <p className="block mb-0 text-[18px]">&nbsp;</p>
        <p className="block font-['Rethink_Sans:Bold',_sans-serif] font-bold text-[18px]">
          I worked with the team to define clear phases, cut distractions, and
          put focus back on what really mattered.
        </p>
      </div>
    </div>
  );
}

function Header3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-8 items-start justify-start pb-8 pt-0 px-0 relative shrink-0 w-full"
      data-name="Header"
    >
      <div className="flex flex-col font-['Rethink_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#f45f00] text-[60px] text-left text-nowrap tracking-[-0.6px]">
        <p className="adjustLetterSpacing block leading-[1.1] whitespace-pre">
          04
        </p>
      </div>
      <Title3 />
      <Text />
    </div>
  );
}

function PersonalitySection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Personality Section">
      <div className="absolute border-[1px_0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] items-start justify-start p-[32px] relative w-full">
          <Header3 />
          <div
            className="bg-center bg-cover bg-no-repeat h-[423.435px] shrink-0 w-[1216px]"
            data-name="Screenshot 2025-07-04 at 11.03.05 PM 1"
            style={{
              backgroundImage: `url('${imgScreenshot20250704At110305Pm1}')`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

function Number3() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px shrink-0"
      data-name="Number"
    />
  );
}

function Title4() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-1 grow items-end justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Title"
    >
      <div className="flex flex-col font-['Rethink_Sans:Medium',_sans-serif] font-medium h-[129px] justify-center leading-[0] relative shrink-0 text-[#000000] text-[60px] text-left tracking-[-0.6px] w-[416px]">
        <p className="adjustLetterSpacing block leading-[1.1]">
          Working within limits
        </p>
      </div>
      <div className="basis-0 flex flex-row grow items-end self-stretch shrink-0">
        <Number3 />
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-8 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Content"
    >
      <div className="flex flex-col font-['Rethink_Sans:Medium',_sans-serif] font-medium justify-center leading-[1.2] relative shrink-0 text-[#8a8a8a] text-[0px] text-left tracking-[-0.18px] w-full">
        <p className="block mb-0 text-[#000000] text-[15px] tracking-[-0.15px]">
          Redesigning User Journeys:
        </p>
        <p className="block mb-0 text-[18px]">&nbsp;</p>
        <p className="block mb-0 text-[18px]">
          We didn’t have the luxury to start from scratch.
        </p>
        <p className="block mb-0 text-[18px]">
          APIs were fixed, and technical resources were tight.
        </p>
        <p className="block mb-0 text-[18px]">&nbsp;</p>
        <p className="block text-[18px]">
          I redesigned journeys around these constraints, keeping flows
          intuitive and the experience feeling standard.
        </p>
      </div>
    </div>
  );
}

function Header4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-8 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Header"
    >
      <div className="flex flex-col font-['Rethink_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#f45f00] text-[60px] text-left text-nowrap tracking-[-0.6px]">
        <p className="adjustLetterSpacing block leading-[1.1] whitespace-pre">
          05
        </p>
      </div>
      <Title4 />
      <Content2 />
    </div>
  );
}

function Group1000003348() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <div
        className="[background-size:143.02%_134.71%] [grid-area:1_/_1] bg-[6.34%_50%] bg-no-repeat h-[351.529px] ml-0 mt-0 w-[441.473px]"
        data-name="1- Responsive Device Mockup 4"
        style={{ backgroundImage: `url('${img1ResponsiveDeviceMockup4}')` }}
      />
      <div
        className="[background-size:527.82%_204.28%] [grid-area:1_/_1] bg-[89.3%_69.86%] bg-no-repeat h-[272.622px] ml-[35.011px] mt-[73.304px] w-[140.68px]"
        data-name="1- Responsive Device Mockup 3"
        style={{ backgroundImage: `url('${img1ResponsiveDeviceMockup4}')` }}
      />
    </div>
  );
}

function Group1000003347() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[524.526px] mt-0 place-items-start relative">
      <Group1000003348 />
    </div>
  );
}

function Group1000003349() {
  return (
    <div className="[grid-area:1_/_1] h-[20.975px] ml-[480.004px] mt-[164.803px] relative w-[43.948px]">
      <div className="absolute bottom-[-5.162%] left-[-2.463%] right-[-3.567%] top-[-5.161%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 48 25"
        >
          <g id="Group 1000003349">
            <path
              d={svgPaths.p28b93400}
              id="Vector 1410"
              stroke="var(--stroke-0, black)"
              strokeLinecap="round"
              strokeWidth="2.16512"
            />
            <path
              d={svgPaths.p62ab00}
              id="Vector 1411"
              opacity="0.6"
              stroke="var(--stroke-0, black)"
              strokeLinecap="round"
              strokeWidth="2.16512"
            />
            <path
              d={svgPaths.p112a8740}
              id="Vector 1412"
              opacity="0.3"
              stroke="var(--stroke-0, black)"
              strokeLinecap="round"
              strokeWidth="2.16512"
            />
            <path
              d={svgPaths.p34af4f00}
              id="Vector 1413"
              opacity="0.1"
              stroke="var(--stroke-0, black)"
              strokeLinecap="round"
              strokeWidth="2.16512"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group1000003350() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div
        className="[grid-area:1_/_1] bg-center bg-cover bg-no-repeat h-[342.591px] ml-0 mt-[3.995px] w-[466.444px]"
        data-name="jobsnew 1"
        style={{ backgroundImage: `url('${imgJobsnew1}')` }}
      />
      <Group1000003347 />
      <Group1000003349 />
    </div>
  );
}

function LogoSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Logo section">
      <div className="absolute border-[1px_0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] items-center justify-start pb-[120px] pt-8 px-8 relative w-full">
          <Header4 />
          <Group1000003350 />
        </div>
      </div>
    </div>
  );
}

function Number4() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px shrink-0"
      data-name="Number"
    />
  );
}

function Title5() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-1 grow items-end justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Title"
    >
      <div className="flex flex-col font-['Rethink_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#000000] text-[0px] text-left text-nowrap tracking-[-0.6px]">
        <p className="adjustLetterSpacing block leading-[1.1] text-[60px] whitespace-pre">
          Try, fail, learn
        </p>
      </div>
      <div className="basis-0 flex flex-row grow items-end self-stretch shrink-0">
        <Number4 />
      </div>
    </div>
  );
}

function Header5() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-8 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Header"
    >
      <div className="flex flex-col font-['Rethink_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#f45f00] text-[60px] text-left text-nowrap tracking-[-0.6px]">
        <p className="adjustLetterSpacing block leading-[1.1] whitespace-pre">
          06
        </p>
      </div>
      <Title5 />
      <div className="basis-0 flex flex-col font-['Rethink_Sans:Medium',_sans-serif] font-medium grow justify-center leading-[1.2] min-h-px min-w-px relative shrink-0 text-[#8a8a8a] text-[0px] text-left tracking-[-0.18px]">
        <p className="block mb-0 text-[#000000] text-[15px] tracking-[-0.15px]">{`Prototyping & Iteration:`}</p>
        <p className="block mb-0 text-[18px]">&nbsp;</p>
        <p className="block mb-0 text-[18px]">We moved fast.</p>
        <p className="block mb-0 text-[18px]">
          I built new prototypes, ran A/B tests internally with NDA-bound team
          members, and learned quickly.
        </p>
        <p className="block mb-0 text-[18px]">&nbsp;</p>
        <p className="block font-['Rethink_Sans:Bold',_sans-serif] font-bold text-[18px]">
          This helped us refine ideas before locking anything into code.
        </p>
      </div>
    </div>
  );
}

function ColorSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Color section">
      <div className="absolute border-[1px_0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] items-start justify-start p-[32px] relative w-full">
          <Header5 />
          <div
            className="[background-size:100%_113.56%] aspect-[696/450] bg-[-0.02%_100%] bg-no-repeat shrink-0 w-full"
            data-name="Screenshot 2025-07-04 at 11.09.00 PM 1"
            style={{
              backgroundImage: `url('${imgScreenshot20250704At110900Pm1}')`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

function Title6() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-1 grow items-end justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Title"
    >
      <div className="flex flex-col font-['Rethink_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#000000] text-[60px] text-left tracking-[-0.6px] w-[416px]">
        <p className="adjustLetterSpacing block leading-[1.1]">
          A strong backbone
        </p>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-8 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Content"
    >
      <div className="flex flex-col font-['Rethink_Sans:Medium',_sans-serif] font-medium justify-center leading-[1.2] relative shrink-0 text-[#8a8a8a] text-[0px] text-left tracking-[-0.18px] w-full">
        <p className="block mb-0 text-[#000000] text-[15px] tracking-[-0.15px]">
          Building a New Design System in Parallel:
        </p>
        <p className="block mb-0 text-[18px]">&nbsp;</p>
        <p className="block mb-0 text-[18px]">
          The old design system was heavy and messy.
        </p>
        <p className="block mb-0 text-[18px]">
          I introduced a unified, reusable system to simplify everything and
          bring visual consistency.
        </p>
        <p className="block mb-0 text-[18px]">&nbsp;</p>
        <p className="block text-[18px]">
          This sped up development by ~60% and gave us a solid foundation for
          the future.
        </p>
      </div>
    </div>
  );
}

function Header6() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-8 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Header"
    >
      <div className="flex flex-col font-['Rethink_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#f45f00] text-[60px] text-left text-nowrap tracking-[-0.6px]">
        <p className="adjustLetterSpacing block leading-[1.1] whitespace-pre">
          07
        </p>
      </div>
      <Title6 />
      <Content3 />
    </div>
  );
}

function Img1() {
  return (
    <div
      aria-label="'precise, trustworthy, approachable, reliable'"
      className="[background-size:auto,_cover] aspect-[966/500] bg-[position:0%_0%,_50%_50%] shrink-0 w-full"
      data-name="IMG"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(218, 218, 218, 0.2) 0%, rgba(218, 218, 218, 0.2) 100%), url('${imgImg1}')`,
      }}
    />
  );
}

function StrategySection1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Strategy section">
      <div className="absolute border-[1px_0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] items-start justify-start pb-[120px] pt-8 px-8 relative w-full">
          <Header6 />
          <Img1 />
        </div>
      </div>
    </div>
  );
}

function Number5() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px shrink-0"
      data-name="Number"
    />
  );
}

function Title7() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-1 grow items-end justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Title"
    >
      <div className="flex flex-col font-['Rethink_Sans:Medium',_sans-serif] font-medium h-[116px] justify-center leading-[0] relative shrink-0 text-[#000000] text-[60px] text-left tracking-[-0.6px] w-[416px]">
        <p className="adjustLetterSpacing block leading-[1.1]">
          Extending the story
        </p>
      </div>
      <div className="basis-0 flex flex-row grow items-end self-stretch shrink-0">
        <Number5 />
      </div>
    </div>
  );
}

function Img2() {
  return (
    <div
      aria-label="large letters"
      className="aspect-[467/300] bg-center bg-cover bg-no-repeat shrink-0 w-full"
      data-name="IMG"
      style={{ backgroundImage: `url('${imgImage2}')` }}
    />
  );
}

function Content4() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-10 grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0"
      data-name="Content"
    >
      <div className="flex flex-col font-['Rethink_Sans:Medium',_sans-serif] font-medium justify-center leading-[1.2] relative shrink-0 text-[#8a8a8a] text-[0px] text-left tracking-[-0.18px] w-full">
        <p className="block mb-0 text-[#000000] text-[15px] tracking-[-0.15px]">{`Website & Content:`}</p>
        <p className="block mb-0 text-[18px]">&nbsp;</p>
        <p className="block mb-0 text-[18px]">
          We brought the same simplicity and even better clarity to the web with
          a modern design so it leads and prepare users for next phase of the
          new design of the app.
        </p>
        <p className="block mb-0 text-[18px]">&nbsp;</p>
        <p className="block text-[18px]">
          Landing pages were focused, messaging stayed sharp, and trust was
          front and center — making the leap from website to app seamless.Redo’s
          typography balances clarity and professionalism with a modern yet
          timeless type pairing, reinforcing our commitment to accuracy,
          efficiency, and financial stability.
        </p>
      </div>
      <Img2 />
    </div>
  );
}

function Header7() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-8 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Header"
    >
      <div className="flex flex-col font-['Rethink_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#f45f00] text-[60px] text-left text-nowrap tracking-[-0.6px]">
        <p className="adjustLetterSpacing block leading-[1.1] whitespace-pre">
          08
        </p>
      </div>
      <Title7 />
      <Content4 />
    </div>
  );
}

function TypographySection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Typography Section">
      <div className="absolute border-[1px_0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] items-start justify-start pb-[120px] pt-8 px-8 relative w-full">
          <Header7 />
        </div>
      </div>
    </div>
  );
}

function Number6() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px shrink-0"
      data-name="Number"
    />
  );
}

function Title8() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-1 grow items-end justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Title"
    >
      <div className="flex flex-col font-['Rethink_Sans:Medium',_sans-serif] font-medium h-[73px] justify-center leading-[0] relative shrink-0 text-[#000000] text-[60px] text-left tracking-[-0.6px] w-[416px]">
        <p className="adjustLetterSpacing block leading-[1.1]">Control Room</p>
      </div>
      <div className="basis-0 flex flex-row grow items-end self-stretch shrink-0">
        <Number6 />
      </div>
    </div>
  );
}

function Img3() {
  return (
    <div
      aria-label="large letters"
      className="[background-size:99.98%_124.4%] aspect-[467/300] bg-no-repeat bg-top-left shrink-0 w-full"
      data-name="IMG"
      style={{ backgroundImage: `url('${imgImg2}')` }}
    />
  );
}

function Img4() {
  return (
    <div
      aria-label="large letters"
      className="aspect-[467/300] bg-center bg-cover bg-no-repeat relative rounded-[7.72455px] shrink-0 w-full"
      data-name="IMG"
      style={{ backgroundImage: `url('${imgImg3}')` }}
    >
      <div className="absolute border-[#000000] border-[0.772455px] border-solid inset-0 pointer-events-none rounded-[7.72455px]" />
    </div>
  );
}

function Content5() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-10 grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0"
      data-name="Content"
    >
      <div className="flex flex-col font-['Rethink_Sans:Medium',_sans-serif] font-medium justify-center leading-[1.2] relative shrink-0 text-[#8a8a8a] text-[0px] text-left tracking-[-0.18px] w-full">
        <p className="block mb-0 text-[#000000] text-[15px] tracking-[-0.15px]">{`Backoffice & Control Panel:`}</p>
        <p className="block mb-0 text-[18px]">&nbsp;</p>
        <p className="block mb-0 text-[18px]">
          A clear, intuitive admin panel designed for smooth management.
        </p>
        <p className="block mb-0 text-[18px]">{`Stakeholders and internal teams can easily monitor app performance, control operations, and see exactly what's happening in real time.`}</p>
        <p className="block mb-0 text-[18px]">&nbsp;</p>
        <p className="block text-[18px]">&nbsp;</p>
      </div>
      <Img3 />
      <Img4 />
    </div>
  );
}

function Header8() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-8 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Header"
    >
      <div className="flex flex-col font-['Rethink_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#f45f00] text-[60px] text-left text-nowrap tracking-[-0.6px]">
        <p className="adjustLetterSpacing block leading-[1.1] whitespace-pre">
          09
        </p>
      </div>
      <Title8 />
      <Content5 />
    </div>
  );
}

function Img5() {
  return (
    <div
      aria-label="'precise, trustworthy, approachable, reliable'"
      className="bg-center bg-contain bg-no-repeat h-[565px] shrink-0 w-full"
      data-name="IMG"
      style={{ backgroundImage: `url('${imgImage4}')` }}
    />
  );
}

function TypographySection1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Typography Section">
      <div className="absolute border-[1px_0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] items-start justify-start pb-[120px] pt-8 px-8 relative w-full">
          <Header8 />
          <Img5 />
        </div>
      </div>
    </div>
  );
}

function Number7() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px shrink-0"
      data-name="Number"
    />
  );
}

function Title9() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-1 grow items-end justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Title"
    >
      <div className="flex flex-col font-['Rethink_Sans:Medium',_sans-serif] font-medium h-[110px] justify-center leading-[0] relative shrink-0 text-[#000000] text-[0px] text-left tracking-[-0.6px] w-[416px]">
        <p className="adjustLetterSpacing block leading-[1.1] text-[60px]">
          From lost to confident
        </p>
      </div>
      <div className="basis-0 flex flex-row grow items-end self-stretch shrink-0">
        <Number7 />
      </div>
    </div>
  );
}

function Header9() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-8 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Header"
    >
      <div className="flex flex-col font-['Rethink_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#f45f00] text-[60px] text-left text-nowrap tracking-[-0.6px]">
        <p className="adjustLetterSpacing block leading-[1.1] whitespace-pre">
          10
        </p>
      </div>
      <Title9 />
      <div className="basis-0 flex flex-col font-['Rethink_Sans:Medium',_sans-serif] font-medium grow justify-center leading-[1.2] min-h-px min-w-px relative shrink-0 text-[#8a8a8a] text-[0px] text-left tracking-[-0.18px]">
        <p className="block font-['Rethink_Sans:Bold',_sans-serif] font-bold mb-0 text-[#000000] text-[18px]">
          Simplified Onboarding:
        </p>
        <p className="block mb-0 text-[18px]">&nbsp;</p>
        <p className="block mb-0 text-[18px]">
          Onboarding took 15 minutes and left people confused.
        </p>
        <p className="mb-0">
          <span className="text-[18px] tracking-[-0.18px]">
            After redesign, we cut it down to under 5 minutes, clear entry
            points, strong hierarchy, no tutorials needed.
            <br />
            <br />
          </span>
          <span className="text-[#000000] text-[15px] tracking-[-0.15px]">{`Testing & QA:`}</span>
        </p>
        <p className="block mb-0 text-[18px]">&nbsp;</p>
        <p className="block mb-0 text-[18px]">
          We ran continuous QA cycles on iOS, Android, and web.
        </p>
        <p className="block text-[18px]">
          Feedback loops helped us fix issues fast and improve reliability
          across all platforms.
        </p>
      </div>
    </div>
  );
}

function Img6() {
  return (
    <div
      aria-label="'precise, trustworthy, approachable, reliable'"
      className="aspect-[966/500] bg-center bg-cover bg-no-repeat shrink-0 w-full"
      data-name="IMG"
      style={{ backgroundImage: `url('${imgImg4}')` }}
    />
  );
}

function ColorSection1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Color section">
      <div className="absolute border-[1px_0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] items-start justify-start p-[32px] relative w-full">
          <Header9 />
          <Img6 />
        </div>
      </div>
    </div>
  );
}

function Number8() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px shrink-0"
      data-name="Number"
    />
  );
}

function Title10() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-1 grow items-end justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Title"
    >
      <div className="flex flex-col font-['Rethink_Sans:Medium',_sans-serif] font-medium justify-center leading-[1.1] relative shrink-0 text-[#000000] text-[60px] text-left text-nowrap tracking-[-0.6px] whitespace-pre">
        <p className="adjustLetterSpacing block mb-0">{`Results & `}</p>
        <p className="adjustLetterSpacing block">Learning</p>
      </div>
      <div className="basis-0 flex flex-row grow items-end self-stretch shrink-0">
        <Number8 />
      </div>
    </div>
  );
}

function Header10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-8 items-start justify-start pb-0 pt-5 px-8 relative w-full">
          <div className="flex flex-col font-['Rethink_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#f45f00] text-[60px] text-left text-nowrap tracking-[-0.6px]">
            <p className="adjustLetterSpacing block leading-[1.1] whitespace-pre">
              11
            </p>
          </div>
          <Title10 />
          <div className="basis-0 flex flex-col font-['Rethink_Sans:Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#8a8a8a] text-[15px] text-left tracking-[-0.15px]">
            <p className="block leading-[1.2] mb-0">
              Gaawk taught me to balance bold visions with technical realities
              and user needs.
            </p>
            <p className="block leading-[1.2] mb-0">
              Design isn’t just visuals — it’s focus, clarity, and building
              trust
            </p>
            <p className="block leading-[1.2] mb-0">&nbsp;</p>
            <p className="block leading-[1.2] mb-0">Results:</p>
            <p className="block leading-[1.2] mb-0">&nbsp;</p>
            <ul className="css-ed5n1g list-disc mb-0">
              <li className="mb-0 ms-[22.5px]">
                <span className="leading-[1.2]">
                  Delivered a launch-ready MVP after years of delays.
                </span>
              </li>
              <li className="mb-0 ms-[22.5px]">
                <span className="leading-[1.2]">
                  Positive feedback from agencies and freelancers.
                </span>
              </li>
              <li className="mb-0 ms-[22.5px]">
                <span className="leading-[1.2]">
                  Stronger brand trust and market positioning.
                </span>
              </li>
              <li className="mb-0 ms-[22.5px]">
                <span className="leading-[1.2]">
                  A foundation ready to support future growth.
                </span>
              </li>
            </ul>
            <p className="block leading-[1.2] mb-0">&nbsp;</p>
            <p className="block leading-[1.2]">&nbsp;</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArtDirectionSection2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[65px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Art Direction Section"
    >
      <div className="absolute border-[1px_0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Header10 />
    </div>
  );
}

function Legal() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-4 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Legal"
    >
      <div className="flex flex-col font-['Rethink_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#000000] text-[13px] text-left text-nowrap tracking-[-0.13px]">
        <p className="adjustLetterSpacing block leading-[1.2] whitespace-pre">
          © 2025
        </p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Text"
    >
      <Legal />
      <div className="flex flex-col font-['Rethink_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#000000] text-[13px] text-left text-nowrap tracking-[-0.13px]">
        <p className="adjustLetterSpacing block leading-[1.2] whitespace-pre">
          All Rights Reserved
        </p>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-end relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[200px] items-start justify-end pb-5 pt-10 px-10 relative w-full">
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function Footer1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[31px] items-start justify-start pb-8 pt-32 px-0 relative shrink-0 w-full"
      data-name="Footer"
    >
      <Content6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 top-0 w-[1030px]">
      <div className="h-[100dvh] overflow-clip relative shrink-0 tailwind w-full">
        <div
          aria-label="Video Section"
          className="bg-black flex items-center justify-center size-full"
          data-name="Hero"
        >
          <div className="bg-black h-full relative w-full">
            <div className="bg-black h-full overflow-hidden relative w-full" />
          </div>
        </div>
      </div>
      <IntroSection />
      <ArtDirectionSection />
      <ArtDirectionSection1 />
      <StrategySection />
      <PersonalitySection />
      <LogoSection />
      <ColorSection />
      <StrategySection1 />
      <TypographySection />
      <TypographySection1 />
      <ColorSection1 />
      <ArtDirectionSection2 />
      <Footer1 />
    </div>
  );
}

export default function A41() {
  return (
    <div className="bg-[#ffffff] relative size-full" data-name="A4 - 1">
      <Frame7 />
    </div>
  );
}