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
      editProducto: { editNombre :'', editDes:'' } ,
      newProducto: new Producto(),
      productos: [new Producto({ nombre: 'Arya', descripcion: 'Gata Calico', precio: 100000 })],
      error: false,
      editIndex: -1,
    }
  },
  methods: {
    addProducto() {
      this.error = false;
      if (this.newProducto.nombre.length > 0 & this.newProducto.descripcion.length > 0 & this.newProducto.precio > 0) {
        this.productos.push(this.newProducto);
        this.newProducto = new Producto()
      } else {
        this.error = true;
      }
    },
    deleteProducto(index) {
      const confirm = window.confirm('¿Estás seguro de eliminar el producto?');
      if (confirm) this.productos.splice(index, 1);
    },
    setProducto(index) {
      this.editIndex = index;
      this.editProducto = this.productos[index].nombre;
      this.editProducto = this.productos[index].descripcion;
      this.editProducto = this.productos[index].precio;

      console.log(this.productos[index].nombre, this.productos[index].descripcion, this.productos[index].precio);
    },
    saveProducto(index) {
      this.productos[index].nombre = this.editProducto;
      
     
      this.editIndex = -1;
    },
    cancelar() {
      this.editIndex = -1
    },
  }
})

app.mount('#app')