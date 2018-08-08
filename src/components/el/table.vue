<template>
    <el-table
            :data="listResult"
            style="width: 100%">
        <el-table-column
                prop="groupName"
                label="名称"
                width="180">
        </el-table-column>
        <el-table-column
                prop="groupTypeDesc"
                label="类型"
                width="180">
        </el-table-column>
        <el-table-column
                prop="updateUser"
                label="用户">
        </el-table-column>
    </el-table>
</template>

<script>
    var getData = {listResult:[]};
    export default {
        created:function(){
            this.$utils.alert(this,"提示信息","success");
            this.$utils.ajax(this,"/api/manage/group/getCustomerGroupList","post",function(res){
                getData = res.data;
            });
        },
        data() {
            return getData;
        }
    }
</script>