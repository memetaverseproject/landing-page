import SectionHeader from "../common/SectionHeader";
import AceCards from '../../assets/casino-section/ace-cards.png'
import BlurBG from '../../assets/casino-section/blur_bg.png'
import Image from "next/image";
import Button from "../common/button";

export default function SectionCasino() {
  return (
    <div className="flex flex-col items-center relative">
      <SectionHeader title="CASINO" bothSide />
      <h1
        className="text-[#FFFFFF] font-chakra text-[56px] font-bold leading-normal z-10"
        style={{
          textShadow: '3px 3px 0px #5A01FF'
        }}
      >
        SHUFFLE, BET, WIN
      </h1>
      <h1
        className="text-[#FFFFFF] font-chakra text-[56px] font-bold leading-normal z-10"
        style={{
          textShadow: '3px 3px 0px #5A01FF'
        }}
      >
        THE ULTIMATE CASINO EXPERIENCE!
      </h1>
      <div className="flex items-center justify-center pt-[40px] pb-[181px] px-[6%] z-10">
        <div className="flex flex-col mr-[80px] xxl:mr-[139px] max-w-[335px]">
          <h3 className="text-[#FFFFFF] font-chakra text-[36px] font-bold leading-normal">
            PLAY IN THE 3D METAVERSE
          </h3>
          <span
            className="pt-[16px] pb-[48px] font-svn text-[18px] text-[#FFFFFF]/[.8] font-normal leading-[24px]"
          >
            Immerse yourself into the virtual world of MEMETAVERSE for a fun and unique poker experience.
          </span>
          <Button>
            EXPLORER NOW
          </Button>
        </div>
        <Image
          src={AceCards}
          alt="Memetaverse casino"
          width={564}
          height={659}
        />
        <div className="flex flex-col">
          <span
            className="text-[#FFFFFF] text-right font-chakra italic leading-normal font-bold text-[36px] underline cursor-pointer"
          >
            STACKING CHIPS
          </span>
          <span
            className="text-[#FFFFFF] text-right font-chakra italic leading-normal font-bold text-[36px] underline cursor-pointer"
          >
            ROLLING DICE
          </span>
          <span
            className="text-[#FFFFFF] text-right font-chakra italic leading-normal font-bold text-[36px] underline cursor-pointer"
          >
            WINNING THRICE
          </span>
        </div>
      </div>
      <Image
        src={BlurBG}
        alt="Memetaverse casino"
        className="absolute -top-[180px]"
      />
    </div>
  )
}