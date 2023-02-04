import React from 'react';

class Registerpage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                
                <Text />
                <Image/>
                <Square />
            </div>
        )
    }
}

class Square extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const style={
         
            width:"582px",
            height:"600px",
            'margin-top':"240px",
            'margin-left':"669px",
            'background-color': "#D9D9D9",
        };
        return(
            <div style = {style}>

            </div>
        )
    }
}
class Text extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
    
        const style= {
            'position': "absolute",
            'width': "358.3px",
            'height' : "121px",
            'left': "781.8px",
            'top': "447px",

        'font-family': "Roboto",
        'font-style': "normal",
        'font-weight': 300,
        'font-size': "(mixed)",
        'line-height': "100%",
        'align-items': "center",
        'text-align': "center",

        'color':" #000000",


        };
        const style1 ={
            'font': "Roboto",
            'font-weight': 400,
            'font-size': "20px",
            'line-height': "23.44px",
            'align': "center",
        };
        const style2 = {
            'font': "Roboto",
            'font-weight': 400,
            'font-size': "50px",
            'line-height': "58.59px",
            'align': "center",
        }
        const style3={
            'position': "absolute",
            'width': "68.25px",
            'height': "72px",
            'left': "975px",
            'top': "595px",
            
}
        const style4={
             'position': "absolute",
             'width' :"54.6px",
             'height':"57.6px",
             'left':"500px",
             'top' :"10px",
        }

        return(
            <div>
            <div style = {style}>
                 
                 <h1>Login</h1>
                 
                 <h3>소셜 로그인으로 빠르게 시작하세요</h3>
            </div>
            <div className="image" style = {style3}>
                <img className="Kakao" alt="Kakao" src={'public/kakao.png'}/>
            <div className="image" style = {style4}>
                <img className="Naver" alt="naver" src="img/naver.png"/>
            </div>   
            </div>
            </div>
        )
    }

}
const Image = ()=> {
    return(
        <div>
            <img style = {{width: 210,height: 138, marginTop:60,marginLeft:855,position: 'absolute',backgroundColor:'#EEEEEE'}}/>
        </div>
    )

}

export default Registerpage;
