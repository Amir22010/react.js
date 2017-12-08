import React from 'react';

class Expressions extends React.Component {
   render() {
      var i = 2;
      return (
         <div>
            <h1>{i == 1 ? 'True!' : 'False'}</h1>
         </div>
      );
   }
}
export default Expressions;