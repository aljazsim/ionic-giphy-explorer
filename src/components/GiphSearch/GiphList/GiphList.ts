import { BasicGiphInfo } from "../../../common/basicGiphInfo";
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Options({
    emits: ["loadMore", "select"]
})
export default class GiphList extends Vue
{
    @Prop() public canLoadMore!: boolean;
    @Prop() public giphs!: BasicGiphInfo[];
    @Prop() public isLoading!: boolean;

    public loadMore()
    {
        this.emitLoadMoreEvent();
    }

    public onScroll(event: { target: HTMLDivElement }): void
    {
        const { scrollTop, offsetHeight, scrollHeight } = event.target;

        if ((scrollTop + offsetHeight) >= scrollHeight)
        {
            if (!this.isLoading)
            {
                this.emitLoadMoreEvent();
            }
        }
    }

    public select(giph: BasicGiphInfo)
    {
        this.emitSelectEvent(giph);
    }

    private emitLoadMoreEvent()
    {
        this.$emit("loadMore");
    }

    private emitSelectEvent(giph: BasicGiphInfo)
    {
        this.$emit("select", giph);
    }
}
