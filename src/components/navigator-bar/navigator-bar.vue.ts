import {AppRoute} from '@/app/app-route';
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class NavigatorBar extends Vue {
  public AppRoute = AppRoute;
  
  public async directToPath(name: AppRoute) {
    await this.$router.push({name});
  }
}
