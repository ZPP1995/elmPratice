import React, { Component } from 'react'
import {DetailWrapper} from "./styled"

export default class Detail extends Component {
    render() {
        return (
            <DetailWrapper>
                <i className="back">返回</i>
                <header></header>
                <img className="icon" src="https://cube.elemecdn.com/7/0c/294500b999bdf73731356a8d1db26jpeg.jpeg?x-oss-process=image/format,webp/resize,w_150" alt=""/>    
                <div className="title">
                    <p className="p0">
                        <span>呷哺呷哺火锅(西三旗新都店)</span>
                        <i className="iconfont">&#xe770;</i>
                    </p>
                    <p className="p1">
                        评价<span>4.8</span>
                        月售<span>201</span>单
                        <span>商家配送约38分钟</span>
                    </p>
                    <p className="p2">
                        <span>￥8</span>
                        <span>无门槛</span>
                        <span>领取</span>
                    </p>
                    <p className="p3">
                        <span>99减28</span>
                        <span>150减45</span>
                        <span>
                            3个优惠
                            <i className="iconfont">&#xe65a;</i>
                        </span>
                    </p>
                    <p className="p4">
                        公告:<span>尊敬的顾客您好！感谢您对呷哺外送的支持与厚爱！ 1、 特殊天气、用餐高峰请您提前预约下单 2、 呷哺锅底、调料不单独配送，每单限购15份！ 3、呷哺外送提供食材均为半成品，需要您自行加工后食用！ 4、使用锅具炉具，押金仅限现金支付，不支持线上支付 5.下单即赠送辅料1套。</span>
                    </p>
                </div>
            </DetailWrapper>
        )
    }
}
