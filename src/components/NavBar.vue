<template>
  <div class="navbar">
    <h1 class="title">Task Manager</h1>
    <div>
      <button-secondary @click="$router.push('/')">Main</button-secondary>
      <button-secondary @click="$router.push('/about')">About Us</button-secondary>
      <button-secondary @click="$router.push('/task-manager')">APP</button-secondary>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 15px;
  background: #f5f5f5;
}

.title {
  padding-bottom: 15px;
  font-size: 40px;
  font-weight: 100;
  color: rgb(233, 217, 216);
  text-align: center;
}
</style>
