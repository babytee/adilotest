<template>
  <div class="container-fluid">
    <navbar></navbar>
    <div class="row">
      <sidebar></sidebar>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import navbar from "@/components/navbar"
import sidebar from "@/components/sidebar"
export default {
  components: {
    navbar,
    sidebar,
  }
}
</script>