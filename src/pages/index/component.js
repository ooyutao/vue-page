/**
 * Created by yutao6 on 2018/8/8.
 */
import Vue from 'vue';
Vue.component("el-table-page",{
    template:`<div>
                    <el-table :data='listResult'>
                        <slot></slot>
                    </el-table>
                    <div style="height:12px"></div>
                    <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleIndexChange"
                        :page-size="pageSize"
                        :page-sizes="[5, 10, 20, 50]"
                        :current-page="pageNo"
                        layout="total,sizes, prev, pager, next,jumper"
                        :total="totalRecord">
                    </el-pagination>
               </div>`,
    props:{
        url:String,
        params:Object
    },
    created:function(){
        this.fetch();
    },
    data:function(){
        return {
            listResult:[],
            totalRecord:0,
            pageNo:1,
            pageSize:10
        }
    },
    methods:{
        handleSizeChange:function(size){
            this.pageSize=size;
            this.pageNo=1;
            this.fetch(this.pageNo,size);
        },handleIndexChange:function(index){
            this.pageNo=index;
            this.fetch(index,this.pageSize);
        },fetch:function(index,size){
            var send=this.params||{};
            send.pageNo=index||1;
            send.pageSize=size||10;
            var vm =this;

            this.$utils.ajax(this,this.url,send,"post",function(res){
                vm.totalRecord=res.data.pageBean.totalRecord;
                vm.listResult=res.data.listResult;
            });

            // fetch(this.url,
            //     {
            //         method:"POST",
            //         headers: {
            //             "Content-Type": "application/json"
            //         },
            //         body:JSON.stringify(send)
            //     }).then(function(res){return res.json() })
            //     .then(function(res){
            //         vm.sourceData=res.data;
            //         vm.sourceTotal=res.total;
            //     })
        }
    }
})