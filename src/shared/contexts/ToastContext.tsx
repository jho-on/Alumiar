import {
    createContext,
    useContext,
    useEffect,
    useRef,
    useState,
    type ReactNode,
} from 'react';

import Toast from '@/shared/components/Toast/Toast';

type ToastContextData = {
    showToast: (text: string) => void;
    hideToast: () => void;
};

const ToastContext = createContext<ToastContextData | null>(null);

type ToastProviderProps = {
    children: ReactNode;
};

export function ToastProvider({ children }: ToastProviderProps) {
    const [text, setText] = useState<string | null>(null);

    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    function showToast(text: string) {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        setText(text);

        timeoutRef.current = setTimeout(() => {
            setText(null);
            timeoutRef.current = null;
        }, 3000);
    }

    function hideToast() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }

        setText(null);
    }

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return (
        <ToastContext.Provider
            value={{
                showToast,
                hideToast,
            }}
        >
            {children}

            {text && <Toast text={text} onClose={hideToast} />}
        </ToastContext.Provider>
    );
}

export function useToast() {
    const context = useContext(ToastContext);

    if (!context) {
        throw new Error('useToast must be used inside a ToastProvider');
    }

    return context;
}
