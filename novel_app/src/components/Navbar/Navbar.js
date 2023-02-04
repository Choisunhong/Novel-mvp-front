import React from 'react';

class Navbar extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Image />
               
                <Text />
                <Button/>
            </div>
        )
    }
}

const Image = ()=> {
    return(
        <div>
            <img style = {{width: 88,height: 30, marginTop:10,marginLeft:0,position: 'absolute',backgroundColor:'#666666'}}/>
        </div>
    )}

const Text = ()=> {
 return(
 <div>
    <form>
        <input type="text" placeholder="검색창" style={{width: "540.4px",height: "17px", marginTop: 10,marginLeft:300,position: 'absolute',backgroundColor:'#FFFFFF'}}>
        
       </input>
       <br/><br/>
    </form>
 </div>
 )}
 const Button = ()=> {
    return(
        <div style={{margintop:10,marginLeft:300,width:"Hug",height:"Hug"}}>
             <table>
                <tr>
                    <td><button>모든 피드백</button></td>
                    <td><button>객관식</button></td>
                    <td><button>주관식</button></td>
                    <td><button>로맨스</button></td>
                    <td><button>무협</button></td>
                    <td><button>로맨스 판타지</button></td>
                    <td><button>로맨스</button></td>
                    <td><button>로맨스</button></td>
                </tr>
             </table>

        </div>

    )}
 



export default Navbar;