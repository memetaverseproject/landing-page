'use client'

import barchartIcon from '@/assets/icons/bar-chart.svg'
import logo from '@/assets/icons/logo.svg'
import joinNowIcon from '@/assets/icons/join-now.svg'
import discordIcon from '@/assets/icons/discord.svg'
import twitterIcon from '@/assets/icons/twitter.svg'
import messengerIcon from '@/assets/icons/messenger.svg'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import SidebarMenu from '@/components/sidebar-menu'

export default function MainHeader() {
  const [openMenu, setOpenMenu] = useState(false)
  const handleScroll = () => {
    const header = document.getElementById("main-header");
    if (!header) return
    const sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);

  return (
    <>
      <SidebarMenu isOpen={openMenu} onClose={() => setOpenMenu(false)} />

      <nav className="main-header flex items-center justify-between" id="main-header">
        <div className="flex-1 text-subtitle-1">
          <button className="base-button clip-right flex items-center gap-2 z-[997]" onClick={() => setOpenMenu(true)}>
            <Image className="w-7 h-7" src={barchartIcon} width={28} height={28} alt="menu" />
            Menu
          </button>
        </div>

        <div className="flex-1 flex items-center justify-center gap-3">
          <Image src={logo} alt="menu" />
          <div>
            <p className="text-primary text-center text-[24px] font-atmospheric">MEMETAVERSE</p>
            <p className="text-primary text-center text-[10px] font-svn tracking-[4.4px]">AWAKEN CREATIVE GENIUSES</p>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-end gap-4">
          <div className="icon-wrapper">
            <Image className="w-7 h-7" width={28} height={28} src={discordIcon} alt="discord" />
          </div>
          <div className="icon-wrapper">
            <Image className="w-7 h-7" width={28} height={28} src={twitterIcon} alt="twitter" />
          </div>
          <div className="icon-wrapper">
            <Image className="w-7 h-7" width={28} height={28} src={messengerIcon} alt="facebook" />
          </div>

          <button className="base-button clip-left flex items-center gap-2 text-subtitle-1">
            <Image className="w-7 h-7" width={28} height={28} src={joinNowIcon} alt="menu" />
            Join now
          </button>
        </div>
      </nav>

    </>
  )
}