<template scoped>
  <div class="login">
    <b-container>
      <b-row class="justify-content-md-center mt-5">
        <form v-on:submit="handleSubmit">
          <div class="login-form">
            <SaMuBadge text="1">{{$t('form.title')}}</SaMuBadge>
            <div class="login-form__body">
              <SaMuInput :placeholder="$t('form.email')" type="text" autocomplete="email" v-model="dto.email" />
              <SaMuInput :placeholder="$t('form.password')" type="password" autocomplete="current-password" v-model="dto.password" />
              <b-button variant="samu" type="submit" size="sm">{{$t('form.login')}}</b-button>
            </div>
          </div>
        </form>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts" scoped>
import { Component, Vue } from 'vue-property-decorator';
import SaMuInput from '@/components/basic/SaMuInput.vue';
import SaMuBadge from '@/components/basic/SaMuBadge.vue';
import openApiContainer from '@/openApiContainer';
import { AuthorizationService } from '@/openapi/api/authorization.service';
import { LoginDTO } from '@/openapi/model/loginDTO';
import HttpResponse from '../../openapi/HttpResponse';

@Component({
  components: {
    SaMuInput,
    SaMuBadge,
  },
})
export default class Login extends Vue {
  private authorizationService: AuthorizationService = openApiContainer.get<AuthorizationService>('AuthorizationService');
  private dto: LoginDTO = {
    email: '',
    password: '',
  };

  public handleSubmit(e: Event) {
    this.authorizationService.login(this.dto).subscribe(
      () => {
        this.successfullLogin();

      }, (err: HttpResponse) => {
        if (err.status === 401) {
          Vue.toasted.show(this.$t('error.login_failed').toString(), {
            duration: 5000,
            type: 'error',
          });
        } else if (err.status === 400) {
          Vue.toasted.show(this.$t('error.form_not_filled_in_correctly').toString(), {
            duration: 5000,
            type: 'error',
          });
        } else {
          Vue.toasted.show(this.$t('error.unknown').toString(), {
            duration: 5000,
            type: 'error',
          });
        }
      },
    );

    e.preventDefault();
  }

  private successfullLogin() {
    const url: string = new URLSearchParams(window.location.search.substring(1)).get('redirect') || '/home';
    window.location.href = url;
  }
}
</script>
<style lang="scss" scoped>
.login {
  display: flex;
  align-items: center;

  .login-form {
    padding: 0px 20px 0px 50px;

    &.login-form__body {
      margin-top: 18px;
      width: 100%;
      text-align: right;
    }
  }
}
</style>

<i18n src="@/lang/Login.json"></i18n>