import SectionHeader from "../common/SectionHeader";
import AceCards from '../../assets/casino-section/ace-cards.png'
import BlurBG from '../../assets/casino-section/blur_bg.png'
import Image from "next/image";
import Button from "../common/Button";

export default function SectionCasino() {
  return (
    <div className="w-full flex flex-col items-center relative">
      <SectionHeader title="CASINO" bothSide />
      <h1
        className="text-[#FFFFFF] font-chakra text-[32px] laptop:text-[56px] font-bold leading-normal z-10"
        style={{
          textShadow: '3px 3px 0px #5A01FF'
        }}
      >
        SHUFFLE, BET, WIN
      </h1>
      <h1
        className="text-[#FFFFFF] font-chakra text-center laptop:text-left text-[32px] laptop:text-[56px] font-bold leading-normal z-10"
        style={{
          textShadow: '3px 3px 0px #5A01FF'
        }}
      >
        THE ULTIMATE CASINO EXPERIENCE!
      </h1>
      <div className="w-full flex gap-7 flex-col laptop:flex-row items-center justify-center pt-[40px] pb-[64px] laptop:pb-[181px] px-[6%] z-10">
        <div className="flex flex-col items-center laptop:items-stretch laptop:mr-[80px] xxl:mr-[139px] laptop:max-w-[335px]">
          <h3 className="text-[#FFFFFF] text-center laptop:text-left font-chakra text-[32px] laptop:text-[36px] font-bold leading-normal">
            PLAY IN THE 3D METAVERSE
          </h3>
          <span
            className="pt-[16px] pb-[48px] font-svn text-[18px] text-[#FFFFFF]/[.8] font-normal leading-[24px]  text-center laptop:text-left"
          >
            Immerse yourself into the virtual world of MEMETAVERSE for a fun and unique poker experience.
          </span>
          <Button onClick={() => alert("Hold tight! Something epic is brewing...")}>
            EXPLORE NOW
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
            className="text-[#FFFFFF] text-center laptop:text-right font-chakra italic leading-normal font-bold text-[32px] laptop:text-[36px] underline cursor-pointer"
          >
            STACKING CHIPS
          </span>
          <span
            className="text-[#FFFFFF] text-center laptop:text-right font-chakra italic leading-normal font-bold text-[32px] laptop:text-[36px] underline cursor-pointer"
          >
            ROLLING DICE
          </span>
          <span
            className="text-[#FFFFFF] text-center laptop:text-right font-chakra italic leading-normal font-bold text-[32px] laptop:text-[36px] underline cursor-pointer"
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