import React, { Component } from 'react'
import {Redirect} from "react-router-dom"

export default (PageWapper)=>{
    return class extends Component {
        render() {
            let {path,meta} = this.props;
            
            if(meta.auth && path != "/login"){
                let token = sessionStorage.getItem("token")
                if(!token){
                    return <Redirect to="/login"></Redirect>
                }else{
                    return <PageWapper {...this.props}></PageWapper>
                }
            }
            return <PageWapper {...this.props}></PageWapper>
        }
    }
}

