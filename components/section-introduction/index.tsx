import Button from "../common/button";
import SectionHeader from "../common/SectionHeader";
import Character from '../../assets/intro-section/character.png'
import BlurBG from '../../assets/intro-section/blur_bg.png'
import IconLeft from '../../assets/intro-section/icon_left.png'
import IconRight from '../../assets/intro-section/icon_right.png'
import Watermark from '../../assets/intro-section/watermark.png'
import Image from "next/image";

export default function SectionIntroduction() {
  return (
    <>
      <div className="w-full flex flex-col laptop:flex-row items-center justify-center pt-[64px] laptop:pt-[128px] relative overflow-hidden">
        <Image
          src={BlurBG}
          alt="Introduction background"
          className="hidden laptop:block absolute bottom-0"
        />
        <Image
          src={IconLeft}
          alt="Introduction left"
          className="hidden laptop:block absolute left-0 top-[48px]"
        />
        <Image
          src={IconRight}
          alt="Introduction right"
          className="hidden laptop:block absolute right-0 bottom-0"
        />
        <div className="flex flex-col items-center laptop:items-start z-10">
          <SectionHeader title="INTRODUCTION" />
          <span className="font-chakra text-[32px] laptop:text-[56px] font-bold leading-normal" style={{textShadow: '3px 3px 0px #5A01FF'}}>
            AWAKEN
          </span>
          <span className="font-chakra text-[32px] laptop:text-[56px] font-bold leading-normal" style={{textShadow: '3px 3px 0px #5A01FF'}}>
            CREATIVE
          </span>
          <span className="font-chakra text-[32px] laptop:text-[56px] font-bold leading-normal" style={{textShadow: '3px 3px 0px #5A01FF'}}>
            GENIUSES
          </span>
          <div className="w-full text-center laptop:text-left laptop:w-[464px] font-svn text-[16px] font-normal leading-[22px] text-[#FFFFFF]/[.8] mt-[24px] mb-[48px]">
            Step into the MEMETAVERSE, a dynamic open-world platform that unites numerous Web3 projects and a thriving community, offering users an array of immersive experiences within this expansive digital realm.
          </div>
          <Button>
            JOIN US BUILD THE WORLD
          </Button>
        </div>
        <div className="z-10">
          <Image
            src={Character}
            width={558}
            height={718}
            alt="Introduction"
          />
        </div>
        <div className="flex flex-col z-10">
          <span className="font-chakra italic underline text-[24px] laptop:text-[48px] font-bold text-[#FFFFFF] leading-normal">
            DYNAMIC
          </span>
          <span className="font-chakra italic underline text-[24px] laptop:text-[48px] font-bold text-[#FFFFFF] leading-normal">
            OPEN
          </span>
          <span className="font-chakra italic underline text-[24px] laptop:text-[48px] font-bold text-[#FFFFFF] leading-normal">
            IMMERSIVE
          </span>
        </div>
      </div>
      <Image
        src={Watermark}
        alt="Memetaverse introduction"
        className="laptop:mt-[96px]"
      />
    </>
  )
}