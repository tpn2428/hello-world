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
    public async directToProjects() {
        await this.$router.push({name: 'Projects'});
    }
    public async directToMeme() {
        await this.$router.push({name: 'Meme'});
    }
}
