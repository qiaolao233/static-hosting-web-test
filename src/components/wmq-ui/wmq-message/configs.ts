export type TMessageProps = {
    content: string;
    closeTime?: number;
    onOpen?: () => void;
    onDestroy?: () => void;
    onClose?: () => void;
};
