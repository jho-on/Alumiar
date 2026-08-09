import { createContext, useContext, useState, type ReactNode } from 'react';

import Modal from '@/shared/components/Modal/Modal';

type ModalOptions = {
    title: string;
    inputLabel?: string;
    inputPlaceholder?: string;
    onCancel: () => void;
    onConfirm: () => void;
};

type ModalContextData = {
    openModal: (options: {
        title: string;
        inputLabel?: string;
        inputPlaceholder?: string;
        onCancel: () => void;
        onConfirm: () => void;
    }) => void;

    closeModal: () => void;
};

const ModalContext = createContext<ModalContextData | null>(null);

type ModalProviderProps = {
    children: ReactNode;
};

export function ModalProvider({ children }: ModalProviderProps) {
    const [modal, setModal] = useState<ModalOptions | null>(null);

    function openModal(options: ModalOptions) {
        setModal(options);
    }

    function closeModal() {
        setModal(null);
    }

    return (
        <ModalContext.Provider
            value={{
                openModal,
                closeModal,
            }}
        >
            {children}

            {modal && (
                <Modal
                    title={modal.title}
                    inputLabel={modal.inputLabel}
                    inputPlaceholder={modal.inputPlaceholder}
                    onCancel={modal.onCancel}
                    onConfirm={modal.onConfirm}
                />
            )}
        </ModalContext.Provider>
    );
}

export function useModal() {
    const context = useContext(ModalContext);

    if (!context) {
        throw new Error('useModal must be used inside a ModalProvider');
    }

    return context;
}
