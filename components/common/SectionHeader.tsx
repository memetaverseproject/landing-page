export default function SectionHeader({title}: {
  title: string;
}) {
  return (
    <div className="flex items-end">
      <div className="w-[24px] h-[2px] bg-[#FFFFFF] mr-[12px] mb-[6px]" />
      <span className="italic text-[14px] font-semibold leading-normal font-svn">
        {title}
      </span>
    </div>
  )
}