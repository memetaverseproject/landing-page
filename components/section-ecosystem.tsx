import cardImage from '@/assets/ecosystem-section/card-image.png'
import socialHubImage from '@/assets/ecosystem-section/social-hub.png'
import communityImage from '@/assets/ecosystem-section/community.png'
import gamifyImage from '@/assets/ecosystem-section/gamify.png'
import centralCityImage from '@/assets/ecosystem-section/central-city.png'
import realLifeImage from '@/assets/ecosystem-section/real-life.png'
import Image from 'next/image'

export default function SectionEcosystem() {
  const features = [
    { image: socialHubImage, title: 'Social hub', description: 'More than just chitchat' },
    { image: communityImage, title: 'Community', description: 'The ultimate convergence of meme enthusiasts' },
    { image: gamifyImage, title: 'Gamify', description: 'Your Fun, Our Innovation!' },
    { image: centralCityImage, title: 'Central city', description: 'The Prime Hub for the unite projects' },
    { image: realLifeImage, title: 'in real life', description: 'Lorem ipsum dolor sit amet consectetur' }
  ]

  return (
    <div className="w-full mb-[64px] laptop:mb-32">
      <div className="w-full flex flex-col items-center">
        <div className="flex items-end gap-3 mb-4">
          <div className="bg-white w-6 h-0.5" />
          <p className="font-svn italic font-semibold tracking-[4.2px] uppercase leading-none">
            Ecosystem
          </p>
          <div className="bg-white w-6 h-0.5" />
        </div>

        <p className="text-white text-[32px] text-center laptop:text-[56px] font-bold uppercase font-chakra mb-7 laptop:mb-12"
           style={{ textShadow: '3px 3px 0px #5A01FF' }}>
          our ecosystem is incredibly diverse
        </p>

        <div className="w-full px-[12px] laptop:px-0 overflow-x-auto">
          <div className="w-fit laptop:w-full flex gap-4 justify-center items-center mx-auto">
            {
              features.map((item, index) => (
                <div
                  key={index}
                  className={`relative w-[194px] h-[277px] laptop:w-[290px] laptop:h-[415px] flex items-end p-6 ${index % 2 === 0 ? 'laptop:mt-24' : 'laptop:mb-24'}`}
                  style={{ backgroundImage: `url(${cardImage.src})` }}>
                  <svg
                    className="absolute w-[89px] h-[21px] laptop:w-[134px] laptop:h-[32px] left-[-10.5px] top-[16px]"
                    width="134"
                    height="32"
                    viewBox="0 0 134 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0H134L117 16L134 32H0V0Z" fill="url(#paint0_linear_283_1084)" />
                    <path
                      d="M20.9038 20.156C19.6438 20.156 18.5878 19.736 17.7598 18.908C16.9318 18.068 16.5118 17.036 16.5118 15.8C16.5118 14.564 16.9318 13.532 17.7598 12.704C18.5878 11.864 19.6438 11.444 20.9038 11.444C22.4278 11.444 23.7958 12.212 24.5158 13.448L23.3158 14.144C22.8718 13.316 21.9598 12.788 20.9038 12.788C20.0038 12.788 19.2838 13.076 18.7198 13.64C18.1678 14.204 17.8918 14.924 17.8918 15.8C17.8918 16.676 18.1678 17.396 18.7198 17.96C19.2838 18.524 20.0038 18.812 20.9038 18.812C21.9598 18.812 22.8838 18.284 23.3158 17.456L24.5158 18.14C24.1678 18.752 23.6638 19.244 23.0158 19.616C22.3798 19.976 21.6718 20.156 20.9038 20.156ZM32.7409 18.896C31.9009 19.736 30.8689 20.156 29.6569 20.156C28.4449 20.156 27.4129 19.736 26.5609 18.896C25.7209 18.044 25.3009 17.012 25.3009 15.8C25.3009 14.588 25.7209 13.556 26.5609 12.716C27.4129 11.864 28.4449 11.444 29.6569 11.444C30.8689 11.444 31.9009 11.864 32.7409 12.716C33.5929 13.556 34.0129 14.588 34.0129 15.8C34.0129 17.012 33.5929 18.044 32.7409 18.896ZM27.5329 17.96C28.1089 18.524 28.8169 18.812 29.6569 18.812C30.4969 18.812 31.2049 18.524 31.7689 17.96C32.3449 17.384 32.6329 16.664 32.6329 15.8C32.6329 14.936 32.3449 14.216 31.7689 13.652C31.2049 13.076 30.4969 12.788 29.6569 12.788C28.8169 12.788 28.1089 13.076 27.5329 13.652C26.9689 14.216 26.6809 14.936 26.6809 15.8C26.6809 16.664 26.9689 17.384 27.5329 17.96ZM41.8356 11.6H43.3116V20H41.9316V14.012L39.3756 18.236H39.2076L36.6516 14V20H35.2716V11.6H36.7596L39.2916 15.8L41.8356 11.6ZM44.9865 20V11.6H46.3665V20H44.9865ZM53.0851 17.3V11.6H54.4651V20H53.3851L49.4251 14.3V20H48.0451V11.6H49.1251L53.0851 17.3ZM60.1147 15.656H64.3147V16.232C64.3147 17.384 63.9307 18.332 63.1747 19.064C62.4187 19.796 61.4227 20.156 60.1987 20.156C58.9027 20.156 57.8347 19.736 56.9827 18.896C56.1427 18.056 55.7227 17.024 55.7227 15.8C55.7227 14.588 56.1427 13.556 56.9827 12.716C57.8347 11.864 58.8787 11.444 60.1267 11.444C61.6987 11.444 63.0667 12.224 63.7867 13.436L62.5987 14.12C62.1547 13.316 61.2187 12.788 60.1267 12.788C59.2507 12.788 58.5187 13.076 57.9547 13.652C57.3907 14.228 57.1027 14.948 57.1027 15.812C57.1027 16.676 57.3907 17.396 57.9547 17.96C58.5307 18.524 59.2867 18.812 60.2107 18.812C61.6987 18.812 62.6707 18.056 62.9227 16.892H60.1147V15.656ZM71.3723 20.156C69.7523 20.156 68.5763 19.376 68.1323 18.092L69.3203 17.396C69.6563 18.344 70.3523 18.812 71.4083 18.812C72.4523 18.812 72.9683 18.368 72.9683 17.708C72.9683 17.36 72.8243 17.108 72.5483 16.928C72.2723 16.748 71.7683 16.544 71.0603 16.328C70.2563 16.088 69.8603 15.932 69.2963 15.56C68.7563 15.176 68.4803 14.624 68.4803 13.868C68.4803 13.124 68.7443 12.536 69.2723 12.104C69.8003 11.66 70.4363 11.444 71.1803 11.444C72.5243 11.444 73.5683 12.14 74.1083 13.292L72.9443 13.964C72.5963 13.184 72.0083 12.788 71.1803 12.788C70.3763 12.788 69.8603 13.196 69.8603 13.832C69.8603 14.456 70.2683 14.744 71.5523 15.14C71.8763 15.248 72.1043 15.32 72.2483 15.38C72.4043 15.428 72.6083 15.512 72.8723 15.62C73.1483 15.728 73.3523 15.848 73.4843 15.956C73.9283 16.304 74.4083 16.88 74.3483 17.684C74.3483 18.44 74.0723 19.052 73.5203 19.496C72.9803 19.94 72.2603 20.156 71.3723 20.156ZM82.569 18.896C81.729 19.736 80.697 20.156 79.485 20.156C78.273 20.156 77.241 19.736 76.389 18.896C75.549 18.044 75.129 17.012 75.129 15.8C75.129 14.588 75.549 13.556 76.389 12.716C77.241 11.864 78.273 11.444 79.485 11.444C80.697 11.444 81.729 11.864 82.569 12.716C83.421 13.556 83.841 14.588 83.841 15.8C83.841 17.012 83.421 18.044 82.569 18.896ZM77.361 17.96C77.937 18.524 78.645 18.812 79.485 18.812C80.325 18.812 81.033 18.524 81.597 17.96C82.173 17.384 82.461 16.664 82.461 15.8C82.461 14.936 82.173 14.216 81.597 13.652C81.033 13.076 80.325 12.788 79.485 12.788C78.645 12.788 77.937 13.076 77.361 13.652C76.797 14.216 76.509 14.936 76.509 15.8C76.509 16.664 76.797 17.384 77.361 17.96ZM92.1198 18.896C91.2798 19.736 90.2478 20.156 89.0358 20.156C87.8238 20.156 86.7918 19.736 85.9398 18.896C85.0998 18.044 84.6798 17.012 84.6798 15.8C84.6798 14.588 85.0998 13.556 85.9398 12.716C86.7918 11.864 87.8238 11.444 89.0358 11.444C90.2478 11.444 91.2798 11.864 92.1198 12.716C92.9718 13.556 93.3918 14.588 93.3918 15.8C93.3918 17.012 92.9718 18.044 92.1198 18.896ZM86.9118 17.96C87.4878 18.524 88.1958 18.812 89.0358 18.812C89.8758 18.812 90.5838 18.524 91.1478 17.96C91.7238 17.384 92.0118 16.664 92.0118 15.8C92.0118 14.936 91.7238 14.216 91.1478 13.652C90.5838 13.076 89.8758 12.788 89.0358 12.788C88.1958 12.788 87.4878 13.076 86.9118 13.652C86.3478 14.216 86.0598 14.936 86.0598 15.8C86.0598 16.664 86.3478 17.384 86.9118 17.96ZM99.6905 17.3V11.6H101.071V20H99.9905L96.0305 14.3V20H94.6505V11.6H95.7305L99.6905 17.3Z"
                      fill="white" />
                    <defs>
                      <linearGradient
                        id="paint0_linear_283_1084"
                        x1="0"
                        y1="0"
                        x2="134"
                        y2="32"
                        gradientUnits="userSpaceOnUse">
                        <stop stopColor="#B401FF" />
                        <stop offset="1" stopColor="#5A01FF" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <Image
                    className="absolute w-[76px] h-[76px] left-[50px] top-[62px] laptop:left-[80px] laptop:top-[94px] laptop:w-[114px] laptop:h-[114px]"
                    width={114}
                    height={114}
                    src={item.image}
                    alt="" />
                  <div>
                    <p className="text-display-2-mobile laptop:text-display-2 uppercase font-chakra text-white">
                      {item.title}
                    </p>
                    <p className="text-body-4 laptop:text-body-1 font-svn">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      <svg className="w-full mt-[-20px] mx-auto"
           width="848"
           height="89"
           viewBox="0 0 848 89"
           fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <path d="M827.02 3.55529H826.728L826.584 3.81069L795.786 58.7212L764.67 1.7603L764.481 1.41466L764.101 1.51727L744.679 6.75825L744.309 6.85802V7.24099V85.753V86.253H744.809H764.231H764.731V85.753V42.4817L788.669 83.3339L788.814 83.5811L789.1 83.5811H802.151H802.444L802.587 83.3259L826.52 40.7014V85.753V86.253H827.02H846.443H846.943V85.753V4.05529V3.55529H846.443L827.02 3.55529Z"
              stroke="white"
              strokeOpacity="0.1" />
        <path d="M733.094 67.8857L673.99 67.8857V54.1904L724.153 54.1904H724.653V53.6904V36.3232V35.8232H724.153L673.99 35.8232V21.9224L727.853 21.9224H728.224L728.331 21.5668L733.572 4.19963L733.767 3.55518H733.094L654.068 3.55518H653.568V4.05518V85.7529V86.2529H654.068L727.853 86.2529H728.224L728.331 85.8973L733.572 68.5302L733.767 67.8857H733.094Z"
              stroke="white"
              strokeOpacity="0.1" />
        <path d="M559.23 21.4224V21.9224H559.73L589.34 21.9224V85.7529V86.2529H589.84L609.365 86.2529H609.865V85.7529V21.9224L639.886 21.9224H640.258L640.365 21.5668L645.606 4.19963L645.801 3.55518H645.127L559.73 3.55518H559.23V4.05518V21.4224Z"
              stroke="white"
              strokeOpacity="0.1" />
        <path d="M475.751 10.7693L475.751 10.7693L475.749 10.7714C470.298 15.5933 467.564 21.6557 467.564 28.9242C467.564 34.3094 469.211 39.1435 472.497 43.4098C477.959 50.5514 486.278 54.0876 497.352 54.0876H525.51C527.224 54.0876 528.757 54.4165 530.12 55.0647C531.423 55.7169 532.374 56.5422 533 57.5295C533.627 58.5167 533.95 59.6966 533.95 61.0894C533.95 61.9745 533.761 62.8281 533.38 63.6545L533.379 63.6545L533.375 63.6659C532.766 65.0747 531.822 66.118 530.538 66.8159C529.245 67.5184 527.578 67.8857 525.51 67.8857H473.305H472.934L472.827 68.2412L467.586 85.6084L467.391 86.2529H468.064L525.715 86.2529C534.441 86.2529 541.554 83.8962 547.008 79.1418C552.461 74.3876 555.195 68.3581 555.195 61.0894C555.195 55.4951 553.443 50.4873 549.948 46.0833L549.946 46.0803C544.418 39.2232 536.312 35.8232 525.715 35.8232L497.558 35.8232C495.908 35.8232 494.439 35.5269 493.143 34.9445C491.77 34.2898 490.77 33.4621 490.112 32.4748C489.455 31.4887 489.117 30.3122 489.117 28.9242C489.117 28.0395 489.306 27.1482 489.692 26.2468C490.336 24.7994 491.3 23.7296 492.585 23.0155C493.878 22.2971 495.527 21.9224 497.558 21.9224L547.604 21.9224H547.975L548.083 21.5668L553.324 4.19963L553.518 3.55518H552.845L497.352 3.55518C488.49 3.55518 481.273 5.94604 475.751 10.7693Z"
              stroke="white"
              strokeOpacity="0.1" />
        <path d="M416.168 41.5142L389.756 3.76852L389.607 3.55518H389.347L366.739 3.55518H365.747L366.336 4.35233L405.803 57.7601V85.7529V86.2529H406.303L425.725 86.2529H426.225V85.7529V58.1712L466 4.35235L466.589 3.55518H465.598L442.99 3.55518H442.729L442.58 3.76852L416.168 41.5142Z"
              stroke="white"
              strokeOpacity="0.1" />
        <path d="M286.048 10.7693L286.048 10.7693L286.046 10.7714C280.595 15.5933 277.861 21.6557 277.861 28.9242C277.861 34.3094 279.507 39.1435 282.794 43.4098C288.256 50.5514 296.574 54.0876 307.649 54.0876H335.806C337.52 54.0876 339.054 54.4165 340.417 55.0647C341.72 55.7169 342.67 56.5422 343.297 57.5295C343.924 58.5167 344.247 59.6966 344.247 61.0894C344.247 61.9745 344.058 62.8281 343.676 63.6545L343.676 63.6545L343.671 63.6659C343.063 65.0747 342.119 66.118 340.835 66.8159C339.541 67.5184 337.875 67.8857 335.806 67.8857H283.602H283.231L283.123 68.2412L277.882 85.6084L277.688 86.2529H278.361L336.012 86.2529C344.738 86.2529 351.851 83.8962 357.305 79.1418C362.758 74.3876 365.492 68.3581 365.492 61.0894C365.492 55.4951 363.74 50.4873 360.245 46.0833L360.243 46.0803C354.715 39.2232 346.609 35.8232 336.012 35.8232L307.855 35.8232C306.205 35.8232 304.736 35.5269 303.44 34.9445C302.067 34.2898 301.067 33.4621 300.409 32.4748C299.752 31.4887 299.414 30.3122 299.414 28.9242C299.414 28.0395 299.603 27.1482 299.989 26.2468C300.633 24.7994 301.597 23.7296 302.882 23.0155C304.175 22.2971 305.824 21.9224 307.855 21.9224L357.901 21.9224H358.272L358.38 21.5668L363.62 4.19963L363.815 3.55518H363.142L307.649 3.55518C298.787 3.55518 291.57 5.94604 286.048 10.7693Z"
              stroke="white"
              strokeOpacity="0.1" />
        <path d="M208.663 66.9949L208.661 66.994C204.479 65.3883 201.361 62.7644 199.281 59.1202C197.196 55.467 196.136 50.7557 196.136 44.9553C196.136 39.5269 197.018 35.0533 198.755 31.5112C202.465 24.2278 210.748 20.4836 223.896 20.4836C227.703 20.4836 231.126 20.8236 234.166 21.4992C239.826 22.7797 244.026 25.3696 246.818 29.2422C249.615 33.122 251.04 38.3437 251.04 44.9553C251.04 48.5471 250.633 51.7878 249.826 54.6815C248.354 59.5615 245.481 63.2046 241.196 65.6387C236.896 68.0817 231.142 69.3243 223.896 69.3243C217.699 69.3243 212.628 68.5405 208.663 66.9949ZM253.748 80.5305L253.748 80.5302C266.319 73.0296 272.593 61.1393 272.593 44.9553C272.593 32.3054 268.648 22.1639 260.723 14.5867L260.722 14.5863C251.765 6.04522 239.122 1.80811 222.868 1.80811C210.528 1.80811 200.114 4.63554 191.657 10.3198L191.654 10.3219C180.265 18.0998 174.583 29.6713 174.583 44.9553C174.583 57.8853 178.772 68.2347 187.179 75.9476L187.18 75.9483C195.995 84 207.911 87.9998 222.868 87.9998C235.062 87.9998 245.363 85.5196 253.748 80.5305Z"
              stroke="white"
              strokeOpacity="0.1" />
        <path d="M120.207 3.55517L120.204 3.55519C109.374 3.62461 100.699 7.69474 94.2283 15.7659L94.2262 15.7684C88.1846 23.4072 85.1779 32.9078 85.1779 44.2361C85.1779 54.9438 87.9081 64.2267 93.3857 72.0623C99.9173 81.5117 108.873 86.2529 120.207 86.2529L167.376 86.2529H167.747L167.854 85.8973L173.095 68.5302L173.29 67.8857H172.617L122.57 67.8857C118.734 67.8857 115.472 66.5033 112.756 63.7224C108.764 59.5284 106.731 53.4701 106.731 45.4692C106.731 40.3265 107.678 35.6717 109.562 31.4969C111.079 28.2634 112.924 25.8734 115.081 24.292C117.234 22.7144 119.724 21.9224 122.57 21.9224L167.376 21.9224H167.747L167.854 21.5668L173.095 4.19963L173.29 3.55518H172.617L120.207 3.55517Z"
              stroke="white"
              strokeOpacity="0.1" />
        <path d="M80.0258 67.8857L20.9225 67.8857L20.9225 54.1904L71.0853 54.1904H71.5853V53.6904L71.5853 36.3232V35.8232H71.0853L20.9225 35.8232V21.9224L74.7849 21.9224H75.1562L75.2635 21.5668L80.5045 4.19963L80.699 3.55518H80.0258L1 3.55518H0.5V4.05518L0.5 85.7529L0.5 86.2529H1L74.7849 86.2529H75.1562L75.2635 85.8973L80.5045 68.5302L80.699 67.8857H80.0258Z"
              stroke="white"
              strokeOpacity="0.1" />
      </svg>
    </div>
  )
}