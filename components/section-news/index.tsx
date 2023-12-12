import Carousel from '../common/Carousel'
import SectionHeader from '../common/SectionHeader'
import Button from '../common/button'
import { NewsCard, NewsCategory } from './NewsCard'
import NewsBG from '@/assets/news-section/news-bg.png'

const NewsMock = [
  {
    thumbnail: NewsBG,
    title: 'What can you do in the Metaverse: Find your place in MEMETAVERSE',
    date: new Date(),
    category: NewsCategory.ANNOUNCEMENT
  },
  {
    thumbnail: NewsBG,
    title: 'What can you do in the Metaverse: Find your place in MEMETAVERSE',
    date: new Date(),
    category: NewsCategory.ANNOUNCEMENT
  },
  {
    thumbnail: NewsBG,
    title: 'What can you do in the Metaverse: Find your place in MEMETAVERSE',
    date: new Date(),
    category: NewsCategory.ANNOUNCEMENT
  },
  {
    thumbnail: NewsBG,
    title: 'What can you do in the Metaverse: Find your place in MEMETAVERSE',
    date: new Date(),
    category: NewsCategory.ANNOUNCEMENT
  },
  {
    thumbnail: NewsBG,
    title: 'What can you do in the Metaverse: Find your place in MEMETAVERSE',
    date: new Date(),
    category: NewsCategory.ANNOUNCEMENT
  },
  {
    thumbnail: NewsBG,
    title: 'What can you do in the Metaverse: Find your place in MEMETAVERSE',
    date: new Date(),
    category: NewsCategory.ANNOUNCEMENT
  },
  {
    thumbnail: NewsBG,
    title: 'What can you do in the Metaverse: Find your place in MEMETAVERSE',
    date: new Date(),
    category: NewsCategory.ANNOUNCEMENT
  }
]

export default function SectionNews() {
  return (
    <div className="flex flex-col items-start pt-[112px] pb-[137px]">
      <div className="px-[6%]">
        <SectionHeader title="NEWS & UPDATES" />
      </div>
      <div className="flex flex-1 flex-row justify-between items-center w-full px-[6%]">
        <span
          className="font-chakra text-[32px] laptop:text-[56px] text-[#FFFFFF] font-bold leading-normal cursor-pointer"
          style={{
            textShadow: '3px 3px 0px #5A01FF'
          }}
        >
          WHAT’S NEW?
        </span>
        <div className="hidden laptop:block">
          <Button onClick={() => alert("Hold tight! Something epic is brewing...")}>
            See All Posts!
          </Button>
        </div>
      </div>
      <div className="w-full pt-[50px] px-[6%] relative">
        <Carousel additionalTransfrom={-12}>
          {NewsMock.map((i, index) => <NewsCard key={`news-${index}`} {...i} />)}
        </Carousel>
      </div>
      <div className="laptop:hidden w-full mt-7 flex justify-center">
        <Button onClick={() => alert("Hold tight! Something epic is brewing...")}>
          See All Posts!
        </Button>
      </div>
    </div>
  )
}