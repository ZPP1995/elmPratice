import styled from "styled-components"

export  const FindWrapper = styled.div`
    background:#eee;
    .header{
        background:white;
        width:100%;
        height:3rem;
        .header_left{
            width:50%;
            height:100%;
            float:left;
            position:relative;
            border-right:1px solid #ccc;
            img{
                position:absolute;
                bottom:0;
                right:.3rem;
            }
            p:nth-child(1){
                font-size:.3rem;
                color:#f90;
                margin:.2rem 0 0 .2rem;
            }
            p:nth-child(2){
                font-size:.2rem;
                margin:.1rem 0 0 .2rem;
            }
        }
        .header_right{
            width:50%;
            height:100%;
            float:left;
            .p_top{
                width:100%;
                height:50%;
                border-bottom:1px solid #ccc;
                position:relative;
                p:nth-child(1){
                    color:rgb(27, 169, 225);
                    padding:.5rem 0 0 .2rem;
                    font-size:.3rem;
                }
                p:nth-child(2){
                    padding:.1rem 0 0 .2rem;
                    color:#999;
                }
                img{
                    width:.9rem;height:.9rem;
                    position:absolute;
                    right:.5rem;bottom:.3rem;
                }
            }
            .p_bottom{
                width:100%;
                height:50%;
                position:relative;
                p:nth-child(1){
                    color:rgb(27, 169, 225);
                    padding:.5rem 0 0 .2rem;
                    font-size:.3rem;
                }
                p:nth-child(2){
                    padding:.1rem 0 0 .2rem;
                    color:#999;
                }
                img{
                    width:.9rem;height:.9rem;
                    position:absolute;
                    right:.5rem;bottom:.3rem;
                }
            }
        }
    }

    .contain{
        width:100%;
        height:10rem;
        margin-top:.2rem;
        background:white;
        padding:0 .2rem;
        div:nth-child(1){
            width:100%;height:.5rem;
            text-align:center;line-height:.5rem;
            font-size:.4rem;
        }
        div:nth-child(2){
            width:100%;height:.5rem;
            text-align:center;line-height:.5rem;
            font-size:.2rem;
        }
        ul{
            width:100%;
            display:flex;
            flex-wrap:wrap;
            li{
                width:50%;
                margin-top:.1rem;
                p:nth-child(2){
                    width:100%;
                    overflow: hidden;
                    color: #333;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    font-weight: 700;
                    font-size: .3rem;
                }
                p:nth-child(3){
                    margin-top:.1rem;
                    color:#666;
                    span:nth-child(1){
                        margin-right:.3rem;
                    }
                }
                p:nth-child(4){
                    color:#ff6000;
                    span:nth-child(2){
                        border:1px solid #ccc;
                        margin-left:.2rem;
                        color:#ccc;
                    }
                }
                p:nth-child(5){
                    margin-top:.2rem;color:#999;
                    width:100%;height:.5rem;line-height:.5rem;
                    border-top:1px solid #ccc;
                }
            }
        }
    }




`