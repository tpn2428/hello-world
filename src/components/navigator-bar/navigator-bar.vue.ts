import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class NavigatorBar extends Vue {
    public async directToHome() {
        await this.$router.push('/');
    }
    public async directToFunMath() {
        await this.$router.push({name: 'Fun Math'});
    }
    public async directToAbout() {
        await this.$router.push({name: 'About'});
    }
    public async directToProject() {
        await this.$router.push({name: 'Project'});
    }
    public async directToMeme() {
        await this.$router.push({name: 'Meme'});
    }
}
