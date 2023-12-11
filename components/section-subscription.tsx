import Image from 'next/image'
import sendIcon from '@/assets/icons/send.svg'
import backgroundImage from '@/assets/background/subscription-bg.svg'

export default function SectionSubscription() {
  return (
    <div
      className="w-full h-[1000px] flex flex-col items-center justify-center relative overflow-hidden">
      <Image className="background h-full w-auto object-cover absolute" src={backgroundImage} alt="" />
      <svg className="mb-[133px]"
           width="1920"
           height="63"
           viewBox="0 0 1920 63"
           fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_337_1947)">
          <path
            d="M59.2345 3.90586H58.9417L58.7984 4.16127L37.8712 41.4724L16.7242 2.7603L16.5354 2.41466L16.1551 2.51727L2.86974 6.10222L2.5 6.20199V6.58495L2.5 60.2889V60.7889H3H16.2854H16.7854V60.2889V31.2725L32.865 58.7141L33.0098 58.9613H33.2964H42.2236H42.5163L42.6596 58.7061L58.7345 30.0767V60.2889V60.7889H59.2345L72.5199 60.7889H73.0199V60.2889L73.0199 4.40586V3.90586H72.5199L59.2345 3.90586ZM137.33 47.9094L97.0602 47.9094L97.0602 38.8575L131.215 38.8575H131.715V38.3575V26.4779V25.9779H131.215L97.0602 25.9779V16.7854L133.745 16.7854H134.117L134.224 16.4299L137.809 4.55032L138.003 3.90586H137.33L83.2748 3.90586H82.7748V4.40586L82.7748 60.2889V60.7889H83.2748L133.745 60.7889H134.117L134.224 60.4334L137.809 48.5538L138.003 47.9094H137.33ZM201.578 3.90586H201.285L201.142 4.16127L180.215 41.4724L159.068 2.7603L158.879 2.41466L158.499 2.51727L145.213 6.10222L144.844 6.20199V6.58495V60.2889V60.7889H145.344L158.629 60.7889H159.129V60.2889V31.2725L175.209 58.7141L175.353 58.9613H175.64H184.567H184.86L185.003 58.7061L201.078 30.0767V60.2889V60.7889H201.578L214.864 60.7889H215.364V60.2889V4.40586V3.90586H214.864L201.578 3.90586ZM279.674 47.9094L239.404 47.9094V38.8575L273.558 38.8575H274.058V38.3575V26.4779V25.9779H273.558L239.404 25.9779V16.7854L276.089 16.7854H276.46L276.568 16.4299L280.153 4.55032L280.347 3.90586H279.674L225.618 3.90586H225.118V4.40586V60.2889V60.7889H225.618L276.089 60.7889H276.46L276.568 60.4334L280.153 48.5538L280.347 47.9094H279.674ZM282.689 16.2854V16.7854H283.189L303.284 16.7854V60.2889V60.7889H303.784H317.14H317.64V60.2889V16.7854L338.017 16.7854H338.389L338.496 16.4299L342.081 4.55032L342.275 3.90586L341.602 3.90586L283.189 3.90586L282.689 3.90586V4.40586V16.2854ZM351.405 52.6419L351.109 53.3378H351.865H377.416L380.795 60.5022L380.931 60.7889H381.247H395.306H396.101L395.757 60.0726L368.272 2.78372L368.093 2.40949L367.692 2.51709L354.336 6.10204L354.118 6.16072L354.017 6.36369L327.517 60.0677L327.161 60.7889H327.965L341.954 60.7889H342.273L342.407 60.4991L361.428 19.4364L371.533 40.9503H356.715H356.385L356.255 41.2544L351.405 52.6419Z"
            stroke="white"
            strokeOpacity="0.1" />
          <path
            d="M663.652 30.0151C667.425 34.9489 673.168 37.3813 680.779 37.3813H700.04C701.191 37.3813 702.216 37.6019 703.124 38.0337C703.994 38.4694 704.62 39.0159 705.03 39.6623C705.441 40.3086 705.655 41.0853 705.655 42.0127C705.655 42.5947 705.531 43.156 705.279 43.701L705.274 43.7124C704.872 44.645 704.25 45.3311 703.404 45.7909C702.549 46.2552 701.437 46.5035 700.04 46.5035L664.331 46.5035H663.959L663.852 46.8591L660.267 58.7386L660.073 59.383H660.746L700.18 59.383C706.178 59.383 711.084 57.7624 714.849 54.48C718.613 51.1979 720.503 47.03 720.503 42.0127C720.503 38.1502 719.293 34.6901 716.88 31.6499L716.878 31.647C713.06 26.9113 707.465 24.572 700.18 24.572L680.92 24.572C679.811 24.572 678.83 24.373 677.967 23.9855C677.048 23.5473 676.389 22.9983 675.959 22.352C675.528 21.7069 675.304 20.9336 675.304 20.0109C675.304 19.4296 675.428 18.8417 675.684 18.2437C676.112 17.2829 676.748 16.5781 677.595 16.1074C678.45 15.6325 679.55 15.3795 680.92 15.3795L715.153 15.3795H715.524L715.631 15.024L719.216 3.14445L719.411 2.5H718.738L680.779 2.5C674.688 2.5 669.712 4.14403 665.9 7.47364L665.897 7.47573C662.135 10.804 660.246 14.9938 660.246 20.0109C660.246 23.7291 661.383 27.0694 663.652 30.0151ZM663.652 30.0151L664.05 29.7114M663.652 30.0151C663.653 30.0156 663.653 30.0161 663.654 30.0166L664.05 29.7114M664.05 29.7114C667.705 34.4913 673.281 36.8813 680.779 36.8813H700.04C701.258 36.8813 702.359 37.1156 703.344 37.5842M664.05 29.7114C661.847 26.8528 660.746 23.6193 660.746 20.0109C660.746 15.1373 662.573 11.0837 666.229 7.85023L703.344 37.5842M703.344 37.5842C705.218 38.5215 706.155 39.9976 706.155 42.0127C706.155 42.6688 706.015 43.3014 705.733 43.9106C704.843 45.9725 702.945 47.0035 700.04 47.0035L664.331 47.0035L703.344 37.5842ZM437.659 2.5H437.339L437.205 2.78985L418.184 43.8544L398.817 2.78674L398.682 2.5H398.365L384.306 2.5H383.512L383.856 3.21628L411.34 60.5052L411.52 60.8794L411.921 60.7718L425.276 57.1869L425.495 57.1282L425.595 56.9252L452.096 3.22126L452.451 2.5L451.647 2.5L437.659 2.5ZM591.531 46.5035L470.564 46.5035V37.4516L585.532 37.4516H586.032V36.9516V25.072V24.572H585.532L470.564 24.572V15.3795L588.531 15.3795L588.921 15.3795L589.016 15.0019L592.015 3.12239L592.172 2.5H591.531L456.779 2.5H456.279V3V58.883V59.383H456.779L587.946 59.383H588.317L588.424 59.0275L592.009 47.148L592.204 46.5035H591.531ZM598.125 22.6211L597.755 22.7209V23.1038V58.883V59.383H598.255H611.541H612.041V58.883V41.7395L629.062 41.7395L641.074 59.1668L641.223 59.383H641.486H657.161H658.151L657.563 58.5862L644.119 40.3645C646.496 39.4931 648.593 38.1948 650.406 36.4704L650.408 36.4685C654.169 32.8523 656.044 28.2432 656.044 22.6821C656.044 18.0307 654.675 13.8714 651.937 10.2214L651.936 10.2196C648.036 5.06736 642.539 2.5 635.511 2.5L601.84 2.5H601.469L601.362 2.85555L597.777 14.7351L597.582 15.3795H598.255L635.37 15.3795C636.446 15.3795 637.429 15.6569 638.331 16.2126C640.078 17.4102 640.986 19.318 640.986 22.0494C640.986 23.1594 640.786 24.2223 640.387 25.2413C639.898 26.4861 639.235 27.3825 638.417 27.9697C637.602 28.555 636.596 28.8599 635.37 28.8599H635.277H635.184H635.092H634.999H634.907H634.815H634.723H634.631H634.54H634.448H634.357H634.266H634.175H634.085H633.994H633.904H633.814H633.724H633.634H633.545H633.455H633.366H633.277H633.188H633.1H633.011H632.923H632.835H632.747H632.659H632.572H632.484H632.397H632.31H632.223H632.137H632.05H631.964H631.878H631.792H631.706H631.621H631.536H631.45H631.365H631.281H631.196H631.111H631.027H630.943H630.859H630.775H630.692H630.609H630.525H630.442H630.36H630.277H630.195H630.112H630.03H629.948H629.867H629.785H629.704H629.622H629.541H629.461H629.38H629.3H629.219H629.139H629.059H628.98H628.9H628.821H628.742H628.663H628.584H628.505H628.427H628.348H628.27H628.192H628.115H628.037H627.96H627.883H627.806H627.729H627.652H627.576H627.499H627.423H627.347H627.272H627.196H627.121H627.046H626.971H626.896H626.821H626.747H626.673H626.598H626.525H626.451H626.377H626.304H626.231H626.158H626.085H626.012H625.94H625.868H625.796H625.724H625.652H625.58H625.509H625.438H625.367H625.296H625.225H625.155H625.085H625.015H624.945H624.875H624.805H624.736H624.667H624.598H624.529H624.46H624.392H624.324H624.256H624.188H624.12H624.052H623.985H623.918H623.851H623.784H623.717H623.651H623.585H623.519H623.453H623.387H623.322H623.256H623.191H623.126H623.061H622.997H622.932H622.868H622.804H622.74H622.676H622.613H622.549H622.486H622.423H622.36H622.298H622.235H622.173H622.111H622.049H621.987H621.926H621.864H621.803H621.742H621.681H621.621H621.56H621.5H621.44H621.38H621.32H621.261H621.201H621.142H621.083H621.024H620.966H620.907H620.849H620.791H620.733H620.675H620.618H620.56H620.503H620.446H620.389H620.333H620.276H620.22H620.164H620.108H620.052H619.997H619.941H619.886H619.831H619.776H619.722H619.667H619.613H619.559H619.505H619.451H619.398H619.344H619.291H619.238H619.185H619.133H619.08H619.028H618.976H618.924H618.872H618.821H618.77H618.718H618.667H618.617H618.566H618.515H618.465H618.415H618.365H618.315H618.266H618.217H618.167H618.118H618.07H618.021H617.973H617.924H617.876H617.828H617.781H617.733H617.686H617.638H617.591H617.545H617.498H617.452H617.405H617.359H617.313H617.268H617.222H617.177H617.131H617.086H617.042H616.997H616.953H616.908H616.864H616.82H616.777H616.733H616.69H616.647H616.604H616.561H616.518H616.476H616.433H616.391H616.349H616.308L616.266 28.8599H616.225H616.184H616.143H616.102H616.061H616.021H615.98H615.94H615.9H615.861H615.821H615.782H615.743H615.704H615.665H615.626H615.588H615.549H615.511H615.473H615.436H615.398H615.361H615.324H615.287H615.25H615.213H615.177H615.14H615.104H615.068H615.033H614.997H614.962H614.927H614.892H614.857H614.822H614.788H614.753H614.719H614.685H614.652H614.618H614.585H614.552H614.519H614.486H614.453H614.421H614.389H614.356H614.325H614.293H614.261H614.23H614.199H614.168H614.137H614.106H614.076H614.046H614.015H613.986H613.956H613.926H613.897H613.868H613.839H613.81H613.781H613.753H613.725H613.696H613.669H613.641H613.613H613.586H613.559H613.532H613.505H613.478H613.452H613.426H613.4H613.374H613.348H613.322H613.297H613.272H613.247H613.222H613.197H613.173H613.149H613.125H613.101H613.077H613.053H613.03H613.007H612.984H612.961H612.938H612.916H612.894H612.872H612.85H612.828H612.806H612.785H612.764H612.743H612.722H612.701H612.681H612.661H612.641H612.621H612.601H612.581H612.562H612.543H612.524H612.505H612.486H612.468H612.45H612.432H612.414H612.396H612.378H612.361H612.344H612.327H612.31H612.293H612.277H612.261H612.245H612.229H612.213H612.197H612.182H612.167H612.152H612.137H612.122H612.108H612.094H612.08H612.066H612.052H612.041V19.5189V18.8661L611.41 19.0362L598.125 22.6211ZM782.002 46.5035L741.732 46.5035V37.4516L775.886 37.4516H776.386V36.9516V25.072V24.572H775.886L741.732 24.572V15.3795L778.417 15.3795H778.788L778.895 15.024L782.48 3.14445L782.675 2.5H782.002L727.946 2.5H727.446V3V58.883V59.383H727.946L778.417 59.383H778.788L778.895 59.0275L782.48 47.148L782.675 46.5035H782.002Z"
            stroke="white"
            strokeOpacity="0.1" />
          <path
            d="M862.235 3.90586H861.942L861.798 4.16127L840.871 41.4724L819.724 2.7603L819.535 2.41466L819.155 2.51727L805.87 6.10222L805.5 6.20199V6.58495V60.2889V60.7889H806H819.285H819.785V60.2889V31.2725L835.865 58.7141L836.01 58.9613H836.296H845.224H845.516L845.66 58.7061L861.735 30.0767V60.2889V60.7889H862.235L875.52 60.7889H876.02V60.2889V4.40586V3.90586H875.52L862.235 3.90586ZM940.33 47.9094L900.06 47.9094V38.8575L934.215 38.8575H934.715V38.3575V26.4779V25.9779H934.215L900.06 25.9779V16.7854L936.745 16.7854H937.117L937.224 16.4299L940.809 4.55032L941.003 3.90586H940.33L886.275 3.90586H885.775V4.40586V60.2889V60.7889H886.275L936.745 60.7889H937.117L937.224 60.4334L940.809 48.5538L941.003 47.9094H940.33ZM1004.58 3.90586H1004.29L1004.14 4.16127L983.215 41.4724L962.068 2.7603L961.879 2.41466L961.499 2.51727L948.213 6.10222L947.844 6.20199V6.58495V60.2889V60.7889H948.344L961.629 60.7889H962.129V60.2889V31.2725L978.209 58.7141L978.353 58.9613H978.64H987.567H987.86L988.003 58.7061L1004.08 30.0767V60.2889V60.7889H1004.58L1017.86 60.7889H1018.36V60.2889V4.40586V3.90586H1017.86L1004.58 3.90586ZM1082.67 47.9094L1042.4 47.9094V38.8575L1076.56 38.8575H1077.06V38.3575V26.4779V25.9779H1076.56L1042.4 25.9779V16.7854L1079.09 16.7854H1079.46L1079.57 16.4299L1083.15 4.55032L1083.35 3.90586H1082.67L1028.62 3.90586H1028.12V4.40586V60.2889V60.7889H1028.62L1079.09 60.7889H1079.46L1079.57 60.4334L1083.15 48.5538L1083.35 47.9094H1082.67ZM1085.69 16.2854V16.7854H1086.19L1106.28 16.7854V60.2889V60.7889H1106.78H1120.14H1120.64V60.2889V16.7854L1141.02 16.7854H1141.39L1141.5 16.4299L1145.08 4.55032L1145.28 3.90586L1144.6 3.90586L1086.19 3.90586L1085.69 3.90586V4.40586V16.2854ZM1154.4 52.6419L1154.11 53.3378H1154.86H1180.42L1183.8 60.5022L1183.93 60.7889H1184.25H1198.31H1199.1L1198.76 60.0726L1171.27 2.78372L1171.09 2.40949L1170.69 2.51709L1157.34 6.10204L1157.12 6.16072L1157.02 6.36369L1130.52 60.0677L1130.16 60.7889H1130.97L1144.95 60.7889H1145.27L1145.41 60.4991L1164.43 19.4364L1174.53 40.9503H1159.72H1159.38L1159.26 41.2544L1154.4 52.6419Z"
            stroke="white"
            strokeOpacity="0.1" />
          <path
            d="M1466.65 30.0151C1470.43 34.9489 1476.17 37.3813 1483.78 37.3813H1503.04C1504.19 37.3813 1505.22 37.6019 1506.12 38.0337C1506.99 38.4694 1507.62 39.0159 1508.03 39.6623C1508.44 40.3086 1508.66 41.0853 1508.66 42.0127C1508.66 42.5947 1508.53 43.156 1508.28 43.701L1508.27 43.7124C1507.87 44.645 1507.25 45.3311 1506.4 45.7909C1505.55 46.2552 1504.44 46.5035 1503.04 46.5035L1467.33 46.5035H1466.96L1466.85 46.8591L1463.27 58.7386L1463.07 59.383H1463.75L1503.18 59.383C1509.18 59.383 1514.08 57.7624 1517.85 54.48C1521.61 51.1979 1523.5 47.03 1523.5 42.0127C1523.5 38.1502 1522.29 34.6901 1519.88 31.6499L1519.88 31.647C1516.06 26.9113 1510.47 24.572 1503.18 24.572L1483.92 24.572C1482.81 24.572 1481.83 24.373 1480.97 23.9855C1480.05 23.5473 1479.39 22.9983 1478.96 22.352C1478.53 21.7069 1478.3 20.9336 1478.3 20.0109C1478.3 19.4296 1478.43 18.8417 1478.68 18.2437C1479.11 17.2829 1479.75 16.5781 1480.6 16.1074C1481.45 15.6325 1482.55 15.3795 1483.92 15.3795L1518.15 15.3795H1518.52L1518.63 15.024L1522.22 3.14445L1522.41 2.5H1521.74L1483.78 2.5C1477.69 2.5 1472.71 4.14403 1468.9 7.47364L1468.9 7.47573C1465.14 10.804 1463.25 14.9938 1463.25 20.0109C1463.25 23.7291 1464.38 27.0694 1466.65 30.0151ZM1466.65 30.0151L1467.05 29.7114M1466.65 30.0151C1466.65 30.0156 1466.65 30.0161 1466.65 30.0166L1467.05 29.7114M1467.05 29.7114C1470.7 34.4913 1476.28 36.8813 1483.78 36.8813H1503.04C1504.26 36.8813 1505.36 37.1156 1506.34 37.5842M1467.05 29.7114C1464.85 26.8528 1463.75 23.6193 1463.75 20.0109C1463.75 15.1373 1465.57 11.0837 1469.23 7.85023L1506.34 37.5842M1506.34 37.5842C1508.22 38.5215 1509.16 39.9976 1509.16 42.0127C1509.16 42.6688 1509.01 43.3014 1508.73 43.9106C1507.84 45.9725 1505.95 47.0035 1503.04 47.0035L1467.33 47.0035L1506.34 37.5842ZM1240.66 2.5H1240.34L1240.21 2.78985L1221.18 43.8544L1201.82 2.78674L1201.68 2.5H1201.36L1187.31 2.5H1186.51L1186.86 3.21628L1214.34 60.5052L1214.52 60.8794L1214.92 60.7718L1228.28 57.1869L1228.49 57.1282L1228.59 56.9252L1255.1 3.22126L1255.45 2.5L1254.65 2.5L1240.66 2.5ZM1394.53 46.5035L1273.56 46.5035V37.4516L1388.53 37.4516H1389.03V36.9516V25.072V24.572H1388.53L1273.56 24.572V15.3795L1391.53 15.3795L1391.92 15.3795L1392.02 15.0019L1395.02 3.12239L1395.17 2.5H1394.53L1259.78 2.5H1259.28V3V58.883V59.383H1259.78L1390.95 59.383H1391.32L1391.42 59.0275L1395.01 47.148L1395.2 46.5035H1394.53ZM1401.12 22.6211L1400.76 22.7209V23.1038V58.883V59.383H1401.26H1414.54H1415.04V58.883V41.7395L1432.06 41.7395L1444.07 59.1668L1444.22 59.383H1444.49H1460.16H1461.15L1460.56 58.5862L1447.12 40.3645C1449.5 39.4931 1451.59 38.1948 1453.41 36.4704L1453.41 36.4685C1457.17 32.8523 1459.04 28.2432 1459.04 22.6821C1459.04 18.0307 1457.67 13.8714 1454.94 10.2214L1454.94 10.2196C1451.04 5.06736 1445.54 2.5 1438.51 2.5L1404.84 2.5H1404.47L1404.36 2.85555L1400.78 14.7351L1400.58 15.3795H1401.26L1438.37 15.3795C1439.45 15.3795 1440.43 15.6569 1441.33 16.2126C1443.08 17.4102 1443.99 19.318 1443.99 22.0494C1443.99 23.1594 1443.79 24.2223 1443.39 25.2413C1442.9 26.4861 1442.24 27.3825 1441.42 27.9697C1440.6 28.555 1439.6 28.8599 1438.37 28.8599H1438.28H1438.18H1438.09H1438H1437.91H1437.81H1437.72H1437.63H1437.54H1437.45H1437.36H1437.27H1437.18H1437.08H1436.99H1436.9H1436.81H1436.72H1436.63H1436.54H1436.46H1436.37H1436.28H1436.19H1436.1H1436.01H1435.92H1435.83H1435.75H1435.66H1435.57H1435.48H1435.4H1435.31H1435.22H1435.14H1435.05H1434.96H1434.88H1434.79H1434.71H1434.62H1434.54H1434.45H1434.37H1434.28H1434.2H1434.11H1434.03H1433.94H1433.86H1433.78H1433.69H1433.61H1433.53H1433.44H1433.36H1433.28H1433.19H1433.11H1433.03H1432.95H1432.87H1432.78H1432.7H1432.62H1432.54H1432.46H1432.38H1432.3H1432.22H1432.14H1432.06H1431.98H1431.9H1431.82H1431.74H1431.66H1431.58H1431.51H1431.43H1431.35H1431.27H1431.19H1431.11H1431.04H1430.96H1430.88H1430.81H1430.73H1430.65H1430.58H1430.5H1430.42H1430.35H1430.27H1430.2H1430.12H1430.05H1429.97H1429.9H1429.82H1429.75H1429.67H1429.6H1429.52H1429.45H1429.38H1429.3H1429.23H1429.16H1429.08H1429.01H1428.94H1428.87H1428.8H1428.72H1428.65H1428.58H1428.51H1428.44H1428.37H1428.3H1428.23H1428.15H1428.08H1428.01H1427.94H1427.87H1427.81H1427.74H1427.67H1427.6H1427.53H1427.46H1427.39H1427.32H1427.26H1427.19H1427.12H1427.05H1426.99H1426.92H1426.85H1426.78H1426.72H1426.65H1426.58H1426.52H1426.45H1426.39H1426.32H1426.26H1426.19H1426.13H1426.06H1426H1425.93H1425.87H1425.8H1425.74H1425.68H1425.61H1425.55H1425.49H1425.42H1425.36H1425.3H1425.24H1425.17H1425.11H1425.05H1424.99H1424.93H1424.86H1424.8H1424.74H1424.68H1424.62H1424.56H1424.5H1424.44H1424.38H1424.32H1424.26H1424.2H1424.14H1424.08H1424.02H1423.97H1423.91H1423.85H1423.79H1423.73H1423.68H1423.62H1423.56H1423.5H1423.45H1423.39H1423.33H1423.28H1423.22H1423.16H1423.11H1423.05H1423H1422.94H1422.89H1422.83H1422.78H1422.72H1422.67H1422.61H1422.56H1422.51H1422.45H1422.4H1422.34H1422.29H1422.24H1422.19H1422.13H1422.08H1422.03H1421.98H1421.92H1421.87H1421.82H1421.77H1421.72H1421.67H1421.62H1421.57H1421.52H1421.47H1421.42H1421.37H1421.32H1421.27H1421.22H1421.17H1421.12H1421.07H1421.02H1420.97H1420.92H1420.88H1420.83H1420.78H1420.73H1420.69H1420.64H1420.59H1420.54H1420.5H1420.45H1420.41H1420.36H1420.31H1420.27H1420.22H1420.18H1420.13H1420.09H1420.04H1420H1419.95H1419.91H1419.86H1419.82H1419.78H1419.73H1419.69H1419.65H1419.6H1419.56H1419.52H1419.48H1419.43H1419.39H1419.35H1419.31L1419.27 28.8599H1419.22H1419.18H1419.14H1419.1H1419.06H1419.02H1418.98H1418.94H1418.9H1418.86H1418.82H1418.78H1418.74H1418.7H1418.66H1418.63H1418.59H1418.55H1418.51H1418.47H1418.44H1418.4H1418.36H1418.32H1418.29H1418.25H1418.21H1418.18H1418.14H1418.1H1418.07H1418.03H1418H1417.96H1417.93H1417.89H1417.86H1417.82H1417.79H1417.75H1417.72H1417.69H1417.65H1417.62H1417.58H1417.55H1417.52H1417.49H1417.45H1417.42H1417.39H1417.36H1417.32H1417.29H1417.26H1417.23H1417.2H1417.17H1417.14H1417.11H1417.08H1417.05H1417.02H1416.99H1416.96H1416.93H1416.9H1416.87H1416.84H1416.81H1416.78H1416.75H1416.72H1416.7H1416.67H1416.64H1416.61H1416.59H1416.56H1416.53H1416.5H1416.48H1416.45H1416.43H1416.4H1416.37H1416.35H1416.32H1416.3H1416.27H1416.25H1416.22H1416.2H1416.17H1416.15H1416.12H1416.1H1416.08H1416.05H1416.03H1416.01H1415.98H1415.96H1415.94H1415.92H1415.89H1415.87H1415.85H1415.83H1415.81H1415.78H1415.76H1415.74H1415.72H1415.7H1415.68H1415.66H1415.64H1415.62H1415.6H1415.58H1415.56H1415.54H1415.52H1415.5H1415.49H1415.47H1415.45H1415.43H1415.41H1415.4H1415.38H1415.36H1415.34H1415.33H1415.31H1415.29H1415.28H1415.26H1415.24H1415.23H1415.21H1415.2H1415.18H1415.17H1415.15H1415.14H1415.12H1415.11H1415.09H1415.08H1415.07H1415.05H1415.04V19.5189V18.8661L1414.41 19.0362L1401.12 22.6211ZM1585 46.5035L1544.73 46.5035V37.4516L1578.89 37.4516H1579.39V36.9516V25.072V24.572H1578.89L1544.73 24.572V15.3795L1581.42 15.3795H1581.79L1581.9 15.024L1585.48 3.14445L1585.67 2.5H1585L1530.95 2.5H1530.45V3V58.883V59.383H1530.95L1581.42 59.383H1581.79L1581.9 59.0275L1585.48 47.148L1585.67 46.5035H1585Z"
            stroke="white"
            strokeOpacity="0.1" />
          <path
            d="M1665.23 3.90586H1664.94L1664.8 4.16127L1643.87 41.4724L1622.72 2.7603L1622.54 2.41466L1622.16 2.51727L1608.87 6.10222L1608.5 6.20199V6.58495V60.2889V60.7889H1609H1622.29H1622.79V60.2889V31.2725L1638.86 58.7141L1639.01 58.9613H1639.3H1648.22H1648.52L1648.66 58.7061L1664.73 30.0767V60.2889V60.7889H1665.23L1678.52 60.7889H1679.02V60.2889V4.40586V3.90586H1678.52L1665.23 3.90586ZM1743.33 47.9094L1703.06 47.9094V38.8575L1737.21 38.8575H1737.71V38.3575V26.4779V25.9779H1737.21L1703.06 25.9779V16.7854L1739.75 16.7854H1740.12L1740.22 16.4299L1743.81 4.55032L1744 3.90586H1743.33L1689.27 3.90586H1688.77V4.40586V60.2889V60.7889H1689.27L1739.75 60.7889H1740.12L1740.22 60.4334L1743.81 48.5538L1744 47.9094H1743.33ZM1807.58 3.90586H1807.29L1807.14 4.16127L1786.21 41.4724L1765.07 2.7603L1764.88 2.41466L1764.5 2.51727L1751.21 6.10222L1750.84 6.20199V6.58495V60.2889V60.7889H1751.34L1764.63 60.7889H1765.13V60.2889V31.2725L1781.21 58.7141L1781.35 58.9613H1781.64H1790.57H1790.86L1791 58.7061L1807.08 30.0767V60.2889V60.7889H1807.58L1820.86 60.7889H1821.36V60.2889V4.40586V3.90586H1820.86L1807.58 3.90586ZM1885.67 47.9094L1845.4 47.9094V38.8575L1879.56 38.8575H1880.06V38.3575V26.4779V25.9779H1879.56L1845.4 25.9779V16.7854L1882.09 16.7854H1882.46L1882.57 16.4299L1886.15 4.55032L1886.35 3.90586H1885.67L1831.62 3.90586H1831.12V4.40586V60.2889V60.7889H1831.62L1882.09 60.7889H1882.46L1882.57 60.4334L1886.15 48.5538L1886.35 47.9094H1885.67ZM1888.69 16.2854V16.7854H1889.19L1909.28 16.7854V60.2889V60.7889H1909.78H1923.14H1923.64V60.2889V16.7854L1944.02 16.7854H1944.39L1944.5 16.4299L1948.08 4.55032L1948.28 3.90586L1947.6 3.90586L1889.19 3.90586L1888.69 3.90586V4.40586V16.2854ZM1957.4 52.6419L1957.11 53.3378H1957.86H1983.42L1986.8 60.5022L1986.93 60.7889H1987.25H2001.31H2002.1L2001.76 60.0726L1974.27 2.78372L1974.09 2.40949L1973.69 2.51709L1960.34 6.10204L1960.12 6.16072L1960.02 6.36369L1933.52 60.0677L1933.16 60.7889H1933.97L1947.95 60.7889H1948.27L1948.41 60.4991L1967.43 19.4364L1977.53 40.9503H1962.72H1962.38L1962.26 41.2544L1957.4 52.6419Z"
            stroke="white"
            strokeOpacity="0.1" />
        </g>
        <defs>
          <clipPath id="clip0_337_1947">
            <rect width="1920" height="63" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <div className="subscription-box-wrapper">
        <div className="hexagon" />
        <div className="small-hexagon">
          <p className="uppercase text-white text-display-1 font-chakra text-center mb-3"
             style={{ textShadow: '2px 2px 0px #5A01FF' }}>
            follow us for more info
          </p>
          <p className="text-heading-4 text-white text-center font-svn mb-10">
            Subscribe to the MEMETAVERSE newsletter and don't miss miss out on anything.
          </p>

          <div className="max-w-[600px] w-full mx-auto flex items-center bg-[#463557] pr-1">
            <input
              placeholder="Ex: youremail@gmail.com"
              className="w-full h-full text-white placeholder:text-[rgba(255, 255, 255, 0.50)] bg-transparent border-none outline-none px-6 py-4" />

            <button className="base-button clip-left">
              <Image src={sendIcon} alt="send" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}