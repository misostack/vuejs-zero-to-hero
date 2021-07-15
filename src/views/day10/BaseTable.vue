<template>
  <div class="row">
    <div class="col-12">
      <table class="table table-striped table-hover">
        <thead>
          <tr class="table-dark">
            <slot name="columns">Colums</slot>
          </tr>
        </thead>
        <tbody>
          <slot name="rows">Rows</slot>
        </tbody>
      </table>
    </div>
    <div class="col-12">
      <slot name="pagination">Paginations</slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
