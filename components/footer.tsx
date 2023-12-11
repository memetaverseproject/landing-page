import Image from 'next/image'
import logo from '@/assets/icons/logo.svg'

export default function MainFooter() {
  return (
    <footer className="main-footer">
      <div className="w-full flex items-center gap-10">
        <svg
          className="flex-1"
          width="743"
          height="221"
          viewBox="0 0 743 221"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M40 150V150.5H39.7929L39.6464 150.354L40 150ZM672 150V149.5H672.207L672.354 149.646L672 150ZM742.041 220.041H737.959V215.959H742.041V220.041ZM39.6464 150.354L-109.354 1.35355L-108.646 0.646447L40.3536 149.646L39.6464 150.354ZM40 149.5H672V150.5H40V149.5ZM672.354 149.646L740.354 217.646L739.646 218.354L671.646 150.354L672.354 149.646Z"
            fill="url(#paint0_linear_332_1734)"
            fillOpacity="0.85" />
          <defs>
            <linearGradient
              id="paint0_linear_332_1734"
              x1="740"
              y1="218"
              x2="6.7724e-05"
              y2="1.00001"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <div className="self-end flex items-center justify-center gap-3">
          <Image src={logo} alt="menu" />
          <div>
            <p className="text-primary text-center text-[26px] font-atmospheric">MEMETAVERSE</p>
            <p className="text-primary text-center text-[11px] tracking-[4.8px]">AWAKEN CREATIVE GENIUSES</p>
          </div>
        </div>

        <svg
          className="flex-1"
          width="743"
          height="221"
          viewBox="0 0 743 221"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M703 150V150.5H703.207L703.354 150.354L703 150ZM71 150V149.5H70.7929L70.6464 149.646L71 150ZM0.958759 220.041H5.04124V215.959H0.958759V220.041ZM703.354 150.354L852.354 1.35355L851.646 0.646447L702.646 149.646L703.354 150.354ZM703 149.5H71V150.5H703V149.5ZM70.6464 149.646L2.64645 217.646L3.35355 218.354L71.3536 150.354L70.6464 149.646Z"
            fill="url(#paint0_linear_332_1733)"
            fillOpacity="0.85" />
          <defs>
            <linearGradient
              id="paint0_linear_332_1733"
              x1="2.99999"
              y1="218"
              x2="743"
              y2="1.00001"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </footer>
  )
}