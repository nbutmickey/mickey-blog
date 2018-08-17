<template>
      <nav class="pagination">
          <a :class="{'disabled':current===1}" href="javascript:;" @click="setCurrent(current-1)"> « </a>
          <a :class="{'disabled':current===1}" href="javascript:;" @click="setCurrent(1)"> 首页 </a>
          <a v-for="p in groupList" :class="{'active':current===p.val}" href="javascript:;" @click="setCurrent(p.val)">{{p.text}}</a>
          <a :class="{'disabled':current===page}" href="javascript:;" @click="setCurrent(page)"> 尾页 </a>
          <a :class="{'disabled':current===page}" href="javascript:;" @click="setCurrent(current+1)"> » </a>
      </nav>
</template>

<script>
    export default {
        name: "pagination",
        data(){
          return {
            current:this.currentPage
          }
        },
        props:{
          total:{
            //总条数
            type:Number,
            default:0
          },
          pageSize:{
            //每页展示的条数
            type:Number,
            default:8
          },
          currentPage:{
            //当前页码
            type:Number,
            default:1
          },
          pageGroup:{
            //分页条数
            type:Number,
            default:5,
            coerce:function (v) {
              v=v>0?v:5;
              return v%2===1?v:v+1;
            }
          }
        },
      computed:{
          page:function () {//总页数
            return Math.ceil(this.total/this.pageSize);
          },
          groupList:function () {//获取分页页码
            let len=this.page;
            let temp=[],list=[];
            let count=Math.floor(this.pageGroup/2);
            let center=this.current;
            if(len<=this.pageGroup){
              while(len--){
                temp.push({text:this.page-len,val:this.page-len});
              }
              return temp;
            }
            while (len--){
              temp.push(this.page-len);
            }
            let idx = temp.indexOf(center);
            (idx < count) && ( center = center + count - idx);
            (this.current > this.page - count) && ( center = this.page - count);
            temp = temp.splice(center - count - 1, this.pageGroup);
            do {
              let t = temp.shift();
              list.push({
                text: t,
                val: t
              });
            } while (temp.length);
            if (this.page > this.pageGroup) {
              (this.current > count + 1) && list.unshift({text: '...', val: list[0].val - 1});
              (this.current < this.page - count) && list.push({text: '...', val: list[list.length - 1].val + 1});
            }
            return list;
          }
      },
      methods:{
          setCurrent:function (idx) {
            if (this.current !== idx && idx > 0 && idx < this.page + 1) {
              this.current = idx;
              this.$emit('pageChange', this.current);
            }
          }
      }
    }
</script>

<style scoped>

.pagination{
  text-align: center;
  margin: 120px auto 0;
  line-height: 2;
  width: 700px;
  border-top:1px solid #eee;
}

a {
  display: inline-block;
  position: relative;
  top: -1px;
  margin: 0 8px;
  padding: 0 10px;
  border-top:1px solid #eee;
  transition: border-color .2s ease-in-out;
}
.pagination a:hover{
  border-top-color: #555;
}

.active{
  color: #fff;
  background: #ccc;
  border-top-color: #ccc;
}

  @media screen and (max-width: 768px) {
    .pagination{
       width: 94%;
     }
    .pagination a{
      margin: 0 4px;
      padding: 0 6px;
    }
  }

</style>
