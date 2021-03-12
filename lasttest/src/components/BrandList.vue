<template>
  <div>
    <h1>品牌案例</h1>
    <el-button type="primary" @click="dialogFormVisible = true">添加新品牌</el-button>
    <el-table :data="brandList" stripe>
      <el-table-column type="index"> </el-table-column>
      <el-table-column prop="id" label="id"> </el-table-column>
      <el-table-column prop="name" label="品牌名"> </el-table-column>
      <el-table-column prop="ctime" label="创建时间"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <a href="" @click.prevent="del(scope.row.id)">删除</a>
        </template>
      </el-table-column>
    </el-table>

    <!-- 对话框 -->
    <el-dialog title="添加新品牌" :visible.sync="dialogFormVisible" width="50%" @close="close">
      <el-form :model="form" :rules="rules" ref="addForm">
        <!-- 在el-form-item中，label用来指定label标签的内容
        在el-form-item中，prop用来指定验证规则，从rules中取 -->
        <el-form-item label="品牌ID" label-width="80px" prop="brandId">
          <el-input v-model="form.brandId" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="品牌名称" label-width="80px" prop="brandName">
          <el-input v-model="form.brandName" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="add">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      brandList: [
        { id: 1, name: '奔驰', ctime: '2021/3/10' },
        { id: 2, name: '宝马', ctime: '2021/3/10' },
        { id: 3, name: '法拉利', ctime: '2021/3/10' },
        { id: 4, name: '兰博基尼', ctime: '2021/3/10' },
        { id: 5, name: '五菱宏光', ctime: '2021/3/10' }
      ],
      dialogFormVisible: false,
      form: {
        brandId: '',
        brandName: ''
      },
      rules: {
        // required 必填
        brandId: [{ required: true, message: '请输入品牌ID', trigger: 'blur' }],
        brandName: [{ required: true, message: '请输入品牌名称', trigger: 'blur' }]
      }
    }
  },
  methods: {
    add() {
      this.$refs.addForm.validate(valid => {
        if (!valid) {
          return false
        } else {
          const newItem = { id: this.form.brandId, name: this.form.brandName, ctime: '2021/3/10' }
          this.brandList.push(newItem)
          this.dialogFormVisible = false
        }
      })
    },
    del(id) {
      this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.brandList.some((item, i) => {
            if (item.id == id) {
              this.brandList.splice(i, 1)
              return true
            }
          })
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    close() {
      this.$refs.addForm.resetFields()
    }
  }
}
</script>
