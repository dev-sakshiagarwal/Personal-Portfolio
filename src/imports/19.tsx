import imgDownload1 from "figma:asset/4fbd6b7516f3484e76bef7a1ade6f0abe47aaecd.png";
import imgDownload3 from "figma:asset/5b8940d2b8b40e8ed64fe6106326c393304c60d4.png";
import { imgDownload2, imgDownload4 } from "./svg-qencu";

function Frame41991() {
  return (
    <div className="absolute box-border content-stretch flex flex-row gap-[5px] items-center justify-center left-[199px] p-0 top-[716px]">
      <div
        className="font-['DM_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#707070] text-[9px] text-left text-nowrap tracking-[-0.18px]"
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        <p className="adjustLetterSpacing block leading-[10px] whitespace-pre">
          M. J. P. Rohilkhand University
        </p>
      </div>
      <div className="h-0 relative shrink-0 w-[5.5px]">
        <div className="absolute bottom-[-0.2px] left-0 right-0 top-[-0.2px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 6 2"
          >
            <path
              d="M0 1H5.5"
              id="Vector 814"
              stroke="var(--stroke-0, #707070)"
              strokeWidth="0.4"
            />
          </svg>
        </div>
      </div>
      <div
        className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[8px] text-[rgba(112,112,112,0.6)] text-left text-nowrap tracking-[-0.16px]"
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        <p className="adjustLetterSpacing block leading-[10px] whitespace-pre">
          Aug 2011 - Jun 2015
        </p>
      </div>
    </div>
  );
}

function Stanford() {
  return (
    <div
      className="absolute contents left-[199px] top-[716px]"
      data-name="Stanford"
    >
      <div
        className="absolute font-['DM_Sans:Bold',_sans-serif] font-bold leading-[0] left-[199.163px] text-[#040404] text-[8px] text-left text-nowrap top-[733.773px] tracking-[-0.16px]"
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        <p className="adjustLetterSpacing block leading-[10px] whitespace-pre">{`Computer Science & Information Technology`}</p>
      </div>
      <Frame41991 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div
      className="absolute contents left-[198px] top-[681px]"
      data-name="Mask group"
    >
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[29.222px] left-[198.727px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.727295px_0px] mask-size-[32px_29.8182px] top-[681px] w-[32.64px]"
        data-name="download 1"
        style={{
          backgroundImage: `url('${imgDownload1}')`,
          maskImage: `url('${imgDownload2}')`,
        }}
      />
    </div>
  );
}

function Stanford1() {
  return (
    <div
      className="absolute contents left-[198px] top-[681px]"
      data-name="Stanford"
    >
      <Stanford />
      <MaskGroup />
    </div>
  );
}

function Title() {
  return (
    <div
      className="absolute contents left-[198px] top-[644px]"
      data-name="Title"
    >
      <div
        className="absolute font-['DM_Sans:Bold',_sans-serif] font-bold leading-[0] left-[198px] text-[#040404] text-[12px] text-left text-nowrap top-[653.831px] tracking-[0.48px] uppercase"
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        <p className="adjustLetterSpacing block leading-[13px] whitespace-pre">
          Education
        </p>
      </div>
      <div className="absolute bg-[#ffcb14] h-px left-[199px] top-[644px] w-[10.968px]" />
    </div>
  );
}

function Education() {
  return (
    <div
      className="absolute contents left-[198px] top-[644px]"
      data-name="Education"
    >
      <Stanford1 />
      <Title />
    </div>
  );
}

function WorkExperience() {
  return (
    <div
      className="absolute contents font-['DM_Sans:Medium',_sans-serif] font-medium leading-[0] left-[196px] text-left top-[516px]"
      data-name="Work Experience"
    >
      <div
        className="absolute left-[196px] text-[#707070] text-[9px] top-[535px] w-96"
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        <p className="block leading-[normal] mb-0">
          I was responsible for assisting in development and maintenance of
          Android applications, while learning and implementing best coding
          practices under the guidance of senior developers.
        </p>
        <p className="block leading-[normal] mb-0">&nbsp;</p>
        <ul className="css-ed5n1g list-disc">
          <li className="mb-0 ms-[13.5px]">
            <span className="leading-[normal]">
              I integrated various ui libraries and customised them as per the
              need to create beautiful charts and graphs.
            </span>
          </li>
          <li className="mb-0 ms-[13.5px]">
            <span className="leading-[normal]">
              Used Java and MVC as app architecture.
            </span>
          </li>
        </ul>
      </div>
      <div
        className="absolute left-[196px] text-[#040404] text-[11px] text-nowrap top-[516px] tracking-[-0.22px]"
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        <p className="adjustLetterSpacing block leading-[13px] whitespace-pre">
          Wealth App (Fin-tech)
        </p>
      </div>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div
      className="absolute contents left-[198px] top-[448px]"
      data-name="Mask group"
    >
      <div
        className="absolute bg-center bg-cover bg-no-repeat left-[195px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[3px] mask-size-[34px_34px] size-[39px] top-[445px]"
        data-name="download 1"
        style={{
          backgroundImage: `url('${imgDownload3}')`,
          maskImage: `url('${imgDownload4}')`,
        }}
      />
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute contents left-[196px] top-[447px]">
      <div className="absolute bg-[#ffffff] left-[196px] rounded size-[38px] top-[447px]" />
      <MaskGroup1 />
      <div
        className="absolute font-['DM_Sans:Medium',_sans-serif] font-medium leading-[0] left-[243px] text-[#040404] text-[13px] text-left text-nowrap top-[455px] tracking-[-0.26px]"
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        <p className="adjustLetterSpacing block leading-[13px] whitespace-pre">{`Cybrilla Technologies `}</p>
      </div>
      <div
        className="absolute font-['DM_Sans:Medium',_sans-serif] font-medium leading-[0] left-[243px] text-[#9d9d9d] text-[9px] text-left text-nowrap top-[470px] tracking-[-0.18px]"
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        <p className="adjustLetterSpacing block leading-[13px] whitespace-pre">
          Bangalore, India
        </p>
      </div>
    </div>
  );
}

function Frame42011() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0">
      <div
        className="font-['DM_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#040404] text-[11px] text-left text-nowrap tracking-[-0.22px]"
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        <p className="adjustLetterSpacing block leading-[13px] whitespace-pre">
          Easy Day (Online Grocery Delivery)
        </p>
      </div>
    </div>
  );
}

function Facebook() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1.5 h-[165px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Facebook"
    >
      <Frame42011 />
      <div
        className="font-['DM_Sans:Medium',_sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[#707070] text-[9px] text-left"
        style={{ fontVariationSettings: "'opsz' 14", width: "min-content" }}
      >
        <p className="block leading-[normal] mb-0">
          I was responsible for developing e-commerce app being part of a really
          competitive team of developers and making sure the features get
          delivered on time.
        </p>
        <p className="block leading-[normal] mb-0">&nbsp;</p>
        <ul className="css-ed5n1g list-disc mb-0">
          <li className="mb-0 ms-[13.5px]">
            <span className="leading-[normal]">
              Took initiative and migrated the whole app from Java to Kotlin.
            </span>
          </li>
          <li className="mb-0 ms-[13.5px]">
            <span className="leading-[normal]">
              Migrated from Sql to RoomDB.
            </span>
          </li>
          <li className="mb-0 ms-[13.5px]">
            <span className="leading-[normal]">
              Actively participated in Sprint planning and was responsible for
              delivering modules on time while reviewing peer’s code.
            </span>
          </li>
          <li className="mb-0 ms-[13.5px]">
            <span className="leading-[normal]">
              Updated modules from MVP To MVVM.
            </span>
          </li>
          <li className="mb-0 ms-[13.5px]">
            <span className="leading-[normal]">
              Changed whole app’s navigation system to then newly launched
              navigation component for dynamic links and in-app navigation.
            </span>
          </li>
          <li className="mb-0 ms-[13.5px]">
            <span className="leading-[normal]">{`Libraries Used : Dagger, Room, Retrofit, Moshi, Glide, Navigation Component, Firebase for Analytics, Crashlytics & Cloud Messaging, Google maps, Epoxy.`}</span>
          </li>
        </ul>
        <p className="block leading-[normal]">&nbsp;</p>
      </div>
    </div>
  );
}

function Frame42016() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-3.5 h-[165px] items-start justify-start ml-0 mt-0 p-0 relative w-96">
      <Facebook />
    </div>
  );
}

function WorkExperience1() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="Work Experience"
    >
      <Frame42016 />
    </div>
  );
}

function Google() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-1.5 h-[165px] items-start justify-start left-[196px] p-0 top-[50px] w-96"
      data-name="Google"
    >
      <WorkExperience1 />
    </div>
  );
}

export default function Component19() {
  return (
    <div className="bg-[#ffffff] relative size-full" data-name="19">
      <Education />
      <WorkExperience />
      <div
        className="absolute font-['DM_Sans:Medium',_sans-serif] font-medium leading-[0] left-[309.5px] text-[11px] text-[rgba(112,112,112,0.9)] text-left text-nowrap top-[498px] tracking-[-0.22px]"
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        <p className="adjustLetterSpacing block leading-[11px] whitespace-pre">
          Jul 2015 - Jun 2017
        </p>
      </div>
      <div className="absolute h-0 left-[298px] top-[503.5px] w-[5.5px]">
        <div className="absolute bottom-[-0.2px] left-0 right-0 top-[-0.2px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 6 2"
          >
            <path
              d="M0 1H5.5"
              id="Vector 814"
              stroke="var(--stroke-0, #707070)"
              strokeWidth="0.4"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute font-['DM_Sans:Bold',_sans-serif] font-bold leading-[0] left-[196px] text-[#030b1a] text-[11px] text-left text-nowrap top-[497px] tracking-[-0.22px]"
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        <p className="adjustLetterSpacing block leading-[13px] whitespace-pre">
          Android Developer
        </p>
      </div>
      <Group31 />
      <div
        className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal h-[75px] leading-[0] left-[196px] text-[#707070] text-[0px] text-left top-[352px] w-96"
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        <p
          className="block font-['DM_Sans:Medium',_sans-serif] font-medium leading-[normal] mb-0 text-[9px]"
          style={{ fontVariationSettings: "'opsz' 14" }}
        >
          I was responsible for the development of an e-commerce app within a
          challenging timeline, in a small team set-up to deliver a high-quality
          product efficiently and effectively.
        </p>
        <p className="block leading-[normal] mb-0 text-[9px]">&nbsp;</p>
        <ul className="css-ed5n1g list-disc">
          <li
            className="mb-0"
            style={{
              marginInlineStart:
                "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
            }}
          >
            <span
              className="font-['DM_Sans:Medium',_sans-serif] font-medium leading-[normal] text-[9px]"
              style={{ fontVariationSettings: "'opsz' 14" }}
            >
              Worked on Rich Media Notification, Kotlin, MVP architectural
              pattern, Rx, Retrofit.
            </span>
          </li>
          <li
            className="mb-0"
            style={{
              marginInlineStart:
                "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
            }}
          >
            <span
              className="font-['DM_Sans:Medium',_sans-serif] font-medium leading-[normal] text-[9px]"
              style={{ fontVariationSettings: "'opsz' 14" }}
            >
              Built the app in record time with the team size of 2 developers.
            </span>
          </li>
        </ul>
      </div>
      <div
        className="absolute font-['DM_Sans:Medium',_sans-serif] font-medium leading-[0] left-[196px] text-[#040404] text-[11px] text-left text-nowrap top-[333px] tracking-[-0.22px]"
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        <p className="adjustLetterSpacing block leading-[13px] whitespace-pre">
          aLL (plus size store)
        </p>
      </div>
      <div
        className="absolute font-['DM_Sans:Medium',_sans-serif] font-medium h-[59px] leading-[0] left-[196px] text-[#707070] text-[9px] text-left top-[254px] w-96"
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        <p className="block leading-[normal] mb-0">
          I was responsible for developing e-commerce app being part of a really
          competitive team of developers and making sure the features get
          delivered on time.
        </p>
        <p className="block leading-[normal] mb-0">&nbsp;</p>
        <ul className="css-ed5n1g list-disc mb-0">
          <li className="mb-0 ms-[13.5px]">
            <span className="leading-[normal]">
              Used MVP and Java to build the app architecture.
            </span>
          </li>
          <li className="mb-0 ms-[13.5px]">
            <span className="leading-[normal]">
              Built chatbot for predefined queries using Microsoft Bot SDK.
            </span>
          </li>
        </ul>
        <p className="block leading-[normal]">&nbsp;</p>
      </div>
      <div
        className="absolute font-['DM_Sans:Medium',_sans-serif] font-medium leading-[0] left-[196px] text-[#040404] text-[11px] text-left text-nowrap top-[235px] tracking-[-0.22px]"
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        <p className="adjustLetterSpacing block leading-[13px] whitespace-pre">
          Big Bazaar (Online Hyper Market Store)
        </p>
      </div>
      <div
        className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.52] left-[25px] text-[9px] text-[rgba(0,0,0,0.7)] text-left top-[76px] tracking-[0.09px] w-[130px]"
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        <p className="adjustLetterSpacing block mb-0.5">Jira</p>
        <p className="adjustLetterSpacing block mb-0.5">Kotlin</p>
        <p className="adjustLetterSpacing block mb-0.5">
          Java
          <br />
          MVVM
          <br />
          JetPack Libraries
          <br />
          Navigation Component
          <br />
          Hilt
          <br />
          AndroidX
        </p>
        <p className="adjustLetterSpacing block">
          Room
          <br />
          Coroutines
          <br />
          ML Kit
          <br />
          Material Design
          <br />
          Rx-Java
          <br />
          Ktor
          <br />
          Websocket
          <br />
          Firebase
          <br />
          Cloud Messaging
          <br />
          Realtime Database
          <br />
          Crashlytics
          <br />
          MVP
          <br />
          CI/CD : jenkins
          <br />
          Google Maps and Places Apis
          <br />
          Mixpanel
          <br />
          Git
          <br />
          {`Retrofit & Moshi`}
          <br />
          NFC
          <br />
          Restful Apis
        </p>
      </div>
      <div
        className="absolute capitalize font-['DM_Sans:Bold',_sans-serif] font-bold leading-[0] left-[25px] text-[#000000] text-[12px] text-left top-[50px] tracking-[0.24px] w-[84px]"
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        <p className="adjustLetterSpacing block leading-[normal]">{`Tools & Skills`}</p>
      </div>
      <Google />
      <div
        className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.52] left-[25px] text-[0px] text-[9px] text-[rgba(0,0,0,0.7)] text-left top-[506px] tracking-[0.09px] w-[130px]"
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        <p className="mb-0.5">
          <span
            className="font-['DM_Sans:Bold',_sans-serif] font-bold text-[rgba(0,0,0,0.7)]"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            Hindi
          </span>
          <span>
            <br />
          </span>
          <span
            className="adjustLetterSpacing font-['DM_Sans:Regular',_sans-serif] font-normal"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            Native or Bilingual Proficiency
          </span>
        </p>
        <p
          className="adjustLetterSpacing block font-['DM_Sans:Bold',_sans-serif] font-bold mb-0.5"
          style={{ fontVariationSettings: "'opsz' 14" }}
        >
          English
        </p>
        <p
          className="adjustLetterSpacing block"
          style={{ fontVariationSettings: "'opsz' 14" }}
        >
          Full Professional Proficiency
        </p>
      </div>
      <div
        className="absolute capitalize font-['DM_Sans:Bold',_sans-serif] font-bold leading-[0] left-[25px] text-[#000000] text-[12px] text-left top-[480px] tracking-[0.24px] w-[97px]"
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        <p className="adjustLetterSpacing block leading-[normal]">Languages</p>
      </div>
    </div>
  );
}