import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import HelloWorld from '../../components/hello-world/hello-world.vue';

@Component({
    components: {
        HelloWorld,
    },
})

export default class Home extends Vue {

}
