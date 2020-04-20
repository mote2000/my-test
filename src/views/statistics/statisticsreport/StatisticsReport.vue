<template>
  <div class="app-container">
    <div style="padding-bottom: 20px">
      <el-radio-group v-model="radio" @change="TimeQuery">
        <el-radio-button label="昨天" />
        <el-radio-button label="今天" />
        <el-radio-button label="本周" />
        <el-radio-button label="上周" />
        <el-radio-button label="本月" />
        <el-radio-button label="上月" />
        <el-radio-button label="本年" />
        <el-radio-button label="去年" />
      </el-radio-group>
      <el-date-picker
        v-model="query.times"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        @change="QueryTime"
      />
    </div>
    <el-dialog
      title="业务统计"
      :visible.sync="flag"
      width="500px"
      :before-close="CloseFlag"
      fullscreen
    >
      <div v-if="flag2==='A' || flag2==='B' ">
        <el-table
          v-loading="loading"
          :data="listsss"
          border
          style="width: 100%"
        >
          <el-table-column
            prop="name"
            label="姓名"
          />
          <el-table-column
            prop="sex"
            label="性别"
          >
            <template slot-scope="scope">
              {{ dict.label.sex[scope.row.sex] }}
            </template>
          </el-table-column>
          <el-table-column
            prop="age"
            label="出生日期"
            :formatter="dateFormat"
          />
          <el-table-column
            prop="xueli"
            label="学历"
          >
            <template slot-scope="scope">
              {{ dict.label.xueli[scope.row.xueli] }}
            </template>
          </el-table-column>
          <el-table-column
            prop="company"
            label="公司"
          />
          <el-table-column
            prop="zhiwei"
            label="职位"
          />
        </el-table>
      </div>
      <div v-else-if="flag2==='C' || flag2==='D' ">
        <el-table
          v-loading="loading"
          :data="listsss"
          border
          style="width: 100%"
        >
          <el-table-column
            prop="gongsijiancheng"
            label="客户名称"
          />
          <el-table-column
            prop="gangwei"
            label="岗位名称"
          />
          <el-table-column
            prop="name"
            label="姓名"
          />
          <el-table-column
            prop="company"
            label="公司"
          />
          <el-table-column
            prop="zhiwei"
            label="职位"
          />
          <el-table-column
            prop="status"
            label="状态"
          >
            <template slot-scope="scope">
              {{ dict.label.rc_status[scope.row.status] }}
            </template>
          </el-table-column>
          <el-table-column
            prop="create_time"
            label="加入时间"
            :formatter="dateFormat"
          />
        </el-table>
      </div>
      <div v-if="flag2==='E'">
        <el-table
          v-loading="loading"
          :data="listsss"
          border
          style="width: 100%"
        >
          <el-table-column
            prop="gongsijiancheng"
            label="客户名称"
          />
          <el-table-column
            prop="name"
            label="岗位名称"
          />
          <el-table-column
            prop="city"
            label="城市"
          />
          <el-table-column
            prop="xinziqingkuang"
            label="薪资情况"
          />
          <el-table-column
            prop="xueliyaoqiu"
            label="学历要求"
          >
            <template slot-scope="scope">
              {{ dict.label.xueli[scope.row.xueliyaoqiu] }}
            </template>
          </el-table-column>
          <el-table-column
            prop="age"
            label="年龄要求"
          />
          <el-table-column
            prop="create_time"
            label="创建时间"
            :formatter="dateFormat"
          />
        </el-table>
      </div>
      <div v-if="flag2==='F'">
        <el-table
          v-loading="loading"
          :data="listsss"
          border
          style="width: 100%"
        >
          <el-table-column
            prop="name"
            label="候选人"
          />
          <el-table-column
            prop="rc_status"
            label="状态"
          >
            <template slot-scope="scope">
              {{ dict.label.rc_status[scope.row.rc_status] }}
            </template>
          </el-table-column>
          <el-table-column
            prop="remark1"
            label="备注"
          />
          <el-table-column
            prop="create_time"
            label="备注时间"
            :formatter="dateFormat"
          />
        </el-table>
      </div>
    </el-dialog>
    <el-table
      v-loading="loading"
      :data="data"
      border
      show-summary
      style="width: 100%"
    >
      <el-table-column
        prop="nickName"
        label="用户"
        width="180"
      />
      <el-table-column
        prop="deptName"
        label="部门"
      />
      <el-table-column
        prop="A"
        sortable
        label="新增简历数"
      >
        <template slot-scope="scope">
          <span style="cursor:pointer;color: #00a0e9" @click="onpreview2(scope.row.name,'A')">{{ scope.row.A }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="B"
        sortable
        label="新增CC候选人数"
      >
        <template slot-scope="scope">
          <span style="cursor:pointer;color: #00a0e9" @click="onpreview2(scope.row.name,'B')">{{ scope.row.B }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="C"
        sortable
        label="加入项目人数"
      >
        <template slot-scope="scope">
          <span style="cursor:pointer;color: #00a0e9" @click="onpreview2(scope.row.name,'C')">{{ scope.row.C }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="D"
        sortable
        label="推荐企业人选数"
      >
        <template slot-scope="scope">
          <span style="cursor:pointer;color: #00a0e9" @click="onpreview2(scope.row.name,'D')">{{ scope.row.D }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="E"
        sortable
        label="项目新增数"
      >
        <template slot-scope="scope">
          <span style="cursor:pointer;color: #00a0e9" @click="onpreview2(scope.row.name,'E')">{{ scope.row.E }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="F"
        sortable
        label="人才备注数"
      >
        <template slot-scope="scope">
          <span style="cursor:pointer;color: #00a0e9" @click="onpreview2(scope.row.name,'F')">{{ scope.row.F }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  name: 'Statistics',
  dicts: ['xueli', 'rc_status', 'sex'],
  data() {
    return {
      flag: false,
      flag2: null,
      radio: '本周',
      datas: [],
      listsss: [],
      query: {
        type: 3,
        times: []
      }
    }
  },
  created() {
    this.$nextTick(() => {
      this.init()
    })
  },
  methods: {
    TimeQuery(value) {
      this.query.times = []
      if (value === '昨天') {
        this.query.type = 2
      } else if (value === '今天') {
        this.query.type = 1
      } else if (value === '本周') {
        this.query.type = 3
      } else if (value === '上周') {
        this.query.type = 4
      } else if (value === '本月') {
        this.query.type = 5
      } else if (value === '上月') {
        this.query.type = 6
      } else if (value === '本年') {
        this.query.type = 7
      } else if (value === '去年') {
        this.query.type = 8
      }
      this.init()
    },
    onpreview2(name, value) {
      this.loading = true
      this.flag = true
      this.flag2 = value
    },
    QueryTime() {
      this.init()
    },
    CloseFlag() {
      this.flag = false
      this.listsss = []
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
