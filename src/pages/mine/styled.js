import styled from "styled-components"

export const MineWrapper=styled.div`

.mine_Wraper{
    width: 100%;
    height: 100%;
    background: #ccc;
}
.header{
 width: 100%;
 height: 2.2rem ;
 background-image: linear-gradient(90deg,#0af,#0085ff);

}
 .header_xingxi{
    width: 100%;
    height: 2.2rem ;
   padding: 0.5rem 0.3rem;
   display: flex;
}
 .picture{
    width: 1.2rem;
    height: 1.2rem ;
    border:1px solid #ccc;
    border-radius: 100%; 
}

.mine_msg{
    width: 5.14rem;
    height: 1.2rem ;
    margin-left: 0.36rem;
    display:none;
}
.login_msg{
    width: 5.14rem;
    height: 1.2rem ;
    margin-left: 0.36rem;  
}

.header .header_xingxi i{
   display: block;
   width:0.30rem;
   font-size:0.3rem;
   color:white;
   line-height:0.94rem;
}
.header .header_xingxi p:nth-child(1){
    width: 5.14rem;
    height:0.5rem;
    margin-bottom:0.16rem;
    color: white;
}
.header .header_xingxi p:nth-child(1) span{
   font-size: 0.50rem;
   font-weight: bold;
}
.header .header_xingxi p:nth-child(2){
    width: 5.14rem;
    height:0.38rem;   
    color: white;
    margin-top:0.10rem;
}
.header .header_xingxi p:nth-child(2) i{
    display:block;
    float: left; 
    line-height:0.28rem;   
}
.header .header_xingxi p:nth-child(2) span{
    font-size:0.28rem ;
    float: left;  
}


.main_ifo{
    width: 100%;
    height: 1.67rem;
    background: white;
    display: flex;
    border-bottom: 1px solid #ccc;
    font-size: 0.27rem;
}
.main_ifo div{ 
    height: 1.68rem;
    text-align: center;
    font-size: 0.27rem; 
    padding:0.34rem 0 .22rem 0; 
}
.main_ifo div:nth-child(1){ 
width:49%;
border-right: 1px solid #ccc;
}
.main_ifo div:nth-child(2){ 
    width: 50%;
}
.hongBao{
    font-size: 0.56rem;
    color:rgb(255, 95, 62);
}
.jinBi{
    font-size: 0.56rem;
    color:rgb(106, 194, 11);
}


.adress{
    height:0.89rem;
    border-top:0.05px solid #ccc;
    border-bottom:0.05px solid #ccc;
    margin-top: 0.2rem;
    background: white;
    position: relative;
}
.adress_a{
   padding-left: 0.5rem;
   display: flex;
   line-height:0.89rem; 
}
.adress_i1{
    height: 0.36rem;
    width: 0.36rem;  
    font-size: 0.36rem;
}
.adress_p{
font-size: 0.32rem;
margin-left:0.2rem;
}
.adress_i2{
    height: 0.33rem;
    width: 0.2rem;
   position: absolute;
   right: 0.1rem;
   font-size:0.3rem;
}

.sanCheng{
    height:0.89rem;
    border-top:0.05px solid #ccc;
    border-bottom:0.05px solid #ccc;
    margin-top: 0.2rem;
    background: white;
    position: relative;
}
.sanCheng_a{
   padding-left: 0.5rem;
   display: flex;
   line-height:0.89rem; 
}
.sanCheng_i1{
    height: 0.36rem;
    width: 0.36rem;  
    font-size: 0.36rem;
}
.sanCheng_p{
font-size: 0.32rem;
margin-left:0.2rem;
}
.sanCheng_i2{
    height: 0.33rem;
    width: 0.2rem;
   position: absolute;
   right: 0.1rem;
   font-size:0.3rem;
}

.share{
    height:0.89rem; 
    border-bottom:0.05px solid #ccc;
    background: white;
    position: relative;
}
.share_a{
   padding-left: 0.5rem;
   display: flex;
   line-height:0.89rem; 
}
.share_i1{
    height: 0.36rem;
    width: 0.36rem;  
    font-size: 0.36rem;
   
}
.share_p{
font-size: 0.32rem;
margin-left:0.2rem;
}
.share_i2{
    height: 0.33rem;
    width: 0.2rem;
   position: absolute;
   right: 0.1rem;
   font-size:0.3rem;
}


.kefu{
    height:0.89rem;
    border-top:0.05px solid #ccc;
    border-bottom:0.05px solid #ccc;
    margin-top: 0.2rem;
    background: white;
    position: relative;
}
.kefu_a{
   padding-left: 0.5rem;
   display: flex;
   line-height:0.89rem; 
}
.kefu_i1{
    height: 0.36rem;
    width: 0.36rem;  
    font-size: 0.36rem;
}
.kefu_p{
font-size: 0.32rem;
margin-left:0.2rem;
}
.kefu_i2{
    height: 0.33rem;
    width: 0.2rem;
   position: absolute;
   right: 0.1rem;
   font-size:0.3rem;
}



.xiazai{
    height:0.89rem; 
    border-bottom:0.05px solid #ccc;
    background: white;
    position: relative;
}
.xiazai_a{
   padding-left: 0.5rem;
   display: flex;
   line-height:0.89rem; 
}
.xiazai_i1{
    height: 0.36rem;
    width: 0.36rem;  
    font-size: 0.36rem;
}
.xiazai_p{
font-size: 0.32rem;
margin-left:0.2rem;
}
.xiazai_i2{
    height: 0.33rem;
    width: 0.2rem;
   position: absolute;
   right: 0.1rem;
   font-size:0.3rem;
}

.rule{
    height:0.89rem; 
    border-bottom:0.05px solid #ccc;
    background: white;
    position: relative;
}
.rule_a{
   padding-left: 0.5rem;
   display: flex;
   line-height:0.89rem; 
}
.rule_i1{
    height: 0.36rem;
    width: 0.36rem;  
    font-size: 0.36rem;
}
.rule_p{
font-size: 0.32rem;
margin-left:0.2rem;
}
.rule_i2{
    height: 0.33rem;
    width: 0.2rem;
   position: absolute;
   right: 0.1rem;
   font-size:0.3rem;
}


`