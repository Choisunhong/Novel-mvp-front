import React from 'react';

class Registerpage5 extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Image/>
                <Square />
                <Text />
            </div>
        )
    }
}
class Image extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render(){
        const style ={
            'width':"540.4px",
            'height':"160px",
            'margin-top':"35px",
            'margin-left':"300px",
            'background-color':"#D9D9D9",
        }

        return(
            <div style={style}>

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
            width:"1196px",
            height:"138px",
            'margin-top':"250px",
            'margin-left':"361px",
            'background-color': "#D9D9D9",
        };
        const style1 ={
            width:"1196px",
            height:"138px",
            'margin-top':"300px",
            'margin-left':"361px",
            'background-color': "#D9D9D9",
        }
        const style2 ={
            width:"1196px",
            height:"138px",
            'margin-top':"350px",
            'margin-left':"361px",
            'background-color': "#D9D9D9",
        }
        return(
            <div>

            <div style = {style}>

            </div>
            <div style = {style1}>

            </div>
            <div style = {style2}>

            </div>
            </div>
        )
    }
    
}
class Text extends React.Component{
    constructor(props){
        super(props);
    }
     render(){
        const style ={
        'width':'111px',
        'height':'35px',
        'margin-top':"-1150px",
        'margin-left':"363px",
        'font-family':"Roboto",
        'font-weight': 400,
        'font-size':"30px",
        'line-height':"35px",
        'text-align':"center",
        'position':'absolute',

        }
        const style1 ={
            
            'height':'35px',
            'margin-top':"-710px",
            'margin-left':"363px",
            'font-family':"Roboto",
            'font-weight': 400,
            'font-size':"30px",
            'line-height':"35px",
            'text-align':"center",
            'position':'absolute',
    
            }
        const style2 ={
                
                'height':'35px',
                'margin-top':"-250px",
                'margin-left':"363px",
                'font-family':"Roboto",
                'font-weight': 400,
                'font-size':"30px",
                'line-height':"35px",
                'text-align':"center",
                'position':'absolute',
        
                }
        return(
<div>
    <div style={style}>
        <h5>기본정보</h5>
    </div>
    <div style={style1}>
        <h5>선호태그 목록</h5>
    </div>
    <div style={style2}>
        <h5>금지태그 목록</h5>
    </div>
</div>
        )
     }
}
export default Registerpage5;