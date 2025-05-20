<template>
  <div class="app-container grid-demo">
    <div ref="grid"></div>
  </div>
</template>

<script>
export default {
  name: 'GridDemo',
  mounted() {
    this.loadGridAssets().then(() => {
      this.initGrid()
    })
  },
  beforeUnmount() {
    if (this.gridInstance) {
      this.gridInstance.destroy()
    }
  },
  methods: {
    loadGridAssets() {
      return new Promise(resolve => {
        const css = document.createElement('link')
        css.rel = 'stylesheet'
        css.href = 'https://uicdn.toast.com/tui-grid/latest/tui-grid.css'
        document.head.appendChild(css)

        const script = document.createElement('script')
        script.src = 'https://uicdn.toast.com/tui-grid/latest/tui-grid.umd.js'
        script.onload = resolve
        document.head.appendChild(script)
      })
    },
    initGrid() {
      const { Grid } = window.tui
      this.gridInstance = new Grid({
        el: this.$refs.grid,
        data: [
          { id: 1, name: 'Alice', age: 25, active: true },
          { id: 2, name: 'Bob', age: 30, active: false }
        ],
        rowHeaders: ['rowNum'],
        columns: [
          { header: 'ID', name: 'id', editor: 'text', sortable: true },
          { header: 'Name', name: 'name', editor: 'text', sortable: true },
          { header: 'Age', name: 'age', editor: 'text', sortable: true, filter: 'number' },
          { header: 'Active', name: 'active', editor: 'checkbox', sortable: true }
        ],
        summary: {
          height: 40,
          position: 'bottom',
          columnContent: {
            age: {
              template(valueMap) {
                return 'Avg: ' + (valueMap.avg || 0)
              }
            }
          }
        }
      })
    }
  }
}
</script>

<style scoped>
.grid-demo {
  overflow: auto;
}
</style>

