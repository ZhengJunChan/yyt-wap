<template>
  <div class="prize_page">
    <div class="prize_list">
      <ul>
        <li>
          <div class="prize_name fl">
            奖品名称
          </div>
          <div class="status fr">
            状态
          </div>
        </li>
        <li v-for="(item, index) in prizeList" :key="item.id">
          <div class="item">
            <p>{{item.title}}</p>
            <button class="accept" @click="inputAcceptInfo(index)" v-if="!item.is_addr">领取</button>
            <button class="accept" :disabled="true" v-if="Number(item.is_addr) && Number(item.type) === 3">已领取</button>
            <button class="accept" :disabled="true" v-if="Number(item.is_addr) && Number(item.type) !== 3">已填写</button>
          </div>
        </li>
    	</ul>

      <div class="empty" v-if="!prizeList.length">
        <img src="./../../../../../imgs/common/img_zhongjiangjilv_nothing.png">
        <p>还没中过奖，别灰心，明天一定有好运啦！</p>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import Api from './../../api.js';
import { EmptyTip } from '@/components';

export default {
    components: {
        EmptyTip
    },
    data() {
        return {
            prizeList: []
        };
    },
    created() {
        this.init();
    },
    methods: {
        init() {
            this.initPrizeList();
        },
        /**
         * [initPrizeList 初始化获奖列表]
         * @Author   郑君婵
         * @DateTime 2018-01-08
         * @return   {[type]}   [description]
         */
        initPrizeList() {
            Api.getWinningRecords().then(res => {
                if (res.code !== 200) {
                    this.$toast.error(res.msg);
                    return;
                }

                this.prizeList = res.data;
            }, error => {
                this.$toast.error(error.msg);
            });
        },
        inputAcceptInfo(index) {
            if (this.prizeList[index].accepting) {
                this.$toast.error(`正在领取${this.prizeList[index].title}`);
                return;
            }

            if (Number(this.prizeList[index].type) === 1 || Number(this.prizeList[index].type) === 2) {
                this.$parent.goInputAddrPage(this.prizeList[index]);
                return;
            }

            // 抽到甜甜圈
            if (Number(this.prizeList[index].type) === 3) {
                this.$parent.acceptTianTianQuan(this.prizeList[index], () => {
                    this.prizeList[index].is_addr = true;
                });
            }
        }
    }
};
</script>

<style type="text/css" lang="less" scoped>
  @import './main.less';
</style>
