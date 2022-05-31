import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class GiphPager extends Vue {
    @Prop() public isLoading!: boolean;
    @Prop() public itemCount!: number;
    @Prop() public totalItemCount!: number;
}
