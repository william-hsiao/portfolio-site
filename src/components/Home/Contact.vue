<template lang="pug">
  #Contact.container
    .frame
      h1 Contact
      | Got a project in mind? Just have a question? Let's talk!
      br
      br
      b contact@william-hsiao.com
</template>

<script>
export default {
  name: 'Contact',
}
</script>

<style lang='scss' scoped>
#Contact {
  h1 {
    margin-bottom: 50px;
  }
}

form {
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 75%;
  label {
    margin-top: 10px;
  }
  input[type='submit'] {
    margin-top: 25px;
  }
}
table {
  width: 75%;
  margin: auto;
  
}
input[type='text'], textarea {
  border: 1px solid #808080;
  box-sizing: border-box;
  padding: 6px 10px;
  outline: none;
  vertical-align: middle;
  width: 100%;
  font-size: 16px;
  &:focus {
    border-color: #000;
  }
  &::placeholder {
    color: #808080;
  }
  &[readonly] {
    background-color: #1b1b1b;
  }
  &[disabled] {
    background-color: #1b1b1b;
    border-color: #808080;
    color: #000;
  }
}
input[type='submit'] {
  font-family: 'Play', sans-serif;
  height: 40px;
  padding: 0 10px;
  vertical-align: middle;
  color: #ffffff;
  background-color: #252525;
}
</style>
