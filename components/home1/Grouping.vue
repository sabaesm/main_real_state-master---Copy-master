<template>
  <div class="grouping-main-section ">
    <h4>دسته بندی</h4>
    <h2>دسته بندی ملک ها</h2>
    <div class="cards">
      <ul v-for="user in users" :key="user.id" class="grouping_card">
        <li class="main pa-0">
          <img :src="user.img" />
            <div class="card_icons" v-if="user.kind === 'first'">
              <svg
                width="68"
                height="68"
                viewBox="0 0 68 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_416_1583)">
                  <circle cx="34" cy="34" r="25" fill="white" />
                </g>
                <path
                  d="M22.25 44.75H44.75"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M36.8863 44.7388L23.3863 44.7613L23.375 27.9538C23.375 27.2001 23.7575 26.5025 24.3763 26.0863L28.8763 23.0826C29.63 22.5763 30.62 22.5763 31.3737 23.0826L35.8737 26.0863C36.5037 26.5025 36.875 27.2001 36.875 27.9538L36.8863 44.7388Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M42.4775 44.7613V40.25"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M42.5 33.5C41.2625 33.5 40.25 34.5125 40.25 35.75V38C40.25 39.2375 41.2625 40.25 42.5 40.25C43.7375 40.25 44.75 39.2375 44.75 38V35.75C44.75 34.5125 43.7375 33.5 42.5 33.5Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M23.375 35.75H36.875"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M30.125 44.75V40.5312"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M30.125 31.8125C31.057 31.8125 31.8125 31.057 31.8125 30.125C31.8125 29.193 31.057 28.4375 30.125 28.4375C29.193 28.4375 28.4375 29.193 28.4375 30.125C28.4375 31.057 29.193 31.8125 30.125 31.8125Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <filter
                    id="filter0_d_416_1583"
                    x="0"
                    y="0"
                    width="68"
                    height="68"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feMorphology
                      radius="3"
                      operator="erode"
                      in="SourceAlpha"
                      result="effect1_dropShadow_416_1583"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="6" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_416_1583"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_416_1583"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
          </div>
          <div class="card_icons" v-else-if="user.kind === 'second'">
              <svg
                width="68"
                height="68"
                viewBox="0 0 68 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_416_1520)">
                  <circle cx="34" cy="34" r="25" fill="white" />
                </g>
                <path
                  d="M34.625 44.75H25.625C23.375 44.75 22.25 43.625 22.25 41.375V32.375C22.25 30.125 23.375 29 25.625 29H31.25V41.375C31.25 43.625 32.375 44.75 34.625 44.75Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M31.3737 24.5C31.2837 24.8375 31.25 25.2087 31.25 25.625V29H25.625V26.75C25.625 25.5125 26.6375 24.5 27.875 24.5H31.3737Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M35.75 29V34.625"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M40.25 29V34.625"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M39.125 39.125H36.875C36.2562 39.125 35.75 39.6313 35.75 40.25V44.75H40.25V40.25C40.25 39.6313 39.7437 39.125 39.125 39.125Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M26.75 34.625V39.125"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M31.25 41.375V25.625C31.25 23.375 32.375 22.25 34.625 22.25H41.375C43.625 22.25 44.75 23.375 44.75 25.625V41.375C44.75 43.625 43.625 44.75 41.375 44.75H34.625C32.375 44.75 31.25 43.625 31.25 41.375Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <filter
                    id="filter0_d_416_1520"
                    x="0"
                    y="0"
                    width="68"
                    height="68"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feMorphology
                      radius="3"
                      operator="erode"
                      in="SourceAlpha"
                      result="effect1_dropShadow_416_1520"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="6" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_416_1520"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_416_1520"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
          </div>
          <div class="card_icons" v-else-if="user.kind === 'third'">
              <svg
                width="68"
                height="68"
                viewBox="0 0 68 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_416_1552)">
                  <circle cx="34" cy="34" r="25" fill="white" />
                </g>
                <path
                  d="M22.25 44.75H44.75"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M23.3188 44.7499L23.3751 31.2161C23.3751 30.5299 23.7013 29.8775 24.2413 29.45L32.1163 23.3187C32.9263 22.6887 34.0626 22.6887 34.8838 23.3187L42.7588 29.4387C43.3101 29.8662 43.6251 30.5186 43.6251 31.2161V44.7499"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linejoin="round"
                />
                <path
                  d="M34.625 39.125H32.375C31.4413 39.125 30.6875 39.8788 30.6875 40.8125V44.75H36.3125V40.8125C36.3125 39.8788 35.5587 39.125 34.625 39.125Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linejoin="round"
                />
                <path
                  d="M30.6875 35.4688H28.4375C27.8187 35.4688 27.3125 34.9625 27.3125 34.3438V32.6563C27.3125 32.0375 27.8187 31.5312 28.4375 31.5312H30.6875C31.3062 31.5312 31.8125 32.0375 31.8125 32.6563V34.3438C31.8125 34.9625 31.3062 35.4688 30.6875 35.4688Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linejoin="round"
                />
                <path
                  d="M38.5625 35.4688H36.3125C35.6937 35.4688 35.1875 34.9625 35.1875 34.3438V32.6563C35.1875 32.0375 35.6937 31.5312 36.3125 31.5312H38.5625C39.1813 31.5312 39.6875 32.0375 39.6875 32.6563V34.3438C39.6875 34.9625 39.1813 35.4688 38.5625 35.4688Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linejoin="round"
                />
                <path
                  d="M41.3751 27.875L41.3414 24.5H36.3914"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <filter
                    id="filter0_d_416_1552"
                    x="0"
                    y="0"
                    width="68"
                    height="68"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feMorphology
                      radius="3"
                      operator="erode"
                      in="SourceAlpha"
                      result="effect1_dropShadow_416_1552"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="6" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_416_1552"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_416_1552"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
          </div>
          <div class="pa-3 ma-0 d-flex flex-row justify-space-between categury_detailes  ">
            <p class="pa-0 ma-0">
              {{ user.name }}
            </p>
            <span class="number"> {{ user.number }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["users"]),
};
</script>
<style scoped>
.grouping-main-section {
  box-sizing: border-box;
  padding: 50px;
  background-color: #F7F9FC;
}

.grouping_card {
  width: calc(33.333% - 20px);
transition: all ease-in-out .3s
}
p {
  font-weight: 100;
  font-size: 10px;
}
h4 {
font-size: 21px;
font-weight: 700;
line-height: 35px;
letter-spacing: -0.035em;
text-align: right;
color: #519FFF;
margin: 0 40px !important;
}
h2 {
  color: #121939!important;
font-size: 37px;
font-weight: 800;
line-height: 61px;
letter-spacing: -0.035em;
text-align: right;
margin: 0 40px 40px 40px !important;
}
.main {
  position: relative;
  margin: 20px;
  display: flex;
  justify-content: center;
   border-radius: 18px;
   overflow: hidden;
   transition: all ease-in-out .3s
}
.main img {
  width: 100%;
  height: 243px;
  object-fit: cover;
}
.main:hover{
filter: drop-shadow(0px 9px 16px rgba(0, 0, 0, 0.19));
transform: translateY(-10px);

}
.grouping_card .main:hover .categury_detailes{
opacity: 1;

}
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.categury_detailes{
background-color: #ffff;
width: 90%!important;
position: absolute;
bottom: 20px;
margin: 10px;
display: flex ;
align-items:center ;
justify-content: center;
text-align: center;
opacity: .9;
border-radius: 18px;
}
.categury_detailes p{
font-size: 23px;
font-weight: 700;
line-height: 38px;
letter-spacing: -0.04em;
text-align: right;

}
.number {
  font-weight: 100px;
  color: #969595;
  font-size: 12px;
}
.card_icons svg{
height: 50px;
width: 50px;
}
.card_icons {
position: absolute;
top: 10px!important;
right: 10px!important;

height: 30px;
width: 30px;
}
@media screen and (max-width: 960px) {
.grouping_card {
  min-width: 400px;

}
.cards {
  display: flex;
  flex-wrap: nowrap;
  overflow-y: scroll;
}
h2,h4{
text-align: center;
}
h4{
font-family: IRANYekanWeb;
font-size: 13px;
font-weight: 700;
line-height: 22px;
letter-spacing: -0.035em;
}
h2{
font-family: IRANYekanWeb;
font-size: 18px;
font-weight: 800;
line-height: 30px;
letter-spacing: -0.035em;
}
}
</style>
