<template>
  <div v-if="Object.keys(params).length" class="detailParams">
    <table class="myTable">
      <tr
        v-for="(item, index) in params.tables"
        :key="index + Math.random()"
        class="tableLine"
      >
        <td
          v-for="(item, index) in item"
          :key="index + Math.random()"
          :class="{ tableHead: index === 0 }"
        >
          {{ item }}
        </td>
      </tr>
      <tr
        v-for="(item, index) in params.set"
        :key="index + Math.random()"
        class="tableLine"
      >
        <td class="tableHead">
          {{ item.key }}
        </td>
        <td :colspan="params.tables[0].length - 1" class="setValue">
          {{ item.value }}
        </td>
      </tr>
    </table>
    <div>
      <img :src="params.image" alt="" v-if="params.image" class="paramsImage" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParams",
  props: {
    params: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.detailParams {
  padding: 20px 5px;
  border-bottom: #ddd 5px solid;
  border-top: #ddd 5px solid;
}
.myTable {
  text-align: center;
  border-collapse: collapse;
  margin: 0 auto;
}
.myTable td {
  padding: 5px 0;
}
.tableHead {
  width: 20%;
}
.tableLine {
  border-bottom: #ddd 2px solid;
}
.setValue {
  color: var(--color-tint);
}
.paramsImage {
  width: 100%;
}
</style>