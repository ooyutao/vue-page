<template>
    <div>
    <el-form :inline="true" :params="params" class="demo-form-inline">
        <el-form-item label="名称">
            <el-input v-model="params.groupName" placeholder="请输入名称"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
    </el-form>

    <el-table-page  ref="page" :params="params" url="/api/manage/group/getCustomerGroupList">
        <el-table-column prop="groupName" label="名称" width="180">
        </el-table-column>
        <el-table-column prop="groupTypeDesc" label="类型">
        </el-table-column>
        <el-table-column prop="updateUser" label="用户">
        </el-table-column>
    </el-table-page>
    </div>
</template>

<script>
    var postData = {params:{}};
    export default {
        methods: {
            onSubmit() {
                this.$refs.page.fetch();
            }
        },
        data() {
            return postData;
        },
        mounted:function(){
            //this.$options.methods.query(this);
        }
    }
</script>