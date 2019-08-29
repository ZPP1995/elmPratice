import styled from "styled-components"

export const DetailWrapper = styled.div`
    position:relative;
    .back{
        position:absolute;
        top:.1rem;left:.2rem;
        font-size:.3rem;color:white;font-style:normal;
    }
    header{
        width:100%;
        height:2.5rem;
        background-image:url(https://cube.elemecdn.com/6/aa/e5dac2036c82aa586d788fa9b4e57png.png?x-oss-process=image/format,webp/resize,w_750)
    }
    .icon{
        position:absolute;
        top:1.3rem;left:3rem;
    }
    .title{
        width:100%;
        margin-top:.5rem;
        text-align:center;
    }
    .p0{
        width:80%;
        text-align:center;
        margin-left:1rem;
        span{
            display:inline-block;
            width:90%;
            white-space:nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size:.5rem;
            vertical-align:middle;
            font-weight:900;
        }
        i{
            font-size:.3rem;
            vertical-align:middle;
        }
    }
    .p1{
        margin-top:.1rem;
        font-size:.1rem;
        color:#666;
        span:nth-child(1){
            margin-right:.2rem;
        }
        span:nth-child(2){
            margin-right:.2rem;
        }
    }
    .p2{
        color: #594519;
        background: #ffe578;
        font-size:.3rem;
        margin-top:.1rem;
        span:nth-child(1){
            margin-right:.2rem;
            vertical-align:middle;
        }
        span:nth-child(2){
            margin-right:.2rem;
            font-size:.1rem;
            color:#594519;
            vertical-align:middle;
        }
        span:nth-child(3){
            font-size:.1rem;
            color:#594519;
            vertical-align:middle;
        }
    }
    .p3{
        margin-top:.2rem;
        padding:0 1rem;
        span{
            float:left;
        }
        span:nth-child(1){
            border:1px solid #ccc;
            margin-right:.2rem;
        }
        span:nth-child(2){
            border:1px solid #ccc;
        }
        span:nth-child(3){
            float:right;
            i{
                font-size:.3rem;
            }
        }
    }
    .p4{
        clear:both;
        margin-left:10%;
        width:80%;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
        margin-top:.8rem;
        color:#ccc;
    }







`