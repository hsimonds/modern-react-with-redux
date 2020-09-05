import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
    

    render() {
        return (
            <ColorContext.Consumer>
            {(color) =>
             <button className={`ui button ${color}`}>
             <LanguageContext.Consumer>
                 {({language}) => language === 'english' ? 'Submit' : '差し出す'}
             </LanguageContext.Consumer>
             </button>
            }
            </ColorContext.Consumer>
        );
    }
}

export default Button;




//this.context approach:
// import React from 'react';
// import LanguageContext from '../contexts/LanguageContext';

// class Button extends React.Component {
//     static contextType = LanguageContext;

//     render() {
//         const text = this.context === 'english' ? 'Submit' : '差し出す';
//         return <button className="ui button primary">{text}</button>;
//     }
// }

// export default Button;