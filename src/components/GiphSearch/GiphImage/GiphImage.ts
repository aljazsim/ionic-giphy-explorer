import { BasicGiphInfo } from "../../../common/basicGiphInfo";
import { Icons } from "../../../services/icons";
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class GiphImage extends Vue
{
    public readonly icons = new Icons();

    @Prop() public giph!: BasicGiphInfo;
    @Prop() public isLoading!: boolean;

    public complete = false;
}
