<template>
	<md-field-group class="register_view">
    <div style="margin-top: -20px">
      <img  width="100%"  src="https://cdn.jsdelivr.net/gh/LJHX5470/LYiImageBed@main//LJHX/logoq.png" />
      GeneralInnPro将发送验证码到您的手机
    </div>
		<md-field
			v-model="mobile"
			icon="mobile"
			placeholder="请输入手机号"/>

		<div class="register_submit">
			<van-button  style="background-color: #04a3e2" size="large" type="danger" @click="submitCode">下一步</van-button>
		</div>

		<div class="register_footer">
			已有账号-
			<router-link to="/login" class="red">登录</router-link>
		</div>

    <div align="center">
      <img  width="45%"  src="https://cdn.jsdelivr.net/gh/LJHX5470/LYiImageBed@main//LJHX/044.png" /><br>
    </div>


    <div class="text-desc text-center bottom_positon">@GeneralInnPro 关于我们 使用条款 帮助文档 在线自助服务</div>


  </md-field-group>
</template>

<script>
import field from '@/components/field/';
import fieldGroup from '@/components/field-group/';
import { mobileReg } from '@/utils/validate';

export default {
  data() {
    return {
      mobile: ''
    };
  },

  methods: {
    submitCode() {
      if(this.mobile === ''){
        return
      }
      if(!mobileReg.test(this.mobile)){
        this.mobile = ''
        return
      }
    	try {
        this.$router.push({
          name: 'registerSubmit',
          params: { phone: this.mobile}
        });
      } catch (error) {
        console.log(error.message);
      }
    }
  },

  components: {
    [field.name]: field,
    [fieldGroup.name]: fieldGroup
  }
};
</script>

<style lang="scss" scoped>
div.register_view {
  background-color: #fff;
  padding-top: 30px;
}

div.register_submit {
  padding-top: 30px;
  padding-bottom: 20px;
}

.register_footer {
  text-align: right;
  color: $font-color-gray;
}
</style>
