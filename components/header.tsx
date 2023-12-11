import barchartIcon from '@/assets/icons/bar-chart.svg'
import logo from '@/assets/icons/logo.svg'
import walletIcon from '@/assets/icons/wallet.svg'
import Image from 'next/image'

export default function MainHeader() {
  return (
    <nav className="main-header flex items-center justify-between">
      <div className="flex-1 text-subtitle-1">
        <button className="base-button flex items-center gap-2">
          <Image src={barchartIcon} alt="menu" />
          Menu
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center gap-3">
        <Image src={logo} alt="menu" />
        <div>
          <p className="text-primary text-center text-[24px]">MEMETAVERSE</p>
          <p className="text-primary text-center text-[10px]">AWAKEN CREATIVE GENIUSES</p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-end gap-4">
        <button className="base-button flex items-center gap-2 text-subtitle-1">
          <Image src={walletIcon} alt="menu" />
          Connect
        </button>
      </div>
    </nav>
  )
}