import Image from 'next/image'
import logo from '@/assets/icons/logo.svg'
import ecosystemIcon from '@/assets/icons/ecosystem.svg'
import documentsIcon from '@/assets/icons/documents.svg'
import teamIcon from '@/assets/icons/team.svg'
import blogIcon from '@/assets/icons/blog.svg'
import contactUsIcon from '@/assets/icons/contact-us.svg'
import HighlightCardBg from '@/public/img/sidebar/card-bg.png'
import Link from 'next/link'

export default function SidebarMenu({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const navs = [
    { label: 'MEMETAVERSE', icon: logo, href: '#' },
    { label: 'ECOSYSTEM', icon: ecosystemIcon, href: '#' },
    { label: 'Documents', icon: documentsIcon, href: '#' },
    { label: 'Team', icon: teamIcon, href: '#' },
    { label: 'Blog', icon: blogIcon, href: '#' },
    { label: 'Contact us', icon: contactUsIcon, href: '#' }
  ]

  return (
    <>
      <div className="sidebar-overlay" onClick={onClose} />
      <div className={`sidebar-content transition-all py-10 relative ${isOpen ? 'open' : ''}`}>
        <button className="base-button clip-right absolute right-[-72px]" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <ul className="px-10">
          {
            navs.map(nav => (
              <li className="flex items-start gap-4 cursor-pointer" key={nav.label}>
                <Image className="w-[30px]" src={nav.icon} alt="" />
                <Link href={nav.href} className="">
                  <p className="text-heading-3 font-svn uppercase tracking-none mb-6">
                    {nav.label}
                  </p>
                  <div style={{
                    marginBottom: 24,
                    width: '100%',
                    height: 1,
                    background: 'linear-gradient(90deg, rgba(235, 235, 235, 0.10) 0%, rgba(235, 235, 235, 0.02) 100%)'
                  }} />
                </Link>
              </li>
            ))
          }
        </ul>

        <div className="w-full relative">
          <Image className="w-full" width={356} src={HighlightCardBg} alt="" />
          <div className="w-[308px] absolute bottom-[64px] left-[64px]">
            <p className="text-display-2 font-chakra uppercase">Big Gift Daily</p>
            <div className="bg-white h-[2px] w-10 mb-6" />
            <p className="text-heading-3 font-svn capitalizemb-3">
              Pink Flamingo - The Stronghold
            </p>
            <p className="text-body-4 font-svn text-[rgba(255, 255, 255, 0.65)] mb-5">
              Lorem ipsum dolor sit amet consectetur. Tristique pulvinar leo quis sed massa integer et ipsum dolor
              sit...
            </p>

            <div className="flex items-center gap-3">
              <p className="text-subtitle-1 font-svn">Let’s go</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 17L19 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 7L19 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}