import { useState } from "react";
import SectionHeader from "../common/SectionHeader";
import Carousel from "../common/Carousel";
import PlaceCard, { PlaceStatus } from "./PlaceCard";
import Button from "../common/Button";
import slide1 from '@/assets/place-events/slide-1.png'
import slide2 from '@/assets/place-events/slide-2.png'
import slide3 from '@/assets/place-events/slide-3.png'

const PlacesMock = [
  {
    thumbnail: slide1,
    title: 'Pink Flamingo - The Stronghold',
    description: 'Lorem ipsum dolor sit amet consectetur. Tristique pulvinar leo quis sed massa integer et ipsum dolor sit ornare et.',
    creator: 'MEMETAGAMES',
    memberCount: 23,
    status: PlaceStatus.StatusLive
  },
  {
    thumbnail: slide2,
    title: 'Pink Flamingo - The Stronghold',
    description: 'Lorem ipsum dolor sit amet consectetur. Tristique pulvinar leo quis sed massa integer et ipsum dolor sit ornare et.',
    creator: 'MEMETAGAMES',
    memberCount: 23,
    status: PlaceStatus.StatusOffline
  },
  {
    thumbnail: slide3,
    title: 'Pink Flamingo - The Stronghold',
    description: 'Lorem ipsum dolor sit amet consectetur. Tristique pulvinar leo quis sed massa integer et ipsum dolor sit ornare et.',
    creator: 'MEMETAGAMES',
    memberCount: 23,
    status: PlaceStatus.StatusLive
  },
  {
    thumbnail: slide1,
    title: 'Pink Flamingo - The Stronghold',
    description: 'Lorem ipsum dolor sit amet consectetur. Tristique pulvinar leo quis sed massa integer et ipsum dolor sit ornare et.',
    creator: 'MEMETAGAMES',
    memberCount: 23,
    status: PlaceStatus.StatusLive
  },
  {
    thumbnail: slide2,
    title: 'Pink Flamingo - The Stronghold',
    description: 'Lorem ipsum dolor sit amet consectetur. Tristique pulvinar leo quis sed massa integer et ipsum dolor sit ornare et.',
    creator: 'MEMETAGAMES',
    memberCount: 23,
    status: PlaceStatus.StatusLive
  },
  {
    thumbnail: slide3,
    title: 'Pink Flamingo - The Stronghold',
    description: 'Lorem ipsum dolor sit amet consectetur. Tristique pulvinar leo quis sed massa integer et ipsum dolor sit ornare et.',
    creator: 'MEMETAGAMES',
    memberCount: 23,
    status: PlaceStatus.StatusOffline
  },
  {
    thumbnail: slide1,
    title: 'Pink Flamingo - The Stronghold',
    description: 'Lorem ipsum dolor sit amet consectetur. Tristique pulvinar leo quis sed massa integer et ipsum dolor sit ornare et.',
    creator: 'MEMETAGAMES',
    memberCount: 23,
    status: PlaceStatus.StatusOffline
  },
  {
    thumbnail: slide2,
    title: 'Pink Flamingo - The Stronghold',
    description: 'Lorem ipsum dolor sit amet consectetur. Tristique pulvinar leo quis sed massa integer et ipsum dolor sit ornare et.',
    creator: 'MEMETAGAMES',
    memberCount: 23,
    status: PlaceStatus.StatusOffline
  },
  {
    thumbnail: slide3,
    title: 'Pink Flamingo - The Stronghold',
    description: 'Lorem ipsum dolor sit amet consectetur. Tristique pulvinar leo quis sed massa integer et ipsum dolor sit ornare et.',
    creator: 'MEMETAGAMES',
    memberCount: 23,
    status: PlaceStatus.StatusOffline
  }
]

export default function SectionPlacesEvents() {
  const [tab, setTab] = useState("places")
  return (
    <div className="flex flex-col items-start py-[64px] laptop:pt-[112px] laptop:pb-[137px]">
      <div className="px-[6%]">
        <SectionHeader title="Places & Events" />
      </div>
      <div className="flex flex-1 flex-col gap-y-3 laptop:flex-row justify-between laptop:items-center w-full px-[6%]">
        <div className="flex gap-[40px]">
          <span
            onClick={() => setTab('places')}
            className="font-chakra text-[32px] laptop:text-[56px] font-bold leading-normal cursor-pointer border-b-[2px]"
            style={{
              textShadow: tab === 'places' ? '3px 3px 0px #5A01FF' : '',
              color: tab === 'places' ? '#FFFFFF' : 'rgba(255, 255, 255, 0.30)',
              borderBottomColor: tab === 'places' ? '#FFFFFF' : 'transparent'
            }}
          >
            PLACES
          </span>
          <span
            onClick={() => setTab('events')}
            className="font-chakra text-[32px] laptop:text-[56px] font-bold leading-normal cursor-pointer border-b-[2px]"
            style={{
              textShadow: tab === 'events' ? '3px 3px 0px #5A01FF' : '',
              color: tab === 'events' ? '#FFFFFF' : 'rgba(255, 255, 255, 0.30)',
              borderBottomColor: tab === 'events' ? '#FFFFFF' : 'transparent'
            }}
          >
            EVENTS
          </span>
        </div>
        <div className="hidden laptop:block">
          <Button onClick={() => alert("Hold tight! Something epic is brewing...")}>
            See All Places!
          </Button>
        </div>
      </div>
      <div className="w-full pt-[24px] laptop:pt-[50px] px-[40px] laptop:px-[6%] relative">
        <Carousel additionalTransfrom={-12}>
          {PlacesMock.map((i, index) =>
            (<PlaceCard key={`places-${index}`} {...i} />)
          )}
        </Carousel>
      </div>
      <div className="laptop:hidden w-full mt-7 flex justify-center">
        <Button onClick={() => alert("Hold tight! Something epic is brewing...")}>
          See All Places!
        </Button>
      </div>
    </div>
  )
}