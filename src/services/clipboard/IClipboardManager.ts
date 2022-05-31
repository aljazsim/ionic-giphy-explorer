export interface IClipboardManager
{
    copy(blob: Blob): Promise<void>;
}