<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
    created:function(){

        this.$utils.ajax(this,"/api/dmp/user/checkUser","get",function(res){
            console.log(res);
        });

    },
    mounted:function(){
        var _this = this;
        $("img").on("click",function(){
            _this.$utils.alert(_this,"提示信息","success");
        });
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
