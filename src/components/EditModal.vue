<template>
    <b-modal id="show-edit" title="edit record" hide-footer v-model="showModal">
        <div class="errors">
            <p v-for="(error, index) in errors" :key=index>
                {{ error }}
            </p>
        </div>
        <form>
            <label for="name">Product Name
                <input id="name_edit" name="name" type="text" v-model="record[0].name">
            </label>
            <label for="price">Unit Price
                <input id="price_edit" name="price" type="number" v-model="record[0].unitPrice">
            </label>

            <label for="price_stock">Units In Stock
                <input id="price_stock_edit" name="price_stock" type="number" v-model="record[0].unitsInStock">
            </label>

            <label for="discontinued">Discontinued
                <input id="discontinued_edit" name="discontinued" type="checkbox" v-model="record[0].Discontinued">
            </label>
        </form>
        <div class="button-group-form">
            <b-button @click="$bvModal.hide('show-edit')">cancel</b-button>
            <b-button @click="validate">edit</b-button>
        </div>
    </b-modal>
</template>

<script>
export default {
    props: ['id'],
    data () {
        return {
            name: '',
            price: 0,
            priceStock: 0,
            discont: false,
            showModal: false,
            errors: []
        }
    },
    updated () {
        /* запрет на ниже нуля */
        if (this.record[0].unitPrice < 0) {
            this.record[0].unitPrice = 0
        }
        if (this.record[0].unitsInStock < 0) {
            this.record[0].unitsInStock = 0
        }
    },
    methods: {
        edit () {
            this.showModal = false
        },
        validate () {
            /* валидация входящих данных */
            if (this.record[0].name && this.record[0].unitPrice > 0 && this.record[0].unitsInStock >= 0) {
                this.edit()
            }
            this.errors = []
            if (!this.record[0].name) {
                this.errors.push('Product Name required')
                return false
            }
            if (this.record[0].unitPrice <= 0) {
                this.errors.push('Unit Price sub zero or = 0')
                return false
            }
            if (this.record[0].unitsInStock < 0) {
                this.errors.push('Price Stock sub zero or = 0')
                return false
            }
        }
    },
    computed: {
        record () {
            /* ищем нужную запись */
            return this.$store.getters.getRecords.filter(rec => {
                return rec.id == this.id ? rec : null
            })
        }
    }
}
</script>

