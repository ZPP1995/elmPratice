//从@actions/actionCreator引入异步actin mineMsgAsyncAction
//import { mineMsgAsyncAction } from  "@actions/actionCreator"
export const mapStateToProps=(state)=>({
    flag:state.flag,
})

export const mapDispatchToProps=(dispatch)=>({
    handleCionAdd(){
       dispatch()
    }
})


