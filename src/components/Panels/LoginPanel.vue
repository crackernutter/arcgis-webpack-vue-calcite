<template>
<div class="row">
  <div class="col-xs-3">
<button v-if="!loggedIn" @click.stop="login" type="button" class="btn btn-primary">Login</button>
<button v-if="loggedIn" @click.stop="logout" type="button" class="btn btn-danger">Logout</button>
</div>
<div v-if="loggedIn" class="col-xs-9 text-center">
<span class="middle">Welcome {{username}}</span>
</div>
</div>
</template>
<script>
import OAuthInfo from "esri/identity/OAuthInfo";
import esriId from "esri/identity/IdentityManager";
export default {
  data() {
    return {
      loggedIn: false,
      username: "",
      identityManagerJSON:""
    };
  },
  methods: {
    login() {
      
          let info = new OAuthInfo({
            appId: "",
            portalUrl: "",
            popup: true,
          });
          esriId.registerOAuthInfos([info]);
          esriId.getCredential(info.portalUrl + "/sharing", {oAuthPopupConfirmation: false}).then((event)=>{
              this.loggedIn = true;
              this.username = event.userId;
              this.identityManagerJSON = esriId.toJSON();
            });
    },
    logout() {
      esriId.initialize(this.identityManagerJSON);
      esriId.destroyCredentials();
      this.loggedIn = false;
  }
  }
};
</script>
<style>
.middle {
    line-height: 30px;}
    </style>