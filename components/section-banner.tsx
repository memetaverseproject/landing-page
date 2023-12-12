import MemetaverseLogo from '../assets/logo/memetaverse.png'
import U2ULogo from '../assets/logo/ultra_unicorn.png'
import BannerBG from '../assets/banner_bg.png'
import Image from 'next/image'
import Button from './common/Button'

export default function SectionBanner() {
  return (
    <div className="w-full h-screen laptop:h-[980px] flex flex-col items-center justify-center bg-red relative">
      <Image
        className='absolute'
        alt="banner"
        src={BannerBG}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
        }}
      />
      <div className='flex flex-col laptop:flex-row items-center justify-center z-10'>
        <Image
          className="w-[300px] laptop:w-[403px] laptop:h-[92px]"
          src={MemetaverseLogo}
          width={403}
          height={92}
          alt="Memetaverse"
        />
        <span className='mx-[58px] text-[43.2px] text-[#FFFFFF]'>
          X
        </span>
        <Image
          className="w-[300px] laptop:w-[403px] laptop:h-[92px]"
          src={U2ULogo}
          width={403}
          height={92}
          alt="Ultra Unicorn"
        />
      </div>
      <div className='z-10 pt-[64px]'>
        <Button onClick={() => alert("Hold tight! Something epic is brewing...")}>
          OPEN THE WORLD!
        </Button>
      </div>
    </div>
  )
}