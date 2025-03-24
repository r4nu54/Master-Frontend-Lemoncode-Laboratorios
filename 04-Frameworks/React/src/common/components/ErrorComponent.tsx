import { Alert, AlertTitle, Button } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import RefreshIcon from '@mui/icons-material/Refresh';

interface ErrorComponentProps {
    title?: string;
    message: string;
    severity?: 'error' | 'warning' | 'info';
    onRetry?: () => void;
    className?: string;
}

export const ErrorComponent: React.FC<ErrorComponentProps> = ({
    title = 'Error',
    message,
    severity = 'error',
    onRetry,
    className = '',
}) => {
    return (
        <div className={`flex justify-center items-center p-4 ${className}`}>
            <Alert
                severity={severity}
                icon={<ErrorOutlineIcon />}
                className="max-w-md shadow-lg"
                action={
                    onRetry && (
                        <Button
                            color="inherit"
                            size="small"
                            onClick={onRetry}
                            startIcon={<RefreshIcon />}
                            className="mt-2"
                        >
                            Reintentar
                        </Button>
                    )
                }
            >
                <AlertTitle className="font-semibold">{title}</AlertTitle>
                <p className="text-sm mt-1">{message}</p>
            </Alert>
        </div>
    );
}; 