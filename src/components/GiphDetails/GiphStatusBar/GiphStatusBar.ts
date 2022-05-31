import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class GiphStatusBar extends Vue {
    @Prop() public isLoading!: boolean;

    public goBack(): void {
        this.emitGoBackEvent();
    }

    private emitGoBackEvent() {
        this.$emit("goBack");
    }
}
