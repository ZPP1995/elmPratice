import React, { Component } from 'react';
import { MineWrapper } from "./styled";
import { Link, } from "react-router-dom";
export default class Mine extends Component {
    constructor(props) {
        super(props);
       
        this.state = {
           // phoneNum:this.props.location.query.key
             
        }
    }


    render() {
      let flag=false;
    // let flag=this.props.location.query.flag;
     // let {phoneNum}=this.props.location.query.key;

        return (
           
            <MineWrapper>
                <div className="mine_Wraper">
                    <div className="header">
                        <Link to="/login">
                            <div className="header_xingxi" >
                                <div className="picture"></div>

                                <div className="mine_msg" style={{ display: flag ? 'block' : 'none' }} >
                                    <p> <span>4215f4de2</span> </p>
                                    <p><i className="iconfont">&#xe638;</i> <span>17739763170</span></p>
                                </div>

                                <div className="login_msg" style={{ display: flag ? 'none' : 'block' }}>
                                    <p> <span>登录/注册</span> </p>
                                    <p><i className="iconfont">&#xe638;</i> <span>登录后享受更多特权</span></p>
                                </div>



                                <i className="iconfont">&#xe770;</i>
                            </div>
                        </Link>
                    </div>

                    <div className="main_ifo">
                        <div ><p><span className="hongBao">0</span >个</p> <p>红包</p></div>
                        <div ><p><span className="jinBi">0</span>个</p> <p >金币</p></div>
                    </div>

                    <div className="adress">
                        <a href="#" className="adress_a">
                            <i className="adress_i1 iconfont" >&#xe611;</i>
                            <p className="adress_p">
                                我的地址</p>
                            <i className="adress_i2  iconfont" >&#xe770;</i>
                        </a>
                    </div>

                    <div className="sanCheng">
                        <a href="#" className="sanCheng_a">
                            <i className="sanCheng_i1 iconfont">&#xe63b;</i>
                            <p className="sanCheng_p"> 金币商城</p>
                            <i className="sanCheng_i2 iconfont">&#xe770;</i>
                        </a>
                    </div>
                    <div className="share">
                        <a href="#" className="share_a">
                            <i className="share_i1 iconfont">&#xe61e;</i>
                            <p className="share_p">
                                分享拿20元现金</p>
                            <i className="share_i2 iconfont">&#xe770;</i>
                        </a>
                    </div>

                    <div className="kefu">
                        <a href="#" className="kefu_a">
                            <i className="kefu_i1 iconfont">&#xe6b7;</i>
                            <p className="kefu_p">
                                我的客服</p>
                            <i className="kefu_i2 iconfont">&#xe770;</i>
                        </a>
                    </div>

                    <div className="xiazai">
                        <a href="#" className="xiazai_a">
                            <i className="xiazai_i1 iconfont">&#xe61a;</i>
                            <p className="xiazai_p">
                                下载饿了么APP</p>
                            <i className="xiazai_i2 iconfont">&#xe770;</i>
                        </a>
                    </div>

                    <div className="rule">
                        <a href="#" className="rule_a">
                            <i className="rule_i1 iconfont">&#xe639;</i>
                            <p className="rule_p">
                                规则中心</p>
                            <i className="rule_i2 iconfont">&#xe770;</i>
                        </a>
                    </div>
                </div>

            </MineWrapper>
        )
    }
}
