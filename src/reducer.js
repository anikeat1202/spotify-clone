const initialState = {
user:null,
playlists:[],
playing:false,
item:null,
//REMOVE AFTER FINISHED DEVELOPING
token:"BQApU41A-D9DDFEsH7oDB30yhapSOG1P5H4P-ML5H4FhOJsU-RpcPhiJ5LAlQXlHe2MRet-kXYJ3XpO9O0zooJnQPVP_lwSslsP3yjFzzdKXzGUNNG3pTEgDqX8YAqsMIpwPtmyA2eVKIaYSE7zy4HTztUNrlDnCIr2PUwefJWxJTrg_3lO_",

}

const reducer = function(state,action){



switch(action.type) {
case "SET_USER" :
    return {
    ...state,
    user:action.user


    };
case "SET_TOKEN":
    return {
    ...state,
    token:action.token,

    };
    default:
return state;



}


}


export {
    reducer,
initialState,


}