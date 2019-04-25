<template>
  <div class="content">
    <div class="container">
      <div class="row">
        <div class="header">
          <b-button v-b-modal.show-add>+ ADD NEW RECORD</b-button>
        </div>
        <table class="table table-hover">
          <thead>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Units In Stock</th>
            <th>Discontinued</th>
            <th></th>
          </thead>
          <tbody>
            <tr v-for="product in records" :key=product.id>
              <td>{{ product.name }}</td>
              <td>${{ product.unitPrice }}</td>
              <td>{{ product.unitsInStock }}</td>
              <td>{{ product.Discontinued }}</td>
              <td class="buttons">
                <b-button v-b-modal.show-edit class="btn btn-light" @click="edit(product.id)"><span class="oi oi-pencil"></span> EDIT</b-button>
                <b-button class="btn btn-light" @click="remove(product.id)"><span class="oi oi-x"></span> DELETE</b-button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="no-text" v-if="Object.keys(records).length === 0">
          List products is empty:(
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="button-group">
          <button class="btn" v-for="(page, index) in pagination.pages" :key=index @click.prevent=setPage(page)>
            {{ page }}
          </button>
        </div>
        <div class="info-lists" v-if="pagination.end + 1">Lists {{ pagination.start + 1 }} to {{ pagination.end + 1}}</div>
      </div>
    <add-modal @setPageUpdate=setPage :page=pageNow></add-modal>
    <edit-modal :id=idProduct v-if=Object.keys(this.$store.getters.getRecords).length></edit-modal>
    </div>
  </div>   
</template>

<script>
import EditModal from './components/EditModal.vue'
import AddModal from './components/AddModal.vue'

export default {
  name: 'app',
  data () {
    return {
      editModal: false,
      perPage: 3,
      pagination: {},
      idProduct: 0,
      pageNow: 1
    }
  },
  created () {
    this.setPage(1)
  },
  methods: {
    showEditModal (id) {
    },
    addRecord () {
    },
    setPage (page) {
      this.pageNow = page
      this.pagination = this.paginator(Object.keys(this.$store.getters.getRecords).length, page)
    },
    paginate (data) {
      /* режем массив записей согласно start и end */
      return data.slice(this.pagination.start, this.pagination.end + 1)
    },
    paginator (totalItems, currentPage) {
      /* вычисляем стартовую запись */
      let start = (currentPage - 1) * this.perPage,
      /* вычисляем конечную запись */
      end = Math.min(start + this.perPage - 1, totalItems - 1)
      return {
        currentPage: currentPage,
        start: start, 
        end: end,
        /* кол-во кнопок пагинации */
        pages: Math.ceil(totalItems / this.perPage)
      }
    },
    remove (id) {
      this.$store.dispatch('removeRecord', id)
      this.setPage(this.pageNow)
    },
    edit (id) {
      this.idProduct = id
    }
  },
  computed: {
    records () {
      return this.paginate(this.$store.getters.getRecords)
    }
  },
  components: { 
    'edit-modal' : EditModal,
    'add-modal' : AddModal
  }
}
</script>

 