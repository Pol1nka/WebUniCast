<script setup>

</script>

<template>
  <nav class="navigation-container">
    <ul>
      <li>
        <a href="#"
        >
          Массовая рассылка</a>
      </li>
      <li>
        <a href="#"
        >
          Точечная рассылка</a>
      </li>
      <li>
        <a href="#"
        >
          Отправленные сообщения</a>
      </li>
    </ul>
  </nav>

</template>

<style scoped lang="scss">
.navigation-container{
  height: 57px;
  width: 839px;
  display: flex;
}

.navigation-container ul {
  width: 100%;
  list-style: none; /* Убираем маркеры списка */
  margin: 0;
  padding: 0;
  display: flex; /* Выстраиваем элементы в ряд */
  justify-content: space-between;
  align-items: center;
}

.navigation-container li {
  margin: 0 5px;
  display: flex; /* Выстраиваем элементы в ряд */
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 57px;
  width: auto;
  padding: 0 15px;
  border-radius: 50px;
  &:hover{
    background: rgba(157, 183, 208, 0.3);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

}


.navigation-container a {
  text-decoration: none; /* Убираем подчеркивание ссылок */
  color: #fff; /* Цвет ссылок */
  letter-spacing: 0;
}

</style>