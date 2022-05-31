import { IClipboardManager } from "./IClipboardManager";

export class ClipboardManager implements IClipboardManager
{
    public async copy(blob: Blob): Promise<void>
    {
        try
        {
            await navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })]);
        }
        catch (err: any)
        {
            console.error(err.name, err.message);
        }
    }
}