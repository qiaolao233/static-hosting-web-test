export type TMessageProps = {
    content: string;
    closeTime?: number;
    onOpen?: () => void;
    onClose?: () => void;
};
