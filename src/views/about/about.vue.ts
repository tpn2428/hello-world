import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import NavigationBar from '../../components/navigator-bar/navigator-bar.vue';
import axios from 'axios';

@Component({
  components: {
    NavigationBar,
  },
})
export default class About extends Vue {
  public async created() {
    const response = await axios.get('/api/get-primes');
    console.log(response.data);
  }

}
