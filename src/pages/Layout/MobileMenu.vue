<template>
  <ul class="nav nav-mobile-menu">
    <li>
      <a href="#" class="dropdown-toggle" data-toggle="dropdown">
        <i class="material-icons">dashboard</i>
        <p>Dashboard</p></a
      >
    </li>
    <li>
      <drop-down>
        <a slot="title" class="dropdown-toggle" data-toggle="dropdown">
          <i class="material-icons">notifications</i>
          <span class="notification">5</span>
          <p>Notifications</p>
        </a>
        <ul class="dropdown-menu dropdown-menu-right">
                      <li><a href="#">1 con bi benh</a></li>
        </ul>
      </drop-down>
    </li>
    <li>
      <a href="#" data-toggle="dropdown" class="dropdown-toggle"
        ><i class="material-icons">person</i>
        <p>Profile</p></a
      >
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
    
    };
  },
};
</script>
