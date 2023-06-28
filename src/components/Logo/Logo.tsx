import { SVGProps } from "react";

const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="300"
    zoomAndPan="magnify"
    viewBox="0 0 375 375"
    height="300"
    preserveAspectRatio="xMidYMid meet"
    version="1.0"
  >
    <defs>
      <clipPath id="d00feab1d1">
        <path
          d="M 33 83 L 343 83 L 343 292 L 33 292 Z M 33 83 "
          clip-rule="nonzero"
        />
      </clipPath>
      <clipPath id="7e582bcdaa">
        <path
          d="M 322.496094 166.882812 C 312.121094 165.339844 301.871094 165.183594 291.90625 166.265625 C 291.996094 154.359375 290.285156 142.234375 286.585938 130.246094 L 279.246094 106.476562 L 255.464844 113.816406 C 245.238281 116.96875 235.738281 121.378906 227.09375 126.828125 C 222.785156 120.34375 217.765625 114.1875 212.046875 108.46875 L 187.578125 83.996094 L 163.109375 108.464844 C 157.390625 114.179688 152.371094 120.339844 148.0625 126.824219 C 139.417969 121.371094 129.921875 116.964844 119.691406 113.8125 L 95.914062 106.472656 L 88.574219 130.242188 C 84.871094 142.226562 83.164062 154.355469 83.25 166.261719 C 73.285156 165.175781 63.035156 165.335938 52.660156 166.878906 L 33.035156 169.808594 L 35.957031 189.433594 C 45.664062 254.59375 106.351562 299.546875 171.507812 289.84375 L 175.242188 289.285156 L 187.578125 287.4375 L 199.917969 289.285156 L 203.648438 289.84375 C 268.804688 299.546875 329.496094 254.59375 339.207031 189.441406 L 342.128906 169.8125 Z M 174.253906 115.484375 L 187.578125 102.160156 L 200.902344 115.484375 C 206.8125 121.394531 211.875 127.835938 216.097656 134.652344 C 204.527344 143.90625 194.90625 155.179688 187.578125 167.773438 C 180.253906 155.183594 170.628906 143.90625 159.0625 134.652344 C 163.28125 127.835938 168.34375 121.394531 174.253906 115.484375 Z M 170.375 264.050781 C 170.316406 264.03125 170.265625 264.015625 170.207031 264.003906 C 160.535156 260.992188 151.605469 256.734375 143.546875 251.441406 C 122.335938 237.527344 107.117188 216.535156 100.15625 192.753906 C 95.429688 191.207031 90.585938 189.988281 85.632812 189.128906 C 93.4375 227.550781 120.023438 260.992188 158.359375 276.234375 C 105.203125 279.664062 57.320312 242.621094 47.773438 189.605469 C 47.578125 188.539062 47.402344 187.476562 47.246094 186.402344 L 46.230469 179.582031 C 59.035156 176.796875 71.777344 176.582031 83.96875 178.515625 C 88.582031 179.242188 93.105469 180.273438 97.53125 181.59375 C 97.523438 181.535156 97.511719 181.484375 97.503906 181.425781 C 108.523438 184.5625 118.875 189.457031 128.210938 195.835938 C 134.382812 200.066406 140.109375 204.941406 145.277344 210.386719 C 145.277344 210.386719 145.277344 210.386719 145.277344 210.394531 C 150.394531 215.789062 154.957031 221.738281 158.875 228.164062 C 165.820312 239.28125 170.617188 251.667969 172.617188 264.738281 Z M 189.964844 253.023438 C 189.015625 256.429688 188.222656 259.917969 187.578125 263.464844 C 186.933594 259.917969 186.144531 256.429688 185.195312 253.023438 C 178.1875 227.570312 163.152344 205.96875 143.332031 190.605469 C 143.28125 178.84375 145.179688 167.078125 149.046875 155.835938 C 145.277344 152.769531 141.289062 149.953125 137.109375 147.414062 C 132.683594 158.191406 129.898438 169.492188 128.765625 180.921875 C 118.628906 175.199219 107.605469 170.9375 96.039062 168.378906 C 95.441406 156.613281 96.828125 144.566406 100.425781 132.667969 C 100.484375 132.441406 100.554688 132.226562 100.621094 132 L 103.863281 121.519531 C 146.761719 131.789062 180.390625 162.710938 187.578125 209.566406 C 194.769531 162.707031 228.394531 131.789062 271.296875 121.519531 L 274.539062 132 C 274.605469 132.226562 274.675781 132.441406 274.734375 132.667969 C 278.328125 144.566406 279.714844 156.613281 279.121094 168.378906 C 267.554688 170.9375 256.535156 175.195312 246.390625 180.921875 C 245.257812 169.492188 242.472656 158.1875 238.050781 147.414062 C 233.867188 149.953125 229.882812 152.769531 226.109375 155.835938 C 229.976562 167.078125 231.875 178.84375 231.828125 190.605469 C 212.003906 205.972656 196.96875 227.570312 189.964844 253.023438 Z M 327.910156 186.402344 C 327.75 187.476562 327.578125 188.539062 327.378906 189.605469 C 317.839844 242.621094 269.957031 279.664062 216.800781 276.234375 C 255.136719 260.996094 281.71875 227.554688 289.527344 189.128906 C 284.574219 189.988281 279.726562 191.207031 275 192.753906 C 268.042969 216.535156 252.820312 237.527344 231.609375 251.441406 C 223.550781 256.734375 214.617188 260.992188 204.949219 264.003906 C 204.890625 264.011719 204.839844 264.03125 204.78125 264.050781 L 202.535156 264.746094 C 204.535156 251.675781 209.335938 239.289062 216.28125 228.171875 C 220.195312 221.746094 224.757812 215.792969 229.878906 210.402344 C 229.878906 210.394531 229.878906 210.394531 229.878906 210.394531 C 235.046875 204.953125 240.773438 200.074219 246.945312 195.84375 C 256.273438 189.464844 266.628906 184.570312 277.652344 181.433594 C 277.644531 181.492188 277.628906 181.542969 277.621094 181.601562 C 282.046875 180.28125 286.570312 179.246094 291.183594 178.527344 C 303.375 176.589844 316.117188 176.804688 328.925781 179.589844 Z M 327.910156 186.402344 "
          clip-rule="nonzero"
        />
      </clipPath>
      <linearGradient
        x1="513.223877"
        gradientTransform="matrix(0.41625, 0, 0, 0.41625, -20.546052, -20.54605)"
        y1="783.505816"
        x2="491.046919"
        gradientUnits="userSpaceOnUse"
        y2="236.461383"
        id="19f0f1b72c"
      >
        <stop
          stop-opacity="1"
          stop-color="rgb(14.390564%, 57.966614%, 87.663269%)"
          offset="0"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(15.036011%, 57.525635%, 87.391663%)"
          offset="0.00390625"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(15.681458%, 57.084656%, 87.121582%)"
          offset="0.0078125"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(16.326904%, 56.643677%, 86.849976%)"
          offset="0.0117187"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(16.973877%, 56.202698%, 86.579895%)"
          offset="0.015625"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(17.619324%, 55.761719%, 86.308289%)"
          offset="0.0195312"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(18.264771%, 55.32074%, 86.038208%)"
          offset="0.0234375"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(18.910217%, 54.878235%, 85.766602%)"
          offset="0.0273437"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(19.555664%, 54.437256%, 85.496521%)"
          offset="0.03125"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(20.201111%, 53.996277%, 85.224915%)"
          offset="0.0351563"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(20.846558%, 53.555298%, 84.954834%)"
          offset="0.0390625"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(21.492004%, 53.114319%, 84.683228%)"
          offset="0.0429688"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(22.137451%, 52.67334%, 84.413147%)"
          offset="0.046875"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(22.782898%, 52.232361%, 84.141541%)"
          offset="0.0507813"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(23.429871%, 51.791382%, 83.87146%)"
          offset="0.0546875"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(24.075317%, 51.350403%, 83.601379%)"
          offset="0.0585938"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(24.720764%, 50.909424%, 83.331299%)"
          offset="0.0625"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(25.366211%, 50.468445%, 83.059692%)"
          offset="0.0664062"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(26.011658%, 50.027466%, 82.789612%)"
          offset="0.0703125"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(26.657104%, 49.586487%, 82.518005%)"
          offset="0.0742188"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(27.302551%, 49.145508%, 82.247925%)"
          offset="0.078125"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(27.947998%, 48.703003%, 81.976318%)"
          offset="0.0820312"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(28.593445%, 48.262024%, 81.706238%)"
          offset="0.0859375"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(29.238892%, 47.821045%, 81.434631%)"
          offset="0.0898438"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(29.884338%, 47.380066%, 81.164551%)"
          offset="0.09375"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(30.529785%, 46.939087%, 80.892944%)"
          offset="0.0976562"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(31.176758%, 46.498108%, 80.622864%)"
          offset="0.101562"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(31.822205%, 46.057129%, 80.351257%)"
          offset="0.105469"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(32.467651%, 45.61615%, 80.081177%)"
          offset="0.109375"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(33.113098%, 45.175171%, 79.80957%)"
          offset="0.113281"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(33.758545%, 44.734192%, 79.53949%)"
          offset="0.117187"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(34.403992%, 44.293213%, 79.267883%)"
          offset="0.121094"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(35.049438%, 43.852234%, 78.997803%)"
          offset="0.125"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(35.694885%, 43.411255%, 78.726196%)"
          offset="0.128906"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(36.340332%, 42.970276%, 78.456116%)"
          offset="0.132812"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(36.985779%, 42.529297%, 78.184509%)"
          offset="0.136719"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(37.632751%, 42.088318%, 77.914429%)"
          offset="0.140625"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(38.278198%, 41.645813%, 77.642822%)"
          offset="0.144531"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(38.923645%, 41.204834%, 77.372742%)"
          offset="0.148437"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(39.569092%, 40.763855%, 77.102661%)"
          offset="0.152344"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(40.214539%, 40.322876%, 76.832581%)"
          offset="0.15625"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(40.859985%, 39.881897%, 76.560974%)"
          offset="0.160156"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(41.505432%, 39.440918%, 76.290894%)"
          offset="0.164062"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(42.150879%, 38.999939%, 76.019287%)"
          offset="0.167969"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(42.796326%, 38.55896%, 75.749207%)"
          offset="0.171875"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(43.441772%, 38.117981%, 75.4776%)"
          offset="0.175781"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(44.087219%, 37.677002%, 75.20752%)"
          offset="0.179687"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(44.732666%, 37.236023%, 74.935913%)"
          offset="0.183594"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(45.379639%, 36.795044%, 74.665833%)"
          offset="0.1875"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(46.025085%, 36.354065%, 74.394226%)"
          offset="0.191406"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(46.670532%, 35.913086%, 74.124146%)"
          offset="0.195312"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(47.315979%, 35.470581%, 73.852539%)"
          offset="0.199219"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(47.961426%, 35.029602%, 73.582458%)"
          offset="0.203125"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(48.606873%, 34.588623%, 73.310852%)"
          offset="0.207031"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(49.252319%, 34.147644%, 73.040771%)"
          offset="0.210937"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(49.897766%, 33.706665%, 72.769165%)"
          offset="0.214844"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(50.543213%, 33.265686%, 72.499084%)"
          offset="0.21875"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(51.18866%, 32.824707%, 72.227478%)"
          offset="0.222656"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(51.835632%, 32.383728%, 71.957397%)"
          offset="0.226562"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(52.481079%, 31.942749%, 71.685791%)"
          offset="0.230469"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(53.126526%, 31.50177%, 71.41571%)"
          offset="0.234375"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(53.771973%, 31.060791%, 71.14563%)"
          offset="0.238281"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(54.417419%, 30.619812%, 70.875549%)"
          offset="0.242188"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(55.062866%, 30.178833%, 70.603943%)"
          offset="0.246094"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(55.708313%, 29.737854%, 70.333862%)"
          offset="0.25"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(56.35376%, 29.296875%, 70.062256%)"
          offset="0.253906"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(56.999207%, 28.855896%, 69.792175%)"
          offset="0.257812"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(57.644653%, 28.413391%, 69.520569%)"
          offset="0.261719"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(58.291626%, 27.972412%, 69.250488%)"
          offset="0.265625"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(58.937073%, 27.531433%, 68.978882%)"
          offset="0.269531"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(59.58252%, 27.090454%, 68.708801%)"
          offset="0.273438"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(60.227966%, 26.649475%, 68.437195%)"
          offset="0.277344"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(60.873413%, 26.208496%, 68.167114%)"
          offset="0.28125"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(61.51886%, 25.767517%, 67.895508%)"
          offset="0.285156"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(62.164307%, 25.326538%, 67.625427%)"
          offset="0.289063"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(62.809753%, 24.885559%, 67.353821%)"
          offset="0.292969"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(63.4552%, 24.44458%, 67.08374%)"
          offset="0.296875"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(64.100647%, 24.003601%, 66.812134%)"
          offset="0.300781"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(64.746094%, 23.562622%, 66.542053%)"
          offset="0.304688"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(65.391541%, 23.121643%, 66.270447%)"
          offset="0.308594"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(66.038513%, 22.680664%, 66.000366%)"
          offset="0.3125"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(66.68396%, 22.238159%, 65.72876%)"
          offset="0.316406"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(67.329407%, 21.79718%, 65.458679%)"
          offset="0.320313"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(67.974854%, 21.356201%, 65.187073%)"
          offset="0.324219"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(68.6203%, 20.915222%, 64.916992%)"
          offset="0.328125"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(69.265747%, 20.474243%, 64.646912%)"
          offset="0.332031"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(69.911194%, 20.033264%, 64.376831%)"
          offset="0.335938"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(70.556641%, 19.592285%, 64.105225%)"
          offset="0.339844"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(71.202087%, 19.151306%, 63.835144%)"
          offset="0.34375"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(71.847534%, 18.710327%, 63.563538%)"
          offset="0.347656"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(72.494507%, 18.269348%, 63.293457%)"
          offset="0.351563"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(73.139954%, 17.828369%, 63.021851%)"
          offset="0.355469"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(73.7854%, 17.38739%, 62.75177%)"
          offset="0.359375"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(74.430847%, 16.946411%, 62.480164%)"
          offset="0.363281"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(75.076294%, 16.505432%, 62.210083%)"
          offset="0.367188"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(75.721741%, 16.064453%, 61.938477%)"
          offset="0.371094"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(76.367188%, 15.623474%, 61.668396%)"
          offset="0.375"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(77.012634%, 15.180969%, 61.39679%)"
          offset="0.378906"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(77.658081%, 14.73999%, 61.126709%)"
          offset="0.382813"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(78.303528%, 14.299011%, 60.855103%)"
          offset="0.386719"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(78.9505%, 13.858032%, 60.585022%)"
          offset="0.390625"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(79.595947%, 13.417053%, 60.313416%)"
          offset="0.394531"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(80.241394%, 12.976074%, 60.043335%)"
          offset="0.398438"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(80.886841%, 12.535095%, 59.771729%)"
          offset="0.402344"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(81.532288%, 12.094116%, 59.501648%)"
          offset="0.40625"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(82.177734%, 11.653137%, 59.230042%)"
          offset="0.410156"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(82.823181%, 11.212158%, 58.959961%)"
          offset="0.414063"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(83.468628%, 10.771179%, 58.68988%)"
          offset="0.417969"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(84.114075%, 10.3302%, 58.4198%)"
          offset="0.421875"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(84.759521%, 9.889221%, 58.148193%)"
          offset="0.425781"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(85.404968%, 9.448242%, 57.878113%)"
          offset="0.429688"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(86.050415%, 9.005737%, 57.606506%)"
          offset="0.433594"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(86.697388%, 8.564758%, 57.336426%)"
          offset="0.4375"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(87.342834%, 8.123779%, 57.064819%)"
          offset="0.441406"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(87.988281%, 7.6828%, 56.794739%)"
          offset="0.445312"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(88.633728%, 7.241821%, 56.523132%)"
          offset="0.449219"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(89.279175%, 6.800842%, 56.253052%)"
          offset="0.453125"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(89.924622%, 6.359863%, 55.981445%)"
          offset="0.457031"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(90.570068%, 5.918884%, 55.711365%)"
          offset="0.460938"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(90.647888%, 6.401062%, 55.465698%)"
          offset="0.464844"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(90.727234%, 6.88324%, 55.221558%)"
          offset="0.46875"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(90.792847%, 7.385254%, 54.977417%)"
          offset="0.472656"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(90.858459%, 7.888794%, 54.734802%)"
          offset="0.476562"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(90.922546%, 8.390808%, 54.490662%)"
          offset="0.480469"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(90.988159%, 8.894348%, 54.246521%)"
          offset="0.484375"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(91.053772%, 9.396362%, 54.00238%)"
          offset="0.488281"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(91.119385%, 9.899902%, 53.75824%)"
          offset="0.492188"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(91.184998%, 10.403442%, 53.514099%)"
          offset="0.496094"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(91.25061%, 10.906982%, 53.271484%)"
          offset="0.5"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(91.314697%, 11.408997%, 53.027344%)"
          offset="0.503906"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(91.38031%, 11.912537%, 52.783203%)"
          offset="0.507812"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(91.445923%, 12.414551%, 52.539062%)"
          offset="0.511719"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(91.511536%, 12.918091%, 52.294922%)"
          offset="0.515625"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(91.577148%, 13.421631%, 52.050781%)"
          offset="0.519531"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(91.642761%, 13.925171%, 51.808167%)"
          offset="0.523438"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(91.706848%, 14.427185%, 51.564026%)"
          offset="0.527344"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(91.772461%, 14.930725%, 51.319885%)"
          offset="0.53125"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(91.838074%, 15.432739%, 51.075745%)"
          offset="0.535156"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(91.903687%, 15.936279%, 50.831604%)"
          offset="0.539062"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(91.969299%, 16.438293%, 50.587463%)"
          offset="0.542969"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(92.034912%, 16.941833%, 50.343323%)"
          offset="0.546875"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(92.098999%, 17.445374%, 50.099182%)"
          offset="0.550781"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(92.164612%, 17.948914%, 49.856567%)"
          offset="0.554688"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(92.230225%, 18.450928%, 49.612427%)"
          offset="0.558594"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(92.295837%, 18.954468%, 49.368286%)"
          offset="0.5625"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(92.36145%, 19.456482%, 49.124146%)"
          offset="0.566406"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(92.427063%, 19.960022%, 48.880005%)"
          offset="0.570312"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(92.49115%, 20.462036%, 48.635864%)"
          offset="0.574219"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(92.556763%, 20.965576%, 48.39325%)"
          offset="0.578125"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(92.622375%, 21.469116%, 48.149109%)"
          offset="0.582031"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(92.687988%, 21.972656%, 47.904968%)"
          offset="0.585938"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(92.753601%, 22.47467%, 47.660828%)"
          offset="0.589844"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(92.819214%, 22.97821%, 47.416687%)"
          offset="0.59375"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(92.883301%, 23.480225%, 47.172546%)"
          offset="0.597656"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(92.948914%, 23.983765%, 46.928406%)"
          offset="0.601562"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(93.014526%, 24.485779%, 46.684265%)"
          offset="0.605469"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(93.080139%, 24.989319%, 46.44165%)"
          offset="0.609375"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(93.145752%, 25.492859%, 46.19751%)"
          offset="0.613281"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(93.211365%, 25.996399%, 45.953369%)"
          offset="0.617188"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(93.275452%, 26.498413%, 45.709229%)"
          offset="0.621094"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(93.341064%, 27.001953%, 45.465088%)"
          offset="0.625"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(93.406677%, 27.503967%, 45.220947%)"
          offset="0.628906"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(93.47229%, 28.007507%, 44.978333%)"
          offset="0.632812"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(93.537903%, 28.509521%, 44.734192%)"
          offset="0.636719"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(93.603516%, 29.013062%, 44.490051%)"
          offset="0.640625"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(93.667603%, 29.516602%, 44.245911%)"
          offset="0.644531"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(93.733215%, 30.020142%, 44.00177%)"
          offset="0.648438"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(93.798828%, 30.522156%, 43.757629%)"
          offset="0.652344"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(93.864441%, 31.025696%, 43.515015%)"
          offset="0.65625"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(93.930054%, 31.52771%, 43.270874%)"
          offset="0.660156"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(93.995667%, 32.03125%, 43.026733%)"
          offset="0.664062"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(94.059753%, 32.53479%, 42.782593%)"
          offset="0.667969"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(94.125366%, 33.03833%, 42.538452%)"
          offset="0.671875"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(94.190979%, 33.540344%, 42.294312%)"
          offset="0.675781"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(94.256592%, 34.043884%, 42.050171%)"
          offset="0.679687"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(94.322205%, 34.545898%, 41.80603%)"
          offset="0.683594"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(94.387817%, 35.049438%, 41.563416%)"
          offset="0.6875"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(94.451904%, 35.551453%, 41.319275%)"
          offset="0.691406"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(94.517517%, 36.054993%, 41.075134%)"
          offset="0.695312"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(94.58313%, 36.558533%, 40.830994%)"
          offset="0.699219"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(94.648743%, 37.062073%, 40.586853%)"
          offset="0.703125"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(94.714355%, 37.564087%, 40.342712%)"
          offset="0.707031"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(94.779968%, 38.067627%, 40.100098%)"
          offset="0.710937"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(94.844055%, 38.569641%, 39.855957%)"
          offset="0.714844"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(94.909668%, 39.073181%, 39.611816%)"
          offset="0.71875"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(94.975281%, 39.575195%, 39.367676%)"
          offset="0.722656"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(95.040894%, 40.078735%, 39.123535%)"
          offset="0.726562"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(95.106506%, 40.582275%, 38.879395%)"
          offset="0.730469"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(95.172119%, 41.085815%, 38.635254%)"
          offset="0.734375"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(95.236206%, 41.58783%, 38.391113%)"
          offset="0.738281"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(95.301819%, 42.09137%, 38.148499%)"
          offset="0.742187"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(95.367432%, 42.593384%, 37.904358%)"
          offset="0.746094"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(95.433044%, 43.096924%, 37.660217%)"
          offset="0.75"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(95.498657%, 43.598938%, 37.416077%)"
          offset="0.753906"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(95.56427%, 44.102478%, 37.171936%)"
          offset="0.757812"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(95.628357%, 44.606018%, 36.927795%)"
          offset="0.761719"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(95.69397%, 45.109558%, 36.685181%)"
          offset="0.765625"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(95.759583%, 45.611572%, 36.44104%)"
          offset="0.769531"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(95.825195%, 46.115112%, 36.196899%)"
          offset="0.773438"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(95.890808%, 46.617126%, 35.952759%)"
          offset="0.777344"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(95.956421%, 47.120667%, 35.708618%)"
          offset="0.78125"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(96.020508%, 47.622681%, 35.464478%)"
          offset="0.785156"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(96.086121%, 48.126221%, 35.221863%)"
          offset="0.789062"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(96.151733%, 48.629761%, 34.977722%)"
          offset="0.792969"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(96.217346%, 49.133301%, 34.733582%)"
          offset="0.796875"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(96.282959%, 49.635315%, 34.489441%)"
          offset="0.800781"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(96.348572%, 50.138855%, 34.2453%)"
          offset="0.804688"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(96.412659%, 50.640869%, 34.00116%)"
          offset="0.808594"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(96.478271%, 51.144409%, 33.757019%)"
          offset="0.8125"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(96.543884%, 51.647949%, 33.512878%)"
          offset="0.816406"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(96.609497%, 52.151489%, 33.270264%)"
          offset="0.820312"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(96.67511%, 52.653503%, 33.026123%)"
          offset="0.824219"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(96.740723%, 53.157043%, 32.781982%)"
          offset="0.828125"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(96.806335%, 53.659058%, 32.537842%)"
          offset="0.832031"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(96.871948%, 54.162598%, 32.293701%)"
          offset="0.835938"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(96.936035%, 54.664612%, 32.049561%)"
          offset="0.839844"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(97.001648%, 55.168152%, 31.806946%)"
          offset="0.84375"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(97.067261%, 55.671692%, 31.562805%)"
          offset="0.847656"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(97.132874%, 56.175232%, 31.318665%)"
          offset="0.851562"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(97.198486%, 56.677246%, 31.074524%)"
          offset="0.855469"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(97.264099%, 57.180786%, 30.830383%)"
          offset="0.859375"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(97.328186%, 57.6828%, 30.586243%)"
          offset="0.863281"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(97.393799%, 58.18634%, 30.342102%)"
          offset="0.867188"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(97.459412%, 58.688354%, 30.097961%)"
          offset="0.871094"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(97.525024%, 59.191895%, 29.855347%)"
          offset="0.875"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(97.590637%, 59.695435%, 29.611206%)"
          offset="0.878906"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(97.65625%, 60.198975%, 29.367065%)"
          offset="0.882812"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(97.720337%, 60.700989%, 29.122925%)"
          offset="0.886719"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(97.78595%, 61.204529%, 28.878784%)"
          offset="0.890625"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(97.851562%, 61.706543%, 28.634644%)"
          offset="0.894531"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(97.917175%, 62.210083%, 28.392029%)"
          offset="0.898438"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(97.982788%, 62.712097%, 28.147888%)"
          offset="0.902344"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(98.048401%, 63.215637%, 27.903748%)"
          offset="0.90625"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(98.112488%, 63.719177%, 27.659607%)"
          offset="0.910156"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(98.178101%, 64.222717%, 27.415466%)"
          offset="0.914062"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(98.243713%, 64.724731%, 27.171326%)"
          offset="0.917969"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(98.309326%, 65.228271%, 26.928711%)"
          offset="0.921875"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(98.374939%, 65.730286%, 26.68457%)"
          offset="0.925781"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(98.440552%, 66.233826%, 26.44043%)"
          offset="0.929688"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(98.504639%, 66.73584%, 26.196289%)"
          offset="0.933594"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(98.570251%, 67.23938%, 25.952148%)"
          offset="0.9375"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(98.635864%, 67.74292%, 25.708008%)"
          offset="0.941406"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(98.701477%, 68.24646%, 25.463867%)"
          offset="0.945312"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(98.750305%, 68.621826%, 25.280762%)"
          offset="0.949219"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(98.799133%, 68.998718%, 25.099182%)"
          offset="0.953125"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(98.799133%, 68.998718%, 25.099182%)"
          offset="0.96875"
        />
        <stop
          stop-opacity="1"
          stop-color="rgb(98.799133%, 68.998718%, 25.099182%)"
          offset="1"
        />
      </linearGradient>
    </defs>
    <g clip-path="url(#d00feab1d1)">
      <g clip-path="url(#7e582bcdaa)">
        <path
          fill="url(#19f0f1b72c)"
          d="M 33.035156 83.996094 L 33.035156 299.546875 L 342.128906 299.546875 L 342.128906 83.996094 Z M 33.035156 83.996094 "
          fill-rule="nonzero"
        />
      </g>
    </g>
  </svg>
);
export default SVGComponent;
