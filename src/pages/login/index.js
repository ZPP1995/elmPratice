import React, { Component } from 'react'
import {LoginWrapper} from "./styled"




export default class Login extends Component {
  constructor(){
    super();
    this.state = {
      phoneVal:"手机号",
      passeord:"密码",
      arr:[],
    }    
}

    render() {
    let {phoneVal,passeord}=this.state;
        return (
            <LoginWrapper>
        <div className="login_Con">
            <div className="Login_wrapper">
            <img src="@public/logo.ba876fd.png" alt="" className="logo"/>
               <div className="main" >
             <div className="phone"> 
                 <input type="text" value={phoneVal} onChange={this.handlePhoneInput.bind(this)}/> 
               
            </div>
              <div className="yanzhen">
            <input type="text" value={passeord} onChange={this.handlePassword.bind(this)}/>
           </div>
              <p className="msg">新用户登录即自动注册，并表示已同意<a href="#">《用户服务协议》</a> 和 <a href>《隐私权政策》</a></p>
             <button className="denglu" onClick={this.handleLogin.bind(this)} type="submit" >登录</button>
               </div>
               <a className="about" href="#">关于我们</a>
           </div> 
           </div>
            </LoginWrapper>
        )
    }
    handlePhoneInput(e){
      let val= e.target.value;
     
      this.setState({ 
       phoneVal: val
      } )
      
    }
    handlePassword(e){
      let val=e.target.value;
      this.setState({
        passeord:val
      })
     
    }
    handleLogin(){
      let login=JSON.parse(sessionStorage.getItem("login"))
      login.forEach((item,index) => {   
        //console.log(item.key);
        
        if(this.state.phoneVal==login[index].key && this.state.passeord==login[index].value){
          this.props.history.push({pathname:"/mine",query:{key:item.key,flag:true}})
        }else{

        }
      });

        let obj={};
        obj.key=this.state.phoneVal;
        obj.value=this.state.passeord;
        this.state.arr.push(obj);
        sessionStorage.setItem("login", JSON.stringify(this.state.arr));  
       
    }

    
}
