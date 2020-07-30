import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import {AppRoute} from '@/app/app-route';

@Component
export default class NavigatorBar extends Vue {
  public async directToPath(name: AppRoute) {
    await this.$router.push({name});
  }
}
