import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import NavigationBar from '../../components/navigator-bar/navigator-bar.vue';

@Component({
    components: {
        NavigationBar,
    },
})
export default class About extends Vue {
    public onAlertClick() {
        alert('Con meo');
    }
}
