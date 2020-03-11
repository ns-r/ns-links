<template>
  <div>
    <h2>Contributors</h2>
    <ul>
      <li v-for='user in usernames' v-bind:key='user'>u/{{user}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['usernames']
}
</script>