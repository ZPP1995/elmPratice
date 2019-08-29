import styled from "styled-components"

export const HomeWrapper = styled.div`
.header{
    width:100%;height:1rem;background:rgba(0,0,255,0.5);
    position: relative;
}
i{
    font-size:.3rem;
}
.header p {
    width:100%;height:1rem;font-size: 0.34rem;
    color:white;
    margin-left:.4rem;
    line-height: 1rem;
}
.header0{
    width:100%;height:1rem;
    position:sticky;
    top:0;
    background:rgba(0,0,255,0.5);
}
.header0 .search{
    width:92%;height:0.8rem;background:white;
    position: absolute;
    text-align: center;
    bottom:0.2rem;
    left:4%;top:.1rem;
    line-height:.8rem;
    font-size:.28rem;color:#999;
}
.iconlist{
    width:100%;height:3.6rem;
    background:white;
    padding:0.1rem;
}
.iconlist ul{
    width:100%;height:100%;
    display:flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.iconlist ul li{
    height:50%;
    width:20%;
}
.iconlist ul li a img{
    width:1rem;height:1rem;
}
.iconlist ul li a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.banner_01{
    width:96%;
    height:2.2rem;
    margin:0 auto;
    padding:0 20px;
    background: linear-gradient(0deg,#f4f4f4 5%,#fafafa 95%);
}
.banner_01_left{
    float:left;

}
.banner_01_left p {
    margin-top:.1rem;   
}
.banner_01_left p:nth-child(1){
    font-size:.4rem;
    font-weight:900;
    
}
.banner_01_left p:nth-child(2){
    font-size:.3rem;
}
.banner_01_left p:nth-child(3){
    font-size:.2rem;
    color:red;
}
.banner_01_right{
    float:right;
    margin-right:.2rem;
    width:2.8rem;
    height:1.8rem;
    margin-top:.3rem;
}
.banner_01_right img{
    width:100%;height:100%;
}
.banner_02{
    width:96%;
    height:.8rem;
    background-image: linear-gradient(90deg,#ffefc4,#f3dda0);
    margin:.05rem auto;
    padding:0 20px;
    line-height:.8rem;
}
.banner_02 span{
    float:left;
}
.banner_02 span:nth-child(1){
    font-size:.3rem;
    font-weight:900;
}
.banner_02 span:nth-child(2){
    margin-left:.3rem;
    font-size:.2rem;
    color:red;
}
.banner_02 span:nth-child(3){
    float:right;
    color:#644f1b;
}
.banner_03{
    width:96%;
    height:1.7rem;
    margin:.1rem auto;
}
.banner_03 img{width:100%;}
.tuijian{
    width:100%;height:1rem;
    line-height:1rem;
    text-align:center;font-size:.3rem;
}
.select {
    width:100%;height:1rem;line-height:1rem;
    position:sticky;background:white;
    top:1rem;
}
.select ul{
    width:100%;height:100%;
}
.select ul li{
    width:25%;height:100%;float:left;
    text-align:center;
    font-size:.3rem;
}
.contain{

}
.contain ul{
    width:100%;height:100%;
}
.contain ul li{
    width:100%;
    height:3rem;
    padding:0 .1rem;
    img{
        float:left;
        width:1.3rem;
        height:1.3rem;
    }
    div{
        padding:0 .1rem;
        width:5.8rem;
        height:100%;
        float:left;
        .p0_span0{
            background:yellow;
            font-size:.2rem;
            font-weight:700;
        }
        .p0_span1{
            width:3rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
           
            text-align:center;
            font-weight:900;
            font-size:.3rem;
            margin-left:.2rem;
        }
        .p0_span2{
            float:right;
            font-size:.3rem;
        }
        .p1{
            margin-top:.2rem;
            height:.2rem;
            line-height:.2rem;
        }
        .p1_span0{
            width:1.12rem;height:.2rem;
        }
        .p1_span1{
            margin-left:.2rem;
        }
        .p1_span2{
            margin-left:.1rem;
        }
        .p2{
            margin-top:.1rem;
        }
        .p3{
            margin-top:.2rem;
        }
        .p3_span0{
            border:1px solid #ccc;
        }
        .p3_span1{
            margin-left:.1rem;
            border:1px solid #ccc;
        }
        .p4{
            margin-top:.1rem;
        }
        .p4_span0{
            background-color: rgb(240, 115, 115);
            margin-right:.2rem;
            color:white;
        }
        .p5{
            margin-top:.1rem;
        }
    }
}
.back{
    width:1rem;height:1rem;
    z-index:100;
    position:fixed;
    bottom:1.5rem;
    right:.5rem;
    border:1px solid #ccc;
    border-radius:50%;
    padding-top:.2rem;
    padding-left:.2rem;
    i{
        font-size:.6rem;
        
    }
}













`