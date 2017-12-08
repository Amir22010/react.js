import React from 'react';

class UsingProps extends React.Component {
   render() {
      return (
         <div>
            <h1>{this.props.headerProp}</h1>
            <h2>{this.props.contentProp}</h2>
         </div>
      );
   }
}
UsingProps.defaultProps = {
   headerProp: "Header from props...",
   contentProp:"Content from props..."
}
export default UsingProps;