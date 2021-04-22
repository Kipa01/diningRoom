const getTemplate = (data = [], placeholder) => {
    const items = data.map(item => {
        return `
			<li class="select__item" data-type="item" data-id="${item.id}">${item.value}</li>
		`
    })
    return `
		<div class="select__backdrop" data-type="backdrop"></div>
		<div class="select__input" data-type="input">
			<span data-type="value">${placeholder}</span>
			<i class="fa fa-chevron-down" data-type="arrow"></i>
		</div>
		<div class="select__dropdown">
		    <div class="select__placeholder">Выберите категорию:</div>
			<ul class="select__list">
				${items.join('')}
			</ul>
		</div>
	`
}

class Select {
    constructor(selector, options) {
        this.$el = document.querySelector(selector)
        if (this.$el) {
            this.options = options
            this.render()
            this.setup()
            this.selectedId = null
        }
    }

    render() {
        const {placeholder, data} = this.options
        this.$el.classList.add('select')
        this.$el.innerHTML = getTemplate(data, placeholder)
    }

    setup() {
        this.clickHandler = this.clickHandler.bind(this)
        this.$el.addEventListener('click', this.clickHandler)
        this.$arrow = this.$el.querySelector('[data-type="arrow"]')
        this.$value = this.$el.querySelector('[data-type="value"]')
    }

    clickHandler(event) {
        const {type} = event.target.dataset
        if (type === 'input') {
            this.toggle()
        } else if (type === 'item') {
            const id = event.target.dataset.id
            this.select(id)
        } else if (type === 'backdrop') {
            this.close()
        }
    }

    get isOpen() {
        return this.$el.classList.contains('open')
    }

    get current() {
        return this.options.data.find(item => item.id === this.selectedId)
    }

    select(id) {
        this.selectedId = id
        this.$value.textContent = this.current.value
        this.$el.querySelectorAll('[data-type="item"]').forEach(element => {
            element.classList.remove('selected')
        });
        this.$el.querySelector(`[data-id="${id}"]`).classList.add('selected')
        this.close()
    }

    toggle() {
        this.isOpen ? this.close() : this.open()
    }

    open() {
        this.$el.classList.add('open')
        this.$arrow.classList.remove('fa-chevron-down')
        this.$arrow.classList.add('fa-chevron-up')
    }

    close() {
        this.$el.classList.remove('open')
        this.$arrow.classList.add('fa-chevron-down')
        this.$arrow.classList.remove('fa-chevron-up')
    }

    destroy() {
        this.$el.removeEventListener('click', this.clickHandler)
    }
}

const select = new Select('#select', {
    placeholder: 'Все',
    data: [
        {id: '1', value: 'Тепловое'},
        {id: '2', value: 'Холодильное'},
        {id: '3', value: 'Электромеханическое'},
        {id: '4', value: 'Посудомоечное'},
        {id: '5', value: 'Барное'},
        {id: '6', value: 'Хлебопекарное'},
        {id: '7', value: 'Линии раздачи'},
        {id: '8', value: 'Нейтральное'},
        {id: '9', value: 'Для фаст фуда'},
        {id: '10', value: 'Для залов'},
        {id: '11', value: 'Весовое'},
    ]
})