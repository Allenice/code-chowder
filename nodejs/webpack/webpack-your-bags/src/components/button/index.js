import $ from 'jquery';
import template from './button.html';
import Mustache from 'mustache';
import './button.scss';

export default class Button {
    constructor(link) {
        this.link = link;
    }

    onClick(e) {
        e.preventDefault();
        // alert(this.link);
        var h1 = document.querySelectorAll('h1')[0];
        h1.style.fontSize = "100px";
    }

    render(node) {
        const text = $(node).text();

        $(node).html(
            Mustache.render(template, {text})
        );

        $('.button').click(this.onClick.bind(this));
    }
}