import { Icons } from "../../../services/icons";
import { Vue } from "vue-class-component";
import { Prop, Watch } from "vue-property-decorator";

export default class GiphSearchBox extends Vue
{
    public readonly icons = new Icons();

    @Prop() public isLoading!: boolean;
    @Prop() public searchKeywords!: string;

    public model = "";

    @Watch("searchKeywords", { immediate: true, deep: false })
    public onSearchKeywordsChanged(newValue: string): void
    {
        if (this.model != newValue)
        {
            this.model = newValue;
        }
    }

    public onClear(): void
    {
        this.model = "";
        this.emitClearEvent();
    }

    public onSearch(searchKeywords: string): void
    {
        if (searchKeywords?.length > 0)
        {
            this.emitSearchEvent(searchKeywords);
        }
    }

    private emitClearEvent()
    {
        this.$emit("clear");
    }

    private emitSearchEvent(searchKeywords: string)
    {
        this.$emit("search", searchKeywords);
    }
}
