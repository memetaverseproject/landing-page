import Image from "next/image";
import calendarIcon from '@/assets/icons/calendar.svg'
import { format } from "date-fns";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export enum NewsCategory {
  ANNOUNCEMENT = "Announcement"
}

interface Props {
  thumbnail: string | StaticImport;
  title: string;
  date: Date;
  category: NewsCategory;
}

export function NewsCard({thumbnail, title, date, category}: Props) {
  return (
    <div className="relative flex flex-col w-[360px] h-[270px] justify-between p-[16px] mb-[42px]">
      <Image
        src={thumbnail}
        alt={title}
        fill
      />
      <span
        className="z-10 max-w-[124px] px-[14px] h-[28px] rounded-[30px] border-[1px] text-[12px] font-svn font-semibold leading-normal flex items-center justify-center text-[#00FF1A]"
        style={{
          border: '1px solid #00FF1A',
          background: 'rgba(0, 255, 26, 0.10)'
        }}
      >
        {category}
      </span>
      <div className="z-10">
        <span className="font-svn text-[18px] font-semibold text-[#FFF] leading-normal">
          {title}
        </span>
        <div className="flex items-center">
          <Image src={calendarIcon} alt="date" />
          <span className="ml-[4px] text-[#AEAEAE] text-[14px] font-svn font-semibold leading-normal">
            {format(date, "MMMM dd, yyyy")}
          </span>
        </div>
      </div>
    </div>
  )
}