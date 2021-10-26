class Button {
    constructor(selector, text) {
        this.$el = document.querySelector(selector);
        this.$el.textContent = text
    }

    changeTheColor(color) {
        this.$el.color = color;
        return this.button
    }

    click() {
        $el.addEventListener(('click'),() => {
            console.log('hi')
        })
    }

    changeTheBackgroundColor(color) {
        this.$el.style.backgroundColor = color;
        return this.button
    }

    changeText(text) {
        this.$el.textContent = text;
        return this.button
    }
}
const btn = new Button('#btn', 'click');
