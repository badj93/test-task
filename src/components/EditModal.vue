<template>
    <b-modal id="show-edit" title="edit record" hide-footer v-if="name" v-model="showModal">
        <div class="errors">
            <p v-for="(error, index) in errors" :key=index>
                {{ error }}
            </p>
        </div>
        <div class="loading" v-show="loading"></div>
        <form v-if="name">
            <label for="name_edit">Product Name
                <input id="name_edit" name="name" type="text" v-model="nameProduct">
            </label>
            <label for="price_edit">Unit Price
                <input id="price_edit" name="price" type="number" v-model="priceProduct">
            </label>

            <label for="price_stock_edit">Units In Stock
                <input id="price_stock_edit" name="price_stock" type="number" v-model="priceStockProduct">
            </label>

            <label for="discontinued_edit">Discontinued
                <input id="discontinued_edit" name="discontinued" type="checkbox" v-model="discontProduct">
            </label>
        </form>
        <div class="button-group-form">
            <b-button @click="closeModal">cancel</b-button>
            <b-button @click="validate">edit</b-button>
        </div>
    </b-modal>
</template>

<script>
  export default {
    props: ['id', 'name', 'price', 'priceStock', 'discount'],
    data() {
      return {
        nameProduct: '',
        priceProduct: 0,
        priceStockProduct: 0,
        discontProduct: false,
        showModal: false,
        errors: [],
        loading: false,
      }
    },
    created() {
      this.init()
    },
    updated() {
      /* запрет на ниже нуля */
      if (this.priceProduct < 0) {
        this.priceProduct = 0
      }
      if (this.priceStockProduct < 0) {
        this.priceStockProduct = 0
      }
      if (!this.showModal) {
        this.clear()
      }
    },
    methods: {
      init() {
        this.$emit('getRecords')
        this.nameProduct = this.name
        this.priceProduct = this.price
        this.priceStockProduct = this.priceStock
        this.discontProduct = this.discount
      },
      edit() {
        this.loading = true
        const recordNew = {
          id: this.id,
          name: this.nameProduct,
          unitPrice: this.priceProduct,
          unitsInStock: this.priceStockProduct,
          Discontinued: this.discontProduct
        }
        this.$store.dispatch('editRecord', recordNew)
        setTimeout(() => {
          this.loading = false
          this.showModal = false
          this.$emit('getRecords')
        }, 700)
      },
      validate() {
        /* валидация входящих данных */
        if (this.nameProduct && this.price > 0 && this.priceStock >= 0) {
          this.edit()
        }
        this.errors = []
        if (!this.nameProduct) {
          this.errors.push('Product Name required')
          return false
        }
        if (this.priceProduct <= 0) {
          this.errors.push('Unit Price sub zero or = 0')
          return false
        }
        if (this.priceStockProduct < 0) {
          this.errors.push('Price Stock sub zero or = 0')
          return false
        }
      },
      clear() {
        this.init()
      },
      closeModal() {
        this.showModal = false
        this.clear();
      }
    },
    computed: {
      record() {
        /* ищем нужную запись */
        return this.$store.getters.getRecords.filter(rec => {
          return rec.id == this.id ? rec : null
        })
      }
    }
  }
</script>

