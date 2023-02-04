import React from 'react';

class Register4 extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Text />
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
            height:"867px",
            'margin-top':"110px",
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
Chan(){
    alert('회원가입이 완료되었습니다!.\n환영합니다 @@@님!');
}
    render(){
       

        const style ={
          'position':"absolute",
          'top':"150px",
          'left':"669px",
          'Font-family':"Roboto",
          'Font-style':"Regular",
          'Font-size':"16px",
          'line-height':"19px",
          'align':"left",
          'text-align':"left",
          'color':"#666666",
        }
        const style1={
            'position':"absolute",
            'top':"200px",
            'left':"669px",
            'width':"221px",
            'height':"17px",
            'Font-family':"Roboto",
            'Font-weight':400,
            'Font-size':"16px",
            'line-height':"18.75px",
            
        }
        const style2={
            'position':"absolute",
            'top':"240px",
            'left':"669px",
            'width':"Hug",
            'height':"Hug",
            'Font-family':"Roboto",
            'Font-weight':400,
            'Font-size':"16px",
            'line-height':"100%",
            'Vertical-align':"center",
            'text-align':"center",
            'text-color':"#FFFFFF",
        }
        const style3 = {
            'position':"absolute",
            'top':"280px",
            'left':"669px",
            'width':"240px",
            'height':"30px",
            'Font-family':"Roboto",
            'Font-style':"Regular",
            'Font-size':"16px",
            'line-height':"100%",
            'Vertical-align':"Center",
        
        }
        const style4 ={
            'position':"absolute",
            'top':"330px",
            'left':"669px",
            'width':"240px",
            'height':"30px",
            'Font-family':"Roboto",
            'Font-style':"Regular",
            'Font-size':"16px",
            'line-height':"100%",
            'Vertical-align':"Center",
        
        }
        const style5 ={
            'position':"absolute",
            'top':"340px",
            'left':"669px",
            'width':"151px",
            'height':"17px",
            'Font-family':"Roboto",
            'Font-style':"Regular",
            'Font-size':"16px",
            'line-height':"18.75px",
            'Vertical-align':"Center",
        
        }
        const style6 ={
            'position':"absolute",
            'top':"380px",
            'left':"669px",
            'width':"221px",
            'height':"17px",
            'Font-family':"Roboto",
            'Font-weight':400,
            'Font-size':"16px",
            'line-height':"18.75px",
        }
        const style7 ={
            'position':"absolute",
            'top':"403px",
            'left':"669px",
            'width':"170px",
            'height':"19px",
            'Font-family':"Roboto",
            'Font-style':"Regular",
            'Font-size':"16px",
            'line-height':"18.75px",
            'Vertical-align':"Center",
        }
        const style8 ={
            'position':"absolute",
            'top':"480px",
            'left':"669px",
            'width':"199px",
            'height':"19px",
            'Font-family':"Roboto",
            'Font-style':"Regular",
            'Font-size':"16px",
            'line-height':"18.75px",
            'Vertical-align':"Center",
        }
        const style9 = {
            'position':"absolute",
            'top':"578px",
            'left':"669px",
            'width':"199px",
            'height':"19px",
            'Font-family':"Roboto",
            'Font-style':"Regular",
            'Font-size':"16px",
            'line-height':"18.75px",
            'Vertical-align':"Center",
        }
        const style10 = {
            'position':"absolute",
            'top':"686px",
            'left':"669px",
            'width':"199px",
            'height':"19px",
            'Font-family':"Roboto",
            'Font-style':"Regular",
            'Font-size':"16px",
            'line-height':"18.75px",
            'Vertical-align':"Center",
        }
        const style11 ={
            'position':"absolute",
            'top':"794px",
            'left':"669px",
            'width':"199px",
            'height':"19px",
            'Font-family':"Roboto",
            'Font-style':"Regular",
            'Font-size':"16px",
            'line-height':"18.75px",
            'Vertical-align':"Center",
        }
        const style12 ={
            'position':"absolute",
            'top':"913px",
            'left':"939px",
            'width':"Hug",
            'height':"Hug",
            'Font-family':"Roboto",
            'Font-style':"Regular",
            'Font-size':"16px",
            'line-height':"18.75px",
            'Vertical-align':"Center",
        }
        const style13 ={
            'position':"absolute",
            'top':"450px",
            'left':"669px",
        }
        const style14 ={
            'position':"absolute",
            'top':"525px",
            'left':"669px",
        }
        const style15 ={
            'position':"absolute",
            'top':"630px",
            'left':"669px",
        }
        const style16 ={
            'position':"absolute",
            'top':"735px",
            'left':"669px",
        }
        const style17 ={
            'position':"absolute",
            'top':"840px",
            'left':"669px",
        }
        return(
            <div>
            <div style={style}>
                <h5>닉네임*</h5>
            </div>
            <form style={style1}>
                <input type="text"placeholder="한글,영어,숫자 가능"></input>
            </form>
            <button style={style2}>
                중복확인
            </button>
            <select style={style3}>
                <option value="남">남</option>
                <option value="여">여</option>
            </select>
            <select style={style4}>
                <option value="10대">10대</option>
                <option value="20대">20대</option>
                <option value="30대">30대</option>
                <option value="40대">40대</option>
                <option value="50대">50대이상</option>
            </select>
            <div style={style5}>
                <h5>이메일*</h5>
            </div>
            <div style={style6}>
            <form>
                <input type="email" placeholder="본인인증용 이메일"></input>
            </form>
            </div>
            <div style={style7}>
                <h5>선호장르(다중선택 가능)*</h5>
            </div>
            <div style={style13}>
                <table>
                    <tr>
                        <td><input type="checkbox" id="btn1"/> <label htmlFor="btn1">판타지</label></td>
                        <td><input type="checkbox" id="btn2"/><label htmlFor="btn2">로맨스</label></td>
                        <td><input type="checkbox" id="btn3"/><label htmlFor="btn3">로판</label></td>
                        <td><input type="checkbox" id="btn4"/><label htmlFor="btn4">무협</label></td>
                    </tr>
                </table>
            </div>
            <div style={style8}>
                <h5>선호소재태그(다중선택 가능)*</h5>
            </div>
            <div style={style14}>
                <table>
                    <tr>
                    <td><input type="checkbox"/><label>남성향</label></td>
                    <td><input type="checkbox"/><label>여성향</label></td>
                    <td><input type="checkbox"/><label>회귀</label></td>
                    <td><input type="checkbox"/><label>빙의</label></td>
                    <td><input type="checkbox"/><label>환생</label></td>
                    </tr>
                    <tr>
                    <td><input type="checkbox"/><label>아카데미</label></td>
                    <td><input type="checkbox"/><label>2차 창작</label></td>
                    <td><input type="checkbox"/><label>병맛</label></td>
                    <td><input type="checkbox"/><label>빙의</label></td>
                    <td><input type="checkbox"/><label>환생</label></td>
                    </tr>
                </table>
            </div>
            <div style={style9}>
                <h5>선호인물태그(다중선택 가능)*</h5>
            </div>
            <div style={style15}>
            <table>
                    <tr>
                    <td><input type="checkbox"/><label>남성향</label></td>
                    <td><input type="checkbox"/><label>여성향</label></td>
                    <td><input type="checkbox"/><label>회귀</label></td>
                    <td><input type="checkbox"/><label>빙의</label></td>
                    <td><input type="checkbox"/><label>환생</label></td>
                    </tr>
                    <tr>
                    <td><input type="checkbox"/><label>아카데미</label></td>
                    <td><input type="checkbox"/><label>매력적능력</label></td>
                    <td><input type="checkbox"/><label>병맛</label></td>
                    <td><input type="checkbox"/><label>빙의</label></td>
                    <td><input type="checkbox"/><label>환생</label></td>
                    </tr>
                </table>
            </div>
            <div style={style10}>
                <h5>선호문체태그(다중선택 가능)*</h5>
            </div>
            <div style={style16}>
                <table>
                    <tr>
                    <td><input type="checkbox"/><label>화려함</label></td>
                    <td><input type="checkbox"/><label>간결함</label></td>
                    <td><input type="checkbox"/><label>대화위주</label></td>
                    <td><input type="checkbox"/><label>많은 독백</label></td>
                    <td><input type="checkbox"/><label>환생</label></td>
                    </tr>
                    <tr>
                    <td><input type="checkbox"/><label>아카데미</label></td>
                    <td><input type="checkbox"/><label>여성향</label></td>
                    <td><input type="checkbox"/><label>회귀</label></td>
                    <td><input type="checkbox"/><label>빙의</label></td>
                    <td><input type="checkbox"/><label>환생</label></td>
                    </tr>
                </table>
            </div>
            <div style={style11}>
                <h5>선호기타태그(다중선택 가능)*</h5>
            </div>
            <div style={style17}>
            <table>
                    <tr>
                    <td><input type="checkbox"/><label>화려함</label></td>
                    <td><input type="checkbox"/><label>간결함</label></td>
                    <td><input type="checkbox"/><label>대화위주</label></td>
                    <td><input type="checkbox"/><label>많은 독백</label></td>
                    <td><input type="checkbox"/><label>환생</label></td>
                    </tr>
                    <tr>
                    <td><input type="checkbox"/><label>아카데미</label></td>
                    <td><input type="checkbox"/><label>여성향</label></td>
                    <td><input type="checkbox"/><label>회귀</label></td>
                    <td><input type="checkbox"/><label>빙의</label></td>
                    <td><input type="checkbox"/><label>환생</label></td>
                    </tr>
                </table>
            </div>
            <button style={style12} onClick={this.Chan}>
                입력완료
            </button>
            </div>
        
        )
    }
}


export default Register4;