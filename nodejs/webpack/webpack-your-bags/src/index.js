// if (document.querySelectorAll('a').length) {
//     require.ensure([], () => {
//         const Button = require('./components/button');
//         const button = new Button('google.com');

//         button.render('a');
//     }, 'button');
// }
// 
import './style/style.scss';

// If we have a title, render the Header component on it
if (document.querySelectorAll('h1').length) {
    require.ensure([], () => {
        const Header = require('./components/header');
        new Header().render('h1');

        const Button = require('./components/button');
        const button = new Button('google.com');
        button.render('a');

    }, 'home');
}
