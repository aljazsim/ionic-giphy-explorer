import { DetailedGiphInfo } from "../../../common/detailedGiphInfo";
import { formatBytes } from "../../../common/pipes/formatBytes";
import { Icons } from "../../../services/icons";
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class GiphInfo extends Vue
{
    public readonly icons = new Icons();

    @Prop() public giph!: DetailedGiphInfo;
    @Prop() public isLoading!: boolean;

    public formatBytes(value: string | number): string
    {
        return formatBytes(value);
    }

    public async onCopy(): Promise<void>
    {
        this.emitCopyEvent(this.giph);
    }

    public onOpenInSlack(giph: DetailedGiphInfo): void
    {
        this.emitOpenInSlack(giph);
    }

    public onSave()
    {
        this.emitSaveEvent(this.giph);
    }

    private emitCopyEvent(giph: DetailedGiphInfo)
    {
        this.$emit("copy", giph);
    }

    private emitOpenInSlack(giph: DetailedGiphInfo)
    {
        this.$emit("openInSlack", giph);
    }

    private emitSaveEvent(giph: DetailedGiphInfo)
    {
        this.$emit("save", giph);
    }
}
