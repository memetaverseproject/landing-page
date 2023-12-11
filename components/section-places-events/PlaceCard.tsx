import Image from "next/image";

export enum PlaceStatus {
  StatusLive = 'LIVE NOW',
  StatusOffline = 'OFFLINE'
}

interface Props {
  thumbnail: string;
  title: string;
  description: string;
  creator: string;
  memberCount: number;
  status: PlaceStatus;
}

export default function PlaceCard({title, thumbnail, description, creator, status}: Props) {
  return (
    <div className="p-[12px] h-[560px]">
      <Image
        src={thumbnail}
        alt={`Places ${title}`}
        width={488}
        height={319}
      />
      <div
        className="p-[24px]"
        style={{
          background: 'linear-gradient(148deg, rgba(255, 255, 255, 0.20) -0.14%, rgba(255, 255, 255, 0.04) 100.14%)'
        }}
      >
        <div className="flex justify-between items-center">
          <span className="flex-1 font-svn text-[20px] font-semibold leading-normal text-[#FFFFFF]">{title}</span>
          <span
            className="max-w-[94px] px-[14px] h-[28px] rounded-[30px] border-[1px] text-[12px] font-svn font-semibold leading-normal flex items-center justify-center text-[#00FF1A]"
            style={{
              border: '1px solid #00FF1A',
              background: 'rgba(0, 255, 26, 0.10)'
            }}
          >
            {status}
          </span>
        </div>
        <div className="font-svn text-[16px] font-normal leading-[22px] text-[#FFFFFF]/[.5] pt-[10px] pb-[24px]">
          {description}
        </div>
        <span className="font-svn text-[16px] font-normal leading-[22px]">
          By <span className="font-semibold leading-normal">{creator}</span>
        </span>
      </div>
    </div>
  )
}