<template>
  <div class="left__main__card">
    <v-row class="">
      <v-col cols="12" class="pa-0 ma-0">
        <ul class="offer__cards d-flex flex-row ">
          <li  class="pa-3 offer__card__items d-flex flex-row">
          <v-col cols="5 7 pa-0 ma-0">
            <div class="top_card">
              <a href="#">
                  <img :src="img" alt="" />                               
              </a>
              <div class="topcard__top__section">
                <div class="status d-flex flex-row align-center justify-center  px-3">
                  <span class="sale__product d-flex align-center justify-center flex-row">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.5846 20.1665H6.41797C6.04214 20.1665 5.73047 19.8548 5.73047 19.479C5.73047 19.1032 6.04214 18.7915 6.41797 18.7915H15.5846C15.9605 18.7915 16.2721 19.1032 16.2721 19.479C16.2721 19.8548 15.9605 20.1665 15.5846 20.1665Z"
                        fill="white"
                      />
                      <path
                        d="M18.6529 5.06012L14.9862 7.68178C14.5004 8.03012 13.8037 7.81928 13.5929 7.26012L11.8604 2.64012C11.5671 1.84262 10.4396 1.84262 10.1462 2.64012L8.40457 7.25095C8.19374 7.81928 7.50624 8.03012 7.0204 7.67262L3.35374 5.05095C2.6204 4.53762 1.64874 5.26178 1.95124 6.11428L5.76457 16.7935C5.8929 17.1601 6.24124 17.3985 6.62624 17.3985H15.3621C15.7471 17.3985 16.0954 17.151 16.2237 16.7935L20.0371 6.11428C20.3487 5.26178 19.3771 4.53762 18.6529 5.06012ZM13.2904 13.521H8.70707C8.33124 13.521 8.01957 13.2093 8.01957 12.8335C8.01957 12.4576 8.33124 12.146 8.70707 12.146H13.2904C13.6662 12.146 13.9779 12.4576 13.9779 12.8335C13.9779 13.2093 13.6662 13.521 13.2904 13.521Z"
                        fill="white"
                      />
                    </svg>
                    <span class="salecard_product__text"> {{ product }}</span>
                  </span>
                  <span class="sale__status">{{ status }}</span>
                </div>
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_1288_8019)">
                    <rect x="15" y="15" width="34" height="34" rx="9" fill="white" />
                  </g>
                  <path
                    d="M23.668 40.3335H40.3346"
                    stroke="#535353"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M34.5083 40.3249L24.5083 40.3416L24.5 27.8916C24.5 27.3332 24.7833 26.8165 25.2417 26.5082L28.575 24.2832C29.1333 23.9082 29.8667 23.9082 30.425 24.2832L33.7583 26.5082C34.225 26.8165 34.5 27.3332 34.5 27.8916L34.5083 40.3249Z"
                    stroke="#535353"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M38.6484 40.3417V37"
                    stroke="#535353"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M38.6667 32C37.75 32 37 32.75 37 33.6667V35.3333C37 36.25 37.75 37 38.6667 37C39.5833 37 40.3333 36.25 40.3333 35.3333V33.6667C40.3333 32.75 39.5833 32 38.6667 32Z"
                    stroke="#535353"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M24.5 33.6665H34.5"
                    stroke="#535353"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M29.5 40.3335V37.2085"
                    stroke="#535353"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M29.5 30.75C30.1904 30.75 30.75 30.1904 30.75 29.5C30.75 28.8096 30.1904 28.25 29.5 28.25C28.8096 28.25 28.25 28.8096 28.25 29.5C28.25 30.1904 28.8096 30.75 29.5 30.75Z"
                    stroke="#535353"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <filter
                      id="filter0_d_1288_8019"
                      x="0"
                      y="0"
                      width="64"
                      height="64"
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
                      <feOffset />
                      <feGaussianBlur stdDeviation="7.5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1288_8019"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1288_8019"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <span class="hover__icon_bottom">
                <div class="counter d-flex flex-column align-center pa-2">
                  <span>6</span>
                  <span
                    ><svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.82496 17.4168H14.1776C16.6408 17.4168 17.6224 16.0789 17.7384 14.4481L18.2025 7.90891C18.3275 6.19891 16.7925 4.75016 14.8559 4.75016C14.3115 4.75016 13.8117 4.47308 13.5619 4.04558L12.9193 2.89766C12.5088 2.17725 11.4379 1.5835 10.5276 1.5835H8.48393C7.56472 1.5835 6.49381 2.17725 6.08329 2.89766L5.44074 4.04558C5.19086 4.47308 4.69109 4.75016 4.14671 4.75016C2.21013 4.75016 0.67515 6.19891 0.80009 7.90891L1.26415 14.4481C1.37125 16.0789 2.36185 17.4168 4.82496 17.4168Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.4987 14.2498C11.2428 14.2498 12.6654 12.8273 12.6654 11.0832C12.6654 9.33907 11.2428 7.9165 9.4987 7.9165C7.7546 7.9165 6.33203 9.33907 6.33203 11.0832C6.33203 12.8273 7.7546 14.2498 9.4987 14.2498Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <span class="sale_date">{{ date}}</span>
              </span>
            </div>
            </v-col>
            <v-col cols="7 pa-0 ma-0">
            <div class="bottom_card">
              <h5 class="sale__desctiptipn py-2">
                {{detaile }}
              </h5>
              <ul class="home__desctiption">
                <li>{{area }}</li>
                <li>{{ room }}</li>
                <li>{{roof  }}</li>
                <li>{{new_version}}</li>
              </ul>
              <v-row class="price__row ma-0 px-0 py-2">
                <span class="value d-flex flex-row align-center">
                  <span>
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M8.84724 3.62993V5.99036C8.84724 7.40203 8.04057 8.00701 6.83057 8.00701H2.80182C2.59557 8.00701 2.39849 7.9887 2.21515 7.94745C2.10057 7.92912 1.99057 7.89703 1.88974 7.86037C1.20224 7.6037 0.785156 7.00786 0.785156 5.99036V3.62993C0.785156 2.21826 1.59182 1.61328 2.80182 1.61328H6.83057C7.85724 1.61328 8.59516 2.0487 8.79224 3.04328C8.82432 3.22661 8.84724 3.41451 8.84724 3.62993Z"
                        fill="#237E48"
                      />
                      <path
                        d="M10.2219 5.00511V7.36554C10.2219 8.7772 9.41526 9.38219 8.20526 9.38219H4.17651C3.83734 9.38219 3.53026 9.33638 3.26443 9.23555C2.71901 9.03388 2.34776 8.6168 2.21484 7.94763C2.39818 7.98888 2.59526 8.00719 2.80151 8.00719H6.83026C8.04026 8.00719 8.84693 7.4022 8.84693 5.99054V3.63011C8.84693 3.41469 8.8286 3.22221 8.79193 3.04346C9.66276 3.22679 10.2219 3.84094 10.2219 5.00511Z"
                        fill="#237E48"
                      />
                      <path
                        d="M4.81157 6.02255C5.47983 6.02255 6.02158 5.48081 6.02158 4.81255C6.02158 4.14428 5.47983 3.60254 4.81157 3.60254C4.1433 3.60254 3.60156 4.14428 3.60156 4.81255C3.60156 5.48081 4.1433 6.02255 4.81157 6.02255Z"
                        fill="#237E48"
                      />
                      <path
                        d="M2.19141 3.78125C2.00349 3.78125 1.84766 3.93708 1.84766 4.125V5.5C1.84766 5.68792 2.00349 5.84375 2.19141 5.84375C2.37932 5.84375 2.53516 5.68792 2.53516 5.5V4.125C2.53516 3.93708 2.38391 3.78125 2.19141 3.78125Z"
                        fill="#237E48"
                      />
                      <path
                        d="M7.42969 3.78125C7.24177 3.78125 7.08594 3.93708 7.08594 4.125V5.5C7.08594 5.68792 7.24177 5.84375 7.42969 5.84375C7.6176 5.84375 7.77344 5.68792 7.77344 5.5V4.125C7.77344 3.93708 7.62219 3.78125 7.42969 3.78125Z"
                        fill="#237E48"
                      />
                    </svg>
                  </span>
                  {{value  }}
                  <span class="toman">تومان</span>
                </span>
                <span class="sale_price">({{price }})</span>
              </v-row>
              <div class="sale_person__details d-flex flex-row w-100">
                <div class="sale_person d-flex flex-row">
                  <div class="sale_person__pictur">
                    <img :src="person__pic" />
                  </div>
                  <span class="d-flex flex-column pa-1">
                    <h5 class="pa-0 ma-0">{{ name }}</h5>
                    <p class=" pa-0 ma-0">{{ experience }}</p>
                  </span>
                </div>
                <div class="sale_contact_way pa-0 ma-0">
                  <svg
                    class="ml-2"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1.20312"
                      y="1.70801"
                      width="41.5"
                      height="41.5"
                      rx="13.25"
                      fill="#FFA80A"
                      fill-opacity="0.08"
                      stroke="#FFA80A"
                      stroke-width="1.5"
                    />
                    <path
                      d="M25.5942 13.9181L16.5642 16.9181C10.4942 18.9481 10.4942 22.2581 16.5642 24.2781L19.2442 25.1681L20.1342 27.8481C22.1542 33.9181 25.4742 33.9181 27.4942 27.8481L30.5042 18.8281C31.8442 14.7781 29.6442 12.5681 25.5942 13.9181ZM25.9142 19.2981L22.1142 23.1181C21.9642 23.2681 21.7742 23.3381 21.5842 23.3381C21.3942 23.3381 21.2042 23.2681 21.0542 23.1181C20.7642 22.8281 20.7642 22.3481 21.0542 22.0581L24.8542 18.2381C25.1442 17.9481 25.6242 17.9481 25.9142 18.2381C26.2042 18.5281 26.2042 19.0081 25.9142 19.2981Z"
                      fill="#FFA80A"
                    />
                  </svg>
                  <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect
                      x="1.20703"
                      y="1.70801"
                      width="41.5"
                      height="41.5"
                      rx="13.25"
                      fill="#0DA049"
                      fill-opacity="0.08"
                      stroke="#0DA049"
                      stroke-width="1.5"
                    />
                    <path
                      d="M27.077 21.7081C26.647 21.7081 26.307 21.3581 26.307 20.9381C26.307 20.5681 25.937 19.7981 25.317 19.1281C24.707 18.4781 24.037 18.0981 23.477 18.0981C23.047 18.0981 22.707 17.7481 22.707 17.3281C22.707 16.9081 23.057 16.5581 23.477 16.5581C24.477 16.5581 25.527 17.0981 26.447 18.0681C27.307 18.9781 27.857 20.1081 27.857 20.9281C27.857 21.3581 27.507 21.7081 27.077 21.7081Z"
                      fill="#0DA049"
                    />
                    <path
                      d="M30.6887 21.708C30.2587 21.708 29.9187 21.358 29.9187 20.938C29.9187 17.388 27.0287 14.508 23.4887 14.508C23.0587 14.508 22.7188 14.158 22.7188 13.738C22.7188 13.318 23.0588 12.958 23.4788 12.958C27.8788 12.958 31.4587 16.538 31.4587 20.938C31.4587 21.358 31.1087 21.708 30.6887 21.708Z"
                      fill="#0DA049"
                    />
                    <path
                      d="M20.507 25.908L18.657 27.758C18.267 28.148 17.647 28.148 17.247 27.768C17.137 27.658 17.027 27.558 16.917 27.448C15.887 26.408 14.957 25.318 14.127 24.178C13.307 23.038 12.647 21.898 12.167 20.768C11.697 19.628 11.457 18.538 11.457 17.498C11.457 16.818 11.577 16.168 11.817 15.568C12.057 14.958 12.437 14.398 12.967 13.898C13.607 13.268 14.307 12.958 15.047 12.958C15.327 12.958 15.607 13.018 15.857 13.138C16.117 13.258 16.347 13.438 16.527 13.698L18.847 16.968C19.027 17.218 19.157 17.448 19.247 17.668C19.337 17.878 19.387 18.088 19.387 18.278C19.387 18.518 19.317 18.758 19.177 18.988C19.047 19.218 18.857 19.458 18.617 19.698L17.857 20.488C17.747 20.598 17.697 20.728 17.697 20.888C17.697 20.968 17.707 21.038 17.727 21.118C17.757 21.198 17.787 21.258 17.807 21.318C17.987 21.648 18.297 22.078 18.737 22.598C19.187 23.118 19.667 23.648 20.187 24.178C20.287 24.278 20.397 24.378 20.497 24.478C20.897 24.868 20.907 25.508 20.507 25.908Z"
                      fill="#0DA049"
                    />
                    <path
                      d="M31.4275 29.288C31.4275 29.568 31.3775 29.858 31.2775 30.138C31.2475 30.218 31.2175 30.298 31.1775 30.378C31.0075 30.738 30.7875 31.078 30.4975 31.398C30.0075 31.938 29.4675 32.328 28.8575 32.578C28.8475 32.578 28.8375 32.588 28.8275 32.588C28.2375 32.828 27.5975 32.958 26.9075 32.958C25.8875 32.958 24.7975 32.718 23.6475 32.228C22.4975 31.738 21.3475 31.078 20.2075 30.248C19.8175 29.958 17.5575 28.038 17.1875 27.728L20.4575 24.458C20.7375 24.668 22.8575 26.458 23.0675 26.568C23.1175 26.588 23.1775 26.618 23.2475 26.648C23.3275 26.678 23.4075 26.688 23.4975 26.688C23.6675 26.688 23.7975 26.628 23.9075 26.518L24.6675 25.768C24.9175 25.518 25.1575 25.328 25.3875 25.208C25.6175 25.068 25.8475 24.998 26.0975 24.998C26.2875 24.998 26.4875 25.038 26.7075 25.128C26.9275 25.218 27.1575 25.348 27.4075 25.518L30.7175 27.868C30.9775 28.048 31.1575 28.258 31.2675 28.508C31.3675 28.758 31.4275 29.008 31.4275 29.288Z"
                      fill="#0DA049"
                    />
                  </svg>
                </div>
              </div>
            </div>
            </v-col>
          </li>
        </ul>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
 props:[
'img',
'product',
'status',
'date',
'detaile',
'area',
'room',
'roof',
'new_version',
'date',
'value',
'price',
'person__pic',
'person__pic',
 ],
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: -10,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".prev-button",
          prevEl: ".next-button",
        },
        breakpoints: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
    };
  },
};
</script>
<style scoped>
.left__main__card{
width: 100%;
}
.sale__card__items:hover .sale__desctiptipn {
color: #087cce!important;
}
.offer__cards {
  display: flex;
  flex-wrap: wrap;
  margin: 5px;
  width: 100%!important;
  justify-content: space-around;
  box-shadow: 0px 0px 34px -14px rgba(12, 46, 96, 0.25);
border-radius: 17px;
margin-top: 20px;
margin-bottom: 20px;

}
.sale__cards .offer__card__items {
  width: 100% !important;
  background-color: #fff;
  border-radius: 10px;
  margin: 5px;
  box-shadow: 0px 0px 34px -9px rgba(12, 46, 96, 0.25);
  margin-bottom: 30px;
}
.bottom_card{

}
.top_card {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  transition: all ease-in-out 0.3s;
    width: 100%;
  height: 240px;
}
.top_card a{
overflow: hidden!important;;
   border-radius: 10px;
   height: 100%!important;
     width: 100%;
     display: block;
}
.top_card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all ease-in-out 0.3s !important;
}
.top_card:hover img {
  transform: scale(1.1);
}

.top_card .topcard__top__section {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.sale__product {
  background: #ffa80a;
  font-size: 12px;
  font-style: normal;
  font-weight: 800;
  line-height: 20px;
  letter-spacing: -0.035em;
  text-align: right;
  color: #ffff;
  border-radius: 5px;
  padding: 10px;
  transition: all ease-in-out 0.3s !important;
}
.salecard_product__text {
  display: none;
  transition: all ease-in-out 0.3s !important;
}
.sale__product:hover .salecard_product__text {
  display: inline-block;
  transition: all ease-in-out 0.3s !important;
}
.status{
   transition: all ease-in-out 0.3s !important;
   
   }
.sale__status {
  background-color: #0a98ff;
  font-size: 12px;
  font-style: normal;
  font-weight: 800;
  line-height: 20px;
  letter-spacing: -0.035em;
  text-align: right;
  color: #ffff;
  border-radius: 5px;
  padding: 10px;

}
.top_card .hover__icon_bottom {
  position: absolute;
  right: 10px;
  left: 10px;
  bottom: -50%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  transition: all ease-in-out 0.3s;
  margin-bottom: 20px;
}
.top_card:hover .hover__icon_bottom {
  position: absolute;
  bottom: 0;
  transition: all ease-in-out 0.3s;
  padding-left: 10px;
}
.sale_date {
  background-color: #fff;
  border-radius: 5px;
  font-size: 12px;
  font-style: normal;
  font-weight: 800;
  line-height: 20px;
  letter-spacing: -0.035em;
  text-align: right;
  padding: 5px;
  position: absolute;
  left: 0;
}
.counter {
  background: #101737;
  color: #fff;
  border-radius: 5px;
  font-size: 12px;
}
.sale__desctiptipn {
  font-size: 20px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: -0.021em;
  text-align: right;
  color: #101737;
  transition: all ease-in-out .3s;
}
.home__desctiption {
  display: flex;
  width: 100%;
}
.home__desctiptionli {
  display: inline-block;
  width: 20%;
}
.shape {
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background: #c4c4c4;
}
.sale_price {
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: -0.021em;
  text-align: right;
  color: #818181;
}
.value {
  font-size: 23px;
  font-style: normal;
  font-weight: 800;
  line-height: 33px;
  letter-spacing: -0.021em;
  text-align: right;
}
.price {
  color: rgba(129, 129, 129, 1);
  font-size: 10px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.021em;
}
.price__row {
  display: flex;
  justify-content: space-between;
}
.toman {
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: -0.021em;
  text-align: right;
}
.sale_person__details {
  justify-content: space-between;
  align-items: center;
}
.sale_contact_way {
  display: flex;
  cursor: pointer;
}
.sale_contact_way svg {
  width: 45px;
}
.sale_person__pictur img {
  width: 40px;
  height: 40px;
  border-radius: 0;
}
.sale_person {
  display: flex;
  align-items: center;
}
.sale_person p {
  font-size: 11px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.021em;
  color: #b1b1b1;
}
.sale_person h5 {
  font-size: 15px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.035em;
  text-align: right;
  color: #101737;
}
@media  screen and (max-width: 760px) {
.offer__cards .offer__card__items {
  width: 90% !important;
}
}
@media  screen and (max-width: 600px) {
.sale__desctiptipn {
font-size: 13px;
font-weight: 400;
line-height: 19px;
letter-spacing: -0.021em;
}
.home__desctiption{
font-size: 11px;
font-weight: 400;
line-height: 16px;
letter-spacing: -0.021em;
}
.value svg{
width: 15px !important;
height: 15px !important;
}
.value{
font-size: 17px;
font-weight: 700;
line-height: 25px;
letter-spacing: -0.021em;
}
.toman{
font-size: 12px;
}
.sale_price{
font-size: 10px;
line-height: 15px;
letter-spacing: -0.021em;
text-align: right;
}
.sale_person__pictur{
height: 35px!important;
width: 35px!important;
}
.sale_person__pictur img{
height: 100%;
width: 100%;
}
.sale_person h5{
font-size: 10px;
}
.sale_person p{
font-size: 8px;
}
.sale_contact_way  svg{
height: 26px;
width: 26px;
}
.sale__status{
font-size: 10px;
}
.sale__product {
font-size: 10px;
}
.sale__product svg{
width: 20px;
height: 20px;
}
}
</style>
