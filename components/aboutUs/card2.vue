<template>
<div class="medium_container">
<v-col  class="mainCard " cols="12"  >
<v-row  class=" flex-column flex-md-row">
<v-col cols="12" md="6" class="pictur"> 
<img src="https://picsum.photos/200"/>
</v-col>
<v-col class="left_section " col="12" md="6" >
<v-row class="bio  my-5 ">
 <span class="bio_info">
 <img src="../../assets/images/person.png" alt="">
 </span> 
 <span class=" manage_title d-none d-md-flex">  به مدیریت : </span>
  <span class="manage d-none d-md-flex" > اشکان صامتی  </span>
 </v-row>
<h4 class="my-4" >   ما مدرن ترین خدمات را ارایه میدهیم </h4>
<p class="paragraf m-0" >
 لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
 لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجلهلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجلهلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
</p>
</v-col>
</v-row>
</v-col>
</div>
</template>
<style scoped>
/* No CSS *//*# sourceMappingURL=card.css.map */
.mainCard{
    background-color: #ffff;
box-shadow: 0px 0px 5px -3px ;
    border-radius: 20px;
    margin-top: -70px ;
}
.pictur img{
    width: 100%;
    border-top-right-radius: 20px;
     border-bottom-right-radius: 20px;
      height: 450px;
}
.left_section{
position: sticky;
}
.bio{
    width: 100%;
    display: flex;
    align-items: center;
    color: rgb(0, 0, 0);
    font-size: 20px;
    font-weight: 400; 
    margin-right: -75px;
    
}
.bio .bio_info{
    border-radius: 100%;
    background-color: rgb(255, 255, 255, .5);
    display: flex;
    align-items: center;
    justify-content: center;
    padding:  5px;
}
.bio .bio_info img{
    width: 100px;
      border-radius: 100%;
      border: 5px solid #ffff;
  }
.manage{
font-size: 22px;
font-style: normal;
font-weight: 800;
line-height: 36px;
letter-spacing: -0.01em;
text-align: right;
}
.mainCard p{
     color: #9B9B9B;
     font-size: 15px ;
font-size: 15px;
font-style: normal;
font-weight: 400;
letter-spacing: -0.01em;
line-height: 30px;
text-overflow: ellipsis;
}
.mainCard h4{

    font-style: normal;
font-weight: 800;
color: #242424;
font-size: 25px;
font-style: normal;
letter-spacing: -0.03em;
text-align: right!important;

}
@media only screen and (max-width: 960px) {
.manage_title,.manage{
display: none!important;
}
.mainCard{
height: 600px;

}
.pictur img{
  height: 250px;
  border-radius: 20px;
}

 .mainCard .left_section{

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-top: -100px;

}
.bio{
display: flex;
flex-direction: column;
align-items: center;
align-items: center;
justify-content: center;


}
.bio_info{
text-align: center;
}
.bio .bio_info img{
    width: 100%;
      border-radius: 100%;
      border: none;
  }
  .bio .bio_info{
    width: 80px;
    border-radius: 100%;
    background-color: rgba(255, 255, 255, 0);
    padding:  5px;
}
h4{
text-align: center!important;
font-size: 13px;
font-style: normal;
font-weight: 800;
line-height: 22px;
letter-spacing: -0.03em;
}
 .mainCard p{
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: 17px;
letter-spacing: -0.02em;
text-align: right;
}
}
@media only screen and (max-width: 1300px) {
h4{

text-align: center!important;
font-size: 20px!important;

}
.manage{
font-size: 15px;}
}
</style>