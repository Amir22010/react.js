import React from 'react';

class Style extends React.Component {
   render() {
      var myStyle = {
         fontSize: 50,
         color: '#FF0000'
      }
      return (
         <div>
            <h1 style = {myStyle}>Header</h1>
         </div>
      );
   }
}
export default Style;