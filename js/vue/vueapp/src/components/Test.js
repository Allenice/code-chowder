import Vue from 'vue'

export default Vue.extend({
    props: {
        name: String
    },
    render(h) {
        return h('div', {
            attrs: {},
            domProps: {
                innerHTML: this.$props.name
            }
        })
    }
})