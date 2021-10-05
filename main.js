class Producto {
  constructor(producto = {}) {
    this.nombre = producto.nombre || ""
    this.descripcion = producto.descripcion || ""
    this.precio = producto.precio || ""
        this.status = producto.status || false
  }
}

const app = Vue.createApp({
  data() {
    return {
      newProducto: new Producto(),
      productos: [new Producto({nombre: 'arya',descripcion: 'Gata Calico', precio: 1})],
      error: false,
      editIndex: -1,
    }
  },
  methods: {
    addProducto() {
      this.error = false;
      if (this.newProducto.nombre.length>0 & this.newProducto.descripcion.length>0 & this.newProducto.precio>0) {
        this.productos.push(this.newProducto);
        this.newProducto = new Producto()
      } else {
        this.error = true;
      }
    },
    deleteProducto(index) {
      const confirm = window.confirm('¿Estás seguro de eliminar el producto?');
      if (confirm) this.productos.splice(index, 1);
    }
  }
})

app.mount('#app')