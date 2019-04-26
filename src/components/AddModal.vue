<template>
    <b-modal id="show-add" title="add record" hide-footer v-model="showModal">
        <div class="errors">
            <p v-for="(error, index) in errors" :key=index>
                {{ error }}
            </p>
        </div>
        <form>
            <label for="name">Product Name
                <input id="name" name="name" type="text" v-model="name">
            </label>

            <label for="price">Unit Price
                <input id="price" name="price" type="number" v-model="price">
            </label>

            <label for="price_stock">Units In Stock
                <input id="price_stock" name="price_stock" type="number" v-model="priceStock">
            </label>

            <label for="discontinued">Discontinued
                <input id="discontinued" name="discontinued" type="checkbox" v-model="discont">
            </label>
        </form>
        <div class="button-group-form">
            <b-button @click="$bvModal.hide('show-add')">cancel</b-button>
            <b-button @click="validate">add</b-button>
        </div>
    </b-modal>
</template>

<script>
export default {
    props: ['page'],
    data () {
        return {
            name: '',
            price: '0.00',
            priceStock: 0,
            discont: false,
            record: {},
            showModal: false,
            errors: []
        }
    },
    updated () {
        /* запрет на ниже нуля */
        if (this.price < 0) {
            this.price = 0
        }
        if (this.priceStock < 0) {
            this.priceStock = 0
        }
    },
    methods: {
        add () {
            /* создание новой записи */
            this.record = {
                id: Object.keys(this.$store.getters.getRecords).length + 1,
                name: this.name,
                unitPrice: this.price,
                unitsInStock: this.priceStock,
                Discontinued: this.discont
            }
            this.$store.dispatch('addRecord', this.record)
            this.showModal = false
            /* обновляем число кнопок */
            this.$emit('setPageUpdate', this.page)
            this.clear()
        },
        clear () {
            this.name = ''
            this.price = 0
            this.priceStock = 0
            this.discont = false
        },
        validate () {
            /* валидация входящих данных */
            if (this.name && this.price > 0 && this.priceStock >= 0) {
                if (this.price !== '0.00' && this.price) {
                    while(this.price.charAt(0) === '0') {
                        this.price = this.price.slice(1)
                    }
                }
                this.add()
            }
            this.errors = []
            if (!this.name) {
                this.errors.push('Product Name required')
                return false
            }
            if (this.price <= 0) {
                this.errors.push('Unit Price sub zero or = 0')
                return false
            }
            if (this.priceStock < 0) {
                this.errors.push('Price Stock sub zero or = 0')
                return false
            }
        }
    }
}
</script>

