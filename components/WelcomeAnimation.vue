<template>
  <svg
    width="480"
    height="480"
    viewBox="0 0 580 580"
    class="mt-12 md:mt-24 md:ml-24 scale-[0.7] md:scale-100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line
      x1="296.999"
      y1="1.19352"
      x2="16.3797"
      y2="378.522"
      stroke="black"
      stroke-width="4"
    />
    <line
      x1="404.523"
      y1="81.159"
      x2="123.903"
      y2="458.488"
      stroke="black"
      stroke-width="4"
    />
    <line
      x1="512.046"
      y1="161.124"
      x2="231.427"
      y2="538.453"
      stroke="black"
      stroke-width="4"
    />
    <line
      x1="81.1589"
      y1="173.715"
      x2="458.488"
      y2="454.335"
      stroke="black"
      stroke-width="4"
    />
    <line
      x1="1.19352"
      y1="281.239"
      x2="378.522"
      y2="561.858"
      stroke="black"
      stroke-width="4"
    />
    <line
      x1="161.124"
      y1="66.1913"
      x2="538.453"
      y2="346.811"
      stroke="black"
      stroke-width="4"
    />
    <line
      x1="350.761"
      y1="41.1761"
      x2="70.1414"
      y2="418.505"
      stroke="black"
      stroke-width="4"
    />
    <line
      x1="458.285"
      y1="121.142"
      x2="177.665"
      y2="498.47"
      stroke="black"
      stroke-width="4"
    />
    <line
      x1="565.808"
      y1="201.107"
      x2="285.189"
      y2="578.436"
      stroke="black"
      stroke-width="4"
    />
    <line
      x1="121.142"
      y1="119.953"
      x2="498.47"
      y2="400.573"
      stroke="black"
      stroke-width="4"
    />
    <line
      x1="41.1764"
      y1="227.477"
      x2="418.505"
      y2="508.096"
      stroke="black"
      stroke-width="4"
    />
    <line
      x1="201.107"
      y1="12.4294"
      x2="578.436"
      y2="293.049"
      stroke="black"
      stroke-width="4"
    />
    <circle
      cx="473.34"
      cy="212.786"
      r="11.0277"
      fill="#DBAEFF"
      stroke="black"
      class="moving-dot-right"
      stroke-width="4"
    />
    <circle
      cx="271.1"
      cy="147.027"
      r="11.0277"
      fill="white"
      stroke="black"
      stroke-width="4"
      class="moving-dot-right"
    />
    <circle
      cx="447.285"
      cy="361.674"
      r="11.0277"
      fill="#FFB800"
      stroke="black"
      stroke-width="4"
      class="moving-dot-right"
    />
    <circle
      cx="205.342"
      cy="349.267"
      r="11.0277"
      fill="#A8FFD5"
      stroke="black"
      stroke-width="4"
      class="moving-dot-right"
    />
    <circle
      cx="273.582"
      cy="483.266"
      r="11.0277"
      fill="#FFF6A8"
      stroke="black"
      stroke-width="4"
      class="moving-dot-left"
    />
    <circle
      cx="339.341"
      cy="282.267"
      r="11.0277"
      fill="#FF5E5E"
      stroke="black"
      stroke-width="4"
      class="moving-dot-left"
    />
    <circle
      cx="57.6942"
      cy="325.693"
      r="11.0277"
      fill="#FAFF0B"
      stroke="black"
      stroke-width="4"
      class="moving-dot-right"
    />
    <circle
      cx="179.286"
      cy="161.916"
      r="11.0277"
      fill="#FFA8EC"
      stroke="black"
      stroke-width="4"
      class="moving-dot-left"
    />
  </svg>
</template>

<style scoped>
.moving-dot-right {
  animation: dot-move-right 8s ease-in-out infinite;
}

.moving-dot-left {
  animation: dot-move-left 8s ease-in-out infinite;
}

@keyframes dot-move-right {
  0%,
  100% {
    transform: translateX(0) translateY(0);
  }
  50% {
    transform: translateX(10%) translateY(8%);
  }
}

@keyframes dot-move-left {
  0%,
  100% {
    transform: translateX(0) translateY(0);
  }
  50% {
    transform: translateX(-10%) translateY(-8%);
  }
}
</style>
