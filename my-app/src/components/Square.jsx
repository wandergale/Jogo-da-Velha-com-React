import React from 'react';

// Class ->
// class Square extends React.Component {

//     render() {
//         return (
//             <button 
//               className='square' 
//               onClick={() => this.props.onClick()}
//             >
//                 { this.props.value }
//             </button>
//         );
//     }
// }

// Function ->
// function Square(props) {
//     return (
//         <button className='square' onClick={props.onClick}>
//             {props.value}
//         </button>
//     );
// }

// Arrow Function ->
const Square = (props) => {
    return (
        <button className='square' onClick={props.onClick}>
            {props.value}
        </button>
    )
}


export default Square;